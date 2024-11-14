<?php
/**
 * The header for our scratch theme
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>
     <head>
          <meta charset="<?php bloginfo( 'charset' ); ?>">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <?php
               if(get_field('meta_description')){
                    echo '<meta name="description" content="';
                         echo get_field('meta_description');
                    echo '">';
               }
               if(get_field('meta_description')){
                    echo '<meta name="robots" content="';
                         echo get_field('meta_description');
                    echo '">';
               }
               if(get_field('meta_description')){
                    echo '<meta name="googlebot" content="';
                         echo get_field('meta_description');
                    echo '">';
               }
          ?>
          
          <!-- Google Tag Manager -->
          <!-- End Google Tag Manager -->

          <title>
               <?php 
                    if(get_field('title_tags')){
                         echo get_field('title_tags');
                    }else{
                         echo 'SC Metro | ';
                         the_title();
                    }
               ?>
          </title>

          <link rel="profile" href="https://gmpg.org/xfn/11">

          <?php wp_head(); ?>
     </head>

     <body <?php body_class(); ?>>
          <!-- Google Tag Manager (noscript) -->
          <!-- End Google Tag Manager (noscript) -->

          <?php wp_body_open(); ?>

          <div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'scmetro' ); ?></a>


	<div class="head_wrapper">
		<header id="masthead" class="site-header">
				<div class="site-branding">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                              <h1 class="site-title screen-reader-text">
                                   <?php bloginfo( 'name' ); ?>
                              </h1>

                              <?php get_template_part('assets/fullLogoText'); ?>
					</a>

					<p class="site-description screen-reader-text">
						<?php echo $scratch_description;?>
					</p>
				</div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation">
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
						<span class="burger_wrap">
							<span class="center_line">
							</span>
						</span>

						<span class="btn_txt">Menu</span>
					</button>

					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
                                   'walker'         => new WCAG_Compliant_Nav_Walker(),
						)
					);
					?>
				</nav><!-- #site-navigation -->

                    <?php get_template_part('custom/liveSearch');?>
		</header><!-- #masthead -->
	</div>

     <main id="primary" class="site-main">
          <div class="entry-content">
