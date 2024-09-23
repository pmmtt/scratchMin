<?php
function mytheme_register_header_block() {
    // Register the block type.
     register_block_type( 'custscratchblock/siteheader', array(
          'render_callback' => 'mytheme_render_header_block',
     ) );
}
add_action( 'init', 'mytheme_register_header_block' );

function mytheme_render_header_block() {
     ?>
     <div class="head_wrapper">
          <header id="masthead" class="site-header">
               <div class="mainhead_wrap">
                    <div class="site-branding">
                         <h1 class="site-title screen-reader-text">
                              <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                                   <?php bloginfo( 'name' ); ?>
                              </a>
                         </h1>
                    </div><!-- .site-branding -->

                    <!-- Dynamically output the primary navigation menu -->
                    <nav id="site-navigation" class="main-navigation">
                         <?php
                         wp_nav_menu( array(
                              'theme_location' => 'menu-1',  // Replace 'primary' with your registered menu location
                              'menu_id'        => 'primary-menu',
                              'container'      => false,      // Removes any automatic div wrapping
                              'menu_class'     => 'menu',   
                              'fallback_cb'    => false     // Adds classes to the <ul> element
                         ) );
                         ?>
                    </nav><!-- #site-navigation -->
               </div>
          </header>
     </div>
     <?php
}
