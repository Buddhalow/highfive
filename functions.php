<?php
/**
* Plugin Name: highfive
* Plugin URI: https://www.your-site.com/
* Description: Test.
* Version: 0.1
* Author: Alexander Forselius
* Author URI: https://www.your-site.com/
**/

function highfive_enqueue_script() {
  wp_enqueue_script( 'highfive', plugin_dir_url(__FILE__) . '/js/highfive.js', false );
}

add_action( 'wp_enqueue_scripts', 'highfive_enqueue_script' );

function highfive_shortcode($atts){
  return '<high-five number="' . $atts['number'] . '"></high-five>';
}
add_shortcode('highfive', 'highfive_shortcode'); 

