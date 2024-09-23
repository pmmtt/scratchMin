<?php
/*

Service Alerts

*/
function svc_alerts_posttype() {
  $labels = array(
    'name'               => _x( 'Service Alerts', 'post type general name' ),
    'singular_name'      => _x( 'Service Alert', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Service Alerts' ),
    'edit_item'          => __( 'Edit Service Alerts' ),
    'new_item'           => __( 'New Service Alerts' ),
    'all_items'          => __( 'All Service Alerts' ),
    'view_item'          => __( 'View Service Alerts' ),
    'search_items'       => __( 'Search Service Alerts' ),
    'not_found'          => __( 'No Service Alerts found' ),
    'not_found_in_trash' => __( 'No Service Alerts found in the Trash' ), 
    'parent_item_colon'  => '',
    'menu_name'          => 'Service Alerts'
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our Service Alerts and Service Alerts specific data',
    'public'        => true,
    'menu_position' => 100,
    'menu_icon'     => 'dashicons-calendar-alt',
    'show_in_rest'  => true,
    'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes','thumbnail' ),
    'rewrite' => array(
      'slug' => 'svc_alerts',
      'with_front' => false
    ),
    'has_archive'   => true,
  );
  register_post_type( 'svc_alerts', $args ); 
  flush_rewrite_rules();
}
add_action( 'init', 'svc_alerts_posttype' );


/*

Promotions

*/
function omni_promos_posttype() {
  $labels = array(
    'name'               => _x( 'Promotions', 'post type general name' ),
    'singular_name'      => _x( 'Promotion', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Promotion' ),
    'edit_item'          => __( 'Edit Promotion' ),
    'new_item'           => __( 'New Promotion' ),
    'all_items'          => __( 'All Promotions' ),
    'view_item'          => __( 'View Promotion' ),
    'search_items'       => __( 'Search Promotions' ),
    'not_found'          => __( 'No Promotions found' ),
    'not_found_in_trash' => __( 'No Promotions found in the Trash' ), 
    'parent_item_colon'  => '',
    'menu_name'          => 'Promotions'
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our Promotions and Promotion specific data',
    'public'        => true,
    'menu_position' => 100,
    'menu_icon'     => 'dashicons-calendar-alt',
    'show_in_rest'  => true,
    'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes','thumbnail' ),
    'rewrite' => array(
      'slug' => 'promotions',
      'with_front' => false
    ),
    'has_archive'   => true,
  );
  register_post_type( 'omni_promos', $args ); 
  flush_rewrite_rules();
}
add_action( 'init', 'omni_promos_posttype' );

function my_taxonomies_omni_promos() {
  $labels = array(
    'name'              => _x( 'Promotions Position', 'taxonomy general name' ),
    'singular_name'     => _x( 'Promotions Position', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Promotions Position' ),
    'all_items'         => __( 'All Promotions Position' ),
    'parent_item'       => __( 'Parent Promotions Position' ),
    'parent_item_colon' => __( 'Parent Promotions Position:' ),
    'edit_item'         => __( 'Edit Promotions Position' ), 
    'update_item'       => __( 'Update Promotions Position' ),
    'add_new_item'      => __( 'Add New Promotions Position' ),
    'new_item_name'     => __( 'New Promotions Position' ),
    'menu_name'         => __( 'Promotions Position' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'omni_promos_category', 'omni_promos', $args );
}
add_action( 'init', 'my_taxonomies_omni_promos', 0 );


/*  

Routes

*/
function routes_posttype() {
  $labels = array(
    'name'               => _x( 'Routes', 'post type general name' ),
    'singular_name'      => _x( 'Route', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Route' ),
    'edit_item'          => __( 'Edit Route' ),
    'new_item'           => __( 'New Route' ),
    'all_items'          => __( 'All Routes' ),
    'view_item'          => __( 'View Routes' ),
    'search_items'       => __( 'Search Routes' ),
    'not_found'          => __( 'No Routes found' ),
    'not_found_in_trash' => __( 'No Routes found in the Trash' ), 
    'parent_item_colon'  => '',
    'menu_name'          => 'Routes'
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our routes and route specific data',
    'public'        => true,
    'menu_position' => 100,
    'menu_icon'     => 'dashicons-calendar-alt',
    'show_in_rest'  => true,
    'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes','thumbnail' ),
    'rewrite' => array(
      'slug' => 'routes',
      'with_front' => false
    ),
    'has_archive'   => true,
  );
  register_post_type( 'route', $args ); 
  flush_rewrite_rules();
}
add_action( 'init', 'routes_posttype' );

function my_taxonomies_routes() {
  $labels = array(
    'name'              => _x( 'Communities', 'taxonomy general name' ),
    'singular_name'     => _x( 'Routes Community', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Communities' ),
    'all_items'         => __( 'All Communities' ),
    'parent_item'       => __( 'Parent Routes Community' ),
    'parent_item_colon' => __( 'Parent Routes Community:' ),
    'edit_item'         => __( 'Edit Routes Community' ), 
    'update_item'       => __( 'Update Routes Community' ),
    'add_new_item'      => __( 'Add New Routes Community' ),
    'new_item_name'     => __( 'New Routes Community' ),
    'menu_name'         => __( 'Communities' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'routes_category', 'route', $args );

  register_taxonomy( 'place_of_intrest', 'route', $args );
  $labels = array(
    'name'              => _x( 'Places of Interest', 'taxonomy general name' ),
    'singular_name'     => _x( 'Places of Interest', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Places of Interest' ),
    'all_items'         => __( 'All Places of Interest' ),
    'parent_item'       => __( 'Parent Places of Interest' ),
    'parent_item_colon' => __( 'Parent Places of Interest:' ),
    'edit_item'         => __( 'Edit Places of Interest' ), 
    'update_item'       => __( 'Update Places of Interest' ),
    'add_new_item'      => __( 'Add New Places of Interest' ),
    'new_item_name'     => __( 'New Places of Interest' ),
    'menu_name'         => __( 'Places of Interest' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'place_of_intrest', 'route', $args );

  register_taxonomy( 'popular_destinations', 'route', $args );
  $labels = array(
    'name'              => _x( 'Popular destinations', 'taxonomy general name' ),
    'singular_name'     => _x( 'Popular destinations', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Popular destinations' ),
    'all_items'         => __( 'All Popular destinations' ),
    'parent_item'       => __( 'Parent Popular destinations' ),
    'parent_item_colon' => __( 'Parent Popular destinations:' ),
    'edit_item'         => __( 'Edit Popular destinations' ), 
    'update_item'       => __( 'Update Popular destinations' ),
    'add_new_item'      => __( 'Add New Popular destinations' ),
    'new_item_name'     => __( 'New Popular destinations' ),
    'menu_name'         => __( 'Popular destinations' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => false,
  );
  register_taxonomy( 'popular_destinations', 'route', $args );

  register_taxonomy( 'type_of_service', 'route', $args );
  $labels = array(
    'name'              => _x( 'Type of Service', 'taxonomy general name' ),
    'singular_name'     => _x( 'Type of Service', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Type of Service' ),
    'all_items'         => __( 'All Type of Service' ),
    'parent_item'       => __( 'Parent Type of Service' ),
    'parent_item_colon' => __( 'Parent Type of Service:' ),
    'edit_item'         => __( 'Edit Type of Service' ), 
    'update_item'       => __( 'Update Type of Service' ),
    'add_new_item'      => __( 'Add New Type of Service' ),
    'new_item_name'     => __( 'New Type of Service' ),
    'menu_name'         => __( 'Type of Service' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'type_of_service', 'route', $args );
}
add_action( 'init', 'my_taxonomies_routes', 0 );

/*

FFFS

*/
function fffs_posttype() {
     $labels = array(
       'name'               => _x( 'FFFS', 'post type general name' ),
       'singular_name'      => _x( 'FFFS', 'post type singular name' ),
       'add_new'            => _x( 'Add New', 'book' ),
       'add_new_item'       => __( 'Add New FFFS' ),
       'edit_item'          => __( 'Edit FFFS' ),
       'new_item'           => __( 'New FFFS' ),
       'all_items'          => __( 'All FFFS' ),
       'view_item'          => __( 'View FFFS' ),
       'search_items'       => __( 'Search FFFS' ),
       'not_found'          => __( 'No FFFS found' ),
       'not_found_in_trash' => __( 'No FFFS found in the Trash' ), 
       'parent_item_colon'  => '',
       'menu_name'          => 'FFFS'
     );
     $args = array(
       'labels'        => $labels,
       'description'   => 'Holds our FFFS and FFFS specific data',
       'public'        => true,
       'menu_position' => 100,
       'menu_icon'     => 'dashicons-building',
       'show_in_rest'  => true,
       'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes','thumbnail' ),
       'rewrite' => array(
         'slug' => 'fffs',
         'with_front' => false
       ),
       'has_archive'   => true,
     );
     register_post_type( 'fffs', $args ); 
     flush_rewrite_rules();
   }
   add_action( 'init', 'fffs_posttype' );

   function my_taxonomies_fffs() {
     $labels = array(
       'name'              => _x( 'FFFS Category', 'taxonomy general name' ),
       'singular_name'     => _x( 'FFFS Category', 'taxonomy singular name' ),
       'search_items'      => __( 'Search FFFS Category' ),
       'all_items'         => __( 'All FFFS Category' ),
       'parent_item'       => __( 'Parent FFFS Category' ),
       'parent_item_colon' => __( 'Parent FFFS Category:' ),
       'edit_item'         => __( 'Edit FFFS Category' ), 
       'update_item'       => __( 'Update FFFS Category' ),
       'add_new_item'      => __( 'Add New FFFS Category' ),
       'new_item_name'     => __( 'New FFFS Category' ),
       'menu_name'         => __( 'FFFS Category' ),
     );
     $args = array(
       'labels' => $labels,
       'hierarchical' => true,
     );
     register_taxonomy( 'fffs_category', 'fffs', $args );
   }
   add_action( 'init', 'my_taxonomies_fffs', 0 );
   

/*
   
   Neighborhood Guides
   
   */
  function nbrhdgds_posttype() {
     $labels = array(
       'name'               => _x( 'Neighborhood Guides', 'post type general name' ),
       'singular_name'      => _x( 'Neighborhood Guide', 'post type singular name' ),
       'add_new'            => _x( 'Add New', 'book' ),
       'add_new_item'       => __( 'Add New Neighborhood Guides' ),
       'edit_item'          => __( 'Edit Neighborhood Guides' ),
       'new_item'           => __( 'New Neighborhood Guides' ),
       'all_items'          => __( 'All Neighborhood Guides' ),
       'view_item'          => __( 'View Neighborhood Guides' ),
       'search_items'       => __( 'Search Neighborhood Guides' ),
       'not_found'          => __( 'No Neighborhood Guides found' ),
       'not_found_in_trash' => __( 'No Neighborhood Guides found in the Trash' ), 
       'parent_item_colon'  => '',
       'menu_name'          => 'Neighborhood Guides'
     );
     $args = array(
       'labels'        => $labels,
       'description'   => 'Holds our Neighborhood Guides and Neighborhood Guides specific data',
       'public'        => true,
       'menu_position' => 100,
       'menu_icon'     => 'dashicons-location-alt',
       'show_in_rest'  => true,
       'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes','thumbnail' ),
       'rewrite' => array(
         'slug' => 'neighborhood-guides',
         'with_front' => false
       ),
       'has_archive'   => true,
     );
     register_post_type( 'nbrhdgds', $args ); 
     flush_rewrite_rules();
   }
   add_action( 'init', 'nbrhdgds_posttype' );


/**
 * 
 * 
 * Go Smart
 * 
 * 
 */

function go_smart_posttype() {
     $labels = array(
       'name'               => _x( 'Go Smart', 'post type general name' ),
       'singular_name'      => _x( 'Go Smart', 'post type singular name' ),
       'add_new'            => _x( 'Add New', 'Go Smart Guide' ),
       'add_new_item'       => __( 'Add New Go Smart' ),
       'edit_item'          => __( 'Edit Go Smart' ),
       'new_item'           => __( 'New Go Smart' ),
       'all_items'          => __( 'All Go Smart' ),
       'view_item'          => __( 'View Go Smart' ),
       'search_items'       => __( 'Search Go Smart' ),
       'not_found'          => __( 'No Go Smart found' ),
       'not_found_in_trash' => __( 'No Go Smart found in the Trash' ), 
       'parent_item_colon'  => '',
       'menu_name'          => 'Go Smart'
     );
     $args = array(
       'labels'        => $labels,
       'description'   => 'Holds our dropdown navigation and route specific data',
       'public'        => true,
       'menu_position' => 100,
       'menu_icon'     => 'dashicons-menu-alt3',
       'show_in_rest'  => true,
       'supports'      => array( 'title', 'editor', 'page-attributes'),
       'rewrite' => array(
         'slug' => 'go_smart',
         'with_front' => false
       ),
       'has_archive'   => true,
     );
     register_post_type( 'go_smart', $args ); 
     flush_rewrite_rules();
   }
   add_action( 'init', 'go_smart_posttype' );
   

/*

Page Elements

*/
function page_elements_posttype() {
     $labels = array(
       'name'               => _x( 'Page Elements', 'post type general name' ),
       'singular_name'      => _x( 'Page Element', 'post type singular name' ),
       'add_new'            => _x( 'Add New', 'book' ),
       'add_new_item'       => __( 'Add New Page Elements' ),
       'edit_item'          => __( 'Edit Page Elements' ),
       'new_item'           => __( 'New Page Elements' ),
       'all_items'          => __( 'All Page Elements' ),
       'view_item'          => __( 'View Page Elements' ),
       'search_items'       => __( 'Search Page Elements' ),
       'not_found'          => __( 'No Page Elements found' ),
       'not_found_in_trash' => __( 'No Page Elements found in the Trash' ), 
       'parent_item_colon'  => '',
       'menu_name'          => 'Design System'
     );
     $args = array(
       'labels'        => $labels,
       'description'   => 'Holds our Page Elements and Page Elements specific data',
       'public'        => true,
       'menu_position' => 100,
       'menu_icon'     => 'dashicons-calendar-alt',
       'show_in_rest'  => true,
       'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes','thumbnail' ),
       'rewrite' => array(
         'slug' => 'page_elements',
         'with_front' => false
       ),
       'has_archive'   => true,
     );
     register_post_type( 'page_elements', $args ); 
     flush_rewrite_rules();
   }
   add_action( 'init', 'page_elements_posttype' );
   
   