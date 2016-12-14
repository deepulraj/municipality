<?php

/**
* Tell WordPress to load from local wp-content, and not vendor wp.
*/
define('WP_CONTENT_DIR', dirname(dirname(__FILE__)) . '/wp-content');

if ($_SERVER['HTTPS'] === 'on') {
    define('WP_CONTENT_URL', 'https://' . $_SERVER['HTTP_HOST'] . '/wp-content');
} else {
    define('WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/wp-content');
}

/**
 * Use municipio as default theme.
 * @var string
 */
 define('WP_DEFAULT_THEME', 'intranet');

/**
 * Limit number of post revisions per post
 * @var integer
 */
define('WP_POST_REVISIONS', 10);

/**
 * Set the autosave interval
 * @default: 60 seconds
 * @var integer
 */
define('AUTOSAVE_INTERVAL', 120);

/**
 * Change the time interval for how often the trash will empty itself
 * @default: 30 days
 * @var integer
 */
define('EMPTY_TRASH_DAYS', 30);

/**
 * Disable the WordPress theme/plugin editor
 */
define('DISALLOW_FILE_EDIT', true);

/**
 * Do not block author pages
 */
define('MUNICIPIO_BLOCK_AUTHOR_PAGES', false);

/**
 * Disable color theme selector on user level
 */
define('MUNICIPIO_INTRANET_USER_COLOR_THEME', false);
