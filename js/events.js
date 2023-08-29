/* global Fluid */

Fluid.events = {
  registerNavbarEvent: function () {
    var navbar = jQuery("#navbar");
    if (navbar.length === 0) {
      return;
    }
    var submenu = jQuery("#navbar .dropdown-menu");
    if (navbar.offset().top > 0) {
      navbar.removeClass("navbar-dark");
      submenu.removeClass("navbar-dark");
    }
    Fluid.utils.listenScroll(function () {
      navbar[navbar.offset().top > 50 ? "addClass" : "removeClass"](
        "top-nav-collapse"
      );
      submenu[navbar.offset().top > 50 ? "addClass" : "removeClass"](
        "dropdown-collapse"
      );
      if (navbar.offset().top > 0) {
        navbar.removeClass("navbar-dark");
        submenu.removeClass("navbar-dark");
      } else {
        navbar.addClass("navbar-dark");
        submenu.removeClass("navbar-dark");
      }
    });
    jQuery("#navbar-toggler-btn").on("click", function () {
      jQuery(".animated-icon").toggleClass("open");
      jQuery("#navbar").toggleClass("navbar-col-show");
    });
  },

  registerParallaxEvent: function () {
    var ph = jQuery('#banner[parallax="true"]');
    if (ph.length === 0) {
      return;
    }
    var board = jQuery("#board");
    if (board.length === 0) {
      return;
    }
    var parallax = function () {
      var pxv = jQuery(window).scrollTop() / 5;
      var offset = parseInt(board.css("margin-top"), 10);
      var max = 96 + offset;
      if (pxv > max) {
        pxv = max;
      }
      ph.css({
        transform: "translate3d(0," + pxv + "px,0)",
      });
      var sideCol = jQuery(".side-col");
      if (sideCol) {
        sideCol.css({
          "padding-top": pxv + "px",
        });
      }
    };
    Fluid.utils.listenScroll(parallax);
  },

  billboard: function () {
    if (!("console" in window)) {
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`十八加十八`);
  },
};
