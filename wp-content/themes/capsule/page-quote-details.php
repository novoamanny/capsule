<?php
/**
 * Template Name: Quote Details
 */
get_header();
?>
<div id="main-content">

    <div class="title-header flex">
        <div class="text">
            <h1>
                <span>Choose CAPSULE Portable Storage Containers</span>
                <?php if (isset($_GET['direct'])) {
          // Check URL for parameter. If it exists, store it into variable, and change page title based on it
          $galleryVar = $_GET['direct'];
          echo "Quote Details";
        } else {
          // URL parameter does not exist, and implies the the quote form was not filled out, so not quote details will exist on the page
          echo "Reservation";
        }
        ?>

            </h1>
        </div>
        <div class="image animatedParent animateOnce">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/capsule-disc-icon.png"
                class="icon animated fadeInDown" alt="Capsule" />
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
                <div class="noscriptmsg center" style="padding-bottom: 5%;">
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

    <div class="simple-get-a-quote">
        <div class="container">
            <a href="/get-a-quote" class="button">Get a Quote</a>
        </div>
    </div>

    <div class="testimonial">
        <div class="flex">
            <div class="item">
                <p class="text">I always like to support small businesses and after using Capsule portable containers I
                    highly
                    recommend you support them as well! The scheduling was easy, the drop off and pick up process was a
                    piece of
                    cake. The Capsule arrived very clean and smelled fresh. Give them a call if you need portable
                    storage!</p>
                <p class="author">— R. Timms September 2023</p>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();