<?php
/**
 * Template Name: How Portable Storage Works
 */
get_header();
?>
<div id="main-content">

    <div class="title-header flex">
        <div class="text">
            <h1>
                How CAPSULE Portable Storage Works
            </h1>
        </div>
        <div class="image animatedParent animateOnce">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/truck.png"
                class="icon animated fadeInDown" alt="Capsule" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                alt="Capsule Logo" />
        </div>
    </div>


    <div class="why-capsule options">
        <h2 class="center">It's AS EASY AS 1-2-3</h2>
        <h3 class="box-partial center"></h3>
        <div class="flex">
            <div class="item first grid3">
                <a href="#" class="animatedParent animateOnce">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/truck-box-tree.png"
                        class="icon animated fadeInDown" alt="CAPSULE truck next to a tree and CAPSULE" />
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                        alt="Capsule Logo" />
                    <h3>Step 1: We Deliver.</h3>
                    <p>Our unique process enables us to place containers exactly where you want them.</p>
                </a>
            </div>
            <div class="item second grid3">
                <a href="#" class="animatedParent animateOnce">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/house-box-tree-2.png"
                        class="icon animated fadeInDown delay-500" alt="CAPSULE container next to house" />
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                        alt="Capsule Logo" />
                    <h3>Step 2: You Pack.</h3>
                    <p>Go as fast or as slow as you like. The container is there for your convenience.</p>
                </a>
            </div>
            <div class="item third grid3">
                <a href="#" class="animatedParent animateOnce">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/truck-box-many.png"
                        class="icon animated fadeInDown delay-1000"
                        alt="CAPSULE truck next to several CAPSULE containers" />
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                        alt="Capsule Logo" />
                    <h3>Step 3: We Move, Leave, or Store It.</h3>
                    <p>Once it’s packed, we can move the container, leave it where it is, or store it for you.</p>
                </a>
            </div>
        </div>
        <div class="button-set center">
            <a href="/get-a-quote" class="button">Get a Quote</a>
        </div>
    </div>

    <div class="video how-it-works-bg">
        <div class='embed-container'>
            <iframe id="player" width="560" height="315" src="https://www.youtube.com/embed/yWqJB3V-sOk" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h2 id="video-heading">How It Works</h2>
            <button id="play" class="play-btn">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/play-button.png">
            </button>
        </div>
    </div>

    <div class="how-much-will-fit-section">
        <h2>How much will fit in a Capsule Portable Storage Container?</h2>
        <h4>All Capsules are 8x16 ft in size.</h4>
        <ul>
            <li>They typically fit the basics of a 3 bedroom 1,200 sqft home.</li>
            <li>It has a weight limit of 6,000lbs of content.</li>
            <li>Don't pack anything flammable, alive, illegal, or hazardous.</li>
            <li>Check our <a href="/rules-and-faq">FAQ page</a> and
                <?php
                $file = get_field('agreement_pdf');
                if ($file): ?>
                    <a href="<?php echo $file['url']; ?>" target="_blank" rel="noopener noreferrer">Lease Agreement</a>
                <?php endif; ?>
                .
            </li>
            <li>Amount you store depends on what it is and how you pack it.</li>
        </ul>

        <div class="button-set center">
            <a href="/get-a-quote" class="button">Get a Quote</a>
        </div>
    </div>

    <div class="video how-to-pack-bg">
        <div class='embed-container'>
            <iframe id="player-2" width="560" height="315" src="https://www.youtube.com/embed/2gueGUlJ0lo"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h2 id="video-heading-2">How To Pack</h2>
            <button id="play-2" class="play-btn">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/play-button.png">
            </button>
        </div>
    </div>

    <div class="testimonial">
        <div class="flex">
            <div class="item">
                <p class="text">Working with capsule made our moving experience a little less stressful. The cost to
                    move capsule to our new location was way more cost effective than using a moving company. Pack at
                    your own pace. The staff was always pleasant and helpful.</p>
                <p class="author">— C. Baroon Oct 2023</p>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();