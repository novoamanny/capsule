<?php
/**
 * Template Name: Contact
 */
get_header();
?>
<div id="main-content">

    <div class="title-header flex">
        <div class="text">
            <h1>
                <span>Keep in Touch</span>
                Contact Capsule
            </h1>
        </div>
        <div class="image animatedParent animateOnce">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/house-disc-2.png"
                class="icon animated fadeInDown" alt="CAPSULE truck dropping off" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                alt="Capsule Logo" />
        </div>
    </div>


    <div class="why-capsule options contact">
        <h2 class="center">Contact Us</h2>
        <h3 class="center">Call Us : 817-517-5802</h3>
        <h3 class="center">3509 N Main Cleburne, TX 76033</h3>
        <div class="container">
            <?php if (have_posts()):
                while (have_posts()):
                    the_post(); ?>
            <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                <div class="content">
                    <?php if (has_post_thumbnail()): ?>
                    <a href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail(); ?>
                    </a>
                    <?php endif; ?>
                    <?php the_content(); ?>
                </div>
            </article>
            <?php endwhile; ?>
            <?php else: ?>
            <div class="content">
                <h2>Not Found</h2>
            </div>
            <?php endif; ?>
        </div>
    </div>

    <div class="simple-get-a-quote">
        <div class="container">
            <a href="/get-a-quote" class="button">Get a Quote</a>
        </div>
    </div>

    <div class="testimonial">
        <div class="flex">
            <div class="item">
                <p class="text">Capsule was the best I ever used and I will never use any other. Perfect size container,
                    clean, secure, weather tight and had equipment that could get it in and out of a tight area. Highly
                    recommend this Company. So friendly and responsive!</p>
                <p class="author">— K. Whitney August 2023</p>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();