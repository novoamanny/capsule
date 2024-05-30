<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 */
get_header();
?>
<div id="main-content">
    <div class="container">
        <h1>Search Results</h1>
        <div class="grid8 column">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <h2 class="page-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                        <div class="content">
                            <?php if (has_post_thumbnail()) : ?>
                                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                            <?php endif; ?>
                            <?php the_excerpt(); ?>
                            <div class="clear"></div>
                        </div>
                    </article>
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
        <div class="grid4 column">
            <aside>
                <?php get_sidebar(); ?>
            </aside>
        </div>
    </div>
</div>
<?php
get_footer();
