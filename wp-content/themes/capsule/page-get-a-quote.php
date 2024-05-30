<?php
/**
 * Template Name: Get a Quote
 */
get_header();
?>
<div id="main-content">

    <div class="title-header flex">
        <div class="text">
            <h1>
                <span>Choose CAPSULE Portable Storage Containers</span>
                Get a Quote
            </h1>
        </div>
        <div class="image animatedParent animateOnce">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/truck-tree.png"
                class="icon animated fadeInDown" alt="CAPSULE truck next to tree" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                alt="Capsule Logo" />
        </div>
    </div>


    <div class="why-capsule options">
        <h2 class="center">Moving & storage made easy</h2>
        <?php if (have_posts()):
            while (have_posts()):
                the_post(); ?>
                <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                    <noscript>
                        <style type="text/css">
                            #main-content .content,
                            #main-content .why-capsule h2 {
                                display: none;
                            }
                        </style>
                        <div class="noscriptmsg center">
                            JavaScript is disabled. Please enable JavaScript to view full site.
                        </div>
                    </noscript>
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

    <div class="reasons-to-choose">
        <h2 class="center">Reasons to Choose CAPSULE</h2>
        <div class="reasons-flex-wrapper">
            <div class="container">
                <ul>
                    <li>We are exclusive to the DFW area, so you’ll be supporting a local, family-owned business.</li>
                    <li>Our 8’ x 16’ containers are clean and have a top-of-the-line design.</li>
                    <li>Our loading and unloading process is more navigable than others.</li>
                    <li>Texas-quality service is important to us, and you.</li>
                    <li>CAPSULES hold the contents of a 3-bedroom house or apartment, approximately.</li>
                    <li>Portable storage containers are incredibly convenient and serve a variety of purposes.</li>
                    <li>No term contract is required.</li>
                    <li>Since you provide the lock, you’re the only one with access to the contents.</li>
                    <li>Great customer reviews follow us!</li>
                </ul>
            </div>
            <div class="video how-to-pack-bg">
                <div class="video-container">
                    <iframe id="player" width="560" height="315" src="https://www.youtube.com/embed/AAumaa5kEtA"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                    <button id="play" class="play-btn">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/play-button.png">
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="cta-quote flex">
        <div class="text item">
            <h2>Still Have Questions?</h2>
            <p>Read our <a href="/how-self-storage-containers-work#faq">FREQUENTLY ASKED QUESTIONS</a> or <a
                    href="/contact">GIVE US A CALL!</a></p>
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
                <p class="text">Great communication. So quick and easy to book and get delivered. Would definitely use
                    again.</p>
                <p class="author">— S. Hooper September 2023</p>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();