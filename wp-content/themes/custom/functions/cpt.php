<?php

/* -------------------------------------------------------------------------- */
/* Custom Post Type                                                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Works                                                                      */
/* -------------------------------------------------------------------------- */

add_action('init', 'c6_wp_post_works');

function c6_wp_post_works() {

  $labels = array(
    'name' => _x('Works', 'post type general name', 'your-plugin-textdomain'),
    'singular_name' => _x('Works', 'post type singular name', 'your-plugin-textdomain'),
    'menu_name' => _x('Works', 'admin menu', 'your-plugin-textdomain'),
    'name_admin_bar' => _x('Works', 'add new on admin bar', 'your-plugin-textdomain'),
    'add_new' => _x('Add New', 'Works', 'your-plugin-textdomain'),
    'add_new_item' => __('Add New Works', 'your-plugin-textdomain'),
    'new_item' => __('New Works', 'your-plugin-textdomain'),
    'edit_item' => __('Edit Works', 'your-plugin-textdomain'),
    'view_item' => __('View Works', 'your-plugin-textdomain'),
    'all_items' => __('All Works', 'your-plugin-textdomain'),
    'search_items' => __('Search Works', 'your-plugin-textdomain'),
    'parent_item_colon' => __('Parent Works:', 'your-plugin-textdomain'),
    'not_found' => __('No Works found.', 'your-plugin-textdomain'),
    'not_found_in_trash' => __('No Works found in Trash.', 'your-plugin-textdomain')
  );

  $args = array(
    'labels' => $labels,
    'description'  => __('Description.', 'your-plugin-textdomain'),
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'work/detail'),
    'capability_type' => 'post',
    'has_archive' => true,
    'show_in_rest' => true,
    'hierarchical' => true,
    'menu_position' => 4,
    'taxonomies' => array('works_category', 'works_tags'),
    'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt')
  );

  register_post_type('works', $args);

}

/* -------------------------------------------------------------------------- */
/* Works Category                                                             */
/* -------------------------------------------------------------------------- */

function register_taxonomy_works_category() {

  $works_category_labels = array(
    'name' => _x( 'Works Category', 'taxonomy general name' ),
    'singular_name' => _x( 'Works Category', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Categories' ),
    'all_items' => __( 'All Categories' ),
    'parent_item' => __( 'Parent Category' ),
    'parent_item_colon' => __( 'Parent Category:' ),
    'edit_item' => __( 'Edit Category' ),
    'update_item' => __( 'Update Category' ),
    'add_new_item' => __( 'Add New Category' ),
    'new_item_name' => __( 'New Category Name' ),
    'menu_name' => __( 'Works Categories' ),
  );

  register_taxonomy('works_category', array('works'), array(
    'hierarchical' => true,
    'labels' => $works_category_labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'works/category' ),
    'with_front' => false,
    'show_in_rest' => true,
  ));
}

add_action('init', 'register_taxonomy_works_category', 0);

/* -------------------------------------------------------------------------- */
/* Works Tags                                                                 */
/* -------------------------------------------------------------------------- */

function register_taxonomy_works_tags() {
  $labels = array(
    'name' => _x( 'Works Tags', 'taxonomy general name' ),
    'singular_name' => _x( 'Works Tag', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Works Tags' ),
    'popular_items' => __( 'Popular Works Tags' ),
    'all_items' => __( 'All Works Tags' ),
    'parent_item' => null,
    'parent_item_colon' => null,
    'edit_item' => __( 'Edit Tag' ), 
    'update_item' => __( 'Update Tag' ),
    'add_new_item' => __( 'Add New Tag' ),
    'new_item_name' => __( 'New Tag Name' ),
    'separate_items_with_commas' => __( 'Separate Works tags with commas' ),
    'add_or_remove_items' => __( 'Add or remove Works tags' ),
    'choose_from_most_used' => __( 'Choose from the most used Works tags' ),
    'menu_name' => __( 'Works Tags' ),
  ); 

  register_taxonomy('works_tags', 'works', array(
    'hierarchical' => false,
    'labels' => $labels,
    'show_ui' => true,
    'update_count_callback' => '_update_post_term_count',
    'show_admin_column' => true,
    'query_var' => true,
    'show_in_rest' => true,
    'rewrite' => array( 'slug' => 'works/tag' ),
  ));
}

add_action( 'init', 'register_taxonomy_works_tags', 0 );