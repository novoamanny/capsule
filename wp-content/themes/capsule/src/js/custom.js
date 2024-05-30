/* BACK TO TOP */

jQuery(document).ready(function ($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.windowtop');

  //hide or show the "back to top" link
  $(window).scroll(function () {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass('cd-is-visible')
      : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      scroll_top_duration
    );
  });
});

// function sizer() {
//   if ($(document).scrollTop() > 0) {
//     $('header .top').toggleClass('reduced', $(document).scrollTop() > 0);
//     // $('header .top ').stop().animate(
//     //   {
//     //     lineHeight: '85px',
//     //   },
//     //   30
//     // );
//   } else {
//     $('header .top').toggleClass('reduced', $(document).scrollTop() > 0);
//     // $('header .top').stop().animate(
//     //   {
//     //     lineHeight: '115px',
//     //   },
//     //   30
//     // );
//   }
// }

// $(window).scroll(function () {
//   sizer();
// });

// sizer();

// FAQ accordion functionality
(function () {
  var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = 'ontouchstart' in window,
    pointerSupported = 'pointerdown' in window;

  skipClickDelay = function (e) {
    e.preventDefault();
    e.target.click();
  };

  setAriaAttr = function (el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function (el1, el2, expanded) {
    switch (expanded) {
      case 'true':
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case 'false':
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function (e) {
    console.log('triggered');
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener(
        'pointerdown',
        skipClickDelay,
        false
      );
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

/* MOBILE MENU */

(function ($) {
  var $window = $(window),
    $body = $('body'),
    $header = $('#header'),
    $banner = $('#banner');

  // Breakpoints.
  // breakpoints({
  //   xlarge: '(max-width: 1680px)',
  //   large: '(max-width: 1280px)',
  //   medium: '(max-width: 980px)',
  //   small: '(max-width: 736px)',
  //   xsmall: '(max-width: 480px)',
  // });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass('alt')) {
    $window.on('resize', function () {
      $window.trigger('scroll');
    });

    $banner.scrollex({
      bottom: $header.outerHeight(),
      terminate: function () {
        $header.removeClass('alt');
      },
      enter: function () {
        $header.addClass('alt');
      },
      leave: function () {
        $header.removeClass('alt');
      },
    });
  }

  // Menu.
  var $menu = $('#menu');

  $menu._locked = false;

  $menu._lock = function () {
    if ($menu._locked) return false;

    $menu._locked = true;

    window.setTimeout(function () {
      $menu._locked = false;
    }, 350);

    return true;
  };

  $menu._show = function () {
    if ($menu._lock()) $body.addClass('is-menu-visible');
  };

  $menu._hide = function () {
    if ($menu._lock()) $body.removeClass('is-menu-visible');
  };

  $menu._toggle = function () {
    if ($menu._lock()) $body.toggleClass('is-menu-visible');
  };

  $menu
    .appendTo($body)
    .on('click', function (event) {
      event.stopPropagation();

      // Hide.
      $menu._hide();
    })
    .find('.inner')
    .on('click', '.close', function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      // Hide.
      $menu._hide();
    })
    .on('click', function (event) {
      event.stopPropagation();
    })
    .on('click', 'a', function (event) {
      var href = $(this).attr('href');

      event.preventDefault();
      event.stopPropagation();

      // Hide.
      $menu._hide();

      // Redirect.
      window.setTimeout(function () {
        window.location.href = href;
      }, 350);
    });

  $body
    .on('click', 'a[href="#menu"]', function (event) {
      event.stopPropagation();
      event.preventDefault();

      // Toggle.
      $menu._toggle();
    })
    .on('keydown', function (event) {
      // Hide on escape.
      if (event.keyCode == 27) $menu._hide();
    });
})(jQuery);

// Disables inputs or makes them readonly based on CSS class
jQuery(document).ready(function ($) {
  $('.disabled input').attr('disabled', 'disabled');
  $('.readonly input').attr('readonly', 'readonly');
});

// Enables custom datepicker dates to be manually disabled via ACF options // functions.php calls wp_localize_script to pull the data
const desc = acf_vars.list_parent; // pulls an array from ACF, which ends up being a nested object array

// turn the nested object array into a flat array
var array = desc,
  result = array.reduce(function (r, o) {
    Object.keys(o).forEach(function (k) {
      r.push(o[k]);
    });
    return r;
  }, []);
// console.log(result);

// Adds datepicker logic to allow for custom disabled dates
if (
  location.pathname == '/get-a-quote/' ||
  location.pathname == '/hold-a-reservation/'
) {
  gform.addFilter(
    'gform_datepicker_options_pre_init',
    function (optionsObj, formId, fieldId) {
      // Disables manual entries from ACF
      if (
        (formId == 1 && fieldId == 8) ||
        (formId == 2 && fieldId == 44) ||
        (formId == 3 && fieldId == 44)
      ) {
        // Get the date for today, and format it to mm/dd/yy
        const newDate = new Date();
        const todaysDate = newDate.toLocaleDateString('en-US', {
          // you can use undefined as first argument
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });

        var disabledDays = result; // pulls the flat array from the array shenanigans above

        disabledDays.push(todaysDate); // Add value for "todaysDate" to custom array from above

        optionsObj.minDate = 0; // For disabling Sunday on datepicker
        optionsObj.firstDay = 0; // Sets Monday as the first day on the calendar
        // console.log("currentDate: " + currentDate);

        optionsObj.beforeShowDay = function (date) {
          var day = date.getDay(); // For disabling Sunday on datepicker
          var checkdate = jQuery.datepicker.formatDate('mm/dd/yy', date);
          return [disabledDays.indexOf(checkdate) == -1 && day != 0, ''];
        };

        // Clear the "Request Delivery Date" field if the value of the date is before "today", to force the user to set a new Requested Delivery Date.
        if ((formId == 2 && fieldId == 44) || (formId == 3 && fieldId == 44)) {
          // If the form is "Hold a Reservation" and the "Requested Delivery Date" field ID is 44

          // Grab value from URL paramter for deliveryDate and format it with a proper Date format
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          var desiredDeliveryDate = urlParams.get('deliveryDate');
          desiredDeliveryDateFormatted = new Date(desiredDeliveryDate);

          if (desiredDeliveryDateFormatted <= newDate) {
            // If the Desired Delivery Date is before or on the current day, clear it
            var rDD = document.getElementById('input_2_44');
            $(window).on('load', function () {
              // Wait until everything else is loaded before clearing field
              $(rDD).datepicker('setDate', null);
              rDD.defaultValue = '';
            });
          } else {
            // If the Desired Delivery Date after current day
            // All clear
          }
        }
        // END
      }
      return optionsObj;
    }
  );
}
// END datepicker customizations

// Zipcode pricing logic
var zips75 = [
  // Create array for zipcodes that are $75
  '75019',
  '75099',
  '75326',
  '75063',
  '75039',
  '75038',
  '75261',
  '75062',
  '75061',
  '75017',
  '75016',
  '75015',
  '75014',
  '75060',
  '75050',
  '75123',
  '75115',
  '75236',
  '75138',
  '75116',
  '75053',
  '75137',
  '75051',
  '75249',
  '75052',
  '75106',
  '75104',
  '75054',
  '76205',
  '75029',
  '76226',
  '75077',
  '75067',
  '75027',
  '75028',
  '76247',
  '75022',
  '76262',
  '75154',
  '76651',
  '76041',
  '75167',
  '76065',
  '76064',
  '76084',
  '76061',
  '76009',
  '76097',
  '76028',
  '76050',
  '76059',
  '76058',
  '76031',
  '76044',
  '76093',
  '76033',
  '76099',
  '76051',
  '76092',
  '76177',
  '76052',
  '76244',
  '76039',
  '76034',
  '76248',
  '76155',
  '76182',
  '76021',
  '76095',
  '76054',
  '76180',
  '76040',
  '76022',
  '76148',
  '76006',
  '76179',
  '76131',
  '76020',
  '76011',
  '76137',
  '76053',
  '76118',
  '76012',
  '76010',
  '76096',
  '76094',
  '76007',
  '76005',
  '76004',
  '76003',
  '76120',
  '76117',
  '76019',
  '76014',
  '76135',
  '76112',
  '76106',
  '76018',
  '76013',
  '76111',
  '76015',
  '76103',
  '76164',
  '76114',
  '76102',
  '76016',
  '76002',
  '76105',
  '76127',
  '76108',
  '76017',
  '76199',
  '76198',
  '76197',
  '76196',
  '76195',
  '76193',
  '76192',
  '76191',
  '76185',
  '76181',
  '76166',
  '76163',
  '76162',
  '76161',
  '76150',
  '76147',
  '76136',
  '76130',
  '76124',
  '76121',
  '76113',
  '76107',
  '76104',
  '76101',
  '76001',
  '76119',
  '76110',
  '76063',
  '76060',
  '76116',
  '76129',
  '76115',
  '76109',
  '76122',
  '76140',
  '76134',
  '76132',
  '76133',
  '76123',
  '76126',
  '76036',
];
var zips85 = [
  // Create array for zipcodes that are $85
  '76008',
  '76066',
  '76082',
  '76085',
  '76086',
  '76087',
  '76088',
  '76098',
  '76439',
  '76485',
  '76487',
  '76490',
  '76049',
  '76048',
  '76035',
];
var zips100 = [
  // Create array for zipcodes that are $100
  '75424',
  '75485',
  '75409',
  '75442',
  '75454',
  '75164',
  '75097',
  '75121',
  '75071',
  '75009',
  '75407',
  '75173',
  '75069',
  '75166',
  '75078',
  '75070',
  '75098',
  '75002',
  '75013',
  '75035',
  '75094',
  '75025',
  '75074',
  '75023',
  '75086',
  '75026',
  '75024',
  '75075',
  '75093',
  '75252',
  '75287',
  '75089',
  '75048',
  '75088',
  '75082',
  '75030',
  '75044',
  '75040',
  '75049',
  '75047',
  '75046',
  '75045',
  '75043',
  '75182',
  '75042',
  '75081',
  '75080',
  '75041',
  '75085',
  '75083',
  '75181',
  '75150',
  '75248',
  '75243',
  '75238',
  '75187',
  '75185',
  '75254',
  '75240',
  '75149',
  '75001',
  '75180',
  '75251',
  '75231',
  '75228',
  '75218',
  '75159',
  '75230',
  '75253',
  '75244',
  '75227',
  '75011',
  '75006',
  '75358',
  '75214',
  '75225',
  '75206',
  '75234',
  '75229',
  '75223',
  '75217',
  '75205',
  '75210',
  '75246',
  '75226',
  '75209',
  '75204',
  '75220',
  '75141',
  '75397',
  '75395',
  '75394',
  '75393',
  '75392',
  '75391',
  '75390',
  '75389',
  '75382',
  '75381',
  '75380',
  '75379',
  '75378',
  '75376',
  '75374',
  '75373',
  '75372',
  '75371',
  '75368',
  '75367',
  '75360',
  '75359',
  '75357',
  '75356',
  '75355',
  '75354',
  '75339',
  '75336',
  '75320',
  '75315',
  '75313',
  '75312',
  '75303',
  '75301',
  '75285',
  '75284',
  '75283',
  '75277',
  '75275',
  '75270',
  '75266',
  '75265',
  '75264',
  '75250',
  '75235',
  '75222',
  '75221',
  '75219',
  '75215',
  '75201',
  '75172',
  '75398',
  '75370',
  '75342',
  '75267',
  '75263',
  '75262',
  '75242',
  '75202',
  '75207',
  '75203',
  '75260',
  '75247',
  '75216',
  '75241',
  '75208',
  '75212',
  '75134',
  '75224',
  '75146',
  '75233',
  '75232',
  '75211',
  '75237',
  '75033',
  '75034',
  '76249',
  '75068',
  '76209',
  '76208',
  '76206',
  '76204',
  '76203',
  '76202',
  '76201',
  '76207',
  '75065',
  '75056',
  '76259',
  '76210',
  '75010',
  '75007',
  '75057',
  '75125',
  '75119',
  '75120',
  '75152',
  '75101',
  '75165',
  '76623',
  '75168',
  '76670',
];
var zips125 = [
  // Create array for zipcodes that are $125
  '76258',
  '76266',
  '76227',
];

$(document).ready(function () {
  var startingZip = $('#input_1_14_5'); // #input_1_14_5 for production
  var endingZip = $('#input_1_30_5'); // #input_1_30_5 for production
  var tCostStarting = $('#input_1_49'); // #input_1_49 for production
  var tCostEnding = $('#input_1_50'); // #input_1_50 for production
  var tCost = $('#input_1_48'); // #input_1_48 for production
  var value = '';
  parseInt(tCostStarting.val('75')); // default
  parseInt(tCostEnding.val('75')); // default

  $(startingZip).change(function () {
    if ($.inArray(startingZip.val(), zips75) != -1) {
      parseInt(tCostStarting.val('75'));
      if (parseInt(tCostStarting.val()) > parseInt(tCostEnding.val())) {
        value = '75';
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) < parseInt(tCostEnding.val())) {
        value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      }
    } else if ($.inArray(startingZip.val(), zips85) != -1) {
      parseInt(tCostStarting.val('85'));
      if (parseInt(tCostStarting.val()) > parseInt(tCostEnding.val())) {
        value = '85';
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) < parseInt(tCostEnding.val())) {
        value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      }
    } else if ($.inArray(startingZip.val(), zips100) != -1) {
      parseInt(tCostStarting.val('100'));
      if (parseInt(tCostStarting.val()) > parseInt(tCostEnding.val())) {
        value = '100';
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) < parseInt(tCostEnding.val())) {
        value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      }
    } else if ($.inArray(startingZip.val(), zips125) != -1) {
      parseInt(tCostStarting.val('125'));
      if (parseInt(tCostStarting.val()) > parseInt(tCostEnding.val())) {
        value = '125';
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) < parseInt(tCostEnding.val())) {
        value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      }
    } else {
      // default value set within Gravity Forms
    }
  });
  $(endingZip).change(function () {
    if ($.inArray(endingZip.val(), zips75) != -1) {
      parseInt(tCostEnding.val('75'));
      if (parseInt(tCostEnding.val()) > parseInt(tCostStarting.val())) {
        value = '75';
        tCost.val('$' + value);
      } else if (parseInt(tCostEnding.val()) < parseInt(tCostStarting.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      }
    } else if ($.inArray(endingZip.val(), zips85) != -1) {
      parseInt(tCostEnding.val('85'));
      if (parseInt(tCostEnding.val()) > parseInt(tCostStarting.val())) {
        value = '85';
        tCost.val('$' + value);
      } else if (parseInt(tCostEnding.val()) < parseInt(tCostStarting.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      }
    } else if ($.inArray(endingZip.val(), zips100) != -1) {
      parseInt(tCostEnding.val('100'));
      if (parseInt(tCostEnding.val()) > parseInt(tCostStarting.val())) {
        value = '100';
        tCost.val('$' + value);
      } else if (parseInt(tCostEnding.val()) < parseInt(tCostStarting.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      }
    } else if ($.inArray(endingZip.val(), zips125) != -1) {
      parseInt(tCostEnding.val('125'));
      if (parseInt(tCostEnding.val()) > parseInt(tCostStarting.val())) {
        value = '125';
        tCost.val('$' + value);
      } else if (parseInt(tCostEnding.val()) < parseInt(tCostStarting.val())) {
        value = parseInt(tCostStarting.val());
        tCost.val('$' + value);
      } else if (parseInt(tCostStarting.val()) == parseInt(tCostEnding.val())) {
        value = value = parseInt(tCostEnding.val());
        tCost.val('$' + value);
      }
    } else {
      // default value set within Gravity Forms
    }
  });
});

// Turn URL parameter into variable, to show transfer fee price dynamically on results page
function getParameterByName(name, url) {
  // Parse the URL parameter
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName('tCost');

if (
  dynamicContent == '$75' ||
  dynamicContent == '$85' ||
  dynamicContent == '$100' ||
  dynamicContent == '$125'
) {
  $('#transport-fee-intro').text(dynamicContent);
} else {
  $('#transport-fee-intro').hide();
}

// Youtube video player custom controls/playback functionality
$('#play').on('click', function (e) {
  e.preventDefault();
  $('#player')[0].src += '?autoplay=1';
  $('#player').show();
  $('#video-cover').hide();
  $('#play').hide();
  $('#video-heading').hide();
});

// Youtube video player custom controls/playback functionality
$('#play-2').on('click', function (e) {
  e.preventDefault();
  $('#player-2')[0].src += '?autoplay=1';
  $('#player-2').show();
  $('#video-cover-2').hide();
  $('#play-2').hide();
  $('#video-heading-2').hide();
});
