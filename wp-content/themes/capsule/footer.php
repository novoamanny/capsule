<?php
/**
 * The template for displaying the footer.
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */
?>
<footer>
    <div class="container flex">
        <div class="grid4 brand">
            <?php if(get_field('logo', 'option')): ?>
            <a href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo the_field('logo', 'option'); ?>"
                    class="logo" alt="CAPSULE logo" /></a>
            <?php else: ?>
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <?php echo get_option('blogname'); ?>
            </a>
            <?php endif; ?>
            <p>*Pods<span class="tiny">®</span> is a federally registered trademark of PODS Enterprises, LLC. CAPSULE is
                not sponsored by, or affiliated with any of companies referenced herein.</p>
        </div>
        <div class="grid4 links flex">
            <?php wp_nav_menu(array('theme_location' => 'footer_column_1', 'menu_class' => 'sitemap', 'container' => false, 'depth' => '1')); ?>
            <?php wp_nav_menu(array('theme_location' => 'footer_column_2', 'menu_class' => 'sitemap', 'container' => false, 'depth' => '1')); ?>
        </div>
        <div class="contact">
            <a href="/get-a-quote" class="button white">Get a Quote</a>
            <div class="text">
                <span>Call Us At</span>
                <?php if(get_field('phone', 'option')): ?><a class="telephone"
                    href="tel:<?php echo the_field('phone', 'option'); ?>">
                    <?php echo the_field('phone', 'option'); ?>
                </a>
                <?php endif; ?><br />
                Office Hours: M-F 8am-5pm
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="container flex">
            <a href="/privacy">
                <div class="left">
                    ©
                    <?php echo date("Y"); ?> CAPSULE Moving and Storage Containers. All Rights Reserved.
                </div>
            </a>
            <div class="right">
                <a href="https://www.facebook.com/DFWcapsule"><img
                        src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/social/facebook.svg"
                        alt="facebook logo" /></a>
                <a href="https://www.instagram.com/dfw_capsule/"><img
                        src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/social/instagram.svg"
                        alt="instagram logo" /></a>
                <a href="https://www.youtube.com/channel/UC8zvwEWC_bTFw7Iz7dsZ2rQ?view_as=subscriber"><img
                        src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/social/youtube.svg"
                        alt="youtube logo" /></a>
                <a
                    href="https://www.google.com/maps/place/Capsule+Portable+Self+Storage+Containers/@32.7400275,-97.5165477,9z/data=!3m1!4b1!4m5!3m4!1s0x864e412da2f698e3:0xcbaca2e7395b912c!8m2!3d32.774451!4d-97.1280442"><img
                        src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/social/googlemaps.svg"
                        alt="google maps logo" /></a>
            </div>
        </div>
    </div>
</footer>

<div class="windowtop"></div>

<?php wp_footer(); ?>
<script src="<?php echo get_template_directory_uri(); ?>/owlcarousel/owl.carousel.min.js"></script>
<script>
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        dots: false,
        center: true,
    });
});
</script>
<!-- Google Tag Manager (noscript) -->
<script>
$(document).ready(function() {
    $(".owl-nav .owl-prev span").html(
        "<img class='' src='<?php echo get_stylesheet_directory_uri(); ?>/dist/images/arrow-left.png' />")
});
$(document).ready(function() {
    $(".owl-nav .owl-next span").html(
        "<img class='' src='<?php echo get_stylesheet_directory_uri(); ?>/dist/images/arrow-right.png' />")
});
</script>

<!-- End Google Tag Manager (noscript) -->
</body>

</html>