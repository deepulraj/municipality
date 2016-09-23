<?php

namespace Intranet\SearchWp;

class Search
{
    public $wpSearchResult = array();
    public $results = array();

    public $currentPage = 1;
    public $currentIndex = 1;
    public $resultsPerPage = null;

    public $level = 'subscriptions';

    public $users = array();
    public $levelResultsCount = array(
        'subscriptions' => null,
        'all' => null,
        'current' => null,
        'users' => null
    );

    public function __construct($level = 'subscriptions')
    {
        global $sitesLogged;
        if (!is_array($sitesLogged)) {
            $sitesLogged = array();
        }

        $this->level = $level;
        $this->getLevel();

        $this->resultsPerPage = get_blog_option(BLOG_ID_CURRENT_SITE, 'posts_per_page');

        if (isset($_REQUEST['page']) && !empty($_REQUEST['page'])) {
            $this->currentPage = sanitize_text_field($_REQUEST['page']);
        }

        $this->doSearch($this->level);

        global $resultCounts;
        $resultCounts = array(
            'subscriptions' => $this->countSearch('subscriptions', 'count'),
            'all' => $this->countSearch('all', 'count'),
            'current' => $this->countSearch('current', 'count'),
            'users' => $this->countSearch('users', 'count')
        );

        if (defined('DOING_AJAX') && DOING_AJAX) {
            return;
        }

        $this->renderResult();

        add_filter('Municipio/search_result/excerpt', array($this, 'highlightTerms'));
    }

    public function doSearch($level)
    {
        $this->users = $this->searchUsers();

        switch ($level) {
            case 'users':
                $this->results = $this->users;
                break;

            case 'ajax':
                $this->results = array(
                    'users' => array_slice($this->users, 0, 5),
                    'content' => array_slice($this->searchWp(), 0, 5)
                );
                break;

            default:
                $this->results = $this->searchWp();
                break;
        }

        return true;
    }

    public function countSearch($level)
    {
        switch ($level) {
            case 'users':
                return count($this->users);

            case 'ajax':
                return count($this->searchUsers($level)) + count($this->searchWp($level));

            default:
                return count($this->searchWp($level));
        }
    }

    /**
     * Get the search level
     * @return void
     */
    public function getLevel()
    {
        if ($this->level == 'ajax') {
            return;
        }

        if (!is_user_logged_in()) {
            $this->level = 'all';
        }

        if (isset($_REQUEST['level']) && !empty($_REQUEST['level'])) {
            $this->level = sanitize_text_field($_REQUEST['level']);
            return;
        }

        if (is_user_logged_in() && is_main_site()) {
            $this->level = 'subscriptions';
        } elseif (!is_user_logged_in() && is_main_site()) {
            $this->level = 'all';
        } elseif (!is_main_site()) {
            $this->level = 'current';
        }
    }

    /**
     * Render the search result
     * @return void
     */
    public function renderResult()
    {
        $this->setupPagination();

        $offset = 0;
        if ($this->currentPage > 1) {
            $offset = ($this->currentPage-1) * $this->resultsPerPage;
        }

        $this->pageResults = array_slice($this->results, $offset, $this->resultsPerPage);

        global $counts;
        $counts = array(
            'users' => count($this->users)
        );
    }

    /**
     * Search users
     * @return array Users
     */
    public function searchUsers()
    {
        if (!is_user_logged_in()) {
            return array();
        }

        $keyword = get_search_query();
        return \Intranet\User\General::searchUsers($keyword);
    }

    /**
     * Search network wide with Search WP plugin
     * @return void
     */
    public function searchWp($level = null)
    {
        if (!$level) {
            $level = $this->level;
        }

        // Get results for the other sites
        $results = $this->multisiteSearchWP($level);
        $results = $this->orderResultsByWeight($results);
        $results = $this->getPostsFromResult($results);

        return $results;
    }

    /**
     * Get the post objects
     * @return void
     */
    public function getPostsFromResult($results)
    {
        $resultsOut = array();

        foreach ($results as $item) {
            $post = get_blog_post($item['blog_id'], $item['post_id']);
            $resultsOut[$item['post_id']] = $post;
            $resultsOut[$item['post_id']]->blog_id = $item['blog_id'];
            $resultsOut[$item['post_id']]->is_file = false;
            $resultsOut[$item['post_id']]->target_group = get_post_meta($item['post_id'], '_target_groups', true);

            if (!$post->post_mime_type) {
                $resultsOut[$item['post_id']]->permalink = get_blog_permalink($item['blog_id'], $item['post_id']);
            } else {
                $resultsOut[$item['post_id']]->permalink = esc_url($post->guid);
                $resultsOut[$item['post_id']]->is_file = true;
            }
        }

        // Unset if user is not in any of the page's target groups, unset it
        foreach ($resultsOut as $key => $post) {
            if (!\Intranet\User\TargetGroups::userInGroup($post->target_group)) {
                unset($resultsOut[$key]);
            }
        }

        return $resultsOut;
    }

    /**
     * Search each site in the network
     * @return void
     */
    public function multisiteSearchWP($level)
    {
        global $searchwp;
        global $sitesLogged;

        $sites = null;

        $results = array();

        switch ($level) {
            case 'current':
                $sites = array(get_current_blog_id());
                break;

            case 'subscriptions':
                $sites = array_merge(
                    \Intranet\User\Subscription::getSubscriptions(get_current_user_id(), true),
                    \Intranet\User\Subscription::getForcedSubscriptions(true)
                );
                break;

            default:
                $sites = \Intranet\Helper\Multisite::getSitesList(true, true);
                break;
        }

        $intSite = 0;
        foreach ($sites as $siteId) {
            $intSite++;

            /**
             * This part of the code is some hacky stuff
             * This will add the search level as a suffix to the search query in the
             * Search WP log table for the current blog_id
             */
            if ($this->level === $level && !in_array($siteId . '-' . $level, $sitesLogged)) {
                global $currentSearchLevel;
                $currentSearchLevel = $level;

                /**
                 * Turn on logging and use the sanitize_text_field filter to suffix the search query
                 * added to the log table
                 */
                add_filter('searchwp_log_search', '\Intranet\SearchWp\Search::filterLogSearch', 15, 4);
                $sitesLogged[] = $siteId . '-' . $level;
            }

            switch_to_blog($siteId);

            $s = isset($searchwp->original_query) && strlen($searchwp->original_query) > 0 ? $searchwp->original_query : get_search_query();

            $searchwp->search('default', $s);
            foreach ($searchwp->results_weights as $key => $weight) {
                $searchwp->results_weights[$key]['blog_id'] = (int)$siteId;
            }

            $results = array_merge($results, $searchwp->results_weights);

            restore_current_blog();
        }

        return $results;
    }

    public static function filterLogSearch($log, $engine, $preSearchOriginalTerms, $result)
    {
        remove_filter('searchwp_log_search', '\Intranet\SearchWp\Search::filterLogSearch');

        global $currentSearchLevel;
        if (is_null($currentSearchLevel)) {
            return $log;
        }

        add_filter('sanitize_text_field', '\Intranet\SearchWp\Search::filterLogQuery', 10, 2);
        return true;
    }

    /**
     * ATTENTION: Some hacky stuff going on here to append search type the the query log table in db
     * Add what type of search results to the search query log
     * @param  string $filtered Filtered string
     * @param  string $string   Unfiltered string
     * @return string           Filtered string
     */
    public static function filterLogQuery($filtered, $string)
    {
        remove_filter('sanitize_text_field', '\Intranet\SearchWp\Search::filterLogQuery');
        global $currentSearchLevel;

        if (!empty($currentSearchLevel)) {
            $filtered .= ' (' . $currentSearchLevel . ')';
        }

        $currentSearchLevel = null;

        return $filtered;
    }

    /**
     * Order the result by weight
     * @return void
     */
    public function orderResultsByWeight($results)
    {
        uasort($results, function ($a, $b) {
            return $a['weight'] < $b['weight'];
        });

        return $results;
    }

    /**
     * Setup the pagination
     * @return void
     */
    public function setupPagination()
    {
        $markup = array();

        // Get current page
        $currentPage = 1;
        if (isset($_REQUEST['page']) && !empty($_REQUEST['page'])) {
            $currentPage = sanitize_text_field($_REQUEST['page']);
            $this->currentPage = sanitize_text_field($_REQUEST['page']);
        }

        $markup[] = '<ul class="pagination" role="menubar" arial-label="pagination">';

        // Prev page button
        // Get the previous page
        $previousPage = null;
        if ($currentPage > 1) {
            $previousPage = $currentPage -1;
            $prevUrl = \Municipio\Helper\Url::getQueryString();
            $prevUrl['page'] = $previousPage;
            $prevUrl = home_url('?' . http_build_query($prevUrl));

            $markup[] = '<li><a class="prev" href="' . $prevUrl . '">&laquo; ' . __('Previous', 'municipio-intranet') . '</a></li>';
        }

        // How many pages to show in the pager (excluding the current page)
        $numPagesToShow = 10;

        // Get pages
        $numPages = 0;
        if ($this->resultsPerPage < count($this->results)) {
            // Calculate number of pages
            $numPages = ceil(count($this->results) / $this->resultsPerPage);

            // Calculate range of pages to show in pager
            $startingPage = $this->currentPage - ($numPagesToShow/2);
            $endingPage = $this->currentPage + ($numPagesToShow/2) + 1;

            if ($startingPage < 1) {
                $startingPage = 1;
                $endingPage = $numPagesToShow+2;
            }

            if ($endingPage >= $numPages) {
                $endingPage = $numPages;
            }

            if ($this->currentPage == $endingPage) {
                $endingPage = $numPages+1;
            }

            // Output pages
            for ($i = $startingPage; $i <= $endingPage; $i++) {
                if ($i > $numPages) {
                    continue;
                }

                $current = null;
                if ($this->currentPage == $i) {
                    $current = 'current';
                }

                $pageUrl = \Municipio\Helper\Url::getQueryString();
                $pageUrl['page'] = $i;
                $pageUrl = home_url('?' . http_build_query($pageUrl));

                $markup[] = '<li><a class="page ' . $current . '" href="' . $pageUrl . '">' . $i . '</a></li>';
            }
        }

        // Get the next page
        $nextPage = null;
        if ($this->currentPage < $numPages) {
            $nextPage = $this->currentPage + 1;
            $nextUrl = \Municipio\Helper\Url::getQueryString();
            $nextUrl['page'] = $nextPage;
            $nextUrl = home_url('?' . http_build_query($nextUrl));

            $markup[] = '<li><a class="next" href="' . $nextUrl . '">' . __('Next', 'municipio-intranet') . ' &raquo;</a></li>';
        }

        // End tag for ul
        $markup[] = '</ul>';

        add_filter('HbgBlade/data', function ($data) use ($markup) {
            $data['pagination'] = implode('', $markup);
            return $data;
        });
    }

    /**
     * Highlight terms
     * @param  string $originalExcerpt Original excerpt
     * @return string                  Highlighted excerpt
     */
    public function highlightTerms($originalExcerpt)
    {
        global $post;

        if (!is_search() || !function_exists('searchwp_term_highlight_get_the_excerpt_global')) {
            return $originalExcerpt;
        }

        // prevent recursion
        remove_filter('get_the_excerpt', array($this, 'highlightTerms'));
        $excerpt = searchwp_term_highlight_get_the_excerpt_global($post->ID, null, get_search_query());
        add_filter('get_the_excerpt', array($this, 'highlightTerms'));

        $excerpt = preg_replace('/<span class=\'searchwp-highlight\'>(.*?)<\/span>/', '<mark class="mark-blue">$1</mark>', $excerpt);

        if (empty($excerpt)) {
            return $originalExcerpt;
        }

        return $excerpt;
    }
}