<?php

/**
 * Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 */
//remove_filter( 'the_content', 'wpautop' );
//remove_filter( 'the_excerpt', 'wpautop' );

if (!function_exists('_capsule_setup')) :

    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function _capsule_setup() {
        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');
        add_image_size('schema', 696, 450, true); //696px width and 450px height with crop mode on
        add_image_size('static_heading', 1200, 500, true);
        add_image_size('home-square', 480, 480, true);
        add_image_size('blog-preview', 340, 228, true);

        // Add new image sizes to post or page editor
        function new_image_sizes($sizes) {
            return array_merge($sizes, array(
                'work' => __('Our Work'),
            ));
        }

        add_filter('image_size_names_choose', 'new_image_sizes');

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(array(
            'primary' => esc_html__('Primary', '_s'),
            'footer_column_1' => esc_html__('Footer Column 1', '_s'),
            'footer_column_2' => esc_html__('Footer Column 2', '_s'),
            'mobile' => esc_html__('Mobile', '_s'),
        ));

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));

        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('_s_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));
    }

endif;
add_action('after_setup_theme', '_capsule_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _capsule_widgets_init() {
    register_sidebar(array(
        'name' => esc_html__('Default'),
        'id' => 'sidebar-1',
        'description' => esc_html__('Add widgets here for the default sidebar.'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
    register_sidebar(array(
        'name' => esc_html__('Contact'),
        'id' => 'sidebar-contact',
        'description' => esc_html__('Add widgets here for the contact sidebar.'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    register_sidebar(array(
        'name' => esc_html__('Subscribe'),
        'id' => 'sidebar-subscribe',
        'description' => esc_html__('Add widgets here for the subscribe sidebar.'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}

add_action('widgets_init', '_capsule_widgets_init');

// Enqueue scripts and styles
function _capsule_assets() {
    wp_enqueue_style('_capsule-stylesheet-theme', get_stylesheet_uri());
    wp_enqueue_style( '_capsule-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );
    wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js', null, null, true);
    wp_enqueue_script( '_capsule-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array(), '1.0.0', true );
    wp_enqueue_script( '_capsule-scripts', get_template_directory_uri() . '/dist/js/custom.js', array(), '1.0.0', true );
    wp_localize_script( '_capsule-scripts', 'acf_vars', array(
        'list_parent' => get_field( 'quote_date_management', 'option' ),
        )
    );
  }
  add_action('wp_enqueue_scripts', '_capsule_assets');

// Pagination
function pagination($pages = '', $range = 4) {
    $showitems = ($range * 2) + 1;

    global $paged;
    if (empty($paged))
        $paged = 1;

    if ($pages == '') {
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) {
            $pages = 1;
        }
    }

    if (1 != $pages) {
        echo "<div class=\"pagination\"><span>Page " . $paged . " of " . $pages . "</span>";
        if ($paged > 2 && $paged > $range + 1 && $showitems < $pages)
            echo "<a href='" . get_pagenum_link(1) . "'>&laquo; First</a>";
        if ($paged > 1 && $showitems < $pages)
            echo "<a href='" . get_pagenum_link($paged - 1) . "'>&lsaquo; Previous</a>";

        for ($i = 1; $i <= $pages; $i++) {
            if (1 != $pages && (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems )) {
                echo ($paged == $i) ? "<span class=\"current\">" . $i . "</span>" : "<a href='" . get_pagenum_link($i) . "' class=\"inactive\">" . $i . "</a>";
            }
        }

        if ($paged < $pages && $showitems < $pages)
            echo "<a href=\"" . get_pagenum_link($paged + 1) . "\">Next &rsaquo;</a>";
        if ($paged < $pages - 1 && $paged + $range - 1 < $pages && $showitems < $pages)
            echo "<a href='" . get_pagenum_link($pages) . "'>Last &raquo;</a>";
        echo "</div>\n";
    }
}

// Read more (commented out because we're manually rendering "Read More" outside the article)
// function ld_new_excerpt_more($more) {
//     global $post;
//     return '...<br /><a class="continue-reading" href="' . get_permalink($post->ID) . '">Read More</a>';
// }

// add_filter('excerpt_more', 'ld_new_excerpt_more');

// Excerpt manual truncation
function custom_excerpt_length($length){
    return 20;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

// RSS - add the namespace to the RSS opening element
function add_media_namespace() {
    echo 'xmlns:media="http://search.yahoo.com/mrss/"';
}

// RSS - add the requisite tag where a thumbnail exists
function add_media_thumbnail() {
    global $post;
    if (has_post_thumbnail($post->ID)) {
        $thumb_ID = get_post_thumbnail_id($post->ID);
        $details = wp_get_attachment_image_src($thumb_ID, 'feedimg');
        //var_dump($details);
        if (is_array($details)) {
            echo '<media:content url="' . $details[0] . '" medium="image" />';
        }
    }
}

// RSS - add the two functions above into the relevant WP hooks
add_action('rss2_ns', 'add_media_namespace');
add_action('rss2_item', 'add_media_thumbnail');

/**
 * function wpmark_change_theme_options_menu_name()
 * changes the name of the menu item of theme options framework
 */
function wpmark_change_theme_options_menu_name($menu) {
    /* alter the options menu paramters */
    $menu['menu_title'] = 'Theme Options'; // set the menu title
    $menu['page_title'] = 'Theme Options'; // set the menus page title
    $menu['mode'] = 'menu'; // make the menu a top level menu item
    $menu['position'] = '81'; // make the menu item appear after settings

    /* return our modified menu */
    return $menu;
}

add_filter('optionsframework_menu', 'wpmark_change_theme_options_menu_name');

// Custom Style Integration for TinyMCE
add_filter('mce_buttons_2', 'my_mce_buttons_2');

// Add the style list to tinymce
function my_mce_buttons_2($buttons) {
    array_unshift($buttons, 'styleselect');
    return $buttons;
}

add_filter('tiny_mce_before_init', 'my_mce_before_init');

function my_mce_before_init($settings) {
    $style_formats = array(
        array(
            'title' => 'Add button class to anchor', // title that apear in the list
            'selector' => 'a', // limited to specific html tag
            'classes' => 'button' // the class to add
        )
    );
    $settings['style_formats'] = json_encode($style_formats);
    return $settings;
}

add_theme_support( 'title-tag' );

// Gravity Forms customizations

// Enables built-in credit card field for Gravity Forms
add_filter( 'gform_enable_credit_card_field', '__return_true', 11 );

// Zipcode list validation
add_filter( 'gform_field_validation_1_14', 'custom_zip_validation', 10, 4 ); // gform_field_validation_1_14 references form ID 1, and field ID 14
add_filter( 'gform_field_validation_1_30', 'custom_zip_validation', 10, 4 ); // gform_field_validation_1_24 references form ID 1, and field ID 30
function custom_zip_validation( $result, $value, $form, $field ) {
    if ( $result['is_valid'] ) {
        $acceptable_zips = array(
            '75001',
            '75002',
            '75006',
            '75007',
            '75009',
            '75010',
            '75011',
            '75013',
            '75014',
            '75015',
            '75016',
            '75017',
            '75019',
            '75022',
            '75023',
            '75024',
            '75025',
            '75026',
            '75027',
            '75028',
            '75029',
            '75030',
            '75033',
            '75034',
            '75035',
            '75038',
            '75039',
            '75040',
            '75041',
            '75042',
            '75043',
            '75044',
            '75045',
            '75046',
            '75047',
            '75048',
            '75049',
            '75050',
            '75051',
            '75052',
            '75053',
            '75054',
            '75056',
            '75057',
            '75060',
            '75061',
            '75062',
            '75063',
            '75065',
            '75067',
            '75068',
            '75069',
            '75070',
            '75071',
            '75074',
            '75075',
            '75077',
            '75078',
            '75080',
            '75081',
            '75082',
            '75083',
            '75085',
            '75086',
            '75088',
            '75089',
            '75093',
            '75094',
            '75097',
            '75098',
            '75099',
            '75101',
            '75104',
            '75106',
            '75115',
            '75116',
            '75119',
            '75120',
            '75121',
            '75123',
            '75125',
            '75134',
            '75137',
            '75138',
            '75141',
            '75146',
            '75149',
            '75150',
            '75152',
            '75154',
            '75159',
            '75164',
            '75165',
            '75166',
            '75167',
            '75168',
            '75172',
            '75180',
            '75181',
            '75182',
            '75185',
            '75187',
            '75201',
            '75202',
            '75203',
            '75204',
            '75205',
            '75206',
            '75207',
            '75208',
            '75209',
            '75210',
            '75211',
            '75212',
            '75214',
            '75215',
            '75216',
            '75217',
            '75218',
            '75219',
            '75220',
            '75221',
            '75222',
            '75223',
            '75224',
            '75225',
            '75226',
            '75227',
            '75228',
            '75229',
            '75230',
            '75231',
            '75232',
            '75233',
            '75234',
            '75235',
            '75236',
            '75237',
            '75238',
            '75240',
            '75241',
            '75242',
            '75243',
            '75244',
            '75246',
            '75247',
            '75248',
            '75249',
            '75250',
            '75251',
            '75252',
            '75253',
            '75254',
            '75260',
            '75261',
            '75262',
            '75263',
            '75264',
            '75265',
            '75266',
            '75267',
            '75270',
            '75275',
            '75277',
            '75283',
            '75284',
            '75285',
            '75287',
            '75301',
            '75303',
            '75312',
            '75313',
            '75315',
            '75320',
            '75326',
            '75336',
            '75339',
            '75342',
            '75354',
            '75355',
            '75356',
            '75357',
            '75358',
            '75359',
            '75360',
            '75367',
            '75368',
            '75370',
            '75371',
            '75372',
            '75373',
            '75374',
            '75376',
            '75378',
            '75379',
            '75380',
            '75381',
            '75382',
            '75389',
            '75390',
            '75391',
            '75392',
            '75393',
            '75394',
            '75395',
            '75397',
            '75398',
            '75407',
            '75454',
            '76001',
            '76002',
            '76003',
            '76004',
            '76005',
            '76006',
            '76007',
            '76008',
            '76009',
            '76010',
            '76011',
            '76012',
            '76013',
            '76014',
            '76015',
            '76016',
            '76017',
            '76018',
            '76019',
            '76020',
            '76021',
            '76022',
            '76028',
            '76031',
            '76033',
            '76034',
            '76035',
            '76036',
            '76039',
            '76040',
            '76041',
            '76044',
            '76048',
            '76049',
            '76050',
            '76051',
            '76052',
            '76053',
            '76054',
            '76058',
            '76059',
            '76060',
            '76061',
            '76063',
            '76064',
            '76065',
            '76082',
            '76084',
            '76085',
            '76086',
            '76087',
            '76088',
            '76092',
            '76093',
            '76094',
            '76095',
            '76096',
            '76097',
            '76098',
            '76099',
            '76101',
            '76102',
            '76103',
            '76104',
            '76105',
            '76106',
            '76107',
            '76108',
            '76109',
            '76110',
            '76111',
            '76112',
            '76113',
            '76114',
            '76115',
            '76116',
            '76117',
            '76118',
            '76119',
            '76120',
            '76121',
            '76122',
            '76123',
            '76124',
            '76126',
            '76127',
            '76129',
            '76130',
            '76131',
            '76132',
            '76133',
            '76134',
            '76135',
            '76136',
            '76137',
            '76140',
            '76147',
            '76148',
            '76150',
            '76155',
            '76161',
            '76162',
            '76163',
            '76164',
            '76166',
            '76177',
            '76179',
            '76180',
            '76181',
            '76182',
            '76185',
            '76191',
            '76192',
            '76193',
            '76195',
            '76196',
            '76197',
            '76198',
            '76199',
            '76201',
            '76202',
            '76203',
            '76204',
            '76205',
            '76206',
            '76207',
            '76208',
            '76209',
            '76210',
            '76226',
            '76227',
            '76244',
            '76247',
            '76248',
            '76249',
            '76258',
            '76259',
            '76262',
            '76266',
            '76439',
            '76476',
            '76485',
            '76623',
            '76651',
            '76670'
        );

        $zip_value = rgar( $value, $field->id . '.5' );

        if ( ! in_array( $zip_value, $acceptable_zips ) ) {
            $result['is_valid'] = false;
            $result['message']  = 'Zip validation failed. The entered zip is not in our service area.';
        }
    }

    return $result;
}

add_filter( 'gform_field_value_your_parameter', 'my_custom_population_function' );
function my_custom_population_function( $value ) {
    return 'boom!';
}

// Pre-populate form fields from previous page
add_filter( 'gform_pre_render_1', 'populate_html' );
function populate_html( $form ) {
    // this is a 2-page form with the data from page one being displayed in an html field on page 2
    $current_page = GFFormDisplay::get_current_page( $form['id'] );
    $html_content = "The information you have submitted is as follows:<br/><ul>";
    if ( $current_page == 2 ) {
        foreach ( $form['fields'] as &$field ) {
            // gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id != 6 && $field->type != 'page' ) {
                // see if this is a complex field (will have inputs)
                if ( is_array( $field->inputs ) ) {
                    // this is a complex fieldset (name, adress, etc.) - get individual field info
                    // get field's label and put individual input information in a comma-delimited list
                    $html_content .= '<li>' .$field->label . ' - ';
                    $num_in_array = count( $field->inputs );
                    $counter = 0;
                    foreach ( $field->inputs as $input ) {
                        $counter++;
                        // get name of individual field, replace period with underscore when pulling from post
                        $input_name = 'input_' . str_replace( '.', '_', $input['id'] );
                        $value = rgpost( $input_name );
                        $html_content .= $input['label'] . ': ' . $value;
                        if ( $counter < $num_in_array ) {
                            $html_content .= ', ';
                        }
                    }
                    $html_content .= "</li>";
                } else {
                    // this can be changed to be a switch statement if you need to handle each field type differently
                    // get the filename of file uploaded or post image uploaded
                    if ( $field->type == 'fileupload' || $field->type == 'post_image' ) {
                        $input_name = 'input_' . $field->id;
                        // before final submission, the image is stored in a temporary directory
                        // if displaying image in the html, point the img tag to the temporary location
                        $temp_filename = RGFormsModel::get_temp_filename( $form['id'], $input_name );
                        $uploaded_name = $temp_filename['uploaded_filename'];
                        $temp_location = RGFormsModel::get_upload_url( $form['id'] ) . '/tmp/' . $temp_filename['temp_filename'];
                        if ( !empty( $uploaded_name ) ) {
                            $html_content .= '<li>' . $field->label . ': ' . $uploaded_name . "<img src='" . $temp_location . "' height='200' width='200'></img></li>";
                        }
                    } else {
                        // get the label and then get the posted data for the field (this works for simple fields only - not the field groups like name and address)
                        $field_data = rgpost('input_' . $field->id );
                        if ( is_array( $field_data ) ){
                            // if data is an array, get individual input info
                            $html_content .= '<li>' . $field->label . ': ';
                            $num_in_array = count( $field_data );
                            $counter = 0;
                            foreach ( $field_data as $data ) {
                                $counter++;
                                $html_content .= print_r( $data, true );
                                if ( $counter < $num_in_array ) {
                                    $html_content .= ', ';
                                }
                            }
                            $html_content .= '</li>';
                        }
                        else {
                            $html_content .= '<li>' . $field->label . ': ' . $field_data . '</li>';
                        }
                    }
                }
            }
        }
        $html_content .= '</ul>';
        // loop back through form fields to get html field (id 17 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            // get html field
            if ( $field->id == 17 ) {
                // set the field content to the html
                $field->content = $html_content;
            }
        }
    }
    // return altered form so changes are displayed
    return $form;
}

 /* Put a unique ID on Gravity Form (single form ID) entries.
----------------------------------------------------------------------------------------*/
add_filter("gform_field_value_uuid", "get_unique");
function get_unique(){
    $prefix = "CAP-"; // update the prefix here
    do {
        $unique = mt_rand();
        $unique = substr($unique, 0, 8);
        $unique = $prefix . $unique;
    } while (!check_unique($unique));
    return $unique;
}
function check_unique($unique) {
    global $wpdb;
    $table = $wpdb->prefix . 'uniqueID';
    $form_id = 1; // update to the form ID your unique id field belongs to
    $field_id = 24; // update to the field ID your unique id is being prepopulated in
    $result = $wpdb->get_var("SELECT value FROM $table WHERE form_id = '$form_id' AND field_number = '$field_id' AND value = '$unique'");
    if(empty($result))
        return true;
    return false;
}

// Send form data after submission to Sitelink API
add_action( 'gform_after_submission_2', 'createTenant', 10, 2 );
function createTenant( $entry, $form ) {

// DEMO API credentials for SiteLink
// define( 'SITELINK_URL', "https://api.smdservers.net/CCWs_3.5/CallCenterWs.asmx?WSDL");
// define( 'SITELINK_CORP_CODE', "CCTST" );
// define( 'SITELINK_LOC_CODE', "Demo" );
// define( 'SITELINK_CORP_LOGIN', "Administrator:::WARRENDOUGLAS67D8THJ" );
// define( 'SITELINK_CORP_PASS', "Demo" );

// Live API credentials for SiteLink
define( 'SITELINK_URL', "https://api.smdservers.net/CCWs_3.5/CallCenterWs.asmx?WSDL");
define( 'SITELINK_CORP_CODE', "CSZY" );
define( 'SITELINK_LOC_CODE', "L001" );
define( 'SITELINK_CORP_LOGIN', "ChaseD:::BMHTRANSPORT9C4BW6ME" );
define( 'SITELINK_CORP_PASS', "Capsule2018$" );

// Grabs form values from Gravity Forms based on field ID, to send to API
$body = array(
    'gf_firstname' => rgar( $entry, '12' ), // 12 for production
    'gf_lastname' => rgar( $entry, '13' ), // 13 for production
    'gf_address1' => rgar( $entry, '22.1' ),
    'gf_city' => rgar( $entry, '22.3' ),
    'gf_state' => rgar( $entry, '22.4' ),
    'gf_zip' => rgar( $entry, '19' ), // Starting Zip. May need to change to Ending Zip
    'gf_phone' => rgar( $entry, '18' ),
    'gf_email' => rgar( $entry, '14' ),
    'gf_dateNeeded' => rgar( $entry, '44' ),
    'gf_storageTypeStore' => rgar( $entry, '31' ),
    'gf_storageTypeMoveBoth' => rgar( $entry, '41' ),
    'gf_monthsNeeded' => rgar( $entry, '17' ),
    'gf_quoteID' => rgar( $entry, '32' ),
    'gf_dateOfQuote' => rgar( $entry, '40' ),
    'gf_notes' => rgar( $entry, '73' ),
    'gf_ccType' => rgar( $entry, '5.4' ),
    'gf_ccCVV' => rgar( $entry, '5.3' ),
    // 'gf_differentBilling' => rgar( $entry, '23.1' ),
    'gf_differentBillingAddress' => rgar( $entry, '24.1' ),
    'gf_differentBillingZip' => rgar( $entry, '24.5' ),
    // 'gf_ccNumb' => rgar( $entry, '1.1' ),
    // 'gf_ccExpirationMonth' => rgar( $entry, '1.2_month' ),
    // 'gf_ccExpirationYear' => rgar( $entry, '1.2_year' ),
    // 'gf_ccCardHolderName' => rgar( $entry, '1.5' ),
);

// If "use different billing address" is checked, use that address instead
if (empty($body["gf_differentBillingAddress"])){
    $addressStreet = $body["gf_address1"];
} else{
    $addressStreet = $body["gf_differentBillingAddress"];
}

// If "use different billing address" is checked, use that zipcode instead
if (empty($body["gf_differentBillingZip"])){
    $billingZip = $body["gf_zip"];
} else{
    $billingZip = $body["gf_differentBillingZip"];
}

function get_creditcard_field($form){
    $fields = GFCommon::get_fields_by_type($form, array("creditcard"));
    return empty($fields) ? false : $fields[0];
}
$card_field = get_creditcard_field($form);
$card_number = rgpost("input_{$card_field["id"]}_1");
$expiration_date = rgpost("input_{$card_field["id"]}_2");
$cvv = rgpost("input_{$card_field["id"]}_3");
$expire_month = $expiration_date[0];

$numMonth = $expire_month;
$num_padded = sprintf("%02d", $numMonth);
$expire_month = $num_padded;

$expire_year = $expiration_date[1];
$card_name = rgpost("input_{$card_field["id"]}_5");
// $card_type = rgpost("input_{$card_field["id"]}_4");
// $security_code = rgpost("input_{$card_field["id"]}_3");
// $cc_detail_string =  "$card_number" ;
$encoded_cc_detail_string = base64_encode($card_number); // base 64 is not encryption but only encoding

// echo "<br /><br />card_type: " . $body["gf_ccType"] . "<br />";
// echo "card_number: ". $card_number . "<br />";
// echo "card_type: ". $card_type . "<br />";
// echo "expire_month: ". $expire_month . "<br />";
// echo "expire_year: ". $expire_year . "<br />";
// echo "security_code: ". $security_code . "<br />";
// echo "card_name: ". $card_name . "<br />";

$TenantNotes = "Quote ID: ".$body["gf_quoteID"]."\n---------------------\Date of Quote: ".$body["gf_dateOfQuote"]."\n---------------------\nLocation (Store): ".$body["gf_storageTypeStore"]."\n---------------------\nLocation (Move/Both): ".$body["gf_storageTypeMoveBoth"]."\n---------------------\nCC info.\n---------------------\nCard Type: ".$body["gf_ccType"]."\nCard Number: ".$card_number."\nCard Expiry: ".$expire_month."/".$expire_year."\nCard CVV: ".$cvv."\n---------------------\nNotes:\n".$body["gf_notes"];

$client = new SoapClient( SITELINK_URL );
$params->sCorpCode = SITELINK_CORP_CODE;
$params->sLocationCode = SITELINK_LOC_CODE;
$params->sCorpUserName = SITELINK_CORP_LOGIN;
$params->sCorpPassword = SITELINK_CORP_PASS;
$params->sFName = $body["gf_firstname"];
$params->sLName = $body["gf_lastname"];
$params->sAddr1 = $body["gf_address1"];
$params->sCity = $body["gf_city"];
$params->sRegion = $body["gf_state"];
$params->sPostalCode = $body["gf_zip"];
$params->sPhone = $body["gf_phone"];
$params->sEmail = $body["gf_email"];
$params->bCommercial = false;
$params->bCompanyIsTenant = false;
$params->dDOB = "1700-01-01T00:00:00";
$params->sTenNote = $TenantNotes;

$params->storageTypeStore = $body["gf_storageTypeStore"];
$params->storageTypeMoveBoth = $body["gf_storageTypeMoveBoth"];
$params->monthsNeeded = $body["gf_monthsNeeded"];
$params->userComment = $body["gf_notes"];

try
{
    $units = $client->TenantNewDetailed_v2($params);
	$result = $units->TenantNewDetailed_v2Result;
    $ResultArr = new SimpleXMLElement($result->any);

    $Ret_Code = $ResultArr->NewDataSet->RT->Ret_Code; // Stores return code from API response
    $Message = $ResultArr->NewDataSet->RT->Ret_Msg; // Stores message from API response

    $Ret_Code_asInteger = (int) $Ret_Code;

    // If return code is successful, store TenantID and sAccessCode, and continue to reservation API call
    if ( $Ret_Code_asInteger == 1 ){
        $TenantID = $ResultArr->NewDataSet->Tenants->TenantID;
        $AccessCode	= $ResultArr->NewDataSet->Tenants->sAccessCode;
        $SiteLinkUnitID	= 26728; // SiteLink unit id: 26728 for production

        // $Notes .= "Location (Store): ".$body["gf_storageTypeStore"]."\n";
        // $Notes .= "Location (Move/Both): ".$body["gf_storageTypeMoveBoth"]."\n";
		// $Notes .= "Month Needed: ".$body["gf_monthsNeeded"]."\n";
        // $Notes .= "User Comment: ".$body["gf_notes"]."\n";

        $Notes .= "Quote ID: ".$body["gf_quoteID"]."\n---------------------\nDate of Quote: ".$body["gf_dateOfQuote"]."\n---------------------\nLocation (Store): ".$body["gf_storageTypeStore"]."\n---------------------\nLocation (Move/Both): ".$body["gf_storageTypeMoveBoth"]."\n---------------------\nMonths Needed: ".$body["gf_monthsNeeded"]."\n---------------------\nCC info.\n---------------------\nCard Type: ".$body["gf_ccType"]."\nCard Number: ".$card_number."\nCard Expiry: ".$expire_month."/".$expire_year."\nCard CVV: ".$cvv."\n---------------------\nNotes:\n".$body["gf_notes"];

        $client2 = new SoapClient( SITELINK_URL );
        $params2->sCorpCode = SITELINK_CORP_CODE;
        $params2->sLocationCode = SITELINK_LOC_CODE;
        $params2->sCorpUserName = SITELINK_CORP_LOGIN;
        $params2->sCorpPassword = SITELINK_CORP_PASS;
        $params2->sTenantID = $TenantID;
        $params2->sUnitID = $SiteLinkUnitID; // $SiteLinkUnitID or 37487 for testing
        $params2->dNeeded = $body["gf_dateNeeded"]."T00:00:00"; // 2020-12-12T00:00:00 is expected format
        $params2->sComment = $Notes;
        $params2->iSource = 5; // 1-call center, 5-website
        $params2->QTRentalTypeID = 2; // 2-reservation, 1-quote
        $params2->iInquiryType = 2; // 0-unknown, 1-email, 2-web, 3-phone, 4-walkin

        $units2	= $client2->ReservationNewWithSource_v2($params2);
		$result2 = $units2->ReservationNewWithSource_v2Result;
        $ResultArr2 = new SimpleXMLElement($result2->any);

        $Ret_Code2 = $ResultArr2->NewDataSet->RT->Ret_Code;
        $Ret_Code2_asInteger = (int) $Ret_Code2;

        $Message2 = $ResultArr2->NewDataSet->RT->Ret_Msg;

        // If return code is successful (positive integer, according to API docs PDF), store iWaitingListID and iGlobalWaitingNum, and continue to ReservationFeeAddWithSource API call
        if ( $Ret_Code2_asInteger > 0 ){
            $WaitingListID = $Ret_Code2;
            $GlobalWaitingNumber = $Message2;
            $WaitingListID_asInteger = (int) $WaitingListID; // converts WaitingListID object to integer

            // SiteLink needs the card type stored as an integer, so we convert
            $CardTypeID = "";
            if ( $body["gf_ccType"] == "Visa" ){
                $CardTypeID	= 1273;
            }
            else if ( $body["gf_ccType"] == "MasterCard" ){
                $CardTypeID	= 1272;
            }
            else if ( $body["gf_ccType"] == "American Express" ){
                $CardTypeID	= 1274;
            }
            else if( $body["gf_ccType"] == "Discover" ){
                $CardTypeID	= 1275;
            }

            $CCExpDate = strtotime($expire_month."/1/".$expire_year);
            $CardExpDate = $expire_year."-".$expire_month."-".date("t",$CCExpDate)."T00:00:00";

            // echo "expir: ".$CardExpDate;

            $client3 = new SoapClient( SITELINK_URL );
            $params3->sCorpCode = SITELINK_CORP_CODE;
            $params3->sLocationCode = SITELINK_LOC_CODE;
            $params3->sCorpUserName = SITELINK_CORP_LOGIN;
            $params3->sCorpPassword = SITELINK_CORP_PASS;
            // $params3->iTenantID = $TenantID;
            $params3->iWaitingID = $WaitingListID_asInteger;
            $params3->iCreditCardTypeID = $CardTypeID; // 1272 = MasterCard, 1273 = VISA, 1274 = American Express, 1275 = Discover
            $params3->sCreditCardNum = $card_number;
            // $params3->sCreditCardCVV = $body["gf_ccCVV"];
            $params3->dCredtiCardExpir = $CardExpDate;
            $params3->sCreditCardHolderName = $card_name;
            $params3->sCreditCardStreet = $addressStreet; // logic addressed above
            $params3->sCreditCardZip = $billingZip; // logic addressed above
            // $params3->bTestMode = true; // True: the credit card will not be processed but SiteLink will process the payment | False: the credit card will be processed and SiteLink will process the payment
            // $params3->iSource = 10; // 3-Call Center, 10-Website

            $units3	= $client3->ReservationBillingInfoUpdate($params3); // ReservationFeeAddWithSource was previous
			$result3 = $units3->ReservationBillingInfoUpdateResult;
            $ResultArr3 = new SimpleXMLElement($result3->any);

            $Ret_Code3 = $ResultArr3->NewDataSet->RT->Ret_Code; // Stores return code from API response
            $Message3 = $ResultArr3->NewDataSet->RT->Ret_Msg; // Stores message from API response

            $Ret_Code3_asInteger = (int) $Ret_Code3;

            if ( $Ret_Code3_asInteger > 0 ){
                // Successful reservation
            } else {
                $SiteLinkError	= "<p class='center'>" . "Unable to process your credit card at this time due to following error:<br>" . "Error Code: " . $Ret_Code3 . ": " . $Message3 . "<br />Your reservation hold details have been sent to us however.</p>";
                echo $SiteLinkError;
            }

        }else {
            $SiteLinkError	= "<p class='center'>" . "Unable to process your reservation at this time due to following error:<br>" . "Error Code: " . $Ret_Code2 . ": " . $Message2 . "<br />Your reservation hold details have been sent to us however.</p>";
            echo $SiteLinkError;
        };
    }
    else {
        $SiteLinkError	= "<p class='center'>" . "Unable to process your reservation at this time due to following error:<br>"  . "Error Code " . $Ret_Code . ": " . $Message . "<br />Your reservation hold details have been sent to us however.</p>";
        echo $SiteLinkError;
    }

    // var_dump($ResultArr);
    return $ResultArr;

}
catch (Exception $e ) {
    // $errorMSG = GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $Message, true ) );
    die( 'Error: '.$e->getMessage().'<br>'.$e );
}

echo "This is the result: " . $htmlentities($ResultArr);
}

// END Gravity Forms customizations

// Adds option functionality to theme via ACF
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'General Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

	// acf_add_options_sub_page(array(
	// 	'page_title' 	=> 'Header Settings',
	// 	'menu_title'	=> 'Header',
	// 	'parent_slug'	=> 'theme-general-settings',
	// ));

	// acf_add_options_sub_page(array(
	// 	'page_title' 	=> 'Theme Footer Settings',
	// 	'menu_title'	=> 'Footer',
	// 	'parent_slug'	=> 'theme-general-settings',
    // ));

    // acf_add_options_sub_page(array(
	// 	'page_title' 	=> 'Sitelink Settings',
	// 	'menu_title'	=> 'Sitelink',
	// 	'parent_slug'	=> 'theme-general-settings',
	// ));

}