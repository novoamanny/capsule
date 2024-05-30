<?php
/**
 * Template Name: Rules & FAQ
 */
get_header();
?>
<div id="main-content">

    <div class="title-header flex">
        <div class="text">
            <h1>
                <!-- <span>Rules and FAQ</span> -->
                Rules for renting a Capsule Storage Unit
            </h1>
        </div>
        <div class="image animatedParent animateOnce">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/truck.png"
                class="icon animated fadeInDown" alt="Capsule" />
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/platform2.png" class="platform"
                alt="Capsule Logo" />
        </div>
    </div>

    <div class="testimonial-section">
        <div class="star-container">
            <div class="star star-1 animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/star.png"
                    class="star-img fadeInLeft animated delay-1000" />
            </div>
            <div class="star star-2 animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/star.png"
                    class="star-img fadeInLeft animated delay-750" />
            </div>
            <div class="star star-3 animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/star.png"
                    class="star-img fadeInLeft animated delay-500" />
            </div>
            <div class="star star-4 animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/star.png"
                    class="star-img fadeInLeft animated delay-250" />
            </div>
            <div class="star star-5 animatedParent animateOnce">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/star.png"
                    class="star-img fadeInLeft animated" />
            </div>
        </div>

        <div class="owl-carousel">
            <?php while (the_repeater_field('testimonial_carousel')): ?>
                <div class="testimonial-carousel-item">
                    <div class="quote">
                        <?php the_sub_field('quote_text'); ?>

                        <div class="open-quotemark">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/carousel-left-quote.svg" />
                        </div>
                        <div class="close-quotemark">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/images/carousel-right-quote.svg" />
                        </div>
                    </div>
                    <p class="author">
                        <?php the_sub_field('author'); ?>
                    </p>

                </div>
            <?php endwhile; ?>
        </div>
    </div>

    <div class="cta-quote flex">
        <div class="quote-image-left" title="A container being moved on a house driveway"></div>
        <div class="text item">
            <h2>Rules for Renting a CAPSULE Portable Storage Unit</h2>
            <ul>
                <li>We require individuals to use autopay, a credit card or debit card is required.</li>
                <li>CAPSULE does not prorate. Rent is monthly and begins on the day of delivery.</li>
                <li>Scheduling is per availability; we do not reserve a specific time window.</li>
                <li>DFW CAPSULE does not provide long-distance moves. Check our service area or ask.</li>
                <li>Don't fill the container with more than 6,000 lbs. of contents (or $4,500 worth).</li>
                <li>CAPSULE isn't responsible for the contents. Check with your homeowners/renters' insurance, a 3rd
                    party insurance available upon request.</li>
                <li>CAPSULEs must go ON your property (not the street). Capsule is not responsible for local laws or
                    ordinances.</li>
            </ul>
            <p>
                <?php
                $file = get_field('agreement_pdf');
                if ($file): ?>
                    <a href="<?php echo $file['url']; ?>" target="_blank" rel="noopener noreferrer">
                        <?php the_field('agreement_link_text'); ?>
                    </a>
                <?php endif; ?>
            </p>
        </div>
    </div>

    <div class="faq" id="faq">
        <div class="container">
            <h2 class="center">Frequently Asked Questions</h2>
            <div class="faqs">
                <div class="container">
                    <div class="accordion">
                        <dl>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger is-expanded"
                                        href="#accordion1" aria-expanded="true" aria-controls="accordion1">
                                        What fits in an 8’ x 16’ container?
                                    </a>
                                </dt>
                                <dd id="accordion1" class="accordion-content accordionItem is-expanded"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>The rule of thumb is that the basics of a 3-bedroom house will fit into our
                                            8’ x 16’ container. However, that depends on how good you are at 3D Tetris
                                            (packing). The idea is to pack upward along the walls and across the
                                            ceiling.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion2"
                                        aria-expanded="false" aria-controls="accordion2">
                                        Does CAPSULE do long distance moves?
                                    </a>
                                </dt>
                                <dd id="accordion2" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>No, we do not do out-of-state or long-distance moves. Our typical service
                                            areas include the following Texas counties:</p>
                                        <ul>
                                            <li>Dallas</li>
                                            <li>Tarrant</li>
                                            <li>Collin</li>
                                            <li>Denton</li>
                                            <li>Johnson</li>
                                            <li>Ellis</li>
                                            <li>Parker</li>
                                        </ul>
                                        <p>We have had customers use us for long distance moves by unloading into a
                                            CAPSULE from a truck, because their house was not ready. Or the reverse,
                                            packing into a van or truck out of the CAPSULE when they were ready for
                                            their move.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion3"
                                        aria-expanded="false" aria-controls="accordion3">
                                        Does CAPSULE offer other sizes besides 8’ x 16’?
                                    </a>
                                </dt>
                                <dd id="accordion3" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>No, we only offer the 8’ x 16’ size. Any bigger and people tend to go over
                                            the weight limit of 6,000 lbs. Any smaller, and it isn’t any cheaper.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion4"
                                        aria-expanded="false" aria-controls="accordion4">
                                        Is there a weight limit?
                                    </a>
                                </dt>
                                <dd id="accordion4" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>The CAPSULE can be loaded with 6,000 lbs. of content. We have a digital scale
                                            on our machine that weighs it. Most cars do not weigh 6,000 pounds. There
                                            has not been an issue when people pack household items. The problem can be
                                            what you are packing. Here is a list of items that would raise concern:</p>
                                        <ul>
                                            <li>Large gun safes</li>
                                            <li>Large amounts of paper or books</li>
                                            <li>Loaded toolboxes</li>
                                        </ul>
                                        <p>The weight limit comes from TXDOT requirements on the road, and our system
                                            allows for a larger capacity than what I’ve seen our competitors allow.
                                            Weight limits don’t apply if we are moving an empty container for on-site
                                            storage.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion5"
                                        aria-expanded="false" aria-controls="accordion5">
                                        Is there anything I <span class=emphasize>can’t</span> store in a CAPSULE?
                                    </a>
                                </dt>
                                <dd id="accordion5" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>You can read our master agreement for full details, but here are the big ones
                                            we prohibit:</p>
                                        <ul>
                                            <li>Nothing living</li>
                                            <li>Nothing flammable or combustible</li>
                                            <li>No motorized vehicles (motorbikes or lawn mowers)</li>
                                            <li>No food or anything that can decompose</li>
                                        </ul>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion6"
                                        aria-expanded="false" aria-controls="accordion6">
                                        Is the CAPSULE waterproof?
                                    </a>
                                </dt>
                                <dd id="accordion6" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>To date, we have not had any issue with weather (heat, cold, or rain).</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion7"
                                        aria-expanded="false" aria-controls="accordion7">
                                        Is the CAPSULE storage in a climate-controlled warehouse?
                                    </a>
                                </dt>
                                <dd id="accordion7" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>CAPSULE is not climate controlled. No matter who you use, the best rule of
                                            thumb is to not pack anything in a container you wouldn't keep in your car
                                            at the airport. We are not aware of any portable storage container company
                                            in DFW (big or small) that has a true climate-controlled facility, so if
                                            they say 'yes'… ask them to define climate-controlled. Some of our customers
                                            have chosen to use the CAPSULE to store the bulk of their items, but they
                                            rent a small closet-sized, climate-controlled room for photo albums or
                                            anything they are truly concerned about.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion8"
                                        aria-expanded="false" aria-controls="accordion8">
                                        What type of clearance do you need for delivery?
                                    </a>
                                </dt>
                                <dd id="accordion8" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>You will need an area 9 ft. wide, 9 ft. tall in which to place the container.
                                            We can deliver to alley ways or steep drives.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion9"
                                        aria-expanded="false" aria-controls="accordion9">
                                        How do I lock the container?
                                    </a>
                                </dt>
                                <dd id="accordion9" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>Customers are responsible for locking the container. A standard size padlock
                                            will work. Capsule driver can also provide a lock for a fee and leave you
                                            the keys with prior notice.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion10"
                                        aria-expanded="false" aria-controls="accordion10">
                                        How much notice does CAPSULE need to schedule a move?
                                    </a>
                                </dt>
                                <dd id="accordion10" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>The more time the better, but typically with a 3-business-day notice we can
                                            schedule your container. We do not move on Sundays. Fridays and Saturdays
                                            pack up quickly, so you’ll need to contact us earlier in the week (by
                                            Tuesday at noon, typically, for the following Friday). We never know how
                                            quickly the schedule will fill, so no guarantees.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion11"
                                        aria-expanded="false" aria-controls="accordion11">
                                        Do I have access to CAPSULE in storage?
                                    </a>
                                </dt>
                                <dd id="accordion11" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>Yes, but only during business hours (M-F 8am-5pm) with a 24-hour heads-up, so
                                            we can pull it for you and have it ready. There is no charge for access.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion12"
                                        aria-expanded="false" aria-controls="accordion12">
                                        Do you prorate rent?
                                    </a>
                                </dt>
                                <dd id="accordion12" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>No. Rent is charged monthly, and you are charged the morning of delivery.
                                            Your anniversary is the day we deliver it. That is when you are billed for
                                            the next month’s rent.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion13"
                                        aria-expanded="false" aria-controls="accordion13">
                                        Are my contents insured?
                                    </a>
                                </dt>
                                <dd id="accordion13" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>The customer takes full responsibility for the contents in the container.
                                            Check with your homeowners’ or renters’ insurance. Many cover stored
                                            contents. There are other independent insurance options we can send you
                                            otherwise.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion14"
                                        aria-expanded="false" aria-controls="accordion14">
                                        How long can I keep the CAPSULE?
                                    </a>
                                </dt>
                                <dd id="accordion14" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>You can keep the CAPSULE as long as you keep paying for it. There is no term
                                            contract. Check with your HOA or your city. Some have 30-day rules.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion15"
                                        aria-expanded="false" aria-controls="accordion15">
                                        Does CAPSULE provide loading and unloading services?
                                    </a>
                                </dt>
                                <dd id="accordion15" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>No, but we can provide you with the name of a few local companies that
                                            provide labor.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion16"
                                        aria-expanded="false" aria-controls="accordion16">
                                        What about HOA and City Rules?
                                    </a>
                                </dt>
                                <dd id="accordion16" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>Customer takes responsibility for knowing their HOA and city rules regarding
                                            portable storage containers.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion17"
                                        aria-expanded="false" aria-controls="accordion17">
                                        Can you park the CAPSULE on the curb / street?
                                    </a>
                                </dt>
                                <dd id="accordion17" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>No, it must go on your property. We do not place it in any right of ways.</p>
                                    </div>
                                </dd>
                            </div>
                            <div class="item">
                                <dt>
                                    <a class="accordion-title accordionTitle js-accordionTrigger" href="#accordion18"
                                        aria-expanded="false" aria-controls="accordion18">
                                        How does pricing work?
                                    </a>
                                </dt>
                                <dd id="accordion18" class="accordion-content accordionItem is-collapsed"
                                    aria-hidden="true">
                                    <div class="toggle-content post-content">
                                        <p>There is a monthly rental due upon delivery and on the anniversary of
                                            delivery. There is also a fee for each additional time you want the
                                            container moved, including drop-off and empty pick-ups. The transport fee is
                                            based on location. Most customers have us move it 2, 3, or 4 times.</p>
                                    </div>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php
get_footer();