<!DOCTYPE html>
<html dir="ltr" lang="{{ app()->getLocale() }}">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="InfoHogar &copy;">
	<link rel="icon" type="image/x-icon" href="images/icon/favicon.ico">
    {{--CSRF Token--}}
	<meta name="csrf-token" content="{{ csrf_token() }}">

    {{--Title and Meta--}}
	<title>{{ config('app.name') }}</title>
	<!--[if lt IE 9]>
	<script src="js/vendor/html5.js" type="text/javascript"></script>
	<![endif]-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    {{ Html::style(mix('assets/page/css/app_page.css')) }}
    {{ Html::script(mix('assets/page/js/app_page.js')) }}

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    
</head>
    <body class="home page themerex_body fullscreen top_panel_above theme_skin_general usermenu_show">
    <!--[if lt IE 9]>
    <div class="sc_infobox sc_infobox_style_error">
    <div style="text-align:center;">It looks like you're using an old version of Internet Explorer. For the best experience, please <a href="http://microsoft.com" style="color:#191919">update your browser</a> or learn how to <a href="http://browsehappy.com" style="color:#222222">browse happy</a>!</div>
    </div>
    <![endif]-->

    <div class="main_content">
        <div class="boxedWrap">
            @include('page.layouts.header')
            @yield('content')
            @include('page.layouts.footer')	
        </div>
    </div>

    {{-- <div class="preloader">
        <div class="preloader_image"></div>
    </div> --}}
	<script type='text/javascript' src="http://maps.google.com/maps/api/js?sensor=false"></script>

    </body>
</html>