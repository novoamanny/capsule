<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 */
get_header();
?>
<div class="title-header flex">
    <div class="text">
        <h1>
            <span>CAPSULE Portable Storage Containers</span>
            Blog
        </h1>
    </div>
    <div class="image animatedParent animateOnce">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/tree-house-truck.png"
            class="icon blog-icon-1 animated fadeInDown" alt="CAPSULE truck next to house" />
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
            alt="Capsule Logo" />
    </div>
</div>
<div id="main-content">
    <div class="container">
        <h2 class="center">Blog Articles</h2>
        <div class="blog-index-grid">
            <?php if (have_posts()):
                while (have_posts()):
                    the_post(); ?>
                    <div class="blog-item-wrapper">
                        <div class="blog-item">
                            <?php if (has_post_thumbnail()): ?>
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail(); ?>
                                </a>
                            <?php endif; ?>
                            <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                                <a href="<?php the_permalink(); ?>">
                                    <h2>
                                        <?php the_title(); ?>
                                    </h2>
                                </a>
                                <div class="content">
                                    <?php the_excerpt(); ?>
                                    <div class="clear"></div>
                                </div>
                                <div class="below-content-wrapper">
                                    <a href="<?php the_permalink(); ?>" class="button read-more">Read More</a>
                                    <div class="post-date">Posted On<br /><span class="post-date-green">
                                            <?php the_date('m-d-Y'); ?>
                                        </span></div>
                                </div>
                            </article>
                        </div>
                    </div>
                <?php endwhile; ?>
            <?php else: ?>
                <div class="content">
                    <h2>Not Found</h2>
                </div>
            <?php endif; ?>
            <?php
            if (function_exists("pagination")) {
                pagination($additional_loop->max_num_pages);
            }
            ?>
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
                <p class="text">We have used Capsule now twice for moving and each time we were extremely pleased! They
                    are super affordable and have excellent customer service! Also, if you’ve never watched them move
                    one of these things, it’s really cool!!</p>
                <p class="author">— H. Beauchamp April 2023</p>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();
