const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
 |--------------------------------------------------------------------------
 | Core
 |--------------------------------------------------------------------------
 |
 */
// mix.sass('resources/assets/page/sass/app.scss', 'public/assets/page/css/app_page.css').version();

mix.scripts([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/pace-progress/pace.js',
    'resources/assets/js/app.js',

], 'public/assets/app/js/app.js').version();

mix.styles([
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/pace-progress/themes/blue/pace-theme-minimal.css',

], 'public/assets/app/css/app.css').version();

mix.copy([
    'node_modules/font-awesome/fonts/',
], 'public/assets/app/fonts');
/*
 |--------------------------------------------------------------------------
 | Page
 |--------------------------------------------------------------------------
 |
 */

 mix.styles([
    'resources/assets/front/css/boostrap.min.css',
    'resources/assets/front/js/vendor/revslider/css/settings.css',
    'resources/assets/front/css/fontello.css',
    'resources/assets/front/css/_packed.css',
    'resources/assets/front/css/main_style.css',
    'resources/assets/front/css/general.css',
    'resources/assets/front/css/responsive.css',
    
], 'public/assets/page/css/app_page.css').version();

mix.scripts([

    'resources/assets/front/js/vendor/jquery.js',
    'resources/assets/front/js/vendor/bootstrap.min.js',
    'resources/assets/front/js/vendor/jquery-migrate.min.js',
    'resources/assets/front/js/vendor/revslider/js/jquery.themepunch.tools.min.js',
    'resources/assets/front/js/vendor/revslider/js/jquery.themepunch.revolution.min.js',
    'resources/assets/front/js/custom/_main.js',
    'resources/assets/front/js/custom/_packed.js',
    'resources/assets/front/js/custom/custom_menu.js',
    'resources/assets/front/js/vendor/core.min.js',
    'resources/assets/front/js/custom/shortcodes_init.js',
    'resources/assets/front/js/custom/_utils.js',
    'resources/assets/front/js/custom/_front.js',
    'resources/assets/front/js/vendor/picker/picker.js',
    'resources/assets/front/js/vendor/picker/picker.date.js',
    'resources/assets/front/js/vendor/picker/picker.time.js',
    'resources/assets/front/js/vendor/picker/picker.start.js',
    'resources/assets/front/js/vendor/draggable.min.js',
    'resources/assets/front/js/custom/_googlemap_init.js',

], 'public/assets/page/js/app_page.js').version();
/*
 |--------------------------------------------------------------------------
 | Auth
 |--------------------------------------------------------------------------
 |
 */

mix.styles('resources/assets/auth/css/login.css', 'public/assets/auth/css/login.css').version();
mix.styles('resources/assets/auth/css/register.css', 'public/assets/auth/css/register.css').version();
mix.styles('resources/assets/auth/css/passwords.css', 'public/assets/auth/css/passwords.css').version();

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/gentelella/vendors/animate.css/animate.css',
    'node_modules/gentelella/build/css/custom.css',
], 'public/assets/auth/css/auth.css').version();

/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 |
 */

mix.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js',
    'node_modules/gentelella/build/js/custom.js',
    'node_modules/guidechimp/dist/guidechimp.min.js',
    'node_modules/guidechimp/dist/plugins/multiPage.js',
    'resources/assets/admin/js/admin.js',
], 'public/assets/admin/js/admin.js').version();

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/gentelella/vendors/animate.css/animate.css',
    'node_modules/gentelella/build/css/custom.css',
    'node_modules/guidechimp/dist/guidechimp.min.css',
    'resources/assets/admin/css/admin.css',
], 'public/assets/admin/css/admin.css').version();

mix.copy([
    'node_modules/gentelella/vendors/bootstrap/dist/fonts',
], 'public/assets/admin/fonts');

mix.scripts([
    'node_modules/select2/dist/js/select2.full.js',
    'resources/assets/admin/js/users/edit.js',
], 'public/assets/admin/js/users/edit.js').version();

mix.styles([
    'node_modules/select2/dist/css/select2.css',
], 'public/assets/admin/css/users/edit.css').version();

mix.scripts([
    'node_modules/gentelella/vendors/Flot/jquery.flot.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.time.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.pie.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.stack.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.resize.js',

    'node_modules/gentelella/vendors/flot.orderbars/js/jquery.flot.orderBars.js',
    'node_modules/gentelella/vendors/DateJS/build/date.js',
    'node_modules/gentelella/vendors/flot.curvedlines/curvedLines.js',
    'node_modules/gentelella/vendors/flot-spline/js/jquery.flot.spline.min.js',

    'node_modules/gentelella/production/js/moment/moment.min.js',
    'node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js',

    'node_modules/gentelella/vendors/Chart.js/dist/Chart.js',
    'node_modules/jcarousel/dist/jquery.jcarousel.min.js',

    'resources/assets/admin/js/dashboard.js',
], 'public/assets/admin/js/dashboard.js').version();

mix.styles([
    'node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css',
    'resources/assets/admin/css/dashboard.css',
], 'public/assets/admin/css/dashboard.css').version();
