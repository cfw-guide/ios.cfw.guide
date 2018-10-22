/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){

  // Sticky footer
  var bumpIt = function() {
      $('body').css('margin-bottom', $('.page__footer').outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  $("#main").fitVids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  if((window.location.href.indexOf("/he_IL/") > -1) || (window.location.href.indexOf("/ar_SA/") > -1)) {
    $("body").css("direction", "rtl");

    $("nav.greedy-nav .nav-selector").css("left", "2.5rem");
    $("nav.greedy-nav .lang-selector").css("left", ".2rem");

    $("nav.greedy-nav .links-menu").css("right", "auto");
    $("nav.greedy-nav .lang-menu").css("right", "auto");

    $("nav.greedy-nav .links-menu").css("left", "2.5rem");
    $("nav.greedy-nav .lang-menu").css("left", ".2rem");

    $("nav.greedy-nav .visible-links").css("padding-right", "0");
    $("nav.greedy-nav .visible-links").css("padding-left", "2rem");

    $("nav.greedy-nav .visible-links li:first-child a").css("margin-right", "0");
    $("nav.greedy-nav .visible-links li:first-child a").css("margin-left", "1rem");

    $("nav.greedy-nav .visible-links li:first-child").css("padding-right", "0");
    $("nav.greedy-nav .visible-links li:first-child").css("padding-left", "2em");

    $("nav.greedy-nav .visible-links li:last-child a").css("margin-right", "1rem");
    $("nav.greedy-nav .visible-links li:last-child a").css("margin-left", "0");

    // for some reason js cannot directly modify :before and :after pseudo-elements' css
    $('nav.greedy-nav').prepend('<style>.hidden-links:before{right:inherit !important;}</style>');
    $('nav.greedy-nav').prepend('<style>.hidden-links:before{left:5px !important;}</style>');

    $('nav.greedy-nav').prepend('<style>.hidden-links:after{right:inherit !important;}</style>');
    $('nav.greedy-nav').prepend('<style>.hidden-links:after{left:5px !important;}</style>');
  }

  var sidebar_shown = true;
  var sidebar_hidden_pages = ["404", "credits", "donations", "dumping-dsiware", "f3-(linux)", "f3x-(mac)", "faq", "file-extensions-(windows)", "h2testw-(windows)", "installing-dsiware", "installing-unlaunch-(tempnand)", "replacing-system-menu-with-dsimenu++", "site-navigation"];

  for(var i = 0; i < sidebar_hidden_pages.length; i++){
    if(window.location.href.indexOf(sidebar_hidden_pages[i]) > -1) {
      sidebar_shown = false;
    }
  }

  var methods = {
    "installing-unlaunch": "1",
    "installing-unlaunch-(tempnand)": "2",
  };

  for(var method in methods){
    if(window.location.href.indexOf("/" + method) > -1) {
      localStorage.setItem('method', methods[method]);
    }
  }

  var method;
  if(!(method = localStorage.getItem('method'))){
    sidebar_shown = false;
  }

  if(sidebar_shown){
    var unhide = [];
    var route = {
      "1": ["installing-unlaunch", "installing-hiyacfw", "finalising-setup"],
      "2": ["blocking-updates", "installing-hiyacfw", "finalising-setup"],
    };
    unhide = unhide.concat(route[method]);
    if(typeof unhide !== 'undefined' && unhide.length > 0){
      unhide.push("home");
      var ol = $('.sidebar.sticky .nav__list .nav__items ol');
      for (var i = 0; i < unhide.length; i++){
        ol.children('li[data-name="' + unhide[i] + '"]').css("display", "");
      }
      ol.children().each(function(idx, li) {
        var link = $(li).find("a").attr('href');
        var name = $(li).attr('data-name');
        if((window.location.href.endsWith(link) ||
            window.location.href.endsWith(link + "/") ||
            window.location.href.indexOf(link + "#") > -1 ||
            window.location.href.indexOf(link + ".html") > -1)
            && name !== "home"){
          $(li).addClass("active");
          return false;
        }
        $(li).addClass("completed");
      });
      if (ol.children(".active").css("display") != "none"){
        $('.sidebar.sticky').css("display", "inherit");
      }
    }
  }
});
