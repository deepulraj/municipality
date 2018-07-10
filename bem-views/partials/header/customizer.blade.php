@extends('partials.header')

@section('before-header-body')
    <div class="print-only container">
        <div class="grid">
            <div class="grid-sm-12">
                {!! municipio_get_logotype('standard') !!}
            </div>
        </div>
    </div>
@stop

@section('header-body')
    @if (isset($headerLayout['headers']) && is_array($headerLayout['headers']) && !empty($headerLayout['headers']))
        @foreach ($headerLayout['headers'] as $header)
            @if ($header->sidebar)
                <div {!! $header->wrapper !!}>
                    <div {!! $header->container !!}>
                        <div {!! $header->grid !!}>
                            <?php dynamic_sidebar($header->sidebar); ?>
                        </div>
                    </div>
                </div>
            @endif
        @endforeach
    @endif
@stop

@section('below-header')
    @include('partials.hero')

    @if (is_active_sidebar('top-sidebar'))
        <?php dynamic_sidebar('top-sidebar'); ?>
    @endif
@stop
