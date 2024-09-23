<?php

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'scratch_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function scratch_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Omnitrans 2020, use a find and replace
		 * to change 'scratch' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'scratch', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		//add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'scratch' ),
				'menu-2' => esc_html__( 'Social', 'scratch' ),
				'menu-3' => esc_html__( 'Quick Links', 'scratch' ),
				'menu-4' => esc_html__( 'Title VI', 'scratch' )
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'scratch_setup' );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function scratch_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'scratch' ),
			'id'         => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'scratch' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'scratch_widgets_init' );

/**
 * Allow SVG
 */
function allow_svg_upload( $mimes ) {
     $mimes['svg'] = 'image/svg+xml';
     return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_upload' );

// Allow SVGs and specific attributes in menu items
function custom_kses_allowed_html( $allowed_tags ) {
     // Allow the <svg> tag and its children with specific attributes
     $allowed_tags['svg'] = array(
          'xmlns'          => true,
          'viewBox'        => true,
          'width'          => true,
          'height'         => true,
          'fill'           => true,
          'stroke'         => true,
          'stroke-width'   => true,
          'stroke-linecap' => true,
          'stroke-linejoin'=> true,
     );
     $allowed_tags['path'] = array(
          'class' => true,
          'd'     => true,
     );
     return $allowed_tags;
}
add_filter( 'wp_kses_allowed_html', 'custom_kses_allowed_html', 10, 2 );

/**
 * Enqueue scripts and styles.
 */
function dequeue_jquery_migrate( $scripts ) {
	if ( ! is_admin() && ! empty( $scripts->registered['jquery'] ) ) {
          $scripts->registered['jquery']->deps = array_diff(
               $scripts->registered['jquery']->deps,
               [ 'jquery-migrate' ]
          );
	}
}
add_action( 'wp_default_scripts', 'dequeue_jquery_migrate' );
if ( !is_admin() ) wp_deregister_script('jquery');

function scratch_scripts() {
	wp_enqueue_style( 'scratch-fonts', 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap' );

	wp_enqueue_style( 'scratch-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'scratch-style', 'rtl', 'replace' );
	// General Scripts
     //wp_enqueue_script( 'scratch-scripts', get_template_directory_uri() . '/js/scripts.js', array(), _S_VERSION, true );

     // Updated Scripts
	wp_enqueue_script( 'scratch-newscripts', get_template_directory_uri() . '/js/updtHeadScripts.js', array(), _S_VERSION );
	wp_enqueue_script( 'scratch-cleanscripts', get_template_directory_uri() . '/js/clean_scripts.js', array(), _S_VERSION, true );
	
     wp_enqueue_script( 'scratch-guidesmap', get_template_directory_uri() . '/js/guides-map.js', array(), _S_VERSION );

	wp_enqueue_script( 'scratch-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

     // Adding updated styles
     wp_enqueue_style('scratch_main_styles', get_theme_file_uri('/build/style-index.css'));
     wp_enqueue_style('scratch_extra_styles', get_theme_file_uri('/build/index.css'));
     // Adding updated styles - END
}
add_action( 'wp_enqueue_scripts', 'scratch_scripts' );

// Editor Styles
function scratch_features() {
     add_theme_support('editor-styles');
	wp_enqueue_style( 'scratch-fonts', 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap' );
     add_editor_style(array('/build/style-index.css', '/build/index.css'));
     add_editor_style(array('/css/base/editorstyles.scss'));
}
add_action('after_setup_theme', 'scratch_features');
// Editor Styles - END
/**
 * Enqueue scripts and styles. - END
 */

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom Elements
 */
require get_template_directory() . '/custom/posttypes.php';
require get_template_directory() . '/custom/walker.php';

// Adding Excerpt to pages for SEO description
function add_excerpts_to_pages() {
     add_post_type_support( 'page', 'excerpt' );
}
add_action( 'init', 'add_excerpts_to_pages' );

// Remove p tag from excerpt
function custom_excerpt_strip_tags($excerpt) {
     return strip_tags($excerpt);
}
add_filter('the_excerpt', 'custom_excerpt_strip_tags');
// Adding Excerpt to pages for SEO description - END

// Limit except length to 125 characters.
// tn limited excerpt length by number of characters
function get_excerpt( $count ) {
	$permalink = get_permalink($post->ID);
	$excerpt = get_the_content();
	$excerpt = strip_tags($excerpt);
	$excerpt = substr($excerpt, 0, $count);
	$excerpt = substr($excerpt, 0, strripos($excerpt, " "));
	$excerpt = '<p class="bckgrnd_green">'.$excerpt.'... <span class="arrow"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g id="Forward_arrow" transform="translate(0 2)"><path id="Path_10" class="blck_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"/></g></svg></span></p>';
	return $excerpt;
	}

	//Page Slug Body Class
function add_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) ) {
          $classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );
// Setting first image as thumbnail

// Remove Styles
function custom_remove_ninja_forms_styles() {
     // Dequeue all Ninja Forms styles
          wp_dequeue_style('nf-display');
          wp_dequeue_style('nf-display-opinions');
          wp_dequeue_style('nf-display-gutenberg');
          wp_dequeue_style('nf-font-awesome');
          wp_dequeue_style('nf-divs');
     }
     add_action('wp_enqueue_scripts', 'custom_remove_ninja_forms_styles', 20);
     // Remove Ninja Form styles

     // Remove core WordPress Styles
     function disable_wp_block_library_css() {
          wp_dequeue_style('wp-block-library');
          wp_dequeue_style('wp-block-library-theme');
          wp_dequeue_style('wc-block-style'); // Remove WooCommerce block CSS
     }
     add_action('wp_enqueue_scripts', 'disable_wp_block_library_css', 100);

     // Remove core WordPress inline styles
     function remove_wp_theme_json_inline_styles() {
          // Remove the inline styles added by the global-styles handle
          wp_styles()->add_data('global-styles', 'after', '');
     }
     add_action('wp_enqueue_scripts', 'remove_wp_theme_json_inline_styles', 100);
     // Remove core WordPress Styles - END
// Remove styles - END

// Amend output structure
     // Updating elemnt classes
     function remove_wp_prefix_from_classes_start() {
          ob_start('remove_wp_prefix_from_classes');
     }
     add_action('template_redirect', 'remove_wp_prefix_from_classes_start');
     // Modify the output and remove 'wp-' from all classes.
     function remove_wp_prefix_from_classes($content) {
          // Use regex to remove 'wp-' from class attributes.
          $content = preg_replace_callback('/class="([^"]*)"/', function($matches) {
               return 'class="' . preg_replace('/\bwp-/', '', $matches[1]) . '"';
          }, $content);
          return $content;
     }

     // Flush the output buffer at the end.
     function remove_wp_prefix_from_classes_end() {
          if (ob_get_level() > 0) {
               ob_end_flush();
          }
     }
     add_action('shutdown', 'remove_wp_prefix_from_classes_end', 100);

          // Updating elemnt classes - END
// Amend output structure - END

// Register blocks - reusable
class celOrgBlocks{
     public $name;
     public $renderCallback;

     function __construct($name, $renderCallback = null){
          $this->name = $name;
          $this->renderCallback = $renderCallback;
          add_action('init', [$this, 'onInit']);
     }

     function blockRenderCallback($attributes, $content){
          ob_start();
          require get_theme_file_path("/blocks/{$this->name}/{$this->name}.php");
          return ob_get_clean();
     }

     function onInit(){
          wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));

          $blockArgs = array(
               'editor_script' => $this->name
          );

          if($this->renderCallback){
               $blockArgs['render_callback'] = [$this, 'blockRenderCallback'];
          }

          register_block_type("omnifseupdt/{$this->name}", $blockArgs);
     }
}

// Custom Blocks
// JS Rendered Blocks
new celOrgBlocks('relational', true);
new celOrgBlocks('promogrp', true);
new celOrgBlocks('arrowlink', true);
new celOrgBlocks('cardgrid', true);
new celOrgBlocks('gridcard', true);
new celOrgBlocks('custgroup', true);
new celOrgBlocks('guidesmap', true);
new celOrgBlocks('guidesdestsec', true);
new celOrgBlocks('guidesaddress', true);
new celOrgBlocks('mapblock', true);
new celOrgBlocks('trpplnr', true);
new celOrgBlocks('headhero', true);
new celOrgBlocks('custbtn', true);
new celOrgBlocks('tabaccord', true);
new celOrgBlocks('tabaccordgroup', true);
// PHP Rendered Blocks
require get_template_directory() . '/blocks/customquery/customquery.php';

// Sanitize custom HTML for security.
function your_custom_kses_rules($allowed_tags, $context) {
     if ($context === 'post') {
         // Add custom attributes or modify existing ones.
          $allowed_tags['button'] = [
               'aria-label' => true,
               'role' => true,
          ];
     }
     return $allowed_tags;
}

// Conditional script loading on blocks
// Function to enqueue scripts conditionally
function load_conditional_scripts() {
     // Check if the specific block 'omnifseupdt/trpplnr' is present
     if ( has_block( 'omnifseupdt/trpplnr' ) ) {
         // Enqueue Google Maps API asynchronously
          wp_enqueue_script('omninew-trpplnr-google', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA0M8dX1kGhRR0VlYXML0JJPEBB2jHnY54&libraries=places', array(), null, true);

         // Enqueue your custom script that depends on Google Maps API
          wp_enqueue_script('omninew-trpplnr-scripts', get_template_directory_uri() . '/js/blockScripts/scripts.js', array('omninew-trpplnr-google'), null, true);
     }
}
add_action('wp_enqueue_scripts', 'load_conditional_scripts');

 // Function to add async attribute to script tags
 function add_async_attribute($tag, $handle) {
     // Array of script handles to add 'async' attribute to
     $async_scripts = array('omninew-trpplnr-google');
 
     // Check if the current handle is in the async array
     if (in_array($handle, $async_scripts)) {
         // Add async attribute
         return str_replace(' src', ' async="async" src', $tag);
     }
 
     return $tag;
 }
 add_filter('script_loader_tag', 'add_async_attribute', 10, 2);
 
// Conditional script loading on blocks - END
// Custom Blocks - END\