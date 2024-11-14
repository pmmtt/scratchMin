<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 */

?>

          </div><!-- #entry-content -->
     </main><!-- #main -->
	
	<footer id="colophon" class="site-footer">
          <div class="inner-wrap">
               <div class="site-info">
                    <?php get_template_part('assets/logoWht');
               
                    echo '<p>&copy;';
                         echo date('Y');
                    echo ' SC Metro, All Rights Reserved.</p>';
               ?>
               </div>

               <div class="nav-wrap">
                    <?php 
                         wp_nav_menu( array( 'theme_location' => 'footer' ) );
                    ?>
               </div>

               <?php
                    wp_nav_menu( array( 'theme_location' => 'social' ) );
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

