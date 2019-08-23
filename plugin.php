<?php
/**
 * Plugin Name: ski-resort-card — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/rayosdev/ski-resort-card
 * Description: ski-resort-card for easy viewing of ski resorts in norway
 * Author: Jared Anders Isaksen
 * Author URI: https://Isaksen.tech
 * Version: 0.1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
