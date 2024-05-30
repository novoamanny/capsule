<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 */
get_header();
?>
<div id="wrapper">
    <div class="column grid8">
        <h2>404 - page not found</h2>
        <h3>Oops, the page you are looking for no longer exist.</h3>
        <p>
            You may want to head back to the <a href="<?php echo esc_url(home_url('/')); ?>">homepage</a>.<br />
        </p>
    </div>
    <div class="column grid4">
        <aside>
            <?php get_sidebar(); ?>
        </aside>
    </div> <!-- sidebar -->
    <div class="clear"></div>
</div>
<?php
get_footer();

