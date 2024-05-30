<?php

/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 */
if (!is_active_sidebar('sidebar-contact')) {
    return;
}
?>
<aside id="contact-sidebar" class="flex">
    <?php dynamic_sidebar('sidebar-contact'); ?>
</aside>