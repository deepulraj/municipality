@section('hero')
    @if (is_active_sidebar('slider-area') === true )
        @includeIf('partials.sidebar', ['id' => 'slider-area', 'classes' => ['o-row']])

        @if (is_front_page() && is_array(get_field('search_display', 'option')) &&
            in_array('hero', get_field('search_display', 'option')))
        {{ get_search_form() }}
        @endif
    @endif
@show
