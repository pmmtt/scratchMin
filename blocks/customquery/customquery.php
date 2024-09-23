<?php
function my_custom_block_register_block() {
     // Register the block script
     wp_register_script(
          'omnifseupdt-editor',
          get_template_directory_uri() . '/blocks/customquery/customquery.js',
          array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-api')
     );

     // Register the block with a new attribute for showing sticky posts
     register_block_type('omnifseupdt/posts-display', array(
          'editor_script' => 'omnifseupdt-editor',
          'render_callback' => 'my_custom_block_render_posts',
          'attributes' => array(
               'numberOfPosts' => array(
                    'type' => 'number',
                    'default' => 2,
               ),
               'showStickyPosts' => array( // New attribute for showing sticky posts
                    'type' => 'boolean',
                    'default' => false,
               ),
          ),
     ));
}

add_action('init', 'my_custom_block_register_block');

function my_custom_block_render_posts($attributes) {
     $args = array(
          'posts_per_page' => $attributes['numberOfPosts'],
          'post_status' => 'publish',
          'ignore_sticky_posts' => $attributes['showStickyPosts'] ? 0 : 1,
     );
     $query = new WP_Query($args);
     // Initialize posts_output with an opening <section> tag
     $posts_output = '<section class="card_grid query-links">';

     if ($query->have_posts()) {
          while ($query->have_posts()) {
               $query->the_post();
               $posts_output .= '<a href="' . get_the_permalink() . '" class="query_link_wrap grid_card">';
               if (has_post_thumbnail()) {
                    $posts_output .= '<figure>';
                         $posts_output .= get_the_post_thumbnail(get_the_ID(), 'thumbnail');
                    $posts_output .= '</figure>';
               }else{
                    $posts_output .= '<div class="query_placeholder"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" title="Blog Icon"><path class="svg_white" data-name="Path 329" d="M153.35,45.53A109.26,109.26,0,1,1,44.09,154.79h0A109.26,109.26,0,0,1,153.35,45.53Z"></path><path class="svg_blue" d="M176.48,181.53l0,0L148.33,196a5.57,5.57,0,0,1-3.14,1h-41.3a5.61,5.61,0,0,1,0-11.22h41.3a5.52,5.52,0,0,1,.71.05l10.7-21.52H103.89a5.61,5.61,0,0,1,0-11.22h62.68l19.93-19.94H103.89a5.61,5.61,0,0,1,0-11.22h92.93a6,6,0,0,1,.84.07L211,108.58a28.78,28.78,0,0,0-27-18.94h-73.7A28.76,28.76,0,0,0,81.53,118.4v73.7a28.76,28.76,0,0,0,19.86,27.35l47.07,25.88V220.86H184a28.76,28.76,0,0,0,28.76-28.76V145.66l-35.11,35.1A3.47,3.47,0,0,1,176.48,181.53Z"></path><path class="svg_blue" d="M212.74,192.1A28.76,28.76,0,0,1,184,220.86H148.46v24.47l-47.07-25.88A28.76,28.76,0,0,1,81.53,192.1V118.4a28.76,28.76,0,0,1,28.75-28.76H184a28.78,28.78,0,0,1,27,18.94l-13.36,13.36a6,6,0,0,0-.84-.07H103.89a5.61,5.61,0,0,0,0,11.22H186.5L166.57,153H103.89a5.61,5.61,0,0,0,0,11.22H156.6l-10.7,21.52a5.52,5.52,0,0,0-.71-.05h-41.3a5.61,5.61,0,0,0,0,11.22h41.3a5.57,5.57,0,0,0,3.14-1l28.1-14.42,0,0a3.47,3.47,0,0,0,1.15-.77l35.11-35.1Zm-51.42-21.62,7.52,7.11L154,185.21Zm58.42-41.72-7,7-37.89,37.89-9.76-9.24.16-.16,11.18-11.18,20-20,6-6,10.28-10.28,1.82-1.82,5.23,5.22,4.27,4.27Zm9.22-9.23-9.5-9.49,8.42-8.42,9.5,9.5Z"></path></svg><p class="h2">OmniNews</p></div>';
               }
               
               $posts_output .= '<div class="has-secondary-background-color has-background">';
                    $posts_output .= '<p class="h5">' . get_the_title() . '</p>';
                    $posts_output .= '<p class="card_byline">' . get_the_excerpt() . '<svg version="1.1" class="blck_lnk_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g id="Forward_arrow" transform="translate(0 2)"><path id="Path_10" class="blck_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"></path></g></svg></p>';
               $posts_output .= '</div>';
               $posts_output .= '</a>'; // End of a single post item
          }
          wp_reset_postdata();
     }

     $posts_output .= '</section>'; // Correctly close the <section> tag
     return $posts_output;
}