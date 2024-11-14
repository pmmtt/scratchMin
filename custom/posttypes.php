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
		'menu_name'          => 'Service Alerts',
	);
	$args = array(
		'labels'        => $labels,
		'description'   => 'Holds our Service Alerts and Service Alerts specific data',
		'public'        => true,
		'menu_position' => 100,
		'menu_icon'     => 'dashicons-calendar-alt',
		'show_in_rest'  => true,
		'show_in_graphql' => true,
		'graphql_single_name' => 'serviceAlert',
		'graphql_plural_name' => 'serviceAlerts',
		'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes', 'thumbnail' ),
		'rewrite' => array(
			'slug' => 'svc_alerts',
			'with_front' => false,
		),
		'has_archive'   => true,
	);
	register_post_type( 'svc_alerts', $args );
	flush_rewrite_rules();
}
add_action( 'init', 'svc_alerts_posttype' );

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
		'menu_name'          => 'Routes',
	);
	$args = array(
		'labels'        => $labels,
		'description'   => 'Holds our routes and route specific data',
		'public'        => true,
		'menu_position' => 100,
		'menu_icon'     => 'dashicons-calendar-alt',
		'show_in_rest'  => true,
		'show_in_graphql' => true,
		'graphql_single_name' => 'route',
		'graphql_plural_name' => 'routes',
		'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes', 'thumbnail' ),
		'rewrite' => array(
			'slug' => 'routes',
			'with_front' => false,
		),
		'has_archive'   => true,
	);
	register_post_type( 'route', $args );
	flush_rewrite_rules();
}
add_action( 'init', 'routes_posttype' );

/*
Page Elements (Design System)
*/
function page_elements_posttype() {
	$labels = array(
		'name'               => _x( 'Design System', 'post type general name' ),
		'singular_name'      => _x( 'Page Element', 'post type singular name' ),
		'add_new'            => _x( 'Add New', 'book' ),
		'add_new_item'       => __( 'Add New Design System' ),
		'edit_item'          => __( 'Edit Design System' ),
		'new_item'           => __( 'New Design System' ),
		'all_items'          => __( 'All Design System' ),
		'view_item'          => __( 'View Design System' ),
		'search_items'       => __( 'Search Design System' ),
		'not_found'          => __( 'No Design System found' ),
		'not_found_in_trash' => __( 'No Design System found in the Trash' ),
		'menu_name'          => 'Design System',
	);
	$args = array(
		'labels'        => $labels,
		'description'   => 'Holds our Design System and Design System specific data',
		'public'        => true,
		'hierarchical'  => true,
		'menu_position' => 100,
		'menu_icon'     => 'dashicons-calendar-alt',
		'show_in_rest'  => true,
		'show_in_graphql' => true,
		'graphql_single_name' => 'pageElement',
		'graphql_plural_name' => 'pageElements',
		'supports'      => array( 'title', 'editor', 'excerpt', 'page-attributes', 'thumbnail' ),
		'rewrite' => array(
			'slug' => 'page_elements',
			'with_front' => false,
		),
		'has_archive'   => true,
	);
	register_post_type( 'page_elements', $args );
	flush_rewrite_rules();
}
add_action( 'init', 'page_elements_posttype' );

/*
Taxonomies for Page Elements
*/
function register_page_elements_taxonomies() {
	// Category taxonomy
	$category_labels = array(
		'name'              => _x( 'Category Test', 'taxonomy general name' ),
		'singular_name'     => _x( 'Category Test', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Category Test' ),
		'all_items'         => __( 'All Categories Test' ),
		'edit_item'         => __( 'Edit Category Test' ),
		'update_item'       => __( 'Update Category Test' ),
		'add_new_item'      => __( 'Add New Category Test' ),
		'new_item_name'     => __( 'New Category Test' ),
		'menu_name'         => __( 'Category Test' ),
	);
	$category_args = array(
		'labels' => $category_labels,
		'hierarchical' => true,
	);
	register_taxonomy( 'category_test', 'page_elements', $category_args );

	// Tag taxonomy
	$tag_labels = array(
		'name'              => _x( 'Test Tags', 'taxonomy general name' ),
		'singular_name'     => _x( 'Test Tag', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Test Tags' ),
		'all_items'         => __( 'All Test Tags' ),
		'edit_item'         => __( 'Edit Test Tag' ),
		'update_item'       => __( 'Update Test Tag' ),
		'add_new_item'      => __( 'Add New Test Tag' ),
		'new_item_name'     => __( 'New Test Tag' ),
		'menu_name'         => __( 'Test Tags' ),
	);
	$tag_args = array(
		'labels' => $tag_labels,
		'hierarchical' => false,
	);
	register_taxonomy( 'test_tags', 'page_elements', $tag_args );
}
add_action( 'init', 'register_page_elements_taxonomies' );
?>
