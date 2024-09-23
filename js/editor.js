wp.domReady( () => {
	wp.blocks.unregisterBlockStyle( 'core/button', 'default' );
	wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );
	wp.blocks.unregisterBlockStyle( 'core/button', 'squared' );
} );

// -- Disable Gradients
add_theme_support( 'disable-custom-gradients' );
add_theme_support( 'editor-gradient-presets', array() );