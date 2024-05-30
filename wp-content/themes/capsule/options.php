<?php

/**
 * A unique identifier is defined to store the options in the database and reference them from the theme.
 * By default it uses the theme name, in lowercase and without spaces, but this can be changed if needed.
 * If the identifier changes, it'll appear as if the options have been reset.
 *
 */
function optionsframework_option_name() {

    // This gets the theme name from the stylesheet (lowercase and without spaces)
    $themename = get_option('stylesheet');
    $themename = preg_replace("/\W/", "_", strtolower($themename));

    $optionsframework_settings = get_option('optionsframework');
    $optionsframework_settings['id'] = $themename;
    update_option('optionsframework', $optionsframework_settings);

    // echo $themename;
}

/**
 * Defines an array of options that will be used to generate the settings page and be saved in the database.
 * When creating the 'id' fields, make sure to use all lowercase and no spaces.
 *
 */
function optionsframework_options() {

    $wp_editor_settings = array(
        'wpautop' => false, // true is default
        'textarea_rows' => 5,
        'media_buttons' => true,
        'tinymce' => array(
            'plugins' => 'wordpress,wplink,paste'
        )
    );

    // Test data
    $test_array = array(
        'one' => __('One', 'options_check'),
        'two' => __('Two', 'options_check'),
        'three' => __('Three', 'options_check'),
        'four' => __('Four', 'options_check'),
        'five' => __('Five', 'options_check')
    );

    // Multicheck Array
    $multicheck_array = array(
        'one' => __('French Toast', 'options_check'),
        'two' => __('Pancake', 'options_check'),
        'three' => __('Omelette', 'options_check'),
        'four' => __('Crepe', 'options_check'),
        'five' => __('Waffle', 'options_check')
    );

    // Multicheck Defaults
    $multicheck_defaults = array(
        'one' => '1',
        'five' => '1'
    );

    // Background Defaults
    $background_defaults = array(
        'color' => '',
        'image' => '',
        'repeat' => 'repeat',
        'position' => 'top center',
        'attachment' => 'scroll');

    // Typography Defaults
    $typography_defaults = array(
        'size' => '15px',
        'face' => 'georgia',
        'style' => 'bold',
        'color' => '#bada55');

    // Typography Options
    $typography_options = array(
        'sizes' => array('6', '12', '14', '16', '20'),
        'faces' => array('Helvetica Neue' => 'Helvetica Neue', 'Arial' => 'Arial'),
        'styles' => false,
        'color' => true
    );

    // Pull all the categories into an array
    $options_categories = array();
    $options_categories_obj = get_categories();
    foreach ($options_categories_obj as $category) {
        $options_categories[$category->cat_ID] = $category->cat_name;
    }

    // Pull all tags into an array
    $options_tags = array();
    $options_tags_obj = get_tags();
    foreach ($options_tags_obj as $tag) {
        $options_tags[$tag->term_id] = $tag->name;
    }

    // Pull all the pages into an array
    $options_pages = array();
    $options_pages_obj = get_pages('sort_column=post_parent,menu_order');
    $options_pages[''] = 'Select a page:';
    foreach ($options_pages_obj as $page) {
        $options_pages[$page->ID] = $page->post_title;
    }

    // If using image radio buttons, define a directory path
    $imagepath = get_template_directory_uri() . '/images/';

    $options = array();

    ///////////////////////////
    // GLOBAL SETTINGS START //
    ///////////////////////////
    $options[] = array(
        'name' => __('Global Settings', 'options_check'),
        'type' => 'heading');

    $options[] = array(
        'name' => __('Logo Image', 'options_check'),
        'desc' => __('This replaces the logo with the version that you upload here. The width/height will be whatever the native image is.', 'options_check'),
        'id' => 'options_global_logo',
        'type' => 'upload');

    $options[] = array(
        'name' => __('Google Font Reference', 'options_check'),
        'desc' => __('Place Google link tag HREF here. Example: http://fonts.googleapis.com/css?family=Roboto+Slab:400,700,300. Place the font-family reference in the Custom CSS area below.'),
        'id' => 'options_global_google_link1',
        'std' => 'http://fonts.googleapis.com/css?family=Roboto+Slab:400,700,300',
        'type' => 'text');

    // $options[] = array(
    //     'name' => __('Google Map Iframe', 'options_check'),
    //     'desc' => __('Place Google map iframe here. Found via the "Embed map" feature within Google Maps.'),
    //     'id' => 'options_global_googlemap_iframe',
    //     'std' => '',
    //     'type' => 'text');

    $options[] = array(
        'name' => __('Physical Address', 'options_check'),
        'desc' => __('Enter the business address here.'),
        'id' => 'options_global_address',
        'std' => '',
        'type' => 'editor',
        'settings' => $wp_editor_settings);

    $options[] = array(
        'name' => __('Office Hours', 'options_check'),
        'desc' => __('Enter the business office hours here.'),
        'id' => 'options_global_hours',
        'std' => '',
        'type' => 'textarea');

    $options[] = array(
        'name' => __('Phone', 'options_check'),
        'desc' => __('Enter the business phone here.'),
        'id' => 'options_global_phone',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Email', 'options_check'),
        'desc' => __('Enter the business email here.'),
        'id' => 'options_global_email',
        'std' => '',
        'type' => 'text');

    // $options[] = array(
    //     'name' => __('Fax', 'options_check'),
    //     'desc' => __('Enter the business fax here.'),
    //     'id' => 'options_global_fax',
    //     'std' => '',
    //     'type' => 'text');

    $options[] = array(
        'name' => __('Facebook URL', 'options_check'),
        'desc' => __('Enter the Facebook URL here. If you do not have a URL entered, the icon will not show.'),
        'id' => 'options_global_facebook',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Twitter URL', 'options_check'),
        'desc' => __('Enter the Twitter URL here. If you do not have a URL entered, the icon will not show.'),
        'id' => 'options_global_twitter',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('LinkedIn URL', 'options_check'),
        'desc' => __('Enter the LinkedIn URL here. If you do not have a URL entered, the icon will not show.'),
        'id' => 'options_global_linkedin',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Youtube URL', 'options_check'),
        'desc' => __('Enter the Youtube URL here. If you do not have a URL entered, the icon will not show.'),
        'id' => 'options_global_youtube',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Instagram URL', 'options_check'),
        'desc' => __('Enter the Instagram URL here. If you do not have a URL entered, the icon will not show.'),
        'id' => 'options_global_instagram',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Pinterest URL', 'options_check'),
        'desc' => __('Enter the Pinterest URL here. If you do not have a URL entered, the icon will not show.'),
        'id' => 'options_global_pinterest',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Yelp URL', 'options_check'),
        'desc' => __('Enter the Yelp URL here. If you do not have a URL entered, the icon will not show.'),
        'id' => 'options_global_yelp',
        'std' => '',
        'type' => 'text');

    // $options[] = array(
    //     'name' => __('Custom CSS', 'options_check'),
    //     'desc' => __('Custom CSS that gets appended to the theme styling (after).', 'options_check'),
    //     'id' => 'options_global_custom_css',
    //     'std' => '',
    //     'type' => 'textarea');

    // $options[] = array(
    //     'name' => __('Custom JS', 'options_check'),
    //     'desc' => __('Custom JS that gets appended to bottom of the site. Do not try and load jquery here or use script tags. Only place javascript code without the script tags as the editor will strip the tags.', 'options_check'),
    //     'id' => 'options_global_custom_js',
    //     'std' => '',
    //     'type' => 'textarea');

    ///////////////////////////
    // FOOTER SETTINGS START //
    ///////////////////////////
    $options[] = array(
        'name' => __('Note:', 'options_check'),
        'desc' => __('The settings here will override the Global Settings where applicable. ', 'options_check'),
        'type' => 'info');

    $options[] = array(
        'name' => __('Footer Content', 'options_check'),
        'desc' => sprintf(__('Enter the footer content html/content here.', 'options_check')),
        'id' => 'options_footer_content',
        'type' => 'editor',
        'settings' => $wp_editor_settings);

    ///////////////////////////
    // ADVANCED SETTINGS //
    ///////////////////////////
    $options[] = array(
        'name' => __('Advanced', 'options_check'),
        'type' => 'heading');

    $options[] = array(
        'name' => __('Note:', 'options_check'),
        'desc' => __('Only change settings here if you know what you are doing.', 'options_check'),
        'type' => 'info');

    $options[] = array(
        'name' => __('Schema Business Name', 'options_check'),
        'desc' => __('Enter the business name here.', 'options_check'),
        'id' => 'options_schema_name',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Sitelink URL', 'options_check'),
        'desc' => __('Enter the Sitelink API URL here.', 'options_check'),
        'id' => 'options_sitelink_url',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Sitelink Corp Code', 'options_check'),
        'desc' => __('Enter the Sitelink API Corp Code here.', 'options_check'),
        'id' => 'options_sitelink_corp_code',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Sitelink Location Code', 'options_check'),
        'desc' => __('Enter the Sitelink API Location Code here.', 'options_check'),
        'id' => 'options_sitelink_location_code',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Sitelink Corp Login', 'options_check'),
        'desc' => __('Enter the Sitelink API Corp Login here.', 'options_check'),
        'id' => 'options_sitelink_corp_login',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Sitelink Corp Password', 'options_check'),
        'desc' => __('Enter the Sitelink API Corp Password here.', 'options_check'),
        'id' => 'options_sitelink_corp_password',
        'std' => '',
        'type' => 'text');

    // $options[] = array(
    //     'name' => __('Analytics Script', 'options_check'),
    //     'desc' => __('Enter the script for Google Analytics here.', 'options_check'),
    //     'id' => 'options_analytics',
    //     'std' => '',
    //     'type' => 'textarea');

    // $options[] = array(
    //     'name' => __('Space Before </body>', 'options_check'),
    //     'desc' => __('Only accepts javascript code, wrapped with <script> tags and valid HTML markup inside the </body> tag.', 'options_check'),
    //     'id' => 'options_before_body',
    //     'std' => '',
    //     'type' => 'textarea');

    return $options;
}

/*
 * Overrides default filter
 * For 'textarea' sanitization and $allowedposttags + embed and script.
 */
add_action('admin_init', 'optionscheck_change_santiziation', 100);

function optionscheck_change_santiziation() {
    remove_filter('of_sanitize_textarea', 'of_sanitize_textarea');
    add_filter('of_sanitize_textarea', 'custom_sanitize_textarea');
}

function custom_sanitize_textarea($input) {
    global $allowedposttags;
    $custom_allowedtags["embed"] = array(
        "src" => array(),
        "type" => array(),
        "allowfullscreen" => array(),
        "allowscriptaccess" => array(),
        "height" => array(),
        "width" => array()
    );
    $custom_allowedtags["script"] = array(
        "type" => array(),
        "async" => array(),
        "src" => array()
    );

    $custom_allowedtags = array_merge($custom_allowedtags, $allowedposttags);
    $output = wp_kses($input, $custom_allowedtags);
    return $output;
}