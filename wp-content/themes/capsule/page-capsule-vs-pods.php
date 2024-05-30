<?php
/**
 * Template Name: Capsule vs Pods
 */
get_header();
?>
<div id="main-content">
    <div class="title-header flex">
        <div class="text">
            <h1>
                <span>CAPSULE Moving and Portable Self-Storage</span>
                CAPSULE<span class="tiny">®</span> vs. PODS<span class="tiny">®</span>
            </h1>
        </div>
        <div class="image animatedParent animateOnce">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/capsule-disc-icon.png" class="icon animated fadeInDown" alt="CAPSULE" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform" alt="CAPSULE Logo" />
        </div>
    </div>
    <div class="container main">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                    <div class="content">
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                        <?php endif; ?>
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <div class="content">
                <h2>Not Found</h2>
            </div>
        <?php endif; ?>
    </div>
</div>
<?php
get_footer();
