/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css3_animate_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css3-animate-it */ "./src/js/css3-animate-it.js");
/* harmony import */ var _css3_animate_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css3_animate_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom */ "./src/js/custom.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom__WEBPACK_IMPORTED_MODULE_1__);
// import './browser.min';
// import './breakpoints.min';
// import './util';
// import './brands.min';
// import './solid.min';
// import './fontawesome.min';



/***/ }),

/***/ "./src/js/css3-animate-it.js":
/*!***********************************!*\
  !*** ./src/js/css3-animate-it.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * CSS3 Animate it
 * Copyright (c) 2014 Jack McCourt
 * https://github.com/kriegar/css3-animate-it
 * Version: 0.1.0
 * 
 * I utilise the jQuery.appear plugin within this javascript file so here is a link to that too
 * https://github.com/morr/jquery.appear
 *
 * I also utilise the jQuery.doTimeout plugin for the data-sequence functionality so here is a link back to them.
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 */
(function ($) {
  var selectors = [];
  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);
  var $prior_appeared;

  function process() {
    check_lock = false;

    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(function () {
        return $(this).is(':appeared');
      });
      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }

      $prior_appeared = $appeared;
    }
  } // "appeared" custom filter


  $.expr[':']['appeared'] = function (element) {
    var $element = $(element);

    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top && top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() && left + $element.width() >= window_left && left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function appear(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;

      if (!check_binded) {
        var on_check = function on_check() {
          if (check_lock) {
            return;
          }

          check_lock = true;
          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }

      selectors.push(selector);
      return $(selector);
    }
  });
  $.extend({
    // force elements's appearance check
    force_appear: function force_appear() {
      if (check_binded) {
        process();
        return true;
      }

      ;
      return false;
    }
  });
})(jQuery);
/*!
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Script: jQuery doTimeout: Like setTimeout, but better!
//
// *Version: 1.0, Last updated: 3/3/2010*
// 
// Project Home - http://benalman.com/projects/jquery-dotimeout-plugin/
// GitHub       - http://github.com/cowboy/jquery-dotimeout/
// Source       - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.js
// (Minified)   - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.min.js (1.0kb)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// Debouncing      - http://benalman.com/code/projects/jquery-dotimeout/examples/debouncing/
// Delays, Polling - http://benalman.com/code/projects/jquery-dotimeout/examples/delay-poll/
// Hover Intent    - http://benalman.com/code/projects/jquery-dotimeout/examples/hoverintent/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-dotimeout/unit/
// 
// About: Release History
// 
// 1.0 - (3/3/2010) Callback can now be a string, in which case it will call
//       the appropriate $.method or $.fn.method, depending on where .doTimeout
//       was called. Callback must now return `true` (not just a truthy value)
//       to poll.
// 0.4 - (7/15/2009) Made the "id" argument optional, some other minor tweaks
// 0.3 - (6/25/2009) Initial release


(function ($) {
  '$:nomunge'; // Used by YUI compressor.

  var cache = {},
      // Reused internal string.
  doTimeout = 'doTimeout',
      // A convenient shortcut.
  aps = Array.prototype.slice; // Method: jQuery.doTimeout
  // 
  // Initialize, cancel, or force execution of a callback after a delay.
  // 
  // If delay and callback are specified, a doTimeout is initialized. The
  // callback will execute, asynchronously, after the delay. If an id is
  // specified, this doTimeout will override and cancel any existing doTimeout
  // with the same id. Any additional arguments will be passed into callback
  // when it is executed.
  // 
  // If the callback returns true, the doTimeout loop will execute again, after
  // the delay, creating a polling loop until the callback returns a non-true
  // value.
  // 
  // Note that if an id is not passed as the first argument, this doTimeout will
  // NOT be able to be manually canceled or forced. (for debouncing, be sure to
  // specify an id).
  // 
  // If id is specified, but delay and callback are not, the doTimeout will be
  // canceled without executing the callback. If force_mode is specified, the
  // callback will be executed, synchronously, but will only be allowed to
  // continue a polling loop if force_mode is true (provided the callback
  // returns true, of course). If force_mode is false, no polling loop will
  // continue, even if the callback returns true.
  // 
  // Usage:
  // 
  // > jQuery.doTimeout( [ id, ] delay, callback [, arg ... ] );
  // > jQuery.doTimeout( id [, force_mode ] );
  // 
  // Arguments:
  // 
  //  id - (String) An optional unique identifier for this doTimeout. If id is
  //    not specified, the doTimeout will NOT be able to be manually canceled or
  //    forced.
  //  delay - (Number) A zero-or-greater delay in milliseconds after which
  //    callback will be executed. 
  //  callback - (Function) A function to be executed after delay milliseconds.
  //  callback - (String) A jQuery method to be executed after delay
  //    milliseconds. This method will only poll if it explicitly returns
  //    true.
  //  force_mode - (Boolean) If true, execute that id's doTimeout callback
  //    immediately and synchronously, continuing any callback return-true
  //    polling loop. If false, execute the callback immediately and
  //    synchronously but do NOT continue a callback return-true polling loop.
  //    If omitted, cancel that id's doTimeout.
  // 
  // Returns:
  // 
  //  If force_mode is true, false or undefined and there is a
  //  yet-to-be-executed callback to cancel, true is returned, but if no
  //  callback remains to be executed, undefined is returned.

  $[doTimeout] = function () {
    return p_doTimeout.apply(window, [0].concat(aps.call(arguments)));
  }; // Method: jQuery.fn.doTimeout
  // 
  // Initialize, cancel, or force execution of a callback after a delay.
  // Operates like <jQuery.doTimeout>, but the passed callback executes in the
  // context of the jQuery collection of elements, and the id is stored as data
  // on the first element in that collection.
  // 
  // If delay and callback are specified, a doTimeout is initialized. The
  // callback will execute, asynchronously, after the delay. If an id is
  // specified, this doTimeout will override and cancel any existing doTimeout
  // with the same id. Any additional arguments will be passed into callback
  // when it is executed.
  // 
  // If the callback returns true, the doTimeout loop will execute again, after
  // the delay, creating a polling loop until the callback returns a non-true
  // value.
  // 
  // Note that if an id is not passed as the first argument, this doTimeout will
  // NOT be able to be manually canceled or forced (for debouncing, be sure to
  // specify an id).
  // 
  // If id is specified, but delay and callback are not, the doTimeout will be
  // canceled without executing the callback. If force_mode is specified, the
  // callback will be executed, synchronously, but will only be allowed to
  // continue a polling loop if force_mode is true (provided the callback
  // returns true, of course). If force_mode is false, no polling loop will
  // continue, even if the callback returns true.
  // 
  // Usage:
  // 
  // > jQuery('selector').doTimeout( [ id, ] delay, callback [, arg ... ] );
  // > jQuery('selector').doTimeout( id [, force_mode ] );
  // 
  // Arguments:
  // 
  //  id - (String) An optional unique identifier for this doTimeout, stored as
  //    jQuery data on the element. If id is not specified, the doTimeout will
  //    NOT be able to be manually canceled or forced.
  //  delay - (Number) A zero-or-greater delay in milliseconds after which
  //    callback will be executed. 
  //  callback - (Function) A function to be executed after delay milliseconds.
  //  callback - (String) A jQuery.fn method to be executed after delay
  //    milliseconds. This method will only poll if it explicitly returns
  //    true (most jQuery.fn methods return a jQuery object, and not `true`,
  //    which allows them to be chained and prevents polling).
  //  force_mode - (Boolean) If true, execute that id's doTimeout callback
  //    immediately and synchronously, continuing any callback return-true
  //    polling loop. If false, execute the callback immediately and
  //    synchronously but do NOT continue a callback return-true polling loop.
  //    If omitted, cancel that id's doTimeout.
  // 
  // Returns:
  // 
  //  When creating a <jQuery.fn.doTimeout>, the initial jQuery collection of
  //  elements is returned. Otherwise, if force_mode is true, false or undefined
  //  and there is a yet-to-be-executed callback to cancel, true is returned,
  //  but if no callback remains to be executed, undefined is returned.


  $.fn[doTimeout] = function () {
    var args = aps.call(arguments),
        result = p_doTimeout.apply(this, [doTimeout + args[0]].concat(args));
    return typeof args[0] === 'number' || typeof args[1] === 'number' ? this : result;
  };

  function p_doTimeout(jquery_data_key) {
    var that = this,
        elem,
        data = {},
        // Allows the plugin to call a string callback method.
    method_base = jquery_data_key ? $.fn : $,
        // Any additional arguments will be passed to the callback.
    args = arguments,
        slice_args = 4,
        id = args[1],
        delay = args[2],
        callback = args[3];

    if (typeof id !== 'string') {
      slice_args--;
      id = jquery_data_key = 0;
      delay = args[1];
      callback = args[2];
    } // If id is passed, store a data reference either as .data on the first
    // element in a jQuery collection, or in the internal cache.


    if (jquery_data_key) {
      // Note: key is 'doTimeout' + id
      // Get id-object from the first element's data, otherwise initialize it to {}.
      elem = that.eq(0);
      elem.data(jquery_data_key, data = elem.data(jquery_data_key) || {});
    } else if (id) {
      // Get id-object from the cache, otherwise initialize it to {}.
      data = cache[id] || (cache[id] = {});
    } // Clear any existing timeout for this id.


    data.id && clearTimeout(data.id);
    delete data.id; // Clean up when necessary.

    function cleanup() {
      if (jquery_data_key) {
        elem.removeData(jquery_data_key);
      } else if (id) {
        delete cache[id];
      }
    }

    ; // Yes, there actually is a setTimeout call in here!

    function actually_setTimeout() {
      data.id = setTimeout(function () {
        data.fn();
      }, delay);
    }

    ;

    if (callback) {
      // A callback (and delay) were specified. Store the callback reference for
      // possible later use, and then setTimeout.
      data.fn = function (no_polling_loop) {
        // If the callback value is a string, it is assumed to be the name of a
        // method on $ or $.fn depending on where doTimeout was executed.
        if (typeof callback === 'string') {
          callback = method_base[callback];
        }

        callback.apply(that, aps.call(args, slice_args)) === true && !no_polling_loop // Since the callback returned true, and we're not specifically
        // canceling a polling loop, do it again!
        ? actually_setTimeout() // Otherwise, clean up and quit.
        : cleanup();
      }; // Set that timeout!


      actually_setTimeout();
    } else if (data.fn) {
      // No callback passed. If force_mode (delay) is true, execute the data.fn
      // callback immediately, continuing any callback return-true polling loop.
      // If force_mode is false, execute the data.fn callback immediately but do
      // NOT continue a callback return-true polling loop. If force_mode is
      // undefined, simply clean up. Since data.fn was still defined, whatever
      // was supposed to happen hadn't yet, so return true.
      delay === undefined ? cleanup() : data.fn(delay === false);
      return true;
    } else {
      // Since no callback was passed, and data.fn isn't defined, it looks like
      // whatever was supposed to happen already did. Clean up and quit!
      cleanup();
    }
  }

  ;
})(jQuery); //CSS3 Animate-it


$('.animatedParent').appear();
$('.animatedClick').click(function () {
  var target = $(this).attr('data-target');

  if ($(this).attr('data-sequence') != undefined) {
    var firstId = $("." + target + ":first").attr('data-id');
    var lastId = $("." + target + ":last").attr('data-id');
    var number = firstId; //Add or remove the class

    if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
      $("." + target + "[data-id=" + number + "]").addClass('goAway');
      $("." + target + "[data-id=" + number + "]").removeClass('go');
    } else {
      $("." + target + "[data-id=" + number + "]").addClass('go');
      $("." + target + "[data-id=" + number + "]").removeClass('goAway');
    }

    number++;
    delay = Number($(this).attr('data-sequence'));
    $.doTimeout(delay, function () {
      console.log(lastId); //Add or remove the class

      if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
        $("." + target + "[data-id=" + number + "]").addClass('goAway');
        $("." + target + "[data-id=" + number + "]").removeClass('go');
      } else {
        $("." + target + "[data-id=" + number + "]").addClass('go');
        $("." + target + "[data-id=" + number + "]").removeClass('goAway');
      } //increment


      ++number; //continute looping till reached last ID

      if (number <= lastId) {
        return true;
      }
    });
  } else {
    if ($('.' + target).hasClass('go')) {
      $('.' + target).addClass('goAway');
      $('.' + target).removeClass('go');
    } else {
      $('.' + target).addClass('go');
      $('.' + target).removeClass('goAway');
    }
  }
});
$(document.body).on('appear', '.animatedParent', function (e, $affected) {
  var ele = $(this).find('.animated');
  var parent = $(this);

  if (parent.attr('data-sequence') != undefined) {
    var firstId = $(this).find('.animated:first').attr('data-id');
    var number = firstId;
    var lastId = $(this).find('.animated:last').attr('data-id');
    $(parent).find(".animated[data-id=" + number + "]").addClass('go');
    number++;
    delay = Number(parent.attr('data-sequence'));
    $.doTimeout(delay, function () {
      $(parent).find(".animated[data-id=" + number + "]").addClass('go');
      ++number;

      if (number <= lastId) {
        return true;
      }
    });
  } else {
    ele.addClass('go');
  }
});
$(document.body).on('disappear', '.animatedParent', function (e, $affected) {
  if (!$(this).hasClass('animateOnce')) {
    $(this).find('.animated').removeClass('go');
  }
});
$(window).on('load', function () {
  $.force_appear();
});

/***/ }),

/***/ "./src/js/custom.js":
/*!**************************!*\
  !*** ./src/js/custom.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* BACK TO TOP */
jQuery(document).ready(function ($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
      //grab the "back to top" link
  $back_to_top = $('.windowtop'); //hide or show the "back to top" link

  $(window).scroll(function () {
    $(this).scrollTop() > offset ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');

    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  }); //smooth scroll to top

  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, scroll_top_duration);
  });
}); // function sizer() {
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
      touchSupported = ('ontouchstart' in window),
      pointerSupported = ('pointerdown' in window);

  skipClickDelay = function skipClickDelay(e) {
    e.preventDefault();
    e.target.click();
  };

  setAriaAttr = function setAriaAttr(el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };

  setAccordionAria = function setAccordionAria(el1, el2, expanded) {
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
  }; //function


  switchAccordion = function switchAccordion(e) {
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
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }

    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();
/* MOBILE MENU */


(function ($) {
  var $window = $(window),
      $body = $('body'),
      $header = $('#header'),
      $banner = $('#banner'); // Breakpoints.
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
  }); // Header.

  if ($banner.length > 0 && $header.hasClass('alt')) {
    $window.on('resize', function () {
      $window.trigger('scroll');
    });
    $banner.scrollex({
      bottom: $header.outerHeight(),
      terminate: function terminate() {
        $header.removeClass('alt');
      },
      enter: function enter() {
        $header.addClass('alt');
      },
      leave: function leave() {
        $header.removeClass('alt');
      }
    });
  } // Menu.


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

  $menu.appendTo($body).on('click', function (event) {
    event.stopPropagation(); // Hide.

    $menu._hide();
  }).find('.inner').on('click', '.close', function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation(); // Hide.

    $menu._hide();
  }).on('click', function (event) {
    event.stopPropagation();
  }).on('click', 'a', function (event) {
    var href = $(this).attr('href');
    event.preventDefault();
    event.stopPropagation(); // Hide.

    $menu._hide(); // Redirect.


    window.setTimeout(function () {
      window.location.href = href;
    }, 350);
  });
  $body.on('click', 'a[href="#menu"]', function (event) {
    event.stopPropagation();
    event.preventDefault(); // Toggle.

    $menu._toggle();
  }).on('keydown', function (event) {
    // Hide on escape.
    if (event.keyCode == 27) $menu._hide();
  });
})(jQuery); // Disables inputs or makes them readonly based on CSS class


jQuery(document).ready(function ($) {
  $('.disabled input').attr('disabled', 'disabled');
  $('.readonly input').attr('readonly', 'readonly');
}); // Enables custom datepicker dates to be manually disabled via ACF options // functions.php calls wp_localize_script to pull the data

var desc = acf_vars.list_parent; // pulls an array from ACF, which ends up being a nested object array
// turn the nested object array into a flat array

var array = desc,
    result = array.reduce(function (r, o) {
  Object.keys(o).forEach(function (k) {
    r.push(o[k]);
  });
  return r;
}, []); // console.log(result);
// Adds datepicker logic to allow for custom disabled dates

if (location.pathname == '/get-a-quote/' || location.pathname == '/hold-a-reservation/') {
  gform.addFilter('gform_datepicker_options_pre_init', function (optionsObj, formId, fieldId) {
    // Disables manual entries from ACF
    if (formId == 1 && fieldId == 8 || formId == 2 && fieldId == 44 || formId == 3 && fieldId == 44) {
      // Get the date for today, and format it to mm/dd/yy
      var newDate = new Date();
      var todaysDate = newDate.toLocaleDateString('en-US', {
        // you can use undefined as first argument
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
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
      }; // Clear the "Request Delivery Date" field if the value of the date is before "today", to force the user to set a new Requested Delivery Date.


      if (formId == 2 && fieldId == 44 || formId == 3 && fieldId == 44) {
        // If the form is "Hold a Reservation" and the "Requested Delivery Date" field ID is 44
        // Grab value from URL paramter for deliveryDate and format it with a proper Date format
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
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
        } else {// If the Desired Delivery Date after current day
          // All clear
        }
      } // END

    }

    return optionsObj;
  });
} // END datepicker customizations
// Zipcode pricing logic


var zips75 = [// Create array for zipcodes that are $75
'75019', '75099', '75326', '75063', '75039', '75038', '75261', '75062', '75061', '75017', '75016', '75015', '75014', '75060', '75050', '75123', '75115', '75236', '75138', '75116', '75053', '75137', '75051', '75249', '75052', '75106', '75104', '75054', '76205', '75029', '76226', '75077', '75067', '75027', '75028', '76247', '75022', '76262', '75154', '76651', '76041', '75167', '76065', '76064', '76084', '76061', '76009', '76097', '76028', '76050', '76059', '76058', '76031', '76044', '76093', '76033', '76099', '76051', '76092', '76177', '76052', '76244', '76039', '76034', '76248', '76155', '76182', '76021', '76095', '76054', '76180', '76040', '76022', '76148', '76006', '76179', '76131', '76020', '76011', '76137', '76053', '76118', '76012', '76010', '76096', '76094', '76007', '76005', '76004', '76003', '76120', '76117', '76019', '76014', '76135', '76112', '76106', '76018', '76013', '76111', '76015', '76103', '76164', '76114', '76102', '76016', '76002', '76105', '76127', '76108', '76017', '76199', '76198', '76197', '76196', '76195', '76193', '76192', '76191', '76185', '76181', '76166', '76163', '76162', '76161', '76150', '76147', '76136', '76130', '76124', '76121', '76113', '76107', '76104', '76101', '76001', '76119', '76110', '76063', '76060', '76116', '76129', '76115', '76109', '76122', '76140', '76134', '76132', '76133', '76123', '76126', '76036'];
var zips85 = [// Create array for zipcodes that are $85
'76008', '76066', '76082', '76085', '76086', '76087', '76088', '76098', '76439', '76485', '76487', '76490', '76049', '76048', '76035'];
var zips100 = [// Create array for zipcodes that are $100
'75424', '75485', '75409', '75442', '75454', '75164', '75097', '75121', '75071', '75009', '75407', '75173', '75069', '75166', '75078', '75070', '75098', '75002', '75013', '75035', '75094', '75025', '75074', '75023', '75086', '75026', '75024', '75075', '75093', '75252', '75287', '75089', '75048', '75088', '75082', '75030', '75044', '75040', '75049', '75047', '75046', '75045', '75043', '75182', '75042', '75081', '75080', '75041', '75085', '75083', '75181', '75150', '75248', '75243', '75238', '75187', '75185', '75254', '75240', '75149', '75001', '75180', '75251', '75231', '75228', '75218', '75159', '75230', '75253', '75244', '75227', '75011', '75006', '75358', '75214', '75225', '75206', '75234', '75229', '75223', '75217', '75205', '75210', '75246', '75226', '75209', '75204', '75220', '75141', '75397', '75395', '75394', '75393', '75392', '75391', '75390', '75389', '75382', '75381', '75380', '75379', '75378', '75376', '75374', '75373', '75372', '75371', '75368', '75367', '75360', '75359', '75357', '75356', '75355', '75354', '75339', '75336', '75320', '75315', '75313', '75312', '75303', '75301', '75285', '75284', '75283', '75277', '75275', '75270', '75266', '75265', '75264', '75250', '75235', '75222', '75221', '75219', '75215', '75201', '75172', '75398', '75370', '75342', '75267', '75263', '75262', '75242', '75202', '75207', '75203', '75260', '75247', '75216', '75241', '75208', '75212', '75134', '75224', '75146', '75233', '75232', '75211', '75237', '75033', '75034', '76249', '75068', '76209', '76208', '76206', '76204', '76203', '76202', '76201', '76207', '75065', '75056', '76259', '76210', '75010', '75007', '75057', '75125', '75119', '75120', '75152', '75101', '75165', '76623', '75168', '76670'];
var zips125 = [// Create array for zipcodes that are $125
'76258', '76266', '76227'];
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
    } else {// default value set within Gravity Forms
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
    } else {// default value set within Gravity Forms
    }
  });
}); // Turn URL parameter into variable, to show transfer fee price dynamically on results page

function getParameterByName(name, url) {
  // Parse the URL parameter
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
} // Give the parameter a variable name


var dynamicContent = getParameterByName('tCost');

if (dynamicContent == '$75' || dynamicContent == '$85' || dynamicContent == '$100' || dynamicContent == '$125') {
  $('#transport-fee-intro').text(dynamicContent);
} else {
  $('#transport-fee-intro').hide();
} // Youtube video player custom controls/playback functionality


$('#play').on('click', function (e) {
  e.preventDefault();
  $('#player')[0].src += '?autoplay=1';
  $('#player').show();
  $('#video-cover').hide();
  $('#play').hide();
  $('#video-heading').hide();
}); // Youtube video player custom controls/playback functionality

$('#play-2').on('click', function (e) {
  e.preventDefault();
  $('#player-2')[0].src += '?autoplay=1';
  $('#player-2').show();
  $('#video-cover-2').hide();
  $('#play-2').hide();
  $('#video-heading-2').hide();
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josiahbrown/Desktop/dev/capsule-wp/wp-content/themes/capsule/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3NzMy1hbmltYXRlLWl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20uanMiXSwibmFtZXMiOlsiJCIsInNlbGVjdG9ycyIsImNoZWNrX2JpbmRlZCIsImNoZWNrX2xvY2siLCJkZWZhdWx0cyIsImludGVydmFsIiwiZm9yY2VfcHJvY2VzcyIsIiR3aW5kb3ciLCJ3aW5kb3ciLCIkcHJpb3JfYXBwZWFyZWQiLCJwcm9jZXNzIiwiaW5kZXgiLCJsZW5ndGgiLCIkYXBwZWFyZWQiLCJmaWx0ZXIiLCJpcyIsInRyaWdnZXIiLCIkZGlzYXBwZWFyZWQiLCJub3QiLCJleHByIiwiZWxlbWVudCIsIiRlbGVtZW50Iiwid2luZG93X2xlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93X3RvcCIsInNjcm9sbFRvcCIsIm9mZnNldCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJkYXRhIiwid2lkdGgiLCJmbiIsImV4dGVuZCIsImFwcGVhciIsIm9wdGlvbnMiLCJvcHRzIiwic2VsZWN0b3IiLCJvbl9jaGVjayIsInNldFRpbWVvdXQiLCJzY3JvbGwiLCJyZXNpemUiLCJwdXNoIiwiZm9yY2VfYXBwZWFyIiwialF1ZXJ5IiwiY2FjaGUiLCJkb1RpbWVvdXQiLCJhcHMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwicF9kb1RpbWVvdXQiLCJhcHBseSIsImNvbmNhdCIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmdzIiwicmVzdWx0IiwianF1ZXJ5X2RhdGFfa2V5IiwidGhhdCIsImVsZW0iLCJtZXRob2RfYmFzZSIsInNsaWNlX2FyZ3MiLCJpZCIsImRlbGF5IiwiY2FsbGJhY2siLCJlcSIsImNsZWFyVGltZW91dCIsImNsZWFudXAiLCJyZW1vdmVEYXRhIiwiYWN0dWFsbHlfc2V0VGltZW91dCIsIm5vX3BvbGxpbmdfbG9vcCIsInVuZGVmaW5lZCIsImNsaWNrIiwidGFyZ2V0IiwiYXR0ciIsImZpcnN0SWQiLCJsYXN0SWQiLCJudW1iZXIiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5Iiwib24iLCJlIiwiJGFmZmVjdGVkIiwiZWxlIiwiZmluZCIsInBhcmVudCIsInJlYWR5Iiwib2Zmc2V0X29wYWNpdHkiLCJzY3JvbGxfdG9wX2R1cmF0aW9uIiwiJGJhY2tfdG9fdG9wIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJkIiwiYWNjb3JkaW9uVG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRBcmlhIiwic2V0QWNjb3JkaW9uQXJpYSIsInN3aXRjaEFjY29yZGlvbiIsInRvdWNoU3VwcG9ydGVkIiwicG9pbnRlclN1cHBvcnRlZCIsInNraXBDbGlja0RlbGF5Iiwic2V0QXJpYUF0dHIiLCJlbCIsImFyaWFUeXBlIiwibmV3UHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJlbDEiLCJlbDIiLCJleHBhbmRlZCIsInRoaXNBbnN3ZXIiLCJwYXJlbnROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGhpc1F1ZXN0aW9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJpIiwibGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIiRib2R5IiwiJGhlYWRlciIsIiRiYW5uZXIiLCJzY3JvbGxleCIsImJvdHRvbSIsIm91dGVySGVpZ2h0IiwidGVybWluYXRlIiwiZW50ZXIiLCJsZWF2ZSIsIiRtZW51IiwiX2xvY2tlZCIsIl9sb2NrIiwiX3Nob3ciLCJfaGlkZSIsIl90b2dnbGUiLCJ0b2dnbGVDbGFzcyIsImFwcGVuZFRvIiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaHJlZiIsImxvY2F0aW9uIiwia2V5Q29kZSIsImRlc2MiLCJhY2ZfdmFycyIsImxpc3RfcGFyZW50IiwiYXJyYXkiLCJyZWR1Y2UiLCJyIiwibyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsInBhdGhuYW1lIiwiZ2Zvcm0iLCJhZGRGaWx0ZXIiLCJvcHRpb25zT2JqIiwiZm9ybUlkIiwiZmllbGRJZCIsIm5ld0RhdGUiLCJEYXRlIiwidG9kYXlzRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImRpc2FibGVkRGF5cyIsIm1pbkRhdGUiLCJmaXJzdERheSIsImJlZm9yZVNob3dEYXkiLCJkYXRlIiwiZ2V0RGF5IiwiY2hlY2tkYXRlIiwiZGF0ZXBpY2tlciIsImZvcm1hdERhdGUiLCJpbmRleE9mIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJkZXNpcmVkRGVsaXZlcnlEYXRlIiwiZ2V0IiwiZGVzaXJlZERlbGl2ZXJ5RGF0ZUZvcm1hdHRlZCIsInJERCIsImdldEVsZW1lbnRCeUlkIiwiZGVmYXVsdFZhbHVlIiwiemlwczc1Iiwiemlwczg1IiwiemlwczEwMCIsInppcHMxMjUiLCJzdGFydGluZ1ppcCIsImVuZGluZ1ppcCIsInRDb3N0U3RhcnRpbmciLCJ0Q29zdEVuZGluZyIsInRDb3N0IiwidmFsdWUiLCJwYXJzZUludCIsInZhbCIsImNoYW5nZSIsImluQXJyYXkiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJuYW1lIiwidXJsIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkeW5hbWljQ29udGVudCIsInRleHQiLCJoaWRlIiwic3JjIiwic2hvdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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Q1gsT0EzQ1csRUE0Q1gsT0E1Q1csRUE2Q1gsT0E3Q1csRUE4Q1gsT0E5Q1csRUErQ1gsT0EvQ1csRUFnRFgsT0FoRFcsRUFpRFgsT0FqRFcsRUFrRFgsT0FsRFcsRUFtRFgsT0FuRFcsRUFvRFgsT0FwRFcsRUFxRFgsT0FyRFcsRUFzRFgsT0F0RFcsRUF1RFgsT0F2RFcsRUF3RFgsT0F4RFcsRUF5RFgsT0F6RFcsRUEwRFgsT0ExRFcsRUEyRFgsT0EzRFcsRUE0RFgsT0E1RFcsRUE2RFgsT0E3RFcsRUE4RFgsT0E5RFcsRUErRFgsT0EvRFcsRUFnRVgsT0FoRVcsRUFpRVgsT0FqRVcsRUFrRVgsT0FsRVcsRUFtRVgsT0FuRVcsRUFvRVgsT0FwRVcsRUFxRVgsT0FyRVcsRUFzRVgsT0F0RVcsRUF1RVgsT0F2RVcsRUF3RVgsT0F4RVcsRUF5RVgsT0F6RVcsRUEwRVgsT0ExRVcsRUEyRVgsT0EzRVcsRUE0RVgsT0E1RVcsRUE2RVgsT0E3RVcsRUE4RVgsT0E5RVcsRUErRVgsT0EvRVcsRUFnRlgsT0FoRlcsRUFpRlgsT0FqRlcsRUFrRlgsT0FsRlcsRUFtRlgsT0FuRlcsRUFvRlgsT0FwRlcsRUFxRlgsT0FyRlcsRUFzRlgsT0F0RlcsRUF1RlgsT0F2RlcsRUF3RlgsT0F4RlcsRUF5RlgsT0F6RlcsRUEwRlgsT0ExRlcsRUEyRlgsT0EzRlcsRUE0RlgsT0E1RlcsRUE2RlgsT0E3RlcsRUE4RlgsT0E5RlcsRUErRlgsT0EvRlcsRUFnR1gsT0FoR1csRUFpR1gsT0FqR1csRUFrR1gsT0FsR1csRUFtR1gsT0FuR1csRUFvR1gsT0FwR1csRUFxR1gsT0FyR1csRUFzR1gsT0F0R1csRUF1R1gsT0F2R1csRUF3R1gsT0F4R1csRUF5R1gsT0F6R1csRUEwR1gsT0ExR1csRUEyR1gsT0EzR1csRUE0R1gsT0E1R1csRUE2R1gsT0E3R1csRUE4R1gsT0E5R1csRUErR1gsT0EvR1csRUFnSFgsT0FoSFcsRUFpSFgsT0FqSFcsRUFrSFgsT0FsSFcsRUFtSFgsT0FuSFcsRUFvSFgsT0FwSFcsRUFxSFgsT0FySFcsRUFzSFgsT0F0SFcsRUF1SFgsT0F2SFcsRUF3SFgsT0F4SFcsRUF5SFgsT0F6SFcsRUEwSFgsT0ExSFcsRUEySFgsT0EzSFcsRUE0SFgsT0E1SFcsRUE2SFgsT0E3SFcsRUE4SFgsT0E5SFcsRUErSFgsT0EvSFcsRUFnSVgsT0FoSVcsRUFpSVgsT0FqSVcsRUFrSVgsT0FsSVcsRUFtSVgsT0FuSVcsRUFvSVgsT0FwSVcsRUFxSVgsT0FySVcsRUFzSVgsT0F0SVcsRUF1SVgsT0F2SVcsRUF3SVgsT0F4SVcsRUF5SVgsT0F6SVcsRUEwSVgsT0ExSVcsRUEySVgsT0EzSVcsRUE0SVgsT0E1SVcsRUE2SVgsT0E3SVcsRUE4SVgsT0E5SVcsRUErSVgsT0EvSVcsRUFnSlgsT0FoSlcsRUFpSlgsT0FqSlcsRUFrSlgsT0FsSlcsRUFtSlgsT0FuSlcsRUFvSlgsT0FwSlcsRUFxSlgsT0FySlcsRUFzSlgsT0F0SlcsRUF1SlgsT0F2SlcsRUF3SlgsT0F4SlcsRUF5SlgsT0F6SlcsQ0FBYjtBQTJKQSxJQUFJQyxNQUFNLEdBQUcsQ0FDWDtBQUNBLE9BRlcsRUFHWCxPQUhXLEVBSVgsT0FKVyxFQUtYLE9BTFcsRUFNWCxPQU5XLEVBT1gsT0FQVyxFQVFYLE9BUlcsRUFTWCxPQVRXLEVBVVgsT0FWVyxFQVdYLE9BWFcsRUFZWCxPQVpXLEVBYVgsT0FiVyxFQWNYLE9BZFcsRUFlWCxPQWZXLEVBZ0JYLE9BaEJXLENBQWI7QUFrQkEsSUFBSUMsT0FBTyxHQUFHLENBQ1o7QUFDQSxPQUZZLEVBR1osT0FIWSxFQUlaLE9BSlksRUFLWixPQUxZLEVBTVosT0FOWSxFQU9aLE9BUFksRUFRWixPQVJZLEVBU1osT0FUWSxFQVVaLE9BVlksRUFXWixPQVhZLEVBWVosT0FaWSxFQWFaLE9BYlksRUFjWixPQWRZLEVBZVosT0FmWSxFQWdCWixPQWhCWSxFQWlCWixPQWpCWSxFQWtCWixPQWxCWSxFQW1CWixPQW5CWSxFQW9CWixPQXBCWSxFQXFCWixPQXJCWSxFQXNCWixPQXRCWSxFQXVCWixPQXZCWSxFQXdCWixPQXhCWSxFQXlCWixPQXpCWSxFQTBCWixPQTFCWSxFQTJCWixPQTNCWSxFQTRCWixPQTVCWSxFQTZCWixPQTdCWSxFQThCWixPQTlCWSxFQStCWixPQS9CWSxFQWdDWixPQWhDWSxFQWlDWixPQWpDWSxFQWtDWixPQWxDWSxFQW1DWixPQW5DWSxFQW9DWixPQXBDWSxFQXFDWixPQXJDWSxFQXNDWixPQXRDWSxFQXVDWixPQXZDWSxFQXdDWixPQXhDWSxFQXlDWixPQXpDWSxFQTBDWixPQTFDWSxFQTJDWixPQTNDWSxFQTRDWixPQTVDWSxFQTZDWixPQTdDWSxFQThDWixPQTlDWSxFQStDWixPQS9DWSxFQWdEWixPQWhEWSxFQWlEWixPQWpEWSxFQWtEWixPQWxEWSxFQW1EWixPQW5EWSxFQW9EWixPQXBEWSxFQXFEWixPQXJEWSxFQXNEWixPQXREWSxFQXVEWixPQXZEWSxFQXdEWixPQXhEWSxFQXlEWixPQXpEWSxFQTBEWixPQTFEWSxFQTJEWixPQTNEWSxFQTREWixPQTVEWSxFQTZEWixPQTdEWSxFQThEWixPQTlEWSxFQStEWixPQS9EWSxFQWdFWixPQWhFWSxFQWlFWixPQWpFWSxFQWtFWixPQWxFWSxFQW1FWixPQW5FWSxFQW9FWixPQXBFWSxFQXFFWixPQXJFWSxFQXNFWixPQXRFWSxFQXVFWixPQXZFWSxFQXdFWixPQXhFWSxFQXlFWixPQXpFWSxFQTBFWixPQTFFWSxFQTJFWixPQTNFWSxFQTRFWixPQTVFWSxFQTZFWixPQTdFWSxFQThFWixPQTlFWSxFQStFWixPQS9FWSxFQWdGWixPQWhGWSxFQWlGWixPQWpGWSxFQWtGWixPQWxGWSxFQW1GWixPQW5GWSxFQW9GWixPQXBGWSxFQXFGWixPQXJGWSxFQXNGWixPQXRGWSxFQXVGWixPQXZGWSxFQXdGWixPQXhGWSxFQXlGWixPQXpGWSxFQTBGWixPQTFGWSxFQTJGWixPQTNGWSxFQTRGWixPQTVGWSxFQTZGWixPQTdGWSxFQThGWixPQTlGWSxFQStGWixPQS9GWSxFQWdHWixPQWhHWSxFQWlHWixPQWpHWSxFQWtHWixPQWxHWSxFQW1HWixPQW5HWSxFQW9HWixPQXBHWSxFQXFHWixPQXJHWSxFQXNHWixPQXRHWSxFQXVHWixPQXZHWSxFQXdHWixPQXhHWSxFQXlHWixPQXpHWSxFQTBHWixPQTFHWSxFQTJHWixPQTNHWSxFQTRHWixPQTVHWSxFQTZHWixPQTdHWSxFQThHWixPQTlHWSxFQStHWixPQS9HWSxFQWdIWixPQWhIWSxFQWlIWixPQWpIWSxFQWtIWixPQWxIWSxFQW1IWixPQW5IWSxFQW9IWixPQXBIWSxFQXFIWixPQXJIWSxFQXNIWixPQXRIWSxFQXVIWixPQXZIWSxFQXdIWixPQXhIWSxFQXlIWixPQXpIWSxFQTBIWixPQTFIWSxFQTJIWixPQTNIWSxFQTRIWixPQTVIWSxFQTZIWixPQTdIWSxFQThIWixPQTlIWSxFQStIWixPQS9IWSxFQWdJWixPQWhJWSxFQWlJWixPQWpJWSxFQWtJWixPQWxJWSxFQW1JWixPQW5JWSxFQW9JWixPQXBJWSxFQXFJWixPQXJJWSxFQXNJWixPQXRJWSxFQXVJWixPQXZJWSxFQXdJWixPQXhJWSxFQXlJWixPQXpJWSxFQTBJWixPQTFJWSxFQTJJWixPQTNJWSxFQTRJWixPQTVJWSxFQTZJWixPQTdJWSxFQThJWixPQTlJWSxFQStJWixPQS9JWSxFQWdKWixPQWhKWSxFQWlKWixPQWpKWSxFQWtKWixPQWxKWSxFQW1KWixPQW5KWSxFQW9KWixPQXBKWSxFQXFKWixPQXJKWSxFQXNKWixPQXRKWSxFQXVKWixPQXZKWSxFQXdKWixPQXhKWSxFQXlKWixPQXpKWSxFQTBKWixPQTFKWSxFQTJKWixPQTNKWSxFQTRKWixPQTVKWSxFQTZKWixPQTdKWSxFQThKWixPQTlKWSxFQStKWixPQS9KWSxFQWdLWixPQWhLWSxFQWlLWixPQWpLWSxFQWtLWixPQWxLWSxFQW1LWixPQW5LWSxFQW9LWixPQXBLWSxFQXFLWixPQXJLWSxFQXNLWixPQXRLWSxFQXVLWixPQXZLWSxFQXdLWixPQXhLWSxFQXlLWixPQXpLWSxFQTBLWixPQTFLWSxFQTJLWixPQTNLWSxFQTRLWixPQTVLWSxFQTZLWixPQTdLWSxFQThLWixPQTlLWSxFQStLWixP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QXlCLGFBQXpCO0FBQ0EzTixHQUFDLENBQUMsV0FBRCxDQUFELENBQWU0TixJQUFmO0FBQ0E1TixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjBOLElBQXBCO0FBQ0ExTixHQUFDLENBQUMsU0FBRCxDQUFELENBQWEwTixJQUFiO0FBQ0ExTixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjBOLElBQXRCO0FBQ0QsQ0FQRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGltcG9ydCAnLi9icm93c2VyLm1pbic7XG4vLyBpbXBvcnQgJy4vYnJlYWtwb2ludHMubWluJztcbi8vIGltcG9ydCAnLi91dGlsJztcbi8vIGltcG9ydCAnLi9icmFuZHMubWluJztcbi8vIGltcG9ydCAnLi9zb2xpZC5taW4nO1xuLy8gaW1wb3J0ICcuL2ZvbnRhd2Vzb21lLm1pbic7XG5pbXBvcnQgJy4vY3NzMy1hbmltYXRlLWl0JztcbmltcG9ydCAnLi9jdXN0b20nO1xuIiwiLypcbiAqIENTUzMgQW5pbWF0ZSBpdFxuICogQ29weXJpZ2h0IChjKSAyMDE0IEphY2sgTWNDb3VydFxuICogaHR0cHM6Ly9naXRodWIuY29tL2tyaWVnYXIvY3NzMy1hbmltYXRlLWl0XG4gKiBWZXJzaW9uOiAwLjEuMFxuICogXG4gKiBJIHV0aWxpc2UgdGhlIGpRdWVyeS5hcHBlYXIgcGx1Z2luIHdpdGhpbiB0aGlzIGphdmFzY3JpcHQgZmlsZSBzbyBoZXJlIGlzIGEgbGluayB0byB0aGF0IHRvb1xuICogaHR0cHM6Ly9naXRodWIuY29tL21vcnIvanF1ZXJ5LmFwcGVhclxuICpcbiAqIEkgYWxzbyB1dGlsaXNlIHRoZSBqUXVlcnkuZG9UaW1lb3V0IHBsdWdpbiBmb3IgdGhlIGRhdGEtc2VxdWVuY2UgZnVuY3Rpb25hbGl0eSBzbyBoZXJlIGlzIGEgbGluayBiYWNrIHRvIHRoZW0uXG4gKiBodHRwOi8vYmVuYWxtYW4uY29tL3Byb2plY3RzL2pxdWVyeS1kb3RpbWVvdXQtcGx1Z2luL1xuICovXG4oZnVuY3Rpb24oJCkge1xuICB2YXIgc2VsZWN0b3JzID0gW107XG5cbiAgdmFyIGNoZWNrX2JpbmRlZCA9IGZhbHNlO1xuICB2YXIgY2hlY2tfbG9jayA9IGZhbHNlO1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgaW50ZXJ2YWw6IDI1MCxcbiAgICBmb3JjZV9wcm9jZXNzOiBmYWxzZVxuICB9XG4gIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xuXG4gIHZhciAkcHJpb3JfYXBwZWFyZWQ7XG5cbiAgZnVuY3Rpb24gcHJvY2VzcygpIHtcbiAgICBjaGVja19sb2NrID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHNlbGVjdG9ycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciAkYXBwZWFyZWQgPSAkKHNlbGVjdG9yc1tpbmRleF0pLmZpbHRlcihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykuaXMoJzphcHBlYXJlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgICRhcHBlYXJlZC50cmlnZ2VyKCdhcHBlYXInLCBbJGFwcGVhcmVkXSk7XG5cbiAgICAgIGlmICgkcHJpb3JfYXBwZWFyZWQpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciAkZGlzYXBwZWFyZWQgPSAkcHJpb3JfYXBwZWFyZWQubm90KCRhcHBlYXJlZCk7XG4gICAgICAgICRkaXNhcHBlYXJlZC50cmlnZ2VyKCdkaXNhcHBlYXInLCBbJGRpc2FwcGVhcmVkXSk7XG4gICAgICB9XG4gICAgICAkcHJpb3JfYXBwZWFyZWQgPSAkYXBwZWFyZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gXCJhcHBlYXJlZFwiIGN1c3RvbSBmaWx0ZXJcbiAgJC5leHByWyc6J11bJ2FwcGVhcmVkJ10gPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICBpZiAoISRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHdpbmRvd19sZWZ0ID0gJHdpbmRvdy5zY3JvbGxMZWZ0KCk7XG4gICAgdmFyIHdpbmRvd190b3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xuICAgIHZhciBvZmZzZXQgPSAkZWxlbWVudC5vZmZzZXQoKTtcbiAgICB2YXIgbGVmdCA9IG9mZnNldC5sZWZ0O1xuICAgIHZhciB0b3AgPSBvZmZzZXQudG9wO1xuXG4gICAgaWYgKHRvcCArICRlbGVtZW50LmhlaWdodCgpID49IHdpbmRvd190b3AgJiZcbiAgICAgICAgdG9wIC0gKCRlbGVtZW50LmRhdGEoJ2FwcGVhci10b3Atb2Zmc2V0JykgfHwgMCkgPD0gd2luZG93X3RvcCArICR3aW5kb3cuaGVpZ2h0KCkgJiZcbiAgICAgICAgbGVmdCArICRlbGVtZW50LndpZHRoKCkgPj0gd2luZG93X2xlZnQgJiZcbiAgICAgICAgbGVmdCAtICgkZWxlbWVudC5kYXRhKCdhcHBlYXItbGVmdC1vZmZzZXQnKSB8fCAwKSA8PSB3aW5kb3dfbGVmdCArICR3aW5kb3cud2lkdGgoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAkLmZuLmV4dGVuZCh7XG4gICAgLy8gd2F0Y2hpbmcgZm9yIGVsZW1lbnQncyBhcHBlYXJhbmNlIGluIGJyb3dzZXIgdmlld3BvcnRcbiAgICBhcHBlYXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBvcHRzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcbiAgICAgIHZhciBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgfHwgdGhpcztcbiAgICAgIGlmICghY2hlY2tfYmluZGVkKSB7XG4gICAgICAgIHZhciBvbl9jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChjaGVja19sb2NrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrX2xvY2sgPSB0cnVlO1xuXG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzLCBvcHRzLmludGVydmFsKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKG9uX2NoZWNrKS5yZXNpemUob25fY2hlY2spO1xuICAgICAgICBjaGVja19iaW5kZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5mb3JjZV9wcm9jZXNzKSB7XG4gICAgICAgIHNldFRpbWVvdXQocHJvY2Vzcywgb3B0cy5pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgICBzZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG4gICAgICByZXR1cm4gJChzZWxlY3Rvcik7XG4gICAgfVxuICB9KTtcblxuICAkLmV4dGVuZCh7XG4gICAgLy8gZm9yY2UgZWxlbWVudHMncyBhcHBlYXJhbmNlIGNoZWNrXG4gICAgZm9yY2VfYXBwZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChjaGVja19iaW5kZWQpIHtcbiAgICAgICAgcHJvY2VzcygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn0pKGpRdWVyeSk7XG5cblxuXG4vKiFcbiAqIGpRdWVyeSBkb1RpbWVvdXQ6IExpa2Ugc2V0VGltZW91dCwgYnV0IGJldHRlciEgLSB2MS4wIC0gMy8zLzIwMTBcbiAqIGh0dHA6Ly9iZW5hbG1hbi5jb20vcHJvamVjdHMvanF1ZXJ5LWRvdGltZW91dC1wbHVnaW4vXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxMCBcIkNvd2JveVwiIEJlbiBBbG1hblxuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXG4gKiBodHRwOi8vYmVuYWxtYW4uY29tL2Fib3V0L2xpY2Vuc2UvXG4gKi9cblxuLy8gU2NyaXB0OiBqUXVlcnkgZG9UaW1lb3V0OiBMaWtlIHNldFRpbWVvdXQsIGJ1dCBiZXR0ZXIhXG4vL1xuLy8gKlZlcnNpb246IDEuMCwgTGFzdCB1cGRhdGVkOiAzLzMvMjAxMCpcbi8vIFxuLy8gUHJvamVjdCBIb21lIC0gaHR0cDovL2JlbmFsbWFuLmNvbS9wcm9qZWN0cy9qcXVlcnktZG90aW1lb3V0LXBsdWdpbi9cbi8vIEdpdEh1YiAgICAgICAtIGh0dHA6Ly9naXRodWIuY29tL2Nvd2JveS9qcXVlcnktZG90aW1lb3V0L1xuLy8gU291cmNlICAgICAgIC0gaHR0cDovL2dpdGh1Yi5jb20vY293Ym95L2pxdWVyeS1kb3RpbWVvdXQvcmF3L21hc3Rlci9qcXVlcnkuYmEtZG90aW1lb3V0LmpzXG4vLyAoTWluaWZpZWQpICAgLSBodHRwOi8vZ2l0aHViLmNvbS9jb3dib3kvanF1ZXJ5LWRvdGltZW91dC9yYXcvbWFzdGVyL2pxdWVyeS5iYS1kb3RpbWVvdXQubWluLmpzICgxLjBrYilcbi8vIFxuLy8gQWJvdXQ6IExpY2Vuc2Vcbi8vIFxuLy8gQ29weXJpZ2h0IChjKSAyMDEwIFwiQ293Ym95XCIgQmVuIEFsbWFuLFxuLy8gRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXG4vLyBodHRwOi8vYmVuYWxtYW4uY29tL2Fib3V0L2xpY2Vuc2UvXG4vLyBcbi8vIEFib3V0OiBFeGFtcGxlc1xuLy8gXG4vLyBUaGVzZSB3b3JraW5nIGV4YW1wbGVzLCBjb21wbGV0ZSB3aXRoIGZ1bGx5IGNvbW1lbnRlZCBjb2RlLCBpbGx1c3RyYXRlIGEgZmV3XG4vLyB3YXlzIGluIHdoaWNoIHRoaXMgcGx1Z2luIGNhbiBiZSB1c2VkLlxuLy8gXG4vLyBEZWJvdW5jaW5nICAgICAgLSBodHRwOi8vYmVuYWxtYW4uY29tL2NvZGUvcHJvamVjdHMvanF1ZXJ5LWRvdGltZW91dC9leGFtcGxlcy9kZWJvdW5jaW5nL1xuLy8gRGVsYXlzLCBQb2xsaW5nIC0gaHR0cDovL2JlbmFsbWFuLmNvbS9jb2RlL3Byb2plY3RzL2pxdWVyeS1kb3RpbWVvdXQvZXhhbXBsZXMvZGVsYXktcG9sbC9cbi8vIEhvdmVyIEludGVudCAgICAtIGh0dHA6Ly9iZW5hbG1hbi5jb20vY29kZS9wcm9qZWN0cy9qcXVlcnktZG90aW1lb3V0L2V4YW1wbGVzL2hvdmVyaW50ZW50L1xuLy8gXG4vLyBBYm91dDogU3VwcG9ydCBhbmQgVGVzdGluZ1xuLy8gXG4vLyBJbmZvcm1hdGlvbiBhYm91dCB3aGF0IHZlcnNpb24gb3IgdmVyc2lvbnMgb2YgalF1ZXJ5IHRoaXMgcGx1Z2luIGhhcyBiZWVuXG4vLyB0ZXN0ZWQgd2l0aCwgd2hhdCBicm93c2VycyBpdCBoYXMgYmVlbiB0ZXN0ZWQgaW4sIGFuZCB3aGVyZSB0aGUgdW5pdCB0ZXN0c1xuLy8gcmVzaWRlIChzbyB5b3UgY2FuIHRlc3QgaXQgeW91cnNlbGYpLlxuLy8gXG4vLyBqUXVlcnkgVmVyc2lvbnMgLSAxLjMuMiwgMS40LjJcbi8vIEJyb3dzZXJzIFRlc3RlZCAtIEludGVybmV0IEV4cGxvcmVyIDYtOCwgRmlyZWZveCAyLTMuNiwgU2FmYXJpIDMtNCwgQ2hyb21lIDQtNSwgT3BlcmEgOS42LTEwLjEuXG4vLyBVbml0IFRlc3RzICAgICAgLSBodHRwOi8vYmVuYWxtYW4uY29tL2NvZGUvcHJvamVjdHMvanF1ZXJ5LWRvdGltZW91dC91bml0L1xuLy8gXG4vLyBBYm91dDogUmVsZWFzZSBIaXN0b3J5XG4vLyBcbi8vIDEuMCAtICgzLzMvMjAxMCkgQ2FsbGJhY2sgY2FuIG5vdyBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCB3aWxsIGNhbGxcbi8vICAgICAgIHRoZSBhcHByb3ByaWF0ZSAkLm1ldGhvZCBvciAkLmZuLm1ldGhvZCwgZGVwZW5kaW5nIG9uIHdoZXJlIC5kb1RpbWVvdXRcbi8vICAgICAgIHdhcyBjYWxsZWQuIENhbGxiYWNrIG11c3Qgbm93IHJldHVybiBgdHJ1ZWAgKG5vdCBqdXN0IGEgdHJ1dGh5IHZhbHVlKVxuLy8gICAgICAgdG8gcG9sbC5cbi8vIDAuNCAtICg3LzE1LzIwMDkpIE1hZGUgdGhlIFwiaWRcIiBhcmd1bWVudCBvcHRpb25hbCwgc29tZSBvdGhlciBtaW5vciB0d2Vha3Ncbi8vIDAuMyAtICg2LzI1LzIwMDkpIEluaXRpYWwgcmVsZWFzZVxuXG4oZnVuY3Rpb24oJCl7XG4gICckOm5vbXVuZ2UnOyAvLyBVc2VkIGJ5IFlVSSBjb21wcmVzc29yLlxuICBcbiAgdmFyIGNhY2hlID0ge30sXG4gICAgXG4gICAgLy8gUmV1c2VkIGludGVybmFsIHN0cmluZy5cbiAgICBkb1RpbWVvdXQgPSAnZG9UaW1lb3V0JyxcbiAgICBcbiAgICAvLyBBIGNvbnZlbmllbnQgc2hvcnRjdXQuXG4gICAgYXBzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICBcbiAgLy8gTWV0aG9kOiBqUXVlcnkuZG9UaW1lb3V0XG4gIC8vIFxuICAvLyBJbml0aWFsaXplLCBjYW5jZWwsIG9yIGZvcmNlIGV4ZWN1dGlvbiBvZiBhIGNhbGxiYWNrIGFmdGVyIGEgZGVsYXkuXG4gIC8vIFxuICAvLyBJZiBkZWxheSBhbmQgY2FsbGJhY2sgYXJlIHNwZWNpZmllZCwgYSBkb1RpbWVvdXQgaXMgaW5pdGlhbGl6ZWQuIFRoZVxuICAvLyBjYWxsYmFjayB3aWxsIGV4ZWN1dGUsIGFzeW5jaHJvbm91c2x5LCBhZnRlciB0aGUgZGVsYXkuIElmIGFuIGlkIGlzXG4gIC8vIHNwZWNpZmllZCwgdGhpcyBkb1RpbWVvdXQgd2lsbCBvdmVycmlkZSBhbmQgY2FuY2VsIGFueSBleGlzdGluZyBkb1RpbWVvdXRcbiAgLy8gd2l0aCB0aGUgc2FtZSBpZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgcGFzc2VkIGludG8gY2FsbGJhY2tcbiAgLy8gd2hlbiBpdCBpcyBleGVjdXRlZC5cbiAgLy8gXG4gIC8vIElmIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUsIHRoZSBkb1RpbWVvdXQgbG9vcCB3aWxsIGV4ZWN1dGUgYWdhaW4sIGFmdGVyXG4gIC8vIHRoZSBkZWxheSwgY3JlYXRpbmcgYSBwb2xsaW5nIGxvb3AgdW50aWwgdGhlIGNhbGxiYWNrIHJldHVybnMgYSBub24tdHJ1ZVxuICAvLyB2YWx1ZS5cbiAgLy8gXG4gIC8vIE5vdGUgdGhhdCBpZiBhbiBpZCBpcyBub3QgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCwgdGhpcyBkb1RpbWVvdXQgd2lsbFxuICAvLyBOT1QgYmUgYWJsZSB0byBiZSBtYW51YWxseSBjYW5jZWxlZCBvciBmb3JjZWQuIChmb3IgZGVib3VuY2luZywgYmUgc3VyZSB0b1xuICAvLyBzcGVjaWZ5IGFuIGlkKS5cbiAgLy8gXG4gIC8vIElmIGlkIGlzIHNwZWNpZmllZCwgYnV0IGRlbGF5IGFuZCBjYWxsYmFjayBhcmUgbm90LCB0aGUgZG9UaW1lb3V0IHdpbGwgYmVcbiAgLy8gY2FuY2VsZWQgd2l0aG91dCBleGVjdXRpbmcgdGhlIGNhbGxiYWNrLiBJZiBmb3JjZV9tb2RlIGlzIHNwZWNpZmllZCwgdGhlXG4gIC8vIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQsIHN5bmNocm9ub3VzbHksIGJ1dCB3aWxsIG9ubHkgYmUgYWxsb3dlZCB0b1xuICAvLyBjb250aW51ZSBhIHBvbGxpbmcgbG9vcCBpZiBmb3JjZV9tb2RlIGlzIHRydWUgKHByb3ZpZGVkIHRoZSBjYWxsYmFja1xuICAvLyByZXR1cm5zIHRydWUsIG9mIGNvdXJzZSkuIElmIGZvcmNlX21vZGUgaXMgZmFsc2UsIG5vIHBvbGxpbmcgbG9vcCB3aWxsXG4gIC8vIGNvbnRpbnVlLCBldmVuIGlmIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUuXG4gIC8vIFxuICAvLyBVc2FnZTpcbiAgLy8gXG4gIC8vID4galF1ZXJ5LmRvVGltZW91dCggWyBpZCwgXSBkZWxheSwgY2FsbGJhY2sgWywgYXJnIC4uLiBdICk7XG4gIC8vID4galF1ZXJ5LmRvVGltZW91dCggaWQgWywgZm9yY2VfbW9kZSBdICk7XG4gIC8vIFxuICAvLyBBcmd1bWVudHM6XG4gIC8vIFxuICAvLyAgaWQgLSAoU3RyaW5nKSBBbiBvcHRpb25hbCB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBkb1RpbWVvdXQuIElmIGlkIGlzXG4gIC8vICAgIG5vdCBzcGVjaWZpZWQsIHRoZSBkb1RpbWVvdXQgd2lsbCBOT1QgYmUgYWJsZSB0byBiZSBtYW51YWxseSBjYW5jZWxlZCBvclxuICAvLyAgICBmb3JjZWQuXG4gIC8vICBkZWxheSAtIChOdW1iZXIpIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcyBhZnRlciB3aGljaFxuICAvLyAgICBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkLiBcbiAgLy8gIGNhbGxiYWNrIC0gKEZ1bmN0aW9uKSBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy5cbiAgLy8gIGNhbGxiYWNrIC0gKFN0cmluZykgQSBqUXVlcnkgbWV0aG9kIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5XG4gIC8vICAgIG1pbGxpc2Vjb25kcy4gVGhpcyBtZXRob2Qgd2lsbCBvbmx5IHBvbGwgaWYgaXQgZXhwbGljaXRseSByZXR1cm5zXG4gIC8vICAgIHRydWUuXG4gIC8vICBmb3JjZV9tb2RlIC0gKEJvb2xlYW4pIElmIHRydWUsIGV4ZWN1dGUgdGhhdCBpZCdzIGRvVGltZW91dCBjYWxsYmFja1xuICAvLyAgICBpbW1lZGlhdGVseSBhbmQgc3luY2hyb25vdXNseSwgY29udGludWluZyBhbnkgY2FsbGJhY2sgcmV0dXJuLXRydWVcbiAgLy8gICAgcG9sbGluZyBsb29wLiBJZiBmYWxzZSwgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgYW5kXG4gIC8vICAgIHN5bmNocm9ub3VzbHkgYnV0IGRvIE5PVCBjb250aW51ZSBhIGNhbGxiYWNrIHJldHVybi10cnVlIHBvbGxpbmcgbG9vcC5cbiAgLy8gICAgSWYgb21pdHRlZCwgY2FuY2VsIHRoYXQgaWQncyBkb1RpbWVvdXQuXG4gIC8vIFxuICAvLyBSZXR1cm5zOlxuICAvLyBcbiAgLy8gIElmIGZvcmNlX21vZGUgaXMgdHJ1ZSwgZmFsc2Ugb3IgdW5kZWZpbmVkIGFuZCB0aGVyZSBpcyBhXG4gIC8vICB5ZXQtdG8tYmUtZXhlY3V0ZWQgY2FsbGJhY2sgdG8gY2FuY2VsLCB0cnVlIGlzIHJldHVybmVkLCBidXQgaWYgbm9cbiAgLy8gIGNhbGxiYWNrIHJlbWFpbnMgdG8gYmUgZXhlY3V0ZWQsIHVuZGVmaW5lZCBpcyByZXR1cm5lZC5cbiAgXG4gICRbZG9UaW1lb3V0XSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwX2RvVGltZW91dC5hcHBseSggd2luZG93LCBbIDAgXS5jb25jYXQoIGFwcy5jYWxsKCBhcmd1bWVudHMgKSApICk7XG4gIH07XG4gIFxuICAvLyBNZXRob2Q6IGpRdWVyeS5mbi5kb1RpbWVvdXRcbiAgLy8gXG4gIC8vIEluaXRpYWxpemUsIGNhbmNlbCwgb3IgZm9yY2UgZXhlY3V0aW9uIG9mIGEgY2FsbGJhY2sgYWZ0ZXIgYSBkZWxheS5cbiAgLy8gT3BlcmF0ZXMgbGlrZSA8alF1ZXJ5LmRvVGltZW91dD4sIGJ1dCB0aGUgcGFzc2VkIGNhbGxiYWNrIGV4ZWN1dGVzIGluIHRoZVxuICAvLyBjb250ZXh0IG9mIHRoZSBqUXVlcnkgY29sbGVjdGlvbiBvZiBlbGVtZW50cywgYW5kIHRoZSBpZCBpcyBzdG9yZWQgYXMgZGF0YVxuICAvLyBvbiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGF0IGNvbGxlY3Rpb24uXG4gIC8vIFxuICAvLyBJZiBkZWxheSBhbmQgY2FsbGJhY2sgYXJlIHNwZWNpZmllZCwgYSBkb1RpbWVvdXQgaXMgaW5pdGlhbGl6ZWQuIFRoZVxuICAvLyBjYWxsYmFjayB3aWxsIGV4ZWN1dGUsIGFzeW5jaHJvbm91c2x5LCBhZnRlciB0aGUgZGVsYXkuIElmIGFuIGlkIGlzXG4gIC8vIHNwZWNpZmllZCwgdGhpcyBkb1RpbWVvdXQgd2lsbCBvdmVycmlkZSBhbmQgY2FuY2VsIGFueSBleGlzdGluZyBkb1RpbWVvdXRcbiAgLy8gd2l0aCB0aGUgc2FtZSBpZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgcGFzc2VkIGludG8gY2FsbGJhY2tcbiAgLy8gd2hlbiBpdCBpcyBleGVjdXRlZC5cbiAgLy8gXG4gIC8vIElmIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUsIHRoZSBkb1RpbWVvdXQgbG9vcCB3aWxsIGV4ZWN1dGUgYWdhaW4sIGFmdGVyXG4gIC8vIHRoZSBkZWxheSwgY3JlYXRpbmcgYSBwb2xsaW5nIGxvb3AgdW50aWwgdGhlIGNhbGxiYWNrIHJldHVybnMgYSBub24tdHJ1ZVxuICAvLyB2YWx1ZS5cbiAgLy8gXG4gIC8vIE5vdGUgdGhhdCBpZiBhbiBpZCBpcyBub3QgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCwgdGhpcyBkb1RpbWVvdXQgd2lsbFxuICAvLyBOT1QgYmUgYWJsZSB0byBiZSBtYW51YWxseSBjYW5jZWxlZCBvciBmb3JjZWQgKGZvciBkZWJvdW5jaW5nLCBiZSBzdXJlIHRvXG4gIC8vIHNwZWNpZnkgYW4gaWQpLlxuICAvLyBcbiAgLy8gSWYgaWQgaXMgc3BlY2lmaWVkLCBidXQgZGVsYXkgYW5kIGNhbGxiYWNrIGFyZSBub3QsIHRoZSBkb1RpbWVvdXQgd2lsbCBiZVxuICAvLyBjYW5jZWxlZCB3aXRob3V0IGV4ZWN1dGluZyB0aGUgY2FsbGJhY2suIElmIGZvcmNlX21vZGUgaXMgc3BlY2lmaWVkLCB0aGVcbiAgLy8gY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCwgc3luY2hyb25vdXNseSwgYnV0IHdpbGwgb25seSBiZSBhbGxvd2VkIHRvXG4gIC8vIGNvbnRpbnVlIGEgcG9sbGluZyBsb29wIGlmIGZvcmNlX21vZGUgaXMgdHJ1ZSAocHJvdmlkZWQgdGhlIGNhbGxiYWNrXG4gIC8vIHJldHVybnMgdHJ1ZSwgb2YgY291cnNlKS4gSWYgZm9yY2VfbW9kZSBpcyBmYWxzZSwgbm8gcG9sbGluZyBsb29wIHdpbGxcbiAgLy8gY29udGludWUsIGV2ZW4gaWYgdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZS5cbiAgLy8gXG4gIC8vIFVzYWdlOlxuICAvLyBcbiAgLy8gPiBqUXVlcnkoJ3NlbGVjdG9yJykuZG9UaW1lb3V0KCBbIGlkLCBdIGRlbGF5LCBjYWxsYmFjayBbLCBhcmcgLi4uIF0gKTtcbiAgLy8gPiBqUXVlcnkoJ3NlbGVjdG9yJykuZG9UaW1lb3V0KCBpZCBbLCBmb3JjZV9tb2RlIF0gKTtcbiAgLy8gXG4gIC8vIEFyZ3VtZW50czpcbiAgLy8gXG4gIC8vICBpZCAtIChTdHJpbmcpIEFuIG9wdGlvbmFsIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGRvVGltZW91dCwgc3RvcmVkIGFzXG4gIC8vICAgIGpRdWVyeSBkYXRhIG9uIHRoZSBlbGVtZW50LiBJZiBpZCBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgZG9UaW1lb3V0IHdpbGxcbiAgLy8gICAgTk9UIGJlIGFibGUgdG8gYmUgbWFudWFsbHkgY2FuY2VsZWQgb3IgZm9yY2VkLlxuICAvLyAgZGVsYXkgLSAoTnVtYmVyKSBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2hcbiAgLy8gICAgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZC4gXG4gIC8vICBjYWxsYmFjayAtIChGdW5jdGlvbikgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuXG4gIC8vICBjYWxsYmFjayAtIChTdHJpbmcpIEEgalF1ZXJ5LmZuIG1ldGhvZCB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheVxuICAvLyAgICBtaWxsaXNlY29uZHMuIFRoaXMgbWV0aG9kIHdpbGwgb25seSBwb2xsIGlmIGl0IGV4cGxpY2l0bHkgcmV0dXJuc1xuICAvLyAgICB0cnVlIChtb3N0IGpRdWVyeS5mbiBtZXRob2RzIHJldHVybiBhIGpRdWVyeSBvYmplY3QsIGFuZCBub3QgYHRydWVgLFxuICAvLyAgICB3aGljaCBhbGxvd3MgdGhlbSB0byBiZSBjaGFpbmVkIGFuZCBwcmV2ZW50cyBwb2xsaW5nKS5cbiAgLy8gIGZvcmNlX21vZGUgLSAoQm9vbGVhbikgSWYgdHJ1ZSwgZXhlY3V0ZSB0aGF0IGlkJ3MgZG9UaW1lb3V0IGNhbGxiYWNrXG4gIC8vICAgIGltbWVkaWF0ZWx5IGFuZCBzeW5jaHJvbm91c2x5LCBjb250aW51aW5nIGFueSBjYWxsYmFjayByZXR1cm4tdHJ1ZVxuICAvLyAgICBwb2xsaW5nIGxvb3AuIElmIGZhbHNlLCBleGVjdXRlIHRoZSBjYWxsYmFjayBpbW1lZGlhdGVseSBhbmRcbiAgLy8gICAgc3luY2hyb25vdXNseSBidXQgZG8gTk9UIGNvbnRpbnVlIGEgY2FsbGJhY2sgcmV0dXJuLXRydWUgcG9sbGluZyBsb29wLlxuICAvLyAgICBJZiBvbWl0dGVkLCBjYW5jZWwgdGhhdCBpZCdzIGRvVGltZW91dC5cbiAgLy8gXG4gIC8vIFJldHVybnM6XG4gIC8vIFxuICAvLyAgV2hlbiBjcmVhdGluZyBhIDxqUXVlcnkuZm4uZG9UaW1lb3V0PiwgdGhlIGluaXRpYWwgalF1ZXJ5IGNvbGxlY3Rpb24gb2ZcbiAgLy8gIGVsZW1lbnRzIGlzIHJldHVybmVkLiBPdGhlcndpc2UsIGlmIGZvcmNlX21vZGUgaXMgdHJ1ZSwgZmFsc2Ugb3IgdW5kZWZpbmVkXG4gIC8vICBhbmQgdGhlcmUgaXMgYSB5ZXQtdG8tYmUtZXhlY3V0ZWQgY2FsbGJhY2sgdG8gY2FuY2VsLCB0cnVlIGlzIHJldHVybmVkLFxuICAvLyAgYnV0IGlmIG5vIGNhbGxiYWNrIHJlbWFpbnMgdG8gYmUgZXhlY3V0ZWQsIHVuZGVmaW5lZCBpcyByZXR1cm5lZC5cbiAgXG4gICQuZm5bZG9UaW1lb3V0XSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXBzLmNhbGwoIGFyZ3VtZW50cyApLFxuICAgICAgcmVzdWx0ID0gcF9kb1RpbWVvdXQuYXBwbHkoIHRoaXMsIFsgZG9UaW1lb3V0ICsgYXJnc1swXSBdLmNvbmNhdCggYXJncyApICk7XG4gICAgXG4gICAgcmV0dXJuIHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnc1sxXSA9PT0gJ251bWJlcidcbiAgICAgID8gdGhpc1xuICAgICAgOiByZXN1bHQ7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBwX2RvVGltZW91dCgganF1ZXJ5X2RhdGFfa2V5ICkge1xuICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgIGVsZW0sXG4gICAgICBkYXRhID0ge30sXG4gICAgICBcbiAgICAgIC8vIEFsbG93cyB0aGUgcGx1Z2luIHRvIGNhbGwgYSBzdHJpbmcgY2FsbGJhY2sgbWV0aG9kLlxuICAgICAgbWV0aG9kX2Jhc2UgPSBqcXVlcnlfZGF0YV9rZXkgPyAkLmZuIDogJCxcbiAgICAgIFxuICAgICAgLy8gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICBzbGljZV9hcmdzID0gNCxcbiAgICAgIFxuICAgICAgaWQgICAgICAgID0gYXJnc1sxXSxcbiAgICAgIGRlbGF5ICAgICA9IGFyZ3NbMl0sXG4gICAgICBjYWxsYmFjayAgPSBhcmdzWzNdO1xuICAgIFxuICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgIHNsaWNlX2FyZ3MtLTtcbiAgICAgIFxuICAgICAgaWQgICAgICAgID0ganF1ZXJ5X2RhdGFfa2V5ID0gMDtcbiAgICAgIGRlbGF5ICAgICA9IGFyZ3NbMV07XG4gICAgICBjYWxsYmFjayAgPSBhcmdzWzJdO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiBpZCBpcyBwYXNzZWQsIHN0b3JlIGEgZGF0YSByZWZlcmVuY2UgZWl0aGVyIGFzIC5kYXRhIG9uIHRoZSBmaXJzdFxuICAgIC8vIGVsZW1lbnQgaW4gYSBqUXVlcnkgY29sbGVjdGlvbiwgb3IgaW4gdGhlIGludGVybmFsIGNhY2hlLlxuICAgIGlmICgganF1ZXJ5X2RhdGFfa2V5ICkgeyAvLyBOb3RlOiBrZXkgaXMgJ2RvVGltZW91dCcgKyBpZFxuICAgICAgXG4gICAgICAvLyBHZXQgaWQtb2JqZWN0IGZyb20gdGhlIGZpcnN0IGVsZW1lbnQncyBkYXRhLCBvdGhlcndpc2UgaW5pdGlhbGl6ZSBpdCB0byB7fS5cbiAgICAgIGVsZW0gPSB0aGF0LmVxKDApO1xuICAgICAgZWxlbS5kYXRhKCBqcXVlcnlfZGF0YV9rZXksIGRhdGEgPSBlbGVtLmRhdGEoIGpxdWVyeV9kYXRhX2tleSApIHx8IHt9ICk7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKCBpZCApIHtcbiAgICAgIC8vIEdldCBpZC1vYmplY3QgZnJvbSB0aGUgY2FjaGUsIG90aGVyd2lzZSBpbml0aWFsaXplIGl0IHRvIHt9LlxuICAgICAgZGF0YSA9IGNhY2hlWyBpZCBdIHx8ICggY2FjaGVbIGlkIF0gPSB7fSApO1xuICAgIH1cbiAgICBcbiAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dCBmb3IgdGhpcyBpZC5cbiAgICBkYXRhLmlkICYmIGNsZWFyVGltZW91dCggZGF0YS5pZCApO1xuICAgIGRlbGV0ZSBkYXRhLmlkO1xuICAgIFxuICAgIC8vIENsZWFuIHVwIHdoZW4gbmVjZXNzYXJ5LlxuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICBpZiAoIGpxdWVyeV9kYXRhX2tleSApIHtcbiAgICAgICAgZWxlbS5yZW1vdmVEYXRhKCBqcXVlcnlfZGF0YV9rZXkgKTtcbiAgICAgIH0gZWxzZSBpZiAoIGlkICkge1xuICAgICAgICBkZWxldGUgY2FjaGVbIGlkIF07XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyBZZXMsIHRoZXJlIGFjdHVhbGx5IGlzIGEgc2V0VGltZW91dCBjYWxsIGluIGhlcmUhXG4gICAgZnVuY3Rpb24gYWN0dWFsbHlfc2V0VGltZW91dCgpIHtcbiAgICAgIGRhdGEuaWQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpeyBkYXRhLmZuKCk7IH0sIGRlbGF5ICk7XG4gICAgfTtcbiAgICBcbiAgICBpZiAoIGNhbGxiYWNrICkge1xuICAgICAgLy8gQSBjYWxsYmFjayAoYW5kIGRlbGF5KSB3ZXJlIHNwZWNpZmllZC4gU3RvcmUgdGhlIGNhbGxiYWNrIHJlZmVyZW5jZSBmb3JcbiAgICAgIC8vIHBvc3NpYmxlIGxhdGVyIHVzZSwgYW5kIHRoZW4gc2V0VGltZW91dC5cbiAgICAgIGRhdGEuZm4gPSBmdW5jdGlvbiggbm9fcG9sbGluZ19sb29wICkge1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhlIGNhbGxiYWNrIHZhbHVlIGlzIGEgc3RyaW5nLCBpdCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBuYW1lIG9mIGFcbiAgICAgICAgLy8gbWV0aG9kIG9uICQgb3IgJC5mbiBkZXBlbmRpbmcgb24gd2hlcmUgZG9UaW1lb3V0IHdhcyBleGVjdXRlZC5cbiAgICAgICAgaWYgKCB0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnICkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbWV0aG9kX2Jhc2VbIGNhbGxiYWNrIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KCB0aGF0LCBhcHMuY2FsbCggYXJncywgc2xpY2VfYXJncyApICkgPT09IHRydWUgJiYgIW5vX3BvbGxpbmdfbG9vcFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNpbmNlIHRoZSBjYWxsYmFjayByZXR1cm5lZCB0cnVlLCBhbmQgd2UncmUgbm90IHNwZWNpZmljYWxseVxuICAgICAgICAgIC8vIGNhbmNlbGluZyBhIHBvbGxpbmcgbG9vcCwgZG8gaXQgYWdhaW4hXG4gICAgICAgICAgPyBhY3R1YWxseV9zZXRUaW1lb3V0KClcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBPdGhlcndpc2UsIGNsZWFuIHVwIGFuZCBxdWl0LlxuICAgICAgICAgIDogY2xlYW51cCgpO1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgLy8gU2V0IHRoYXQgdGltZW91dCFcbiAgICAgIGFjdHVhbGx5X3NldFRpbWVvdXQoKTtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoIGRhdGEuZm4gKSB7XG4gICAgICAvLyBObyBjYWxsYmFjayBwYXNzZWQuIElmIGZvcmNlX21vZGUgKGRlbGF5KSBpcyB0cnVlLCBleGVjdXRlIHRoZSBkYXRhLmZuXG4gICAgICAvLyBjYWxsYmFjayBpbW1lZGlhdGVseSwgY29udGludWluZyBhbnkgY2FsbGJhY2sgcmV0dXJuLXRydWUgcG9sbGluZyBsb29wLlxuICAgICAgLy8gSWYgZm9yY2VfbW9kZSBpcyBmYWxzZSwgZXhlY3V0ZSB0aGUgZGF0YS5mbiBjYWxsYmFjayBpbW1lZGlhdGVseSBidXQgZG9cbiAgICAgIC8vIE5PVCBjb250aW51ZSBhIGNhbGxiYWNrIHJldHVybi10cnVlIHBvbGxpbmcgbG9vcC4gSWYgZm9yY2VfbW9kZSBpc1xuICAgICAgLy8gdW5kZWZpbmVkLCBzaW1wbHkgY2xlYW4gdXAuIFNpbmNlIGRhdGEuZm4gd2FzIHN0aWxsIGRlZmluZWQsIHdoYXRldmVyXG4gICAgICAvLyB3YXMgc3VwcG9zZWQgdG8gaGFwcGVuIGhhZG4ndCB5ZXQsIHNvIHJldHVybiB0cnVlLlxuICAgICAgZGVsYXkgPT09IHVuZGVmaW5lZCA/IGNsZWFudXAoKSA6IGRhdGEuZm4oIGRlbGF5ID09PSBmYWxzZSApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2luY2Ugbm8gY2FsbGJhY2sgd2FzIHBhc3NlZCwgYW5kIGRhdGEuZm4gaXNuJ3QgZGVmaW5lZCwgaXQgbG9va3MgbGlrZVxuICAgICAgLy8gd2hhdGV2ZXIgd2FzIHN1cHBvc2VkIHRvIGhhcHBlbiBhbHJlYWR5IGRpZC4gQ2xlYW4gdXAgYW5kIHF1aXQhXG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuICAgIFxuICB9O1xuICBcbn0pKGpRdWVyeSk7XG5cblxuXG5cbi8vQ1NTMyBBbmltYXRlLWl0XG4kKCcuYW5pbWF0ZWRQYXJlbnQnKS5hcHBlYXIoKTtcbiQoJy5hbmltYXRlZENsaWNrJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcblxuICBcbiAgaWYoJCh0aGlzKS5hdHRyKCdkYXRhLXNlcXVlbmNlJykgIT0gdW5kZWZpbmVkKXtcbiAgICB2YXIgZmlyc3RJZCA9ICQoXCIuXCIrdGFyZ2V0K1wiOmZpcnN0XCIpLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICB2YXIgbGFzdElkID0gJChcIi5cIit0YXJnZXQrXCI6bGFzdFwiKS5hdHRyKCdkYXRhLWlkJyk7XG4gICAgdmFyIG51bWJlciA9IGZpcnN0SWQ7XG5cbiAgICAvL0FkZCBvciByZW1vdmUgdGhlIGNsYXNzXG4gICAgaWYoJChcIi5cIit0YXJnZXQrXCJbZGF0YS1pZD1cIisgbnVtYmVyICtcIl1cIikuaGFzQ2xhc3MoJ2dvJykpe1xuICAgICAgJChcIi5cIit0YXJnZXQrXCJbZGF0YS1pZD1cIisgbnVtYmVyICtcIl1cIikuYWRkQ2xhc3MoJ2dvQXdheScpO1xuICAgICAgJChcIi5cIit0YXJnZXQrXCJbZGF0YS1pZD1cIisgbnVtYmVyICtcIl1cIikucmVtb3ZlQ2xhc3MoJ2dvJyk7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiLlwiK3RhcmdldCtcIltkYXRhLWlkPVwiKyBudW1iZXIgK1wiXVwiKS5hZGRDbGFzcygnZ28nKTtcbiAgICAgICQoXCIuXCIrdGFyZ2V0K1wiW2RhdGEtaWQ9XCIrIG51bWJlciArXCJdXCIpLnJlbW92ZUNsYXNzKCdnb0F3YXknKTtcbiAgICB9XG4gICAgbnVtYmVyICsrO1xuICAgIGRlbGF5ID0gTnVtYmVyKCQodGhpcykuYXR0cignZGF0YS1zZXF1ZW5jZScpKTtcbiAgICAkLmRvVGltZW91dChkZWxheSwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKGxhc3RJZCk7XG4gICAgICBcbiAgICAgIC8vQWRkIG9yIHJlbW92ZSB0aGUgY2xhc3NcbiAgICAgIGlmKCQoXCIuXCIrdGFyZ2V0K1wiW2RhdGEtaWQ9XCIrIG51bWJlciArXCJdXCIpLmhhc0NsYXNzKCdnbycpKXtcbiAgICAgICAgJChcIi5cIit0YXJnZXQrXCJbZGF0YS1pZD1cIisgbnVtYmVyICtcIl1cIikuYWRkQ2xhc3MoJ2dvQXdheScpO1xuICAgICAgICAkKFwiLlwiK3RhcmdldCtcIltkYXRhLWlkPVwiKyBudW1iZXIgK1wiXVwiKS5yZW1vdmVDbGFzcygnZ28nKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAkKFwiLlwiK3RhcmdldCtcIltkYXRhLWlkPVwiKyBudW1iZXIgK1wiXVwiKS5hZGRDbGFzcygnZ28nKTtcbiAgICAgICAgJChcIi5cIit0YXJnZXQrXCJbZGF0YS1pZD1cIisgbnVtYmVyICtcIl1cIikucmVtb3ZlQ2xhc3MoJ2dvQXdheScpO1xuICAgICAgfVxuXG4gICAgICAvL2luY3JlbWVudFxuICAgICAgKytudW1iZXI7XG5cbiAgICAgIC8vY29udGludXRlIGxvb3BpbmcgdGlsbCByZWFjaGVkIGxhc3QgSURcbiAgICAgIGlmKG51bWJlciA8PSBsYXN0SWQpe3JldHVybiB0cnVlO31cbiAgICB9KTtcbiAgfWVsc2V7XG4gICAgaWYoJCgnLicrdGFyZ2V0KS5oYXNDbGFzcygnZ28nKSl7XG4gICAgICAkKCcuJyt0YXJnZXQpLmFkZENsYXNzKCdnb0F3YXknKTtcbiAgICAgICQoJy4nK3RhcmdldCkucmVtb3ZlQ2xhc3MoJ2dvJyk7XG4gICAgfWVsc2V7XG4gICAgICAkKCcuJyt0YXJnZXQpLmFkZENsYXNzKCdnbycpO1xuICAgICAgJCgnLicrdGFyZ2V0KS5yZW1vdmVDbGFzcygnZ29Bd2F5Jyk7XG4gICAgfVxuICB9IFxufSk7XG5cbiQoZG9jdW1lbnQuYm9keSkub24oJ2FwcGVhcicsICcuYW5pbWF0ZWRQYXJlbnQnLCBmdW5jdGlvbihlLCAkYWZmZWN0ZWQpe1xuICB2YXIgZWxlID0gJCh0aGlzKS5maW5kKCcuYW5pbWF0ZWQnKTtcbiAgdmFyIHBhcmVudCA9ICQodGhpcyk7XG4gIFxuXG4gIGlmKHBhcmVudC5hdHRyKCdkYXRhLXNlcXVlbmNlJykgIT0gdW5kZWZpbmVkKXtcbiAgICBcbiAgICB2YXIgZmlyc3RJZCA9ICQodGhpcykuZmluZCgnLmFuaW1hdGVkOmZpcnN0JykuYXR0cignZGF0YS1pZCcpO1xuICAgIHZhciBudW1iZXIgPSBmaXJzdElkO1xuICAgIHZhciBsYXN0SWQgPSAkKHRoaXMpLmZpbmQoJy5hbmltYXRlZDpsYXN0JykuYXR0cignZGF0YS1pZCcpO1xuXG4gICAgJChwYXJlbnQpLmZpbmQoXCIuYW5pbWF0ZWRbZGF0YS1pZD1cIisgbnVtYmVyICtcIl1cIikuYWRkQ2xhc3MoJ2dvJyk7XG4gICAgbnVtYmVyICsrO1xuICAgIGRlbGF5ID0gTnVtYmVyKHBhcmVudC5hdHRyKCdkYXRhLXNlcXVlbmNlJykpO1xuXG4gICAgJC5kb1RpbWVvdXQoZGVsYXksIGZ1bmN0aW9uKCl7XG4gICAgICAkKHBhcmVudCkuZmluZChcIi5hbmltYXRlZFtkYXRhLWlkPVwiKyBudW1iZXIgK1wiXVwiKS5hZGRDbGFzcygnZ28nKTtcbiAgICAgICsrbnVtYmVyO1xuICAgICAgaWYobnVtYmVyIDw9IGxhc3RJZCl7cmV0dXJuIHRydWU7fVxuICAgIH0pO1xuICB9ZWxzZXtcbiAgICBlbGUuYWRkQ2xhc3MoJ2dvJyk7XG4gIH1cbiAgXG59KTtcblxuICQoZG9jdW1lbnQuYm9keSkub24oJ2Rpc2FwcGVhcicsICcuYW5pbWF0ZWRQYXJlbnQnLCBmdW5jdGlvbihlLCAkYWZmZWN0ZWQpIHtcbiAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2FuaW1hdGVPbmNlJykpe1xuICAgICQodGhpcykuZmluZCgnLmFuaW1hdGVkJykucmVtb3ZlQ2xhc3MoJ2dvJyk7XG4gICB9XG4gfSk7XG5cbiAkKHdpbmRvdykub24oJ2xvYWQnLGZ1bmN0aW9uKCl7XG4gICQuZm9yY2VfYXBwZWFyKCk7XG4gfSk7XG4iLCIvKiBCQUNLIFRPIFRPUCAqL1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gIC8vIGJyb3dzZXIgd2luZG93IHNjcm9sbCAoaW4gcGl4ZWxzKSBhZnRlciB3aGljaCB0aGUgXCJiYWNrIHRvIHRvcFwiIGxpbmsgaXMgc2hvd25cbiAgdmFyIG9mZnNldCA9IDMwMCxcbiAgICAvL2Jyb3dzZXIgd2luZG93IHNjcm9sbCAoaW4gcGl4ZWxzKSBhZnRlciB3aGljaCB0aGUgXCJiYWNrIHRvIHRvcFwiIGxpbmsgb3BhY2l0eSBpcyByZWR1Y2VkXG4gICAgb2Zmc2V0X29wYWNpdHkgPSAxMjAwLFxuICAgIC8vZHVyYXRpb24gb2YgdGhlIHRvcCBzY3JvbGxpbmcgYW5pbWF0aW9uIChpbiBtcylcbiAgICBzY3JvbGxfdG9wX2R1cmF0aW9uID0gNzAwLFxuICAgIC8vZ3JhYiB0aGUgXCJiYWNrIHRvIHRvcFwiIGxpbmtcbiAgICAkYmFja190b190b3AgPSAkKCcud2luZG93dG9wJyk7XG5cbiAgLy9oaWRlIG9yIHNob3cgdGhlIFwiYmFjayB0byB0b3BcIiBsaW5rXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuc2Nyb2xsVG9wKCkgPiBvZmZzZXRcbiAgICAgID8gJGJhY2tfdG9fdG9wLmFkZENsYXNzKCdjZC1pcy12aXNpYmxlJylcbiAgICAgIDogJGJhY2tfdG9fdG9wLnJlbW92ZUNsYXNzKCdjZC1pcy12aXNpYmxlIGNkLWZhZGUtb3V0Jyk7XG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiBvZmZzZXRfb3BhY2l0eSkge1xuICAgICAgJGJhY2tfdG9fdG9wLmFkZENsYXNzKCdjZC1mYWRlLW91dCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9zbW9vdGggc2Nyb2xsIHRvIHRvcFxuICAkYmFja190b190b3Aub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKFxuICAgICAge1xuICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICB9LFxuICAgICAgc2Nyb2xsX3RvcF9kdXJhdGlvblxuICAgICk7XG4gIH0pO1xufSk7XG5cbi8vIGZ1bmN0aW9uIHNpemVyKCkge1xuLy8gICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiAwKSB7XG4vLyAgICAgJCgnaGVhZGVyIC50b3AnKS50b2dnbGVDbGFzcygncmVkdWNlZCcsICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gMCk7XG4vLyAgICAgLy8gJCgnaGVhZGVyIC50b3AgJykuc3RvcCgpLmFuaW1hdGUoXG4vLyAgICAgLy8gICB7XG4vLyAgICAgLy8gICAgIGxpbmVIZWlnaHQ6ICc4NXB4Jyxcbi8vICAgICAvLyAgIH0sXG4vLyAgICAgLy8gICAzMFxuLy8gICAgIC8vICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgJCgnaGVhZGVyIC50b3AnKS50b2dnbGVDbGFzcygncmVkdWNlZCcsICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gMCk7XG4vLyAgICAgLy8gJCgnaGVhZGVyIC50b3AnKS5zdG9wKCkuYW5pbWF0ZShcbi8vICAgICAvLyAgIHtcbi8vICAgICAvLyAgICAgbGluZUhlaWdodDogJzExNXB4Jyxcbi8vICAgICAvLyAgIH0sXG4vLyAgICAgLy8gICAzMFxuLy8gICAgIC8vICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4vLyAgIHNpemVyKCk7XG4vLyB9KTtcblxuLy8gc2l6ZXIoKTtcblxuLy8gRkFRIGFjY29yZGlvbiBmdW5jdGlvbmFsaXR5XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgZCA9IGRvY3VtZW50LFxuICAgIGFjY29yZGlvblRvZ2dsZXMgPSBkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2NvcmRpb25UcmlnZ2VyJyksXG4gICAgc2V0QXJpYSxcbiAgICBzZXRBY2NvcmRpb25BcmlhLFxuICAgIHN3aXRjaEFjY29yZGlvbixcbiAgICB0b3VjaFN1cHBvcnRlZCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyxcbiAgICBwb2ludGVyU3VwcG9ydGVkID0gJ3BvaW50ZXJkb3duJyBpbiB3aW5kb3c7XG5cbiAgc2tpcENsaWNrRGVsYXkgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnRhcmdldC5jbGljaygpO1xuICB9O1xuXG4gIHNldEFyaWFBdHRyID0gZnVuY3Rpb24gKGVsLCBhcmlhVHlwZSwgbmV3UHJvcGVydHkpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXJpYVR5cGUsIG5ld1Byb3BlcnR5KTtcbiAgfTtcbiAgc2V0QWNjb3JkaW9uQXJpYSA9IGZ1bmN0aW9uIChlbDEsIGVsMiwgZXhwYW5kZWQpIHtcbiAgICBzd2l0Y2ggKGV4cGFuZGVkKSB7XG4gICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgc2V0QXJpYUF0dHIoZWwxLCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIHNldEFyaWFBdHRyKGVsMiwgJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICBzZXRBcmlhQXR0cihlbDEsICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIHNldEFyaWFBdHRyKGVsMiwgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG4gIC8vZnVuY3Rpb25cbiAgc3dpdGNoQWNjb3JkaW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmxvZygndHJpZ2dlcmVkJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB0aGlzQW5zd2VyID0gZS50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgdmFyIHRoaXNRdWVzdGlvbiA9IGUudGFyZ2V0O1xuICAgIGlmICh0aGlzQW5zd2VyLmNsYXNzTGlzdC5jb250YWlucygnaXMtY29sbGFwc2VkJykpIHtcbiAgICAgIHNldEFjY29yZGlvbkFyaWEodGhpc1F1ZXN0aW9uLCB0aGlzQW5zd2VyLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBY2NvcmRpb25BcmlhKHRoaXNRdWVzdGlvbiwgdGhpc0Fuc3dlciwgJ2ZhbHNlJyk7XG4gICAgfVxuICAgIHRoaXNRdWVzdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1jb2xsYXBzZWQnKTtcbiAgICB0aGlzUXVlc3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZXhwYW5kZWQnKTtcbiAgICB0aGlzQW5zd2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWNvbGxhcHNlZCcpO1xuICAgIHRoaXNBbnN3ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZXhwYW5kZWQnKTtcblxuICAgIHRoaXNBbnN3ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0ZUluJyk7XG4gIH07XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhY2NvcmRpb25Ub2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHRvdWNoU3VwcG9ydGVkKSB7XG4gICAgICBhY2NvcmRpb25Ub2dnbGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBza2lwQ2xpY2tEZWxheSwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAocG9pbnRlclN1cHBvcnRlZCkge1xuICAgICAgYWNjb3JkaW9uVG9nZ2xlc1tpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAncG9pbnRlcmRvd24nLFxuICAgICAgICBza2lwQ2xpY2tEZWxheSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICAgIGFjY29yZGlvblRvZ2dsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hBY2NvcmRpb24sIGZhbHNlKTtcbiAgfVxufSkoKTtcblxuLyogTU9CSUxFIE1FTlUgKi9cblxuKGZ1bmN0aW9uICgkKSB7XG4gIHZhciAkd2luZG93ID0gJCh3aW5kb3cpLFxuICAgICRib2R5ID0gJCgnYm9keScpLFxuICAgICRoZWFkZXIgPSAkKCcjaGVhZGVyJyksXG4gICAgJGJhbm5lciA9ICQoJyNiYW5uZXInKTtcblxuICAvLyBCcmVha3BvaW50cy5cbiAgLy8gYnJlYWtwb2ludHMoe1xuICAvLyAgIHhsYXJnZTogJyhtYXgtd2lkdGg6IDE2ODBweCknLFxuICAvLyAgIGxhcmdlOiAnKG1heC13aWR0aDogMTI4MHB4KScsXG4gIC8vICAgbWVkaXVtOiAnKG1heC13aWR0aDogOTgwcHgpJyxcbiAgLy8gICBzbWFsbDogJyhtYXgtd2lkdGg6IDczNnB4KScsXG4gIC8vICAgeHNtYWxsOiAnKG1heC13aWR0aDogNDgwcHgpJyxcbiAgLy8gfSk7XG5cbiAgLy8gUGxheSBpbml0aWFsIGFuaW1hdGlvbnMgb24gcGFnZSBsb2FkLlxuICAkd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdpcy1wcmVsb2FkJyk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG5cbiAgLy8gSGVhZGVyLlxuICBpZiAoJGJhbm5lci5sZW5ndGggPiAwICYmICRoZWFkZXIuaGFzQ2xhc3MoJ2FsdCcpKSB7XG4gICAgJHdpbmRvdy5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgJHdpbmRvdy50cmlnZ2VyKCdzY3JvbGwnKTtcbiAgICB9KTtcblxuICAgICRiYW5uZXIuc2Nyb2xsZXgoe1xuICAgICAgYm90dG9tOiAkaGVhZGVyLm91dGVySGVpZ2h0KCksXG4gICAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcygnYWx0Jyk7XG4gICAgICB9LFxuICAgICAgZW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGhlYWRlci5hZGRDbGFzcygnYWx0Jyk7XG4gICAgICB9LFxuICAgICAgbGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcygnYWx0Jyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gTWVudS5cbiAgdmFyICRtZW51ID0gJCgnI21lbnUnKTtcblxuICAkbWVudS5fbG9ja2VkID0gZmFsc2U7XG5cbiAgJG1lbnUuX2xvY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRtZW51Ll9sb2NrZWQpIHJldHVybiBmYWxzZTtcblxuICAgICRtZW51Ll9sb2NrZWQgPSB0cnVlO1xuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJG1lbnUuX2xvY2tlZCA9IGZhbHNlO1xuICAgIH0sIDM1MCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAkbWVudS5fc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJG1lbnUuX2xvY2soKSkgJGJvZHkuYWRkQ2xhc3MoJ2lzLW1lbnUtdmlzaWJsZScpO1xuICB9O1xuXG4gICRtZW51Ll9oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgkbWVudS5fbG9jaygpKSAkYm9keS5yZW1vdmVDbGFzcygnaXMtbWVudS12aXNpYmxlJyk7XG4gIH07XG5cbiAgJG1lbnUuX3RvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJG1lbnUuX2xvY2soKSkgJGJvZHkudG9nZ2xlQ2xhc3MoJ2lzLW1lbnUtdmlzaWJsZScpO1xuICB9O1xuXG4gICRtZW51XG4gICAgLmFwcGVuZFRvKCRib2R5KVxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAvLyBIaWRlLlxuICAgICAgJG1lbnUuX2hpZGUoKTtcbiAgICB9KVxuICAgIC5maW5kKCcuaW5uZXInKVxuICAgIC5vbignY2xpY2snLCAnLmNsb3NlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgLy8gSGlkZS5cbiAgICAgICRtZW51Ll9oaWRlKCk7XG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAvLyBIaWRlLlxuICAgICAgJG1lbnUuX2hpZGUoKTtcblxuICAgICAgLy8gUmVkaXJlY3QuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH0sIDM1MCk7XG4gICAgfSk7XG5cbiAgJGJvZHlcbiAgICAub24oJ2NsaWNrJywgJ2FbaHJlZj1cIiNtZW51XCJdJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIFRvZ2dsZS5cbiAgICAgICRtZW51Ll90b2dnbGUoKTtcbiAgICB9KVxuICAgIC5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gSGlkZSBvbiBlc2NhcGUuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykgJG1lbnUuX2hpZGUoKTtcbiAgICB9KTtcbn0pKGpRdWVyeSk7XG5cbi8vIERpc2FibGVzIGlucHV0cyBvciBtYWtlcyB0aGVtIHJlYWRvbmx5IGJhc2VkIG9uIENTUyBjbGFzc1xualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAkKCcuZGlzYWJsZWQgaW5wdXQnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAkKCcucmVhZG9ubHkgaW5wdXQnKS5hdHRyKCdyZWFkb25seScsICdyZWFkb25seScpO1xufSk7XG5cbi8vIEVuYWJsZXMgY3VzdG9tIGRhdGVwaWNrZXIgZGF0ZXMgdG8gYmUgbWFudWFsbHkgZGlzYWJsZWQgdmlhIEFDRiBvcHRpb25zIC8vIGZ1bmN0aW9ucy5waHAgY2FsbHMgd3BfbG9jYWxpemVfc2NyaXB0IHRvIHB1bGwgdGhlIGRhdGFcbmNvbnN0IGRlc2MgPSBhY2ZfdmFycy5saXN0X3BhcmVudDsgLy8gcHVsbHMgYW4gYXJyYXkgZnJvbSBBQ0YsIHdoaWNoIGVuZHMgdXAgYmVpbmcgYSBuZXN0ZWQgb2JqZWN0IGFycmF5XG5cbi8vIHR1cm4gdGhlIG5lc3RlZCBvYmplY3QgYXJyYXkgaW50byBhIGZsYXQgYXJyYXlcbnZhciBhcnJheSA9IGRlc2MsXG4gIHJlc3VsdCA9IGFycmF5LnJlZHVjZShmdW5jdGlvbiAociwgbykge1xuICAgIE9iamVjdC5rZXlzKG8pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIHIucHVzaChvW2tdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcjtcbiAgfSwgW10pO1xuLy8gY29uc29sZS5sb2cocmVzdWx0KTtcblxuLy8gQWRkcyBkYXRlcGlja2VyIGxvZ2ljIHRvIGFsbG93IGZvciBjdXN0b20gZGlzYWJsZWQgZGF0ZXNcbmlmIChcbiAgbG9jYXRpb24ucGF0aG5hbWUgPT0gJy9nZXQtYS1xdW90ZS8nIHx8XG4gIGxvY2F0aW9uLnBhdGhuYW1lID09ICcvaG9sZC1hLXJlc2VydmF0aW9uLydcbikge1xuICBnZm9ybS5hZGRGaWx0ZXIoXG4gICAgJ2dmb3JtX2RhdGVwaWNrZXJfb3B0aW9uc19wcmVfaW5pdCcsXG4gICAgZnVuY3Rpb24gKG9wdGlvbnNPYmosIGZvcm1JZCwgZmllbGRJZCkge1xuICAgICAgLy8gRGlzYWJsZXMgbWFudWFsIGVudHJpZXMgZnJvbSBBQ0ZcbiAgICAgIGlmIChcbiAgICAgICAgKGZvcm1JZCA9PSAxICYmIGZpZWxkSWQgPT0gOCkgfHxcbiAgICAgICAgKGZvcm1JZCA9PSAyICYmIGZpZWxkSWQgPT0gNDQpIHx8XG4gICAgICAgIChmb3JtSWQgPT0gMyAmJiBmaWVsZElkID09IDQ0KVxuICAgICAgKSB7XG4gICAgICAgIC8vIEdldCB0aGUgZGF0ZSBmb3IgdG9kYXksIGFuZCBmb3JtYXQgaXQgdG8gbW0vZGQveXlcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRvZGF5c0RhdGUgPSBuZXdEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgLy8geW91IGNhbiB1c2UgdW5kZWZpbmVkIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBkaXNhYmxlZERheXMgPSByZXN1bHQ7IC8vIHB1bGxzIHRoZSBmbGF0IGFycmF5IGZyb20gdGhlIGFycmF5IHNoZW5hbmlnYW5zIGFib3ZlXG5cbiAgICAgICAgZGlzYWJsZWREYXlzLnB1c2godG9kYXlzRGF0ZSk7IC8vIEFkZCB2YWx1ZSBmb3IgXCJ0b2RheXNEYXRlXCIgdG8gY3VzdG9tIGFycmF5IGZyb20gYWJvdmVcblxuICAgICAgICBvcHRpb25zT2JqLm1pbkRhdGUgPSAwOyAvLyBGb3IgZGlzYWJsaW5nIFN1bmRheSBvbiBkYXRlcGlja2VyXG4gICAgICAgIG9wdGlvbnNPYmouZmlyc3REYXkgPSAwOyAvLyBTZXRzIE1vbmRheSBhcyB0aGUgZmlyc3QgZGF5IG9uIHRoZSBjYWxlbmRhclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnREYXRlOiBcIiArIGN1cnJlbnREYXRlKTtcblxuICAgICAgICBvcHRpb25zT2JqLmJlZm9yZVNob3dEYXkgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpOyAvLyBGb3IgZGlzYWJsaW5nIFN1bmRheSBvbiBkYXRlcGlja2VyXG4gICAgICAgICAgdmFyIGNoZWNrZGF0ZSA9IGpRdWVyeS5kYXRlcGlja2VyLmZvcm1hdERhdGUoJ21tL2RkL3l5JywgZGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIFtkaXNhYmxlZERheXMuaW5kZXhPZihjaGVja2RhdGUpID09IC0xICYmIGRheSAhPSAwLCAnJ107XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2xlYXIgdGhlIFwiUmVxdWVzdCBEZWxpdmVyeSBEYXRlXCIgZmllbGQgaWYgdGhlIHZhbHVlIG9mIHRoZSBkYXRlIGlzIGJlZm9yZSBcInRvZGF5XCIsIHRvIGZvcmNlIHRoZSB1c2VyIHRvIHNldCBhIG5ldyBSZXF1ZXN0ZWQgRGVsaXZlcnkgRGF0ZS5cbiAgICAgICAgaWYgKChmb3JtSWQgPT0gMiAmJiBmaWVsZElkID09IDQ0KSB8fCAoZm9ybUlkID09IDMgJiYgZmllbGRJZCA9PSA0NCkpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZm9ybSBpcyBcIkhvbGQgYSBSZXNlcnZhdGlvblwiIGFuZCB0aGUgXCJSZXF1ZXN0ZWQgRGVsaXZlcnkgRGF0ZVwiIGZpZWxkIElEIGlzIDQ0XG5cbiAgICAgICAgICAvLyBHcmFiIHZhbHVlIGZyb20gVVJMIHBhcmFtdGVyIGZvciBkZWxpdmVyeURhdGUgYW5kIGZvcm1hdCBpdCB3aXRoIGEgcHJvcGVyIERhdGUgZm9ybWF0XG4gICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgICAgICAgIHZhciBkZXNpcmVkRGVsaXZlcnlEYXRlID0gdXJsUGFyYW1zLmdldCgnZGVsaXZlcnlEYXRlJyk7XG4gICAgICAgICAgZGVzaXJlZERlbGl2ZXJ5RGF0ZUZvcm1hdHRlZCA9IG5ldyBEYXRlKGRlc2lyZWREZWxpdmVyeURhdGUpO1xuXG4gICAgICAgICAgaWYgKGRlc2lyZWREZWxpdmVyeURhdGVGb3JtYXR0ZWQgPD0gbmV3RGF0ZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIERlc2lyZWQgRGVsaXZlcnkgRGF0ZSBpcyBiZWZvcmUgb3Igb24gdGhlIGN1cnJlbnQgZGF5LCBjbGVhciBpdFxuICAgICAgICAgICAgdmFyIHJERCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF8yXzQ0Jyk7XG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIFdhaXQgdW50aWwgZXZlcnl0aGluZyBlbHNlIGlzIGxvYWRlZCBiZWZvcmUgY2xlYXJpbmcgZmllbGRcbiAgICAgICAgICAgICAgJChyREQpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCBudWxsKTtcbiAgICAgICAgICAgICAgckRELmRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBEZXNpcmVkIERlbGl2ZXJ5IERhdGUgYWZ0ZXIgY3VycmVudCBkYXlcbiAgICAgICAgICAgIC8vIEFsbCBjbGVhclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFTkRcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zT2JqO1xuICAgIH1cbiAgKTtcbn1cbi8vIEVORCBkYXRlcGlja2VyIGN1c3RvbWl6YXRpb25zXG5cbi8vIFppcGNvZGUgcHJpY2luZyBsb2dpY1xudmFyIHppcHM3NSA9IFtcbiAgLy8gQ3JlYXRlIGFycmF5IGZvciB6aXBjb2RlcyB0aGF0IGFyZSAkNzVcbiAgJzc1MDE5JyxcbiAgJzc1MDk5JyxcbiAgJzc1MzI2JyxcbiAgJzc1MDYzJyxcbiAgJzc1MDM5JyxcbiAgJzc1MDM4JyxcbiAgJzc1MjYxJyxcbiAgJzc1MDYyJyxcbiAgJzc1MDYxJyxcbiAgJzc1MDE3JyxcbiAgJzc1MDE2JyxcbiAgJzc1MDE1JyxcbiAgJzc1MDE0JyxcbiAgJzc1MDYwJyxcbiAgJzc1MDUwJyxcbiAgJzc1MTIzJyxcbiAgJzc1MTE1JyxcbiAgJzc1MjM2JyxcbiAgJzc1MTM4JyxcbiAgJzc1MTE2JyxcbiAgJzc1MDUzJyxcbiAgJzc1MTM3JyxcbiAgJzc1MDUxJyxcbiAgJzc1MjQ5JyxcbiAgJzc1MDUyJyxcbiAgJzc1MTA2JyxcbiAgJzc1MTA0JyxcbiAgJzc1MDU0JyxcbiAgJzc2MjA1JyxcbiAgJzc1MDI5JyxcbiAgJzc2MjI2JyxcbiAgJzc1MDc3JyxcbiAgJzc1MDY3JyxcbiAgJzc1MDI3JyxcbiAgJzc1MDI4JyxcbiAgJzc2MjQ3JyxcbiAgJzc1MDIyJyxcbiAgJzc2MjYyJyxcbiAgJzc1MTU0JyxcbiAgJzc2NjUxJyxcbiAgJzc2MDQxJyxcbiAgJzc1MTY3JyxcbiAgJzc2MDY1JyxcbiAgJzc2MDY0JyxcbiAgJzc2MDg0JyxcbiAgJzc2MDYxJyxcbiAgJzc2MDA5JyxcbiAgJzc2MDk3JyxcbiAgJzc2MDI4JyxcbiAgJzc2MDUwJyxcbiAgJzc2MDU5JyxcbiAgJzc2MDU4JyxcbiAgJzc2MDMxJyxcbiAgJzc2MDQ0JyxcbiAgJzc2MDkzJyxcbiAgJzc2MDMzJyxcbiAgJzc2MDk5JyxcbiAgJzc2MDUxJyxcbiAgJzc2MDkyJyxcbiAgJzc2MTc3JyxcbiAgJzc2MDUyJyxcbiAgJzc2MjQ0JyxcbiAgJzc2MDM5JyxcbiAgJzc2MDM0JyxcbiAgJzc2MjQ4JyxcbiAgJzc2MTU1JyxcbiAgJzc2MTgyJyxcbiAgJzc2MDIxJyxcbiAgJzc2MDk1JyxcbiAgJzc2MDU0JyxcbiAgJzc2MTgwJyxcbiAgJzc2MDQwJyxcbiAgJzc2MDIyJyxcbiAgJzc2MTQ4JyxcbiAgJzc2MDA2JyxcbiAgJzc2MTc5JyxcbiAgJzc2MTMxJyxcbiAgJzc2MDIwJyxcbiAgJzc2MDExJyxcbiAgJzc2MTM3JyxcbiAgJzc2MDUzJyxcbiAgJzc2MTE4JyxcbiAgJzc2MDEyJyxcbiAgJzc2MDEwJyxcbiAgJzc2MDk2JyxcbiAgJzc2MDk0JyxcbiAgJzc2MDA3JyxcbiAgJzc2MDA1JyxcbiAgJzc2MDA0JyxcbiAgJzc2MDAzJyxcbiAgJzc2MTIwJyxcbiAgJzc2MTE3JyxcbiAgJzc2MDE5JyxcbiAgJzc2MDE0JyxcbiAgJzc2MTM1JyxcbiAgJzc2MTEyJyxcbiAgJzc2MTA2JyxcbiAgJzc2MDE4JyxcbiAgJzc2MDEzJyxcbiAgJzc2MTExJyxcbiAgJzc2MDE1JyxcbiAgJzc2MTAzJyxcbiAgJzc2MTY0JyxcbiAgJzc2MTE0JyxcbiAgJzc2MTAyJyxcbiAgJzc2MDE2JyxcbiAgJzc2MDAyJyxcbiAgJzc2MTA1JyxcbiAgJzc2MTI3JyxcbiAgJzc2MTA4JyxcbiAgJzc2MDE3JyxcbiAgJzc2MTk5JyxcbiAgJzc2MTk4JyxcbiAgJzc2MTk3JyxcbiAgJzc2MTk2JyxcbiAgJzc2MTk1JyxcbiAgJzc2MTkzJyxcbiAgJzc2MTkyJyxcbiAgJzc2MTkxJyxcbiAgJzc2MTg1JyxcbiAgJzc2MTgxJyxcbiAgJzc2MTY2JyxcbiAgJzc2MTYzJyxcbiAgJzc2MTYyJyxcbiAgJzc2MTYxJyxcbiAgJzc2MTUwJyxcbiAgJzc2MTQ3JyxcbiAgJzc2MTM2JyxcbiAgJzc2MTMwJyxcbiAgJzc2MTI0JyxcbiAgJzc2MTIxJyxcbiAgJzc2MTEzJyxcbiAgJzc2MTA3JyxcbiAgJzc2MTA0JyxcbiAgJzc2MTAxJyxcbiAgJzc2MDAxJyxcbiAgJzc2MTE5JyxcbiAgJzc2MTEwJyxcbiAgJzc2MDYzJyxcbiAgJzc2MDYwJyxcbiAgJzc2MTE2JyxcbiAgJzc2MTI5JyxcbiAgJzc2MTE1JyxcbiAgJzc2MTA5JyxcbiAgJzc2MTIyJyxcbiAgJzc2MTQwJyxcbiAgJzc2MTM0JyxcbiAgJzc2MTMyJyxcbiAgJzc2MTMzJyxcbiAgJzc2MTIzJyxcbiAgJzc2MTI2JyxcbiAgJzc2MDM2Jyxcbl07XG52YXIgemlwczg1ID0gW1xuICAvLyBDcmVhdGUgYXJyYXkgZm9yIHppcGNvZGVzIHRoYXQgYXJlICQ4NVxuICAnNzYwMDgnLFxuICAnNzYwNjYnLFxuICAnNzYwODInLFxuICAnNzYwODUnLFxuICAnNzYwODYnLFxuICAnNzYwODcnLFxuICAnNzYwODgnLFxuICAnNzYwOTgnLFxuICAnNzY0MzknLFxuICAnNzY0ODUnLFxuICAnNzY0ODcnLFxuICAnNzY0OTAnLFxuICAnNzYwNDknLFxuICAnNzYwNDgnLFxuICAnNzYwMzUnLFxuXTtcbnZhciB6aXBzMTAwID0gW1xuICAvLyBDcmVhdGUgYXJyYXkgZm9yIHppcGNvZGVzIHRoYXQgYXJlICQxMDBcbiAgJzc1NDI0JyxcbiAgJzc1NDg1JyxcbiAgJzc1NDA5JyxcbiAgJzc1NDQyJyxcbiAgJzc1NDU0JyxcbiAgJzc1MTY0JyxcbiAgJzc1MDk3JyxcbiAgJzc1MTIxJyxcbiAgJzc1MDcxJyxcbiAgJzc1MDA5JyxcbiAgJzc1NDA3JyxcbiAgJzc1MTczJyxcbiAgJzc1MDY5JyxcbiAgJzc1MTY2JyxcbiAgJzc1MDc4JyxcbiAgJzc1MDcwJyxcbiAgJzc1MDk4JyxcbiAgJzc1MDAyJyxcbiAgJzc1MDEzJyxcbiAgJzc1MDM1JyxcbiAgJzc1MDk0JyxcbiAgJzc1MDI1JyxcbiAgJzc1MDc0JyxcbiAgJzc1MDIzJyxcbiAgJzc1MDg2JyxcbiAgJzc1MDI2JyxcbiAgJzc1MDI0JyxcbiAgJzc1MDc1JyxcbiAgJzc1MDkzJyxcbiAgJzc1MjUyJyxcbiAgJzc1Mjg3JyxcbiAgJzc1MDg5JyxcbiAgJzc1MDQ4JyxcbiAgJzc1MDg4JyxcbiAgJzc1MDgyJyxcbiAgJzc1MDMwJyxcbiAgJzc1MDQ0JyxcbiAgJzc1MDQwJyxcbiAgJzc1MDQ5JyxcbiAgJzc1MDQ3JyxcbiAgJzc1MDQ2JyxcbiAgJzc1MDQ1JyxcbiAgJzc1MDQzJyxcbiAgJzc1MTgyJyxcbiAgJzc1MDQyJyxcbiAgJzc1MDgxJyxcbiAgJzc1MDgwJyxcbiAgJzc1MDQxJyxcbiAgJzc1MDg1JyxcbiAgJzc1MDgzJyxcbiAgJzc1MTgxJyxcbiAgJzc1MTUwJyxcbiAgJzc1MjQ4JyxcbiAgJzc1MjQzJyxcbiAgJzc1MjM4JyxcbiAgJzc1MTg3JyxcbiAgJzc1MTg1JyxcbiAgJzc1MjU0JyxcbiAgJzc1MjQwJyxcbiAgJzc1MTQ5JyxcbiAgJzc1MDAxJyxcbiAgJzc1MTgwJyxcbiAgJzc1MjUxJyxcbiAgJzc1MjMxJyxcbiAgJzc1MjI4JyxcbiAgJzc1MjE4JyxcbiAgJzc1MTU5JyxcbiAgJzc1MjMwJyxcbiAgJzc1MjUzJyxcbiAgJzc1MjQ0JyxcbiAgJzc1MjI3JyxcbiAgJzc1MDExJyxcbiAgJzc1MDA2JyxcbiAgJzc1MzU4JyxcbiAgJzc1MjE0JyxcbiAgJzc1MjI1JyxcbiAgJzc1MjA2JyxcbiAgJzc1MjM0JyxcbiAgJzc1MjI5JyxcbiAgJzc1MjIzJyxcbiAgJzc1MjE3JyxcbiAgJzc1MjA1JyxcbiAgJzc1MjEwJyxcbiAgJzc1MjQ2JyxcbiAgJzc1MjI2JyxcbiAgJzc1MjA5JyxcbiAgJzc1MjA0JyxcbiAgJzc1MjIwJyxcbiAgJzc1MTQxJyxcbiAgJzc1Mzk3JyxcbiAgJzc1Mzk1JyxcbiAgJzc1Mzk0JyxcbiAgJzc1MzkzJyxcbiAgJzc1MzkyJyxcbiAgJzc1MzkxJyxcbiAgJzc1MzkwJyxcbiAgJzc1Mzg5JyxcbiAgJzc1MzgyJyxcbiAgJzc1MzgxJyxcbiAgJzc1MzgwJyxcbiAgJzc1Mzc5JyxcbiAgJzc1Mzc4JyxcbiAgJzc1Mzc2JyxcbiAgJzc1Mzc0JyxcbiAgJzc1MzczJyxcbiAgJzc1MzcyJyxcbiAgJzc1MzcxJyxcbiAgJzc1MzY4JyxcbiAgJzc1MzY3JyxcbiAgJzc1MzYwJyxcbiAgJzc1MzU5JyxcbiAgJzc1MzU3JyxcbiAgJzc1MzU2JyxcbiAgJzc1MzU1JyxcbiAgJzc1MzU0JyxcbiAgJzc1MzM5JyxcbiAgJzc1MzM2JyxcbiAgJzc1MzIwJyxcbiAgJzc1MzE1JyxcbiAgJzc1MzEzJyxcbiAgJzc1MzEyJyxcbiAgJzc1MzAzJyxcbiAgJzc1MzAxJyxcbiAgJzc1Mjg1JyxcbiAgJzc1Mjg0JyxcbiAgJzc1MjgzJyxcbiAgJzc1Mjc3JyxcbiAgJzc1Mjc1JyxcbiAgJzc1MjcwJyxcbiAgJzc1MjY2JyxcbiAgJzc1MjY1JyxcbiAgJzc1MjY0JyxcbiAgJzc1MjUwJyxcbiAgJzc1MjM1JyxcbiAgJzc1MjIyJyxcbiAgJzc1MjIxJyxcbiAgJzc1MjE5JyxcbiAgJzc1MjE1JyxcbiAgJzc1MjAxJyxcbiAgJzc1MTcyJyxcbiAgJzc1Mzk4JyxcbiAgJzc1MzcwJyxcbiAgJzc1MzQyJyxcbiAgJzc1MjY3JyxcbiAgJzc1MjYzJyxcbiAgJzc1MjYyJyxcbiAgJzc1MjQyJyxcbiAgJzc1MjAyJyxcbiAgJzc1MjA3JyxcbiAgJzc1MjAzJyxcbiAgJzc1MjYwJyxcbiAgJzc1MjQ3JyxcbiAgJzc1MjE2JyxcbiAgJzc1MjQxJyxcbiAgJzc1MjA4JyxcbiAgJzc1MjEyJyxcbiAgJzc1MTM0JyxcbiAgJzc1MjI0JyxcbiAgJzc1MTQ2JyxcbiAgJzc1MjMzJyxcbiAgJzc1MjMyJyxcbiAgJzc1MjExJyxcbiAgJzc1MjM3JyxcbiAgJzc1MDMzJyxcbiAgJzc1MDM0JyxcbiAgJzc2MjQ5JyxcbiAgJzc1MDY4JyxcbiAgJzc2MjA5JyxcbiAgJzc2MjA4JyxcbiAgJzc2MjA2JyxcbiAgJzc2MjA0JyxcbiAgJzc2MjAzJyxcbiAgJzc2MjAyJyxcbiAgJzc2MjAxJyxcbiAgJzc2MjA3JyxcbiAgJzc1MDY1JyxcbiAgJzc1MDU2JyxcbiAgJzc2MjU5JyxcbiAgJzc2MjEwJyxcbiAgJzc1MDEwJyxcbiAgJzc1MDA3JyxcbiAgJzc1MDU3JyxcbiAgJzc1MTI1JyxcbiAgJzc1MTE5JyxcbiAgJzc1MTIwJyxcbiAgJzc1MTUyJyxcbiAgJzc1MTAxJyxcbiAgJzc1MTY1JyxcbiAgJzc2NjIzJyxcbiAgJzc1MTY4JyxcbiAgJzc2NjcwJyxcbl07XG52YXIgemlwczEyNSA9IFtcbiAgLy8gQ3JlYXRlIGFycmF5IGZvciB6aXBjb2RlcyB0aGF0IGFyZSAkMTI1XG4gICc3NjI1OCcsXG4gICc3NjI2NicsXG4gICc3NjIyNycsXG5dO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGFydGluZ1ppcCA9ICQoJyNpbnB1dF8xXzE0XzUnKTsgLy8gI2lucHV0XzFfMTRfNSBmb3IgcHJvZHVjdGlvblxuICB2YXIgZW5kaW5nWmlwID0gJCgnI2lucHV0XzFfMzBfNScpOyAvLyAjaW5wdXRfMV8zMF81IGZvciBwcm9kdWN0aW9uXG4gIHZhciB0Q29zdFN0YXJ0aW5nID0gJCgnI2lucHV0XzFfNDknKTsgLy8gI2lucHV0XzFfNDkgZm9yIHByb2R1Y3Rpb25cbiAgdmFyIHRDb3N0RW5kaW5nID0gJCgnI2lucHV0XzFfNTAnKTsgLy8gI2lucHV0XzFfNTAgZm9yIHByb2R1Y3Rpb25cbiAgdmFyIHRDb3N0ID0gJCgnI2lucHV0XzFfNDgnKTsgLy8gI2lucHV0XzFfNDggZm9yIHByb2R1Y3Rpb25cbiAgdmFyIHZhbHVlID0gJyc7XG4gIHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCc3NScpKTsgLy8gZGVmYXVsdFxuICBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoJzc1JykpOyAvLyBkZWZhdWx0XG5cbiAgJChzdGFydGluZ1ppcCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJC5pbkFycmF5KHN0YXJ0aW5nWmlwLnZhbCgpLCB6aXBzNzUpICE9IC0xKSB7XG4gICAgICBwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgnNzUnKSk7XG4gICAgICBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPiBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSAnNzUnO1xuICAgICAgICB0Q29zdC52YWwoJyQnICsgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKSA8IHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKSkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKTtcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPT0gcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSk7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgkLmluQXJyYXkoc3RhcnRpbmdaaXAudmFsKCksIHppcHM4NSkgIT0gLTEpIHtcbiAgICAgIHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCc4NScpKTtcbiAgICAgIGlmIChwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKSA+IHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKSkge1xuICAgICAgICB2YWx1ZSA9ICc4NSc7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCkpIDwgcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpO1xuICAgICAgICB0Q29zdC52YWwoJyQnICsgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKSA9PSBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKTtcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCQuaW5BcnJheShzdGFydGluZ1ppcC52YWwoKSwgemlwczEwMCkgIT0gLTEpIHtcbiAgICAgIHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCcxMDAnKSk7XG4gICAgICBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPiBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSAnMTAwJztcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPCBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSk7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCkpID09IHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKSkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCkpO1xuICAgICAgICB0Q29zdC52YWwoJyQnICsgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJC5pbkFycmF5KHN0YXJ0aW5nWmlwLnZhbCgpLCB6aXBzMTI1KSAhPSAtMSkge1xuICAgICAgcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoJzEyNScpKTtcbiAgICAgIGlmIChwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKSA+IHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKSkge1xuICAgICAgICB2YWx1ZSA9ICcxMjUnO1xuICAgICAgICB0Q29zdC52YWwoJyQnICsgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKSA8IHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKSkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKTtcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPT0gcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSk7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgdmFsdWUgc2V0IHdpdGhpbiBHcmF2aXR5IEZvcm1zXG4gICAgfVxuICB9KTtcbiAgJChlbmRpbmdaaXApLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQuaW5BcnJheShlbmRpbmdaaXAudmFsKCksIHppcHM3NSkgIT0gLTEpIHtcbiAgICAgIHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgnNzUnKSk7XG4gICAgICBpZiAocGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpID4gcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSAnNzUnO1xuICAgICAgICB0Q29zdC52YWwoJyQnICsgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSkgPCBwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKSkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCkpO1xuICAgICAgICB0Q29zdC52YWwoJyQnICsgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKSA9PSBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSk7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgkLmluQXJyYXkoZW5kaW5nWmlwLnZhbCgpLCB6aXBzODUpICE9IC0xKSB7XG4gICAgICBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoJzg1JykpO1xuICAgICAgaWYgKHBhcnNlSW50KHRDb3N0RW5kaW5nLnZhbCgpKSA+IHBhcnNlSW50KHRDb3N0U3RhcnRpbmcudmFsKCkpKSB7XG4gICAgICAgIHZhbHVlID0gJzg1JztcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpIDwgcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKTtcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPT0gcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPSBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSk7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgkLmluQXJyYXkoZW5kaW5nWmlwLnZhbCgpLCB6aXBzMTAwKSAhPSAtMSkge1xuICAgICAgcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCcxMDAnKSk7XG4gICAgICBpZiAocGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpID4gcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSAnMTAwJztcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpIDwgcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKTtcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPT0gcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPSBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSk7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgkLmluQXJyYXkoZW5kaW5nWmlwLnZhbCgpLCB6aXBzMTI1KSAhPSAtMSkge1xuICAgICAgcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCcxMjUnKSk7XG4gICAgICBpZiAocGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpID4gcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSAnMTI1JztcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpIDwgcGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0Q29zdFN0YXJ0aW5nLnZhbCgpKTtcbiAgICAgICAgdENvc3QudmFsKCckJyArIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodENvc3RTdGFydGluZy52YWwoKSkgPT0gcGFyc2VJbnQodENvc3RFbmRpbmcudmFsKCkpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPSBwYXJzZUludCh0Q29zdEVuZGluZy52YWwoKSk7XG4gICAgICAgIHRDb3N0LnZhbCgnJCcgKyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgdmFsdWUgc2V0IHdpdGhpbiBHcmF2aXR5IEZvcm1zXG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyBUdXJuIFVSTCBwYXJhbWV0ZXIgaW50byB2YXJpYWJsZSwgdG8gc2hvdyB0cmFuc2ZlciBmZWUgcHJpY2UgZHluYW1pY2FsbHkgb24gcmVzdWx0cyBwYWdlXG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdXJsKSB7XG4gIC8vIFBhcnNlIHRoZSBVUkwgcGFyYW1ldGVyXG4gIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKSxcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbn1cbi8vIEdpdmUgdGhlIHBhcmFtZXRlciBhIHZhcmlhYmxlIG5hbWVcbnZhciBkeW5hbWljQ29udGVudCA9IGdldFBhcmFtZXRlckJ5TmFtZSgndENvc3QnKTtcblxuaWYgKFxuICBkeW5hbWljQ29udGVudCA9PSAnJDc1JyB8fFxuICBkeW5hbWljQ29udGVudCA9PSAnJDg1JyB8fFxuICBkeW5hbWljQ29udGVudCA9PSAnJDEwMCcgfHxcbiAgZHluYW1pY0NvbnRlbnQgPT0gJyQxMjUnXG4pIHtcbiAgJCgnI3RyYW5zcG9ydC1mZWUtaW50cm8nKS50ZXh0KGR5bmFtaWNDb250ZW50KTtcbn0gZWxzZSB7XG4gICQoJyN0cmFuc3BvcnQtZmVlLWludHJvJykuaGlkZSgpO1xufVxuXG4vLyBZb3V0dWJlIHZpZGVvIHBsYXllciBjdXN0b20gY29udHJvbHMvcGxheWJhY2sgZnVuY3Rpb25hbGl0eVxuJCgnI3BsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJyNwbGF5ZXInKVswXS5zcmMgKz0gJz9hdXRvcGxheT0xJztcbiAgJCgnI3BsYXllcicpLnNob3coKTtcbiAgJCgnI3ZpZGVvLWNvdmVyJykuaGlkZSgpO1xuICAkKCcjcGxheScpLmhpZGUoKTtcbiAgJCgnI3ZpZGVvLWhlYWRpbmcnKS5oaWRlKCk7XG59KTtcblxuLy8gWW91dHViZSB2aWRlbyBwbGF5ZXIgY3VzdG9tIGNvbnRyb2xzL3BsYXliYWNrIGZ1bmN0aW9uYWxpdHlcbiQoJyNwbGF5LTInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJyNwbGF5ZXItMicpWzBdLnNyYyArPSAnP2F1dG9wbGF5PTEnO1xuICAkKCcjcGxheWVyLTInKS5zaG93KCk7XG4gICQoJyN2aWRlby1jb3Zlci0yJykuaGlkZSgpO1xuICAkKCcjcGxheS0yJykuaGlkZSgpO1xuICAkKCcjdmlkZW8taGVhZGluZy0yJykuaGlkZSgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9