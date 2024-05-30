<?php
/**
 * Template Name: Containers
 */
get_header();
?>
<div id="main-content">

    <div class="title-header flex">
        <div class="text">
            <h1>
                <span>Capsule Moving and Storage Containers</span>
                Containers
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
        <h2 class="center">Experience the Versatility<br /> & Convenience</h2>
        <h3 class="box-partial center">Rent an 8’ x 16’ CAPSULE container for:</h3>
        <div class="flex">
            <div class="item first grid3">
                <a href="#" class="animatedParent animateOnce">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/house-disc-1.png"
                        class="icon animated fadeInDown" alt="Capsule Logo" />
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                        alt="Capsule Logo" />
                    <h3>On-site storage for remodel or restoration</h3>
                </a>
            </div>
            <div class="item second grid3">
                <a href="#" class="animatedParent animateOnce">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/house-disc-2.png"
                        class="icon animated fadeInDown delay-500" alt="Capsule Logo" />
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                        alt="Capsule Logo" />
                    <h3>Moving directly from one house to another</h3>
                </a>
            </div>
            <div class="item third grid3">
                <a href="#" class="animatedParent animateOnce">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/house-disc-3.png"
                        class="icon animated fadeInDown delay-1000" alt="Capsule Logo" />
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                        alt="Capsule Logo" />
                    <h3>Moving from one house to another, with storage in between</h3>
                </a>
            </div>
            <div class="item fourth grid3">
                <a href="#" class="animatedParent animateOnce">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/capsules-disc.png"
                        class="icon animated fadeInDown delay-1500" alt="Capsule Logo" />
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                        alt="Capsule Logo" />
                    <h3>Off-site storage</h3>
                </a>
            </div>
        </div>
        <div class="button-set center">
            <a href="/get-a-quote" class="button">Get a Quote</a>
        </div>
    </div>
    <div class="cta-quote flex">
        <div class="text item center">
            <h2>Not sure how you’ll use it yet?</h2>
            <p>No problem. Pricing is straight forward and modeled for the change in your needs.</p>
            <a href="/get-a-quote" class="button white">Get a Quote</a>
        </div>
        <div class="image item"></div>
    </div>

    <div class="specs">
        <div class="container">
            <h2 class="center">Steel Container Specs</h2>
            <div class="flex">
                <div class="item image grid7">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/container-cutout.png"
                        alt="Capsule example" />
                </div>
                <div class="item text grid5">
                    <p>
                        All CAPSULE containers measure 8’ x 16’ and will hold a small house or a 2- or 3-bedroom
                        apartment, approximately. If you plan to have your contents moved in a CAPSULE container, the
                        weight may not exceed 6,000 lbs.
                    </p>
                    <ul>
                        <li>Steel Roof</li>
                        <li>Steel Walls</li>
                        <li>Easy Open, Swing Doors</li>
                    </ul>
                    <div class="triptych-container">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/ContainerPage_02.jpg"
                            alt="top corner view of a CAPSULE container" />
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/ContainerPage_03.jpg"
                            alt="hand turning a key to a lock on a CAPSULE container" />
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/ContainerPage_04.jpg"
                            alt="an open CAPSULE container on a driveway" />
                    </div>
                </div>
            </div>
            <div class="center">
                <a href="/get-a-quote" class="button">Get a Quote</a>
            </div>
        </div>
    </div>

    <div class="compare">
        <div class="container">
            <h2 class="center">See How CAPSULE Containers Compare</h2>
            <div class="flex">
                <div class="item logo-label grid5">
                    <?php if (get_field('logo', 'option')): ?>
                        <img src="<?php echo the_field('logo', 'option'); ?>" class="logo" alt="Capsule logo" />
                    <?php endif; ?>
                </div>
                <div class="item other-label grid7">
                    The Other Guys
                </div>

                <div class="item cap green-1 grid5">
                    FAMILY OWNED
                </div>
                <div class="item other gray-1 grid7">
                    FRANCHISE OR INTERNATIONALLY OWNED COMPANY
                </div>

                <div class="item cap green-2 grid5">
                    USES SMALL MACHINE TO POSITION
                </div>
                <div class="item other gray-2 grid7">
                    ROLL OFF TRUCK OR LARGE MACHINE
                </div>

                <div class="item cap green-1 grid5">
                    SECURE BARN DOORS
                </div>
                <div class="item other gray-1 grid7">
                    FLIMSY DIFFICULT ROLL-UP DOORS
                </div>

                <div class="item cap green-2 grid5">
                    SOLID CORRUGATED METAL ROOF
                </div>
                <div class="item other gray-2 grid7">
                    PLASTIC OR COMPASITE ROOFS
                </div>

                <div class="item cap green-1 grid5">
                    MADE FOR TEXAS
                </div>
                <div class="item other gray-1 grid7">
                    AIN'T TEXAS
                </div>

                <div class="item cap green-2 grid5">
                    ALL IN DFW
                </div>
                <div class="item other gray-2 grid7">
                    CALL CENTERS
                </div>

                <div class="item cap green-1 grid5">
                    PACK & UNPACK ONE TIME
                </div>
                <div class="item other gray-1 grid7">
                    PACK INTRO TRUCK AND UNPACK SEVERAL TIMES
                </div>

                <div class="item cap green-2 grid5">
                    PACK AT GROUND LEVEL
                </div>
                <div class="item other gray-2 grid7">
                    PACK UP INTO A TRUCK
                </div>

                <div class="item cap green-1 grid5">
                    PACK AT YOUR OWN PACE
                </div>
                <div class="item other gray-1 grid7">
                    RUSH TO DO IT IN ONE DAY AND ASK FRIEND FOR HELP
                </div>

                <div class="item cap green-2 grid5">
                    LET CAPSULE DRIVE
                </div>
                <div class="item other gray-2 grid7">
                    YOU DRIVE A LARGE TRUCK AND MAKE MULTIPLE TRIPS
                </div>

                <div class="item cap green-1 grid5">
                    SIMPLE, STRAIGHT-FORWARD PRICING
                </div>
                <div class="item other gray-1 grid7">
                    NICKLE & DIMED WITH VAGUE CONTRACTS AND HIGH RISK
                </div>
            </div>
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
                <p class="text">
                    If you're looking for mobile storage, look no further. Capsule is locally owned and incredibly easy
                    to work with. From first call to pickup, they ROCK. Forget everybody else, use Capsule!
                </p>
                <p class="author">— D. Steed May 2023</p>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();