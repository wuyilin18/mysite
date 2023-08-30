const background = document.querySelector(".background");

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY !== 0) {
    background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
  } else {
    background.style.backgroundPosition = "";
  }
});

Fluid.events = {
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

  registerScrollDownArrowEvent: function () {
    var scrollbar = jQuery(".scroll-down-bar");
    if (scrollbar.length === 0) {
      return;
    }
    scrollbar.on("click", function () {
      Fluid.utils.scrollToElement("#board", -jQuery("#navbar").height());
    });
  },

  registerScrollTopArrowEvent: function () {
    var topArrow = jQuery("#scroll-top-button");
    if (topArrow.length === 0) {
      return;
    }
    var board = jQuery("#board");
    if (board.length === 0) {
      return;
    }
    var posDisplay = false;
    var scrollDisplay = false;
    // Position
    var setTopArrowPos = function () {
      var boardRight = board[0].getClientRects()[0].right;
      var bodyWidth = document.body.offsetWidth;
      var right = bodyWidth - boardRight;
      posDisplay = right >= 50;
      topArrow.css({
        bottom: posDisplay && scrollDisplay ? "20px" : "-60px",
        right: right - 64 + "px",
      });
    };
  },
};
