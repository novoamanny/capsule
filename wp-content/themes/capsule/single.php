<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 */
get_header();
?>
<div class="title-header flex">
        <div class="text">
            <h1>
                <span>CAPSULE Moving & Portable Storage Containers</span>
                <?php the_title(); ?>
            </h1>
        </div>
        <div class="image animatedParent animateOnce">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/capsule-disc-icon.png" class="icon animated fadeInDown" alt="Capsule" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform" alt="Capsule Logo" />
        </div>
    </div>
<div id="main-content">
    <div class="container">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                <div class="content">
                    <?php if (has_post_thumbnail()) : ?>
                        <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                    <?php endif; ?>
                    <?php the_content(); ?>
                </div>
            </article>
            <script type="application/ld+json"> // SCHEMA.ORG Data
                {
                "@context": "http://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage":{
                "@type":"WebPage",
                "@id":"<?php the_permalink(); ?>"
                },
                "headline": "<?php the_title(); ?>",
                "image": {
                "@type": "ImageObject",
                "url": "<?php the_post_thumbnail_url($schema); ?>",
                "height": 450,
                "width": 696
                },
                "datePublished": "<?php the_time('c') ?>",
                "dateModified": "<?php the_modified_date('c'); ?>",
                "author": {
                "@type": "Organization",
                "name": "<?php if (get_field('schema_name', 'option')) { ?><?php echo the_field('schema_name', 'option'); ?><?php } ?>"
                },
                "publisher": {
                "@type": "Organization",
                "name": "<?php if (get_field('schema_name', 'option')) { ?><?php echo the_field('schema_name', 'option'); ?><?php } ?>",
                "logo": {
                "@type": "ImageObject",
                "url": "<?php if (get_field('logo', 'option')) : ?><?php echo the_field('logo', 'option'); ?><?php else : ?><?php echo get_stylesheet_directory_uri(); ?>/dist/images/capsule-logo.jpg<?php endif; ?>"
                }
                },
                "description": "<?php echo strip_tags(get_the_excerpt()); ?>"
                }
            </script>
        <?php endwhile; ?>
        <?php else : ?>
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
<?php
get_footer();
