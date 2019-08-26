<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function ski_resort_card_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'ski_resort_card-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'ski_resort_card-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'ski_resort_card-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'ski_resort_card-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-ski-resort-card', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'ski_resort_card-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'ski_resort_card-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'ski_resort_card-cgb-block-editor-css',
			'render_callback' => 'render_post_block'
		)
	);
}

function render_post_block( $attributes ){
	
	if (function_exists('get_current_screen')){
		return;
	};
	
	$url = 'https://api.fnugg.no/get/resort/10';
	$args = array(
		'method' => 'GET'
	);

	$respons = wp_remote_get( $url, $args);

	if( is_wp_error( $respons )){
		$error_message = $respons->get_error_message();
		echo "Error: ". $error_message;
	}

	$data = json_decode(wp_remote_retrieve_body($respons ));

	$resort_name = $data->_source->name;
	$resort_image = $data->_source->images->image_1_1_s;
	$last_updated = $data->_source->conditions->combined->top->last_updated;
	$sky_conditions = $data->_source->conditions->combined->top->symbol->name;
	$temperature = $data->_source->conditions->combined->top->temperature->value;
	$wind_conditions_mps = $data->_source->conditions->combined->top->wind->mps;
	$wind_conditions_text = $data->_source->conditions->combined->top->wind->speed;
	$condition_description = $data->_source->conditions->combined->top->condition_description;

	include 'clouds.php';
	$sky_conditions = get_sky_condition($sky_conditions ,$sky_icons);

	// echo '<pre>';
	// print_r($data->_source);
	// echo'</pre>';
	// die();

	echo 
	'<div class="resort-card resort-card__container">
		<div class="resort-card__header-container">
			<h1 class="resort-card__header">
				'. $resort_name .'
			</h1>
		</div>
		<div
			class="resort-card__image-container"
			style="
					background-image: url(\''. $resort_image .'\');
					background-repeat: no-repeat;
					background-size: cover;
				"
		>
			<div class="resort-card__image-byline-container">
				<h2 class="image-byline__header">
					DAGENS FORHOLD
				</h2>
				<p class="image-byline__date">
					Oppdatert: '. $last_updated .'
				</p>
			</div>
		</div>
		<div class="resort-card__facts-container">

			<div class="facts__sky-container">
				<i class="facts__sky-icon  [ wi '. $sky_conditions['icon'] .' ]"></i>
				<h3 class="facts__sky-text"> '. $sky_conditions['text'] .' </h3>
			</div>

			<div class="facts__temperature">
				'. $temperature .'°
			</div>
			
			<div class="fact__wind-container">
				<h3 class="facts__wind-header">
					'. $wind_conditions_mps .' <span class="facts__wind-header-sub">m/s</span> 
				</h3>
				<p class="fact__wind-description">
					'. $wind_conditions_text .'
				</p>
			</div>
			

			<div class="facts__condition-container">
				<h3 class="facts__condition">
					'. $condition_description .'
				</h3>
			</div>
		</div>
	</div>';

}

// Hook: Block assets.
add_action( 'init', 'ski_resort_card_cgb_block_assets' );
