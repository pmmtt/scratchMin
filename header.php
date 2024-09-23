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
               <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-WS2CKXB');</script>
          <!-- End Google Tag Manager -->

          <title>
               <?php 
                    if(get_field('title_tags')){
                         echo get_field('title_tags');
                    }elseif(is_singular()){
                         $terms = get_field('category_type');
                         if( $terms ): 
                              foreach( $terms as $term ):
                                   echo esc_html( $term->name );
                              endforeach;
                         endif;

                         echo 'Omnitrans | ';
                         the_title();
                    }elseif(is_page_template( 'single-route.php' ) ){
                         echo 'Route';
                    }else{
                         echo 'Omnitrans | ';
                         the_title();
                    }
               ?>
          </title>

          <link rel="profile" href="https://gmpg.org/xfn/11">

          <?php wp_head(); ?>
     </head>

     <body <?php body_class(); ?>>
          <!-- Google Tag Manager (noscript) -->
               <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WS2CKXB" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->

          <?php wp_body_open(); ?>

          <div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'omninew' ); ?></a>


	<div class="head_wrapper">
		<?php 
				if(is_front_page()){
                         if( get_field('orange_banner') ):
                              echo '<div class="covid_alert"><p class="h3">';
                                   echo the_field('orange_banner');
                              echo '</p></div>';
                         endif;
				}
			?>

		<header id="masthead" class="site-header">
			<div class="mainhead_wrap">
				<div class="site-branding">
					<h1 class="site-title screen-reader-text">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<?php bloginfo( 'name' ); ?>
						</a>
					</h1>

					<p class="site-description screen-reader-text">
						<?php echo $omninew_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</p>
					<div class="omni_logo_wrap">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
							<?php get_template_part('icons/omni_logo');?>
						</a>
					</div>

					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
						<span class="burger_wrap">
							<span class="center_line">
							</span>
						</span>

						<span class="btn_txt">Menu</span>
					</button>
				</div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation">
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
			</div>
		</header><!-- #masthead -->

		<div class="trp_pnr_nv_wrap">
			<div>
                    <button>
                         <?php get_template_part('icons/loc_pin');?> 
                         <span>Tools</span>
                    </button>
               </div>

			<nav class="trip_plan_menu">
				<ul>
					<li>
						<a href="https://omnitrans.org/plan-a-trip/trip-planner/" class="trppln_nav_wrap">
								<?php get_template_part('icons/loc_pin');?>
								<span class="trppln_navtxt">Plan your bus trip</span>
						</a>
					</li>
					<li>
						<a href="https://omnitrans.org/plan-a-trip/track-your-bus/" class="trppln_nav_wrap">
								<?php get_template_part('icons/next_bus_blk');?>
								<span class="trppln_navtxt">Track your bus</span>
						</a>
					</li>
					<li>
						<a href="https://omnitrans.org/plan-a-trip/alerts/" class="trppln_nav_wrap">
								<?php get_template_part('icons/alert');?>
								<span class="trppln_navtxt">See latest service alerts</span>
						</a>
					</li>
					<li>
						<a href="https://omnitrans.org/plan-a-trip/routes-schedules/" class="trppln_nav_wrap">
								<?php get_template_part('icons/loc_pin_map');?>
								<span class="trppln_navtxt">View routes & schedules</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>

     <?php
          if(get_post_type() == 'nbrhdgds' || get_post_type() == 'go_smart'){
               echo '<main id="primary" class="site-main nbrhd_guides">';
          }else{
               echo '<main id="primary" class="site-main">';
          }

          echo '<div class="entry-content">';
     ?>
