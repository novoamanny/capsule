<?php
/**
 * The blog template file.
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
<div id="main-content">

    <div class="showcase-header flex">
        <div class="text">
            <h1>
                CAPSULE
                <span>Portable Storage Containers</span>
            </h1>
            <p>
                CAPSULEs are 8'x16' moving and storage containers available in the Dallas/Fort Worth area. Use them for
                moving, on-site, or off-site storage purposes. The choice is yours. CAPSULE® is an independent, local,
                and family-owned company.</p>
            <a href="/get-a-quote" class="button white">Get a Quote</a>
        </div>
        <div class="image animatedParent">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/showcase-header-tertiary.png"
                class="stage-filled-2" alt="CAPSULE Logo" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/showcase-header.png"
                class="animated fadeIn slowest stage-filled delay-1500" alt="CAPSULE Logo" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/showcase-header-stage.png"
                class="animated fadeInRightShort stage" alt="CAPSULE Logo" />
            <!-- <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/container-group.png" class="animated fadeInUpShort capsules" data-id='2' alt="CAPSULEs" /> -->
        </div>
    </div>


    <div class="why-capsule flex">
        <div class="item first grid4">
            <a href="#why-capsule" class="animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/truck.png"
                    class="icon animated fadeInDown" alt="CAPSULE Logo" />
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform1.png" class="platform"
                    alt="CAPSULE Logo" />
                <h3>Why CAPSULE?</h3>
            </a>
        </div>
        <div class="item second grid4">
            <a href="/about-capsule" class="animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/house.png"
                    class="icon animated fadeInDown delay-500" alt="CAPSULE Logo" />
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                    alt="CAPSULE Logo" />
                <h3>About CAPSULE</h3>
            </a>
        </div>
        <div class="item third grid4">
            <a href="/capsule-vs-pods" class="animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/commercial-building.png"
                    class="icon animated fadeInDown delay-1000" alt="CAPSULE Logo" />
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform3.png" class="platform"
                    alt="CAPSULE Logo" />
                <h3>CAPSULE vs PODs<span class="tiny">®*</span></h3>
            </a>
        </div>
    </div>
    <div class="cta-focus" id="why-capsule">
        <div class="set">
            <h2>Why CAPSULE</h2>
            <h3>The Benefits of Using CAPSULE&reg; Portable Self-Storage</h3>
            <p>Why use CAPSULE instead of traditional moving services or storage? Consider the value of time,
                flexibility, simplicity, convenience, and peace of mind.</p>
            <ul>
                <li>Only load up one time, rather than packing and unpacking several times.</li>
                <li>Load at ground level instead of lifting items into a truck.</li>
                <li>No need to rush and pack in one or two days.</li>
                <li>Use a container as storage to better stage your house for sale, then use it to move.</li>
                <li>Plans change. CAPSULE is flexible with deliveries and reacts quickly to your needs.</li>
                <li>CAPSULE is cheaper than hiring a full turnkey moving service.</li>
                <li>You know where everything is packed.</li>
                <li>You own the lock.</li>
            </ul>
            <a href="/get-a-quote" class="button">Get a Quote</a>
        </div>
    </div>

    <div class="our-containers">
        <div class="container">
            <h2>Our Moving Storage Containers</h2>
            <div class="flex">
                <div class="item grid4">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/HomePage_01.jpg"
                        alt="CAPSULE example" />
                    <span>Uses small machine to position.</span>
                </div>
                <div class="item grid4">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/HomePage_02.jpg"
                        alt="CAPSULE example" />
                    <span>Made for Texas.</span>
                </div>
                <div class="item grid4">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/HomePage_03.jpg"
                        alt="CAPSULE example" />
                    <span>Holds the contents of a small house.</span>
                </div>
            </div>
            <div class="center">
                <a href="/containers/" class="button">Learn More</a>
            </div>
        </div>
    </div>

    <div class="video home-bg">
        <div class='embed-container'>
            <iframe id="player" width="560" height="315" src="https://www.youtube.com/embed/j7P3aoTfd6M" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h2 id="video-heading">How It Works</h2>
            <button id="play" class="play-btn">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/play-button.png">
            </button>
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
                <p class="text">Absolutely loved doing business with Capsule Portable! Swift scheduling, quick drop off
                    and delivery. Everyone was so pleasant to work with. And price is more than reasonable.</p>
                <p class="author">— S. Torres July 2023</p>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();