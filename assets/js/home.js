(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    23: function (e, t, n) {
      e.exports = n(24);
    },
    24: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n.n(i),
        s = n(2),
        a = n(3);
      r()(function () {
        var e = r()(".js-featured-slider");
        if (e.length > 0) {
          var t = e.find(".swiper-slide").length;
          new a.d(".js-featured-slider", {
            modules: [a.c, a.a],
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            a11y: !0,
            on: {
              init: function () {
                Object(s.a)(".js-featured-article-title", 200);
              },
            },
          });
          1 === t && e.find(".js-featured-slider-button").remove();
        }
        Object(s.a)(".js-featured-article-title", 200);
      });
    },
  },
  [[23, 0, 1]],
]);
