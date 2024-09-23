<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Omnitrans_2020
 */

?>

     </div><!-- #entry-content -->
     </main><!-- #main -->

	<div class="title_vi_menu">
	<?php
		wp_nav_menu( array( 'theme_location' => 'menu-4' ) );
	?>
	</div>

     <a href="http://209.162.18.13:8080/ECCChat/chat.html" target="_blank" class="chat_bubble">
          <svg id="chat_bubble" xmlns="http://www.w3.org/2000/svg" width="100" height="118.65" viewBox="0 0 100 118.65">
               <title>Click for chat</title>
               <path id="Path_352" data-name="Path 352" d="M161.522,157.325c-.622-2.237-1.22-4.883-1.817-7.217h-.137c-.541,2.363-1.138,4.98-1.761,7.217l-.537,2.071h4.787Z" transform="translate(-96.899 -105.573)" fill="#fff"/>
               <path id="Path_353" data-name="Path 353" d="M156.09,91.608H99.918A21.914,21.914,0,0,0,78,113.522v56.172A21.921,21.921,0,0,0,93.14,190.535l35.879,19.723v-18.65H156.09A21.914,21.914,0,0,0,178,169.694V113.522A21.913,21.913,0,0,0,156.09,91.608ZM99.1,154.9c-5.6,0-10.274-3.881-10.274-11.318,0-7.326,4.843-11.574,10.422-11.574a9.312,9.312,0,0,1,6.64,2.866l-2.631,3.2a5.546,5.546,0,0,0-3.9-1.757c-3.028,0-5.419,2.669-5.419,7.1,0,4.539,2.112,7.176,5.339,7.176a5.818,5.818,0,0,0,4.32-2.065l2.632,3.134A9.088,9.088,0,0,1,99.1,154.9Zm28.764-.406h-4.992v-9.217h-7.621V154.5H110.26V132.417h4.992v8.508h7.621v-8.508h4.992Zm17.633,0-1.358-5.259h-6.732l-1.364,5.259h-5.1l6.935-22.079h5.972l6.935,22.079ZM167.446,136.6h-6.077V154.5h-4.992V136.6H150.3v-4.186h17.146Z" transform="translate(-78.004 -91.608)" fill="#fff"/>
          </svg>    
     </a>
	
	<footer id="colophon" class="site-footer blue_bckgrnd">
          <?php get_search_form();?>
          <div class="pre_goot_wrap">
               <?php 
                    get_sidebar();
                    wp_nav_menu( array( 'theme_location' => 'menu-2' ) );

                    echo '<p>&copy;';
                         echo date('Y');
                    echo ' Omnitrans, All Rights Reserved.</p>';
               ?>
          </div>
	</footer><!-- #colophon -->

     <div class="space_tester"></div>

     <div class="size_grid">
          <div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
          </div>
     </div>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

