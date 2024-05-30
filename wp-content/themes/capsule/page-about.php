<?php
/**
 * Template Name: About
 */
get_header();
?>
<div id="main-content">

    <div class="title-header flex">
        <div class="text">
            <h1>
                Capsule
                <span> Portable Storage Containers for Rent in Dallas/Fort Worth</span>
            </h1>
        </div>
        <div class="image animatedParent animateOnce" data-sequence="300">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/about-small-container.png"
                class="icon about-icon-1 animated fadeInDown" data-id="1" alt="Capsule" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/about-tree1.png"
                class="icon about-icon-2 animated fadeInDown" data-id="2" alt="Capsule" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/about-tree2.png"
                class="icon about-icon-3 animated fadeInDown" data-id="3" alt="Capsule" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                alt="Capsule Logo" />
        </div>
    </div>

    <!-- 
    <div class="about-capsule covid">
        <div class="about-capsule graybox">
        <h2 class="center">An Essential Business<br />During Covid-19</h2>
        <p>The safety of our customers and drivers is a priority. Learn more about how we’re responding to COVID-19.</p>
        
        <div class="button-set center">
            <a href="/covid" class="button">Covid-19 Update</a>
        </div>
        </div>
    </div> -->

    <div class="about-capsule locations-container">
        <div class="locations">
            <h2 class="center">Texas Locations Served</h2>
            <p>CAPSULE provides simplistic moving and storage solutions. We serve all of DFW, specifically the following
                counties:</p>
            <ul>
                <li>Tarrant</li>
                <li>Denton</li>
                <li>Johnson</li>
                <li>Collin</li>
                <li>Dallas</li>
                <li>Parker</li>
                <li>Ellis</li>
            </ul>
            <p>We may not be able to provide service outside of these areas.</p>
        </div>
    </div>

    <div class="cta-quote flex">
        <div class="text item">
            <h2>Moving & Storage Solutions that Meet Expectations</h2>
            <p>We are not a national company or a franchise. DFW is home to the one and only CAPSULE. You can visit us
                at the office, located south of Ft. Worth, or call anytime. Give a native Texas company a shot, and we
                won’t disappoint! We care about making customers happy. You won’t get a call center out of state or have
                unexpected charges pop up. Containers are clean, and the service will be of the highest quality. Check
                out our reviews.</p>
        </div>
    </div>

    <div class="about-capsule company-photo-container">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/AboutPage_02.jpg" class="company-photo"
            alt="Capsule team members" />
    </div>

    <!-- <div class="cta-quote flex">
        <div class="text item center">
            <h2>Not sure how you’ll use it yet?</h2>
            <p>No problem. Pricing is straight forward and modeled for the change in your needs.</p>
            <a href="/get-a-quote" class="button white">Get a Quote</a>
        </div>
        <div class="image item"></div>
    </div> -->

    <!-- <div class="specs">
        <div class="container">
            <h2 class="center">The Container Specs</h2>
            <div class="flex">
                <div class="item image grid7">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/capsule-large.png" alt="Capsule example" />
                </div>
                <div class="item text grid5">
                    <p>
                    All CAPSULE containers measure 8’ x 16’ and will hold a small house or a 2- or 3-bedroom apartment, approximately. If you plan to have your contents moved in a CAPSULE container, the weight may not exceed 6,000 lbs.
                    </p>
                    <ul>
                        <li>Steel Roof</li>
                        <li>Steel Walls</li>
                        <li>Easy Open, Swing Doors</li>
                    </ul>
                </div>
            </div>
            <div class="center">
                <a href="/get-a-quote" class="button">Get a Quote</a>
            </div>
        </div>
    </div> -->

    <!-- <div class="compare">
        <div class="container">
            <h2 class="center">See How CAPSULE Compares</h2>
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
                    LET CAPSULE DRIVE
                </div>

                <div class="item cap green-1 grid5">
                    PACK AT YOUR OWN PACE
                </div>
                <div class="item other gray-1 grid7">
                    YOU DRIVE A LARGE TRUCK OR MAKE MULTIPLE TRIPS
                </div>

                <div class="item cap green-2 grid5">
                    PACK UP INTO TRUCK
                </div>
                <div class="item other gray-2 grid7">
                    RUSH TO DO IN ONE DAY AND ASK FRIENDS FOR HELP
                </div>

                <div class="item cap green-1 grid5">
                    SIMPLE, STRAIGHT-FORWARD PRICING
                </div>
                <div class="item other gray-1 grid7">
                    NICKLE & DIMED WITH VAGUE CONTRACTS AND HIGH RISK
                </div>
            </div>
        </div>
    </div> -->

    <div class="simple-get-a-quote">
        <div class="container">
            <a href="/get-a-quote" class="button">Get a Quote</a>
        </div>
    </div>

    <div class="testimonial">
        <div class="flex">
            <div class="item">
                <p class="text">The customer service with Capsule is outstanding. I had one contact for ordering and
                    returning 2 Capsules as four separate transactions. The containers were solid, clean, and well taken
                    care of. The delivery team was efficient and professional. I will only use Capsule for any future
                    storage needs.
                </p>
                <p class="author">— K. Grizaffie August 2023</p>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();