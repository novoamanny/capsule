<?php
/**
 * The header for the theme.
 *
 * This is the template that displays all of the <head> section and before the main content area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="facebook-domain-verification" content="yslmxjof46484jwkq23um9foeowxx6" />
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
    <!-- WordPress Stylesheet for Theme Reference -->
    <link rel="apple-touch-icon" sizes="180x180"
        href="<?php echo get_stylesheet_directory_uri(); ?>/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32"
        href="<?php echo get_stylesheet_directory_uri(); ?>/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16"
        href="<?php echo get_stylesheet_directory_uri(); ?>/favicon-16x16.png">
    <link rel="stylesheet" href="https://use.typekit.net/nzw1pgv.css">

    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/owlcarousel/owl.theme.default.min.css">


    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-814873725"></script>
    <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-814873725');
    </script>



    <?php wp_head(); ?>

    <!-- Google Tag Manager -->
    <script>
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-M6KTG34');
    </script>
    <!-- End Google Tag Manager -->

    <!-- Hotjar Tracking Code for CAPSULE -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3711682,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>

</head>

<body <?php body_class('sub'); ?>>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6KTG34" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <header>
        <div class="top">
            <div class="container flex">
                <div class="brand">
                    <?php if (get_field('logo', 'option')) : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>"><img
                            src="<?php echo the_field('logo', 'option'); ?>" class="logo" alt="Capsule logo" /></a>
                    <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>"><?php echo get_option( 'blogname' ); ?></a>
                    <?php endif; ?>
                </div>
                <div class="navwrap">
                    <!--DESKTOP MENU-->
                    <nav class="desktopmenu">
                        <?php wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'navigation')); ?>
                    </nav>
                    <!--MOBILE MENU-->
                    <a id="menu-toggle" class="mobile-menu-toggle" href="#menu">Menu</a>
                    <nav id="menu" class="mobilemenu">
                        <div class="inner">
                            <?php wp_nav_menu(array('theme_location' => 'mobile', 'menu_class' => 'mobile', 'depth' => 1)); ?>
                            <a href="#" class="close">Close</a>
                        </div>
                    </nav>
                </div>
                <div class="cta">
                    <a href="/get-a-quote" class="button white">Get a Quote</a>
                    <?php if( get_field('phone', 'option') ): ?><a class="telephone"
                        href="tel:<?php the_field('phone', 'option'); ?>"><?php the_field('phone', 'option'); ?></a><?php endif; ?>
                </div>
            </div>
        </div>
    </header>