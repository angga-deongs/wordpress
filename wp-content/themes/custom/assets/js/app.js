(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utilities = require("./utilities");

var _components = require("./components");

// --- utilities
// --- components
// --- App
var App = function () {
  // --- run transition
  var runTransition = function runTransition() {
    $('body').removeClass('hold-transition');
  }; // --- show site content


  var showSiteContent = function showSiteContent() {
    $('.js-main-site').removeClass('main-site--hide'); // --- disable scroll

    _utilities.Scrollable.enable();
  }; // --- ready


  var ready = function ready() {
    (function ($) {
      // --- disable scroll
      _utilities.Scrollable.disable(); // --- Global


      runTransition();
      showSiteContent();

      _utilities.BrowserCheck.init(); // --- Project


      _components.WindowScroll.init();

      _components.WindowResize.init();

      _components.ScrollAnimate.init();

      _components.Header.init();

      _components.Footer.init();

      _components.Banner.init();

      _components.Career.init();

      _components.News.init();

      _components.EventPromotion.init(); // LoadImage.init();

    })(jQuery);
  }; // --- load


  var load = function load() {
    (function ($) {
      $(window).on("load", function () {// setTimeout(() => {
        //   LoadImage.init();
        // }, 200);
      });
    })(jQuery);
  }; // --- init


  var init = function init() {
    load();
    ready();
  }; // --- return


  return {
    init: init
  };
}(); // ---  run main js


App.init();

},{"./components":11,"./utilities":16}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Banner
@description: Banner
--------------------------------------------------------------------------------- */
// - Banner
var Banner = function () {
  // - handleResizeCarousel
  var handleResizeCarousel = function handleResizeCarousel() {
    if ($(window).width() >= 992) {
      handleRunCarousel();
    } else {
      handleStopCarousel();
    }
  }; // - handleRunCarousel


  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-banner');

    var _itemLength = $('.js-banner .banner__item').length;
    var _itemRun = 1; // destroy carousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        dots: false,
        nav: true,
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        autoplayTimeout: 6000,
        onChange: function onChange(event) {
          _selector.addClass('banner__list--change');
        }
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }

      _selector.addClass('banner__list--single');
    }
  }; // - handleStopCarousel


  var handleStopCarousel = function handleStopCarousel() {
    var _selector = $('.js-banner'); // destroy carousel


    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel banner__list--change');
    }
  }; // - init


  var init = function init() {
    if ($('.banner').length) {
      handleResizeCarousel();
    }
  }; // return


  return {
    init: init,
    setCarousel: handleResizeCarousel
  };
}();

var _default = Banner;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Career
@description: Career
--------------------------------------------------------------------------------- */
// - Career
var Career = function () {
  // - handleClickCareer
  var handleClickCareer = function handleClickCareer() {
    var _selector = $('.js-career-btn');

    _selector.on('click', function (e) {
      var _this = $(e.currentTarget);

      var _parents = _this.parents('.career__item');

      if (_parents.hasClass('career__item--open')) {
        _parents.removeClass('career__item--open').find('.career__desc').slideUp(300, function () {
          _this.fadeOut(100, function () {
            _this.text('Read More').fadeIn(100);
          });
        });
      } else {
        _parents.addClass('career__item--open').find('.career__desc').slideDown(300, function () {
          _this.fadeOut(100, function () {
            _this.text('Close').fadeIn(100);
          });
        });
      }
    });
  }; // - init


  var init = function init() {
    handleClickCareer();
  }; // return


  return {
    init: init
  };
}();

var _default = Career;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: EventPromotion
@description: EventPromotion
--------------------------------------------------------------------------------- */
// - utilities
// - EventPromotion
var EventPromotion = function () {
  var _url = window.location.href; // - handleClickPopup

  var handleClickPopup = function handleClickPopup() {
    var _selector = $(".js-card-tertiary-btn");

    _selector.on("click", function (e) {
      // get data
      var _this = $(e.currentTarget);

      var _parents = _this.parents(".card-tertiary");

      var _slug = _parents.attr("data-slug");

      var _link = _parents.attr("data-link");

      var _string = ""; // data === img

      var _src = _parents.find(".card-tertiary__img__el").attr("src");

      var _alt = _parents.find(".card-tertiary__category").text(); // data === video


      var _typeVideo = _this.attr("data-video");

      if (!$(".popup").hasClass("show-popup")) {
        if (typeof _typeVideo !== "undefined" && _typeVideo !== false) {
          var _srcVideo = _parents.find(".card-tertiary__video__el source").attr("src");

          _string = '<div class="popup__video">' + '<video class="popup__video__el" autoplay loop muted>' + '<source src="' + _srcVideo + '" type="video/mp4" />' + "Your browser does not support the video tag." + "</video>" + "</div>";
        } else {
          _string = '<div class="popup__img">' + '<img class="popup__img__el" src="' + _src + '" alt="' + _alt + '" />' + "</div>";
        }

        $(".popup").addClass("show-popup");
        $(".popup__inner").append(_string);

        if (typeof _link !== "undefined" && _link !== false) {
          $(".popup__inner").append('<a class="popup__link" href=' + _link + ' target="_blank">MORE INFO</a>');
        } // update url


        window.history.pushState(_url, "popLink", _url + "detail/" + _slug);

        _utilities.Scrollable.disable();
      }

      e.stopPropagation();
    });

    $("body").on("click", ".popup__img__el", function (e) {
      e.stopPropagation();
    });
    $("body").on("click", ".popup__video__el", function (e) {
      e.stopPropagation();
    });
  }; // - handleClosePopup


  var handleClosePopup = function handleClosePopup() {
    $("body").on("click", function () {
      if ($(".section-primary--event").length) {
        handleHidePopup();
      }
    });
    $(document).on("keyup", function (e) {
      if (e.which === 27) {
        handleHidePopup();
      }
    });
  }; // - handleHidePopup


  var handleHidePopup = function handleHidePopup() {
    if ($(".popup").hasClass("show-popup")) {
      // update url
      window.history.pushState(_url, "popLink", _url); // update data

      $(".popup").removeClass("show-popup");
      $(".popup__inner > *").remove();

      _utilities.Scrollable.enable();
    }
  }; // - init


  var init = function init() {
    handleClickPopup();
    handleClosePopup();
  }; // return


  return {
    init: init
  };
}();

var _default = EventPromotion;
exports["default"] = _default;

},{"../utilities":16}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */
// - Footer
var Footer = function () {
  // - handleSetFooter
  var handleSetFooter = function handleSetFooter() {
    if ($(window).width() > 767.98) {
      var _footerHeight = $('.footer').innerHeight();

      $('.main-site').css('padding-bottom', _footerHeight + 'px');
    } else {
      $('.main-site').removeAttr('style');
    }
  }; // - init


  var init = function init() {
    handleSetFooter();
  }; // return


  return {
    init: init,
    setFooter: handleSetFooter
  };
}();

var _default = Footer;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */
// - utilities
var Header = function () {
  // - handleClickDropdown
  var handleClickDropdown = function handleClickDropdown() {
    var _selector = $('.js-header-dropdown');

    _selector.on('click', function (e) {
      var _this = $(e.currentTarget);

      var _parents = _this.parents('.header__item');

      var _height = _this.next().height() + 32;

      if ($(window).width() < 992) {
        if (_parents.hasClass('active')) {
          _parents.find('.header__dropdown').slideUp().parents('.header__item').removeClass('active');
        } else {
          _parents.find('.header__dropdown').slideDown().parents('.header__item').addClass('active').siblings().removeClass('active').find('.header__dropdown').slideUp();
        }
      } else {
        if (_parents.hasClass('header__item--show')) {
          _parents.removeClass('header__item--show');

          $('.header__inner').removeAttr('style');
        } else {
          $('.header__inner').css('paddingBottom', _height);

          _parents.addClass('header__item--show');

          if (_parents.siblings().hasClass('header__item--show')) {
            _parents.siblings().removeClass('header__item--show');
          }
        }
      }

      e.preventDefault();
    });
  }; // - handleMobileMenu


  var handleMobileMenu = function handleMobileMenu() {
    $('.js-burger-menu').on('click', function (e) {
      if ($('body').hasClass('show-navigation')) {
        $('body').removeClass('show-navigation');

        _utilities.Scrollable.enable();
      } else {
        $('body').addClass('show-navigation');

        _utilities.Scrollable.disable();
      }

      e.stopPropagation();
    });
  }; // - handleCloseMobileMenu


  var handleCloseMobileMenu = function handleCloseMobileMenu() {
    $(document).on('keyup', function (e) {
      if (e.which === 27) {
        if ($('body').hasClass('show-navigation')) {
          $('body').removeClass('show-navigation');

          _utilities.Scrollable.enable();
        }
      }
    });
  }; // - handleCheckClass


  var handleCheckClass = function handleCheckClass() {
    if ($(window).width() > 991.98) {
      $('body').removeClass('show-navigation');

      _utilities.Scrollable.enable();
    } else {
      $('.header__inner').removeAttr('style');
    }
  }; // - init


  var init = function init() {
    handleClickDropdown();
    handleMobileMenu();
    handleCloseMobileMenu();
    handleCheckClass();
  };

  return {
    init: init,
    checkClass: handleCheckClass
  };
}();

var _default = Header;
exports["default"] = _default;

},{"../utilities":16}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: News
@description: News
--------------------------------------------------------------------------------- */
// - News
var News = function () {
  // - handleLoadMore
  var handleLoadMore = function handleLoadMore() {
    // remove 'more' if item <= 6
    var _length = $(".section-primary__list").attr("data-length");

    if ($(".section-primary--news .data-not-found").length || _length <= 6) {
      $(".section-primary__action").remove();
    }

    var _ppp = 6;
    var _pageNumber = 1;
    $(".js-news-load-more").on("click", function (e) {
      $(e.currentTarget).attr("disabled", true);
      _pageNumber++;
      handleLoadNews(_ppp, _pageNumber, _length);
    });
  }; // - handleLoadNews


  var handleLoadNews = function handleLoadNews(_ppp, _pageNumber, _length) {
    var _str = "&pageNumber=" + _pageNumber + "&ppp=" + _ppp + "&action=more_news_ajax";

    $.ajax({
      type: "POST",
      dataType: "html",
      url: ajax_posts.ajaxurl,
      data: _str,
      success: function success(data) {
        var _data = $(data);

        if (_data.length) {
          $(".section-primary__list").append(_data);

          _data.find(".card-primary__img__el").imagesLoaded(function () {
            if (!_data.hasClass("is-visible")) {
              _data.addClass("is-visible");
            }
          });

          $(".section-primary__action").children(".js-news-load-more").attr("disabled", false);
          var _newsShow = $(".section-primary__list .card-primary").length;

          if (_length <= _newsShow) {
            $(".section-primary__action").remove();
          }
        } else {
          $(".section-primary__action").remove();
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
      }
    });
  }; // - init


  var init = function init() {
    if ($(".section-primary--news").length) {
      handleLoadMore();
    }
  }; // return


  return {
    init: init
  };
}();

var _default = News;
exports["default"] = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: ScrollAnimate
@description: ScrollAnimate
--------------------------------------------------------------------------------- */
// --- ScrollAnimate
var ScrollAnimate = function () {
  // ---  handleCardPrimary
  var handleCardPrimary = function handleCardPrimary(el) {
    if ($('.card-primary__img__el').length) {
      $('.card-primary__img__el').each(function (i, el) {
        $(el).imagesLoaded(function () {
          if (!$(el).parents('.card-primary').hasClass('is-visible')) {
            $(el).parents('.card-primary').addClass('is-visible');
          }
        });
      });
    }
  }; // ---  handleCardSecondary


  var handleCardSecondary = function handleCardSecondary(el) {
    if ($('.card-secondary__img__el').length) {
      $('.card-secondary__img__el').each(function (i, el) {
        $(el).imagesLoaded(function () {
          if (!$(el).parents('.card-secondary').hasClass('is-visible')) {
            $(el).parents('.card-secondary').addClass('is-visible');
          }
        });
      });
    }
  }; // ---  handleCardTertiary


  var handleCardTertiary = function handleCardTertiary(el) {
    if ($('.card-tertiary__img__el').length) {
      $('.card-tertiary__img__el').each(function (i, el) {
        $(el).imagesLoaded(function () {
          if (!$(el).parents('.card-tertiary').hasClass('is-visible')) {
            $(el).parents('.card-tertiary').addClass('is-visible');
          }
        });
      });
    }
  }; // --- handleRevealConfig


  var handleRevealConfig = function handleRevealConfig() {
    var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '12px';
    var _config = {
      duration: 1000,
      distance: distance,
      delay: 250,
      origin: 'bottom'
    };
    return _config;
  }; // --- handleScrollAnimateResize


  var handleScrollAnimateResize = function handleScrollAnimateResize() {
    // - home
    if ($('.banner').length) {
      if ($(window).width() > 991.98) {
        $('.banner__item').removeAttr('data-sr-id style');
      } else {
        $('.banner__item').css('visibility', 'visible');
      }
    }
  }; // --- handleScrollAnimate


  var handleScrollAnimate = function handleScrollAnimate() {
    // - home
    if ($('.banner').length) {
      if ($(window).width() < 992) {
        ScrollReveal().reveal('.banner__item', handleRevealConfig());
      }
    } // - brands


    if ($('.brands').length) {
      ScrollReveal().reveal('.card-secondary', {
        duration: 1000,
        distance: '12px',
        delay: 250,
        origin: 'bottom',
        afterReveal: handleCardSecondary
      });
    } // - news


    if ($('.section-primary--news').length) {
      ScrollReveal().reveal('.section-primary__title', handleRevealConfig('-12px'));
      ScrollReveal().reveal('.card-primary', {
        duration: 1000,
        distance: '12px',
        delay: 250,
        origin: 'bottom',
        afterReveal: handleCardPrimary
      });
      ScrollReveal().reveal('.section-primary__action', handleRevealConfig());

      if ($('.data-not-found').length) {
        ScrollReveal().reveal('.data-not-found', handleRevealConfig());
      }
    } // - event


    if ($('.section-primary--event').length) {
      ScrollReveal().reveal('.section-primary__title', handleRevealConfig('-12px'));
      ScrollReveal().reveal('.card-tertiary', {
        duration: 1000,
        distance: '12px',
        delay: 250,
        origin: 'bottom',
        afterReveal: handleCardTertiary
      });
    } // - article-banner


    if ($('.article').length) {
      ScrollReveal().reveal('.article__banner', handleRevealConfig());
      ScrollReveal().reveal('.article__page', handleRevealConfig());
      ScrollReveal().reveal('.article__title', handleRevealConfig());
      ScrollReveal().reveal('.article__date', handleRevealConfig());
      ScrollReveal().reveal('.article__desc', handleRevealConfig());
      ScrollReveal().reveal('.article__pagination', handleRevealConfig());
    } //- contacts


    if ($('.contacts').length) {
      ScrollReveal().reveal('.contacts__left', handleRevealConfig());
      ScrollReveal().reveal('.contacts__right', handleRevealConfig());
    } //- loyalty-program


    if ($('.loyalty-program').length) {
      ScrollReveal().reveal('.card-box', handleRevealConfig());
    } //- career


    if ($('.career').length) {
      ScrollReveal().reveal('.card-box', handleRevealConfig());
      ScrollReveal().reveal('.career__item', handleRevealConfig());
    }
  };

  var init = function init() {
    handleScrollAnimate();
  }; // --- return


  return {
    init: init,
    setScrollAnimate: handleScrollAnimateResize
  };
}();

var _default = ScrollAnimate;
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

/*----------------------------------------
@name : components - windowresize
@description: Function to window resize
----------------------------------------
*/
var WindowResize = function () {
  var _timeout = false,
      _delta = 100,
      _rtime; // - handleWindowResize


  var handleWindowResize = function handleWindowResize() {
    $(window).on('resize', function () {
      _rtime = new Date();

      if (_timeout === false) {
        _timeout = true;
        $('body').addClass('hold-transition');
        setTimeout(handleWindowResizeEnd, _delta);
      }
    });
  };

  var handleWindowResizeEnd = function handleWindowResizeEnd() {
    if (new Date() - _rtime < _delta) {
      setTimeout(handleWindowResizeEnd, _delta);
    } // - end on window resize
    else {
      _timeout = false; // run function on Resize end

      $('body').removeClass('hold-transition');
      ;

      _index.Header.checkClass();

      _index.Footer.setFooter();

      _index.Banner.setCarousel();

      _index.ScrollAnimate.setScrollAnimate();
    }
  }; // - init


  var init = function init() {
    handleWindowResize();
  };

  return {
    init: init
  };
}();

var _default = WindowResize;
exports["default"] = _default;

},{"./index":11}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*----------------------------------------
@name : window scroll - components
@description: function to window scroll
----------------------------------------
*/
var WindowScroll = function () {
  var _lastScrollTop = 0;
  var _delta = 4;

  var _headerHeight = $('.header').height() / 2; // --- handleHeaderScroll


  var handleHeaderScroll = function handleHeaderScroll() {
    // --- _scrollTop
    var _scrollTop = $(window).scrollTop(); // --- Make sure they scroll more than _delta


    if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
      return;
    }

    if (_scrollTop > 32) {
      $('body').addClass('on-scroll');
    } else {
      $('body').removeClass('on-scroll');
    } // --- Scroll Down


    if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
      if (!$('.show-navigation').length) {
        $('body').addClass('scroll-down');
      }
    } else {
      // --- Scroll Up
      if (_scrollTop + $(window).height() < $(document).height()) {
        $('body').removeClass('scroll-down');
      }
    }

    _lastScrollTop = _scrollTop;
  }; // --- handleScroll


  var handleScroll = function handleScroll() {
    var _didScroll;

    $(window).scroll(function () {
      _didScroll = true;
      setInterval(function () {
        if (_didScroll) {
          if ($('.header').length) {
            handleHeaderScroll();
          }

          _didScroll = false;
        }
      }, 200);
    });
  }; // --- init


  var init = function init() {
    handleScroll();

    if ($('.header').length) {
      handleHeaderScroll();
    }
  }; // --- return


  return {
    init: init
  };
}();

var _default = WindowScroll;
exports["default"] = _default;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Banner", {
  enumerable: true,
  get: function get() {
    return _Banner["default"];
  }
});
Object.defineProperty(exports, "Career", {
  enumerable: true,
  get: function get() {
    return _Career["default"];
  }
});
Object.defineProperty(exports, "EventPromotion", {
  enumerable: true,
  get: function get() {
    return _EventPromotion["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "News", {
  enumerable: true,
  get: function get() {
    return _News["default"];
  }
});
Object.defineProperty(exports, "ScrollAnimate", {
  enumerable: true,
  get: function get() {
    return _ScrollAnimate["default"];
  }
});
Object.defineProperty(exports, "WindowResize", {
  enumerable: true,
  get: function get() {
    return _WindowResize["default"];
  }
});
Object.defineProperty(exports, "WindowScroll", {
  enumerable: true,
  get: function get() {
    return _WindowScroll["default"];
  }
});

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

var _WindowResize = _interopRequireDefault(require("./WindowResize"));

var _Header = _interopRequireDefault(require("./Header"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Banner = _interopRequireDefault(require("./Banner"));

var _Career = _interopRequireDefault(require("./Career"));

var _ScrollAnimate = _interopRequireDefault(require("./ScrollAnimate"));

var _News = _interopRequireDefault(require("./News"));

var _EventPromotion = _interopRequireDefault(require("./EventPromotion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./Banner":2,"./Career":3,"./EventPromotion":4,"./Footer":5,"./Header":6,"./News":7,"./ScrollAnimate":8,"./WindowResize":9,"./WindowScroll":10}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: BrowserCheck
@description: BrowserCheck
--------------------------------------------------------------------------------- */
// --- BrowserCheck
var BrowserCheck = function () {
  // --- handleCheck
  var handleCheck = function handleCheck() {
    var _browser = 'dekstop-browser';
    var HTMLElement = document.getElementsByTagName('html')[0];

    if (navigator.userAgent.match(/Android/i)) {
      _browser = 'android-browser';
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
      _browser = 'blackberry-browser';
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      _browser = 'ios-browser';
    } else if (navigator.userAgent.match(/IEMobile/i)) {
      _browser = 'windows-phone-browser';
    }

    $('html').addClass(_browser);
  }; // --- init


  var init = function init() {
    handleCheck();
  }; // --- return


  return {
    init: init
  };
}();

var _default = BrowserCheck;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Scrollable
@description: Scrollable
--------------------------------------------------------------------------------- */
// --- Scrollable
var Scrollable = function () {
  // --- handleEnable
  var handleEnable = function handleEnable() {
    $('body').removeClass('rm-scroll');
  }; // --- handleDisable


  var handleDisable = function handleDisable() {
    $('body').addClass('rm-scroll');
  }; // --- return


  return {
    enable: handleEnable,
    disable: handleDisable
  };
}();

var _default = Scrollable;
exports["default"] = _default;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Session
@description: Session
--------------------------------------------------------------------------------- */
// --- Session
var Session = function () {
  var _timeoutSession; // --- handleSet


  var handleSet = function handleSet(key, value) {
    return localStorage.setItem(key, value);
  }; // --- handleGet


  var handleGet = function handleGet(key, value) {
    return localStorage.getItem(key, value);
  }; // --- handleRemove


  var handleRemove = function handleRemove(key) {
    return localStorage.removeItem(key);
  }; // --- handleClear


  var handleClear = function handleClear(key) {
    return localStorage.clear();
  }; // --- handleTimeout


  var handleTimeout = function handleTimeout(callbackFunction) {
    var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    _timeoutSession = setTimeout(function () {
      callbackFunction();
    }, timer * 1000);
    document.addEventListener('mousemove', function (e) {
      clearTimeout(_timeoutSession);
      _timeoutSession = setTimeout(function () {
        callbackFunction();
      }, timer * 1000);
    }, true);
  }; // --- return


  return {
    set: handleSet,
    get: handleGet,
    remove: handleRemove,
    clear: handleClear,
    timeout: handleTimeout
  };
}();

var _default = Session;
exports["default"] = _default;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _variables = require("../variables");

/* ------------------------------------------------------------------------------
@name: Validation
@description: Validation
--------------------------------------------------------------------------------- */
// --- variables
var Validation = function () {
  // - handleInput
  var handleInput = function handleInput(eventsEl, selectorEl) {
    $.each(eventsEl, function (ie, ve) {
      $.each(selectorEl, function (i, v) {
        $('#' + v.id).on(ve, function (e) {
          var _this = $(e.currentTarget),
              _val = _this.val(),
              _target = _this.attr('data-target'),
              _alertEl = $('#' + _target);

          var _errorMessage; // Condition if validation does not error


          _alertEl.removeClass('error');

          _this.parent().removeClass('error'); // Minimum Validation


          if (v.validation.minimum) {
            if (_val.length < v.validation.minimumChar) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Maximum Validation


          if (v.validation.maximum) {
            if (_val.length < v.validation.maximumChar) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Minimum Validation


          if (v.validation.name) {
            if (!_variables.PERSON_NAME.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Email validation


          if (v.validation.email) {
            if (!_variables.EMAIL.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Numeric validation


          if (v.validation.phone) {
            if (!_variables.PHONE_NUMBER.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid-phone');
            }
          } // Required validation


          if (_variables.WHITESPACE.test(_val)) {
            _errorMessage = _alertEl.attr('data-req');
          } // Error Message


          if (_errorMessage !== undefined) {
            _alertEl.text(_errorMessage);

            _alertEl.addClass('error');

            _this.parent().addClass('error');
          }
        });
      });
    }); // Return Handle keypress

    handleKeypress();
  }; // handleKeypress


  var handleKeypress = function handleKeypress() {
    $('.number-only').on('keypress', function (e) {
      var _this = $(e.currentTarget),
          _val = _this.val(),
          _target = _this.attr('data-target'),
          _alertEl = $('#' + _target);

      var _errorMessage;

      if (!_variables.NUMBERIC.test(e.key)) {
        _errorMessage = _alertEl.attr('data-invalid');

        _alertEl.text(_errorMessage);

        _alertEl.addClass('error');

        _this.parent().addClass('error'); // remove error after few second


        setTimeout(function () {
          _alertEl.removeClass('error');

          _this.parent().removeClass('error');
        }, 2000);
        e.preventDefault();
      }
    });
  };

  return {
    config: handleInput
  };
}();

var _default = Validation;
exports["default"] = _default;

},{"../variables":19}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BrowserCheck", {
  enumerable: true,
  get: function get() {
    return _BrowserCheck["default"];
  }
});
Object.defineProperty(exports, "Scrollable", {
  enumerable: true,
  get: function get() {
    return _Scrollable["default"];
  }
});
Object.defineProperty(exports, "Session", {
  enumerable: true,
  get: function get() {
    return _Session["default"];
  }
});
Object.defineProperty(exports, "Validation", {
  enumerable: true,
  get: function get() {
    return _Validation["default"];
  }
});
Object.defineProperty(exports, "isOS", {
  enumerable: true,
  get: function get() {
    return _isOS["default"];
  }
});

var _isOS = _interopRequireDefault(require("./isOS"));

var _BrowserCheck = _interopRequireDefault(require("./BrowserCheck"));

var _Scrollable = _interopRequireDefault(require("./Scrollable"));

var _Validation = _interopRequireDefault(require("./Validation"));

var _Session = _interopRequireDefault(require("./Session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./BrowserCheck":12,"./Scrollable":13,"./Session":14,"./Validation":15,"./isOS":17}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: isOS
@description: isOS
--------------------------------------------------------------------------------- */
var isOS = {
  android: function android() {
    return navigator.userAgent.match(/Android/i);
  },
  blackberry: function blackberry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  mac: function mac() {
    return navigator.platform.indexOf('Mac') > -1;
  },
  opera: function opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  win: function win() {
    return navigator.platform.indexOf('Win') > -1;
  },
  winMobile: function winMobile() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isOS.android() || isOS.blackberry() || isOS.iOS() || isOS.mac() || isOS.opera() || isOS.win() || isOS.winMobile();
  }
};
var _default = isOS;
exports["default"] = _default;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHITESPACE = exports.PHONE_NUMBER = exports.PERSON_NAME = exports.NUMBERIC = exports.FULL_NAME = exports.EMAIL = void 0;

/* ------------------------------------------------------------------------------
@name: Regex
@description: Regex
--------------------------------------------------------------------------------- */
var WHITESPACE = /^ *$/;
exports.WHITESPACE = WHITESPACE;
var EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
exports.EMAIL = EMAIL;
var NUMBERIC = /[0-9]+$/i;
exports.NUMBERIC = NUMBERIC;
var PHONE_NUMBER = /^(0|\+62)+([0-9]){4,16}/i;
exports.PHONE_NUMBER = PHONE_NUMBER;
var FULL_NAME = /^(?:[\u00c0-\u01ffa-zA-Z-\s\.']){3,}(?:[\u00c0-\u01ffa-zA-Z-\s\.']{3,})+$/i;
exports.FULL_NAME = FULL_NAME;
var PERSON_NAME = /^[a-zA-Z][a-zA-Z\-' ]*[a-zA-Z ]$/i;
exports.PERSON_NAME = PERSON_NAME;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Regex = require("./Regex");

Object.keys(_Regex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Regex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Regex[key];
    }
  });
});

},{"./Regex":18}]},{},[1])

//# sourceMappingURL=maps/app.js.map
