<?php

declare(strict_types=1);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');

// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(false);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Enqueue and register scripts the right way.
add_action('wp_enqueue_scripts', function () {
    wp_deregister_script('jquery');

    // wp_enqueue_style('wordplate', mix('styles/app.css'));

    // wp_register_script('wordplate', mix('scripts/app.js'), '', '', true);
    // wp_enqueue_script('wordplate');
});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);


add_theme_support('plate-disable-menu', [
    'edit-comments.php', // comments
    'index.php', // dashboard
    'upload.php', // media
    'edit.php?post_type=page', // Custom post type
    'tools.php?page=wp-migrate-db', // Plugin in Tools
    'options-general.php?page=menu_editor', // Plugin in Settings
    'admin.php?page=theseoframework-settings', // Plugin in menu root
]);

// /**
//  * Use * for origin
//  */
// add_action( 'rest_api_init', function() {

// 	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
// 	add_filter( 'rest_pre_serve_request', function( $value ) {
// 		header( 'Access-Control-Allow-Origin: *' );
// 		header( 'Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE' );
// 		header( 'Access-Control-Allow-Credentials: true' );

// 		return $value;

// 	});
// }, 15 );

// /**
//  * Only allow GET requests
//  */
// add_action( 'rest_api_init', function() {

// 	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
// 	add_filter( 'rest_pre_serve_request', function( $value ) {
// 		$origin = get_http_origin();
// 		if ( $origin ) {
// 			header( 'Access-Control-Allow-Origin: ' . esc_url_raw( $origin ) );
// 		}
// 		header( 'Access-Control-Allow-Origin: ' . esc_url_raw( site_url() ) );
// 		header( 'Access-Control-Allow-Methods: GET' );

// 		return $value;

// 	});
// }, 15 );

// /**
//  * Only allow same origin
//  */
// add_action( 'rest_api_init', function() {

// 	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
// 	add_filter( 'rest_pre_serve_request', function( $value ) {
// 		header( 'Access-Control-Allow-Origin: ' . esc_url_raw( site_url() ) );
// 		header( 'Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE' );
// 		header( 'Access-Control-Allow-Credentials: true' );

// 		return $value;

// 	});
// }, 15 );
