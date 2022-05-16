<div class="col-md-3 left_col">
    <div class="left_col scroll-view">
        <div class="navbar nav_title" style="border: 0;">
            <a href="<?php echo e(route('admin.dashboard')); ?>" class="site_title">
                <span><?php echo e(config('app.name')); ?></span>
            </a>
        </div>

        <div class="clearfix"></div>

        <!-- menu profile quick info -->
        <div class="profile clearfix">
            <div class="profile_pic">
                <img src="<?php echo e(auth()->user()->avatar); ?>" alt="Foto del Medusas" class="img-circle profile_img">
            </div>
            <div class="profile_info">
                <h2><?php echo e(auth()->user()->name); ?></h2>
            </div>
        </div>
        <!-- /menu profile quick info -->

        <br/>

        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
                <h3><?php echo e(__('views.backend.section.navigation.sub_header_0')); ?></h3>
                <ul class="nav side-menu">
                    <li>
                        <a href="<?php echo e(route('admin.dashboard')); ?>">
                            <i class="fa fa-bandcamp" aria-hidden="true"></i>
                            <?php echo e(__('views.backend.section.navigation.menu_0_1')); ?>

                        </a>
                    </li>
                </ul>
            </div>
          
            <div class="menu_section">
                <h3><?php echo e(__('views.backend.section.navigation.sub_header_2')); ?></h3>

                <ul class="nav side-menu">
                    <li>
                        <a>
                            <i class="fa fa-home"></i>
                            <?php echo e(__('views.backend.section.navigation.menu_2_1')); ?>

                            <span class="fa fa-chevron-down"></span>
                        </a>
                        <ul class="nav child_menu">
                            <li>
                                <a href="<?php echo e(route('admin.inmueble.create')); ?>">
                                    <?php echo e(__('views.backend.section.navigation.menu_2_4')); ?>

                                </a>
                            </li>
                            <li>
                                <a href="<?php echo e(route('log-viewer::dashboard')); ?>">
                                    <?php echo e(__('views.backend.section.navigation.menu_2_2')); ?>

                                </a>
                            </li>
                            <li>
                                <a href="<?php echo e(route('log-viewer::logs.list')); ?>">
                                    <?php echo e(__('views.backend.section.navigation.menu_2_3')); ?>

                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="menu_section">
                <h3><?php echo e(__('views.backend.section.navigation.sub_header_3')); ?></h3>
                <ul class="nav side-menu">
                  <li>
                      <a href="http://info-hogar.com.bo" target="_blank" title="Info Hogar"><i class="fa fa-external-link" aria-hidden="true"></i>Info Hogar Sitio Web</a>
                  </li>
                
                </ul>
            </div>
        </div>
        <!-- /sidebar menu -->
    </div>
</div>
<?php /**PATH C:\laragon\www\dfutr454drdf5gd5f8rt\resources\views/admin/sections/navigation.blade.php ENDPATH**/ ?>