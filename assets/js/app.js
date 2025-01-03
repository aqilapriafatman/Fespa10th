(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    1: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "isRTL", function () {
          return o;
        }),
        n.d(t, "isMobile", function () {
          return a;
        }),
        n.d(t, "isDarkMode", function () {
          return s;
        }),
        n.d(t, "formatDate", function () {
          return i;
        }),
        n.d(t, "getParameterByName", function () {
          return l;
        }),
        n.d(t, "adjustImageGallery", function () {
          return c;
        }),
        n.d(t, "managePostImages", function () {
          return r;
        }),
        n.d(t, "makeImagesZoomable", function () {
          return d;
        });
      var o = function () {
          var e = document.querySelector("html");
          return ["ar", "he", "fa"].includes(e.getAttribute("lang"));
        },
        a = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "768px";
          return window.matchMedia("(max-width: ".concat(e, ")")).matches;
        },
        s = function () {
          var e =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)");
          return e && e.matches;
        },
        i = function (e) {
          return e
            ? new Date(e).toLocaleDateString(document.documentElement.lang, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "";
        },
        l = function (e, t) {
          t || (t = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
          var n = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")).exec(t);
          return n
            ? n[2]
              ? decodeURIComponent(n[2].replace(/\+/g, " "))
              : ""
            : null;
        },
        c = function () {
          for (
            var e = document.querySelectorAll(".kg-gallery-image img"),
              t = 0,
              n = e.length;
            t < n;
            t++
          ) {
            var o = e[t].closest(".kg-gallery-image"),
              a = e[t].attributes.width.value / e[t].attributes.height.value;
            o.style.flex = "".concat(a, " 1 0%");
          }
        },
        r = function (e) {
          e(".js-post-content")
            .find("img")
            .each(function () {
              e(this).closest("figure").hasClass("kg-bookmark-card") ||
                e(this).closest("figure").hasClass("kg-nft-card") ||
                e(this).parent().is("a") ||
                e(this).hasClass("kg-product-card-image") ||
                e(this).hasClass("kg-audio-thumbnail") ||
                e(this).addClass("js-zoomable");
            });
        },
        d = function (e, t) {
          t(".js-zoomable").on("opened", function () {
            setTimeout(function () {
              var t = e(".medium-zoom-image--opened");
              t.length > 1 && t.last().hide();
            }, 10);
          });
        };
    },
    16: function (e, t, n) {
      e.exports = n(17);
    },
    17: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0),
        a = n.n(o),
        s = n(9),
        i = n.n(s),
        l = n(13),
        c = (n(18), n(2)),
        r = n(10),
        d = n.n(r),
        u = n(11),
        m = n(3),
        h = (n(20), n(1));
      a()(function () {
        Object(h.isRTL)() && a()("html").attr("dir", "rtl").addClass("rtl");
        var e = a()("body"),
          t = a()(".js-header"),
          n = a()(".js-open-menu"),
          o = a()(".js-close-menu"),
          s = a()(".js-menu"),
          r = a()(".js-toggle-submenu"),
          f = a()(".js-submenu-option")[0],
          g = a()(".js-submenu"),
          p = a()(".js-recent-slider"),
          v = a()(".js-open-secondary-menu"),
          b = a()(".js-open-search"),
          j = a()(".js-close-search"),
          w = a()(".js-search"),
          k = a()(".js-input-search"),
          C = a()(".js-search-results"),
          y = a()(".js-no-results"),
          M = a()(".js-toggle-darkmode"),
          O = a()(".js-main-nav"),
          S = a()(".js-main-nav-left"),
          _ = a()(".js-newsletter"),
          I = localStorage.getItem("theme"),
          x = null,
          A = !1,
          L = null,
          D = function () {
            t.removeClass("submenu-is-active"),
              r.removeClass("active"),
              g.removeClass("opened").addClass("closed");
          },
          T = function () {
            e.toggleClass("no-scroll-y");
          },
          E = function (e, t) {
            var n = new GhostContentAPI({
                url: e,
                key: t,
                version: "v4",
              }),
              o = [],
              a = {
                shouldSort: !0,
                ignoreLocation: !0,
                findAllMatches: !0,
                includeScore: !0,
                minMatchCharLength: 2,
                keys: ["title", "custom_excerpt", "tags.name"],
              };
            n.posts
              .browse({
                limit: "all",
                include: "tags",
                fields: "id, title, url, published_at, custom_excerpt",
              })
              .then(function (e) {
                for (var t = 0, n = e.length; t < n; t++) o.push(e[t]);
                x = new u.a(o, a);
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          H = function (e) {
            Object(h.isMobile)() ||
              (e
                ? (O.addClass("toggle-overflow"), S.addClass("toggle-overflow"))
                : (O.removeClass("toggle-overflow"),
                  S.removeClass("toggle-overflow")));
          };
        (n.on("click", function () {
          t.addClass("mobile-menu-opened"), s.addClass("opened"), T();
        }),
        o.on("click", function () {
          t.removeClass("mobile-menu-opened"), s.removeClass("opened"), T();
        }),
        r.on("click", function () {
          (A = !A)
            ? (t.addClass("submenu-is-active"),
              r.addClass("active"),
              g.removeClass("closed").addClass("opened"))
            : D();
        }),
        b.on("click", function () {
          w.addClass("opened"),
            setTimeout(function () {
              k.trigger("focus");
            }, 400),
            T();
        }),
        j.on("click", function () {
          k.trigger("blur"), w.removeClass("opened"), T();
        }),
        k.on("keyup", function () {
          if (k.val().length > 0 && x) {
            var e = x.search(k.val()).filter(function (e) {
                if (e.score <= 0.5) return e;
              }),
              t = "";
            if (e.length > 0) {
              for (var n = 0, o = e.length; n < o; n++)
                t +=
                  '\n          <article class="m-result">            <a href="'
                    .concat(
                      e[n].item.url,
                      '" class="m-result__link">              <h3 class="m-result__title">'
                    )
                    .concat(
                      e[n].item.title,
                      '</h3>              <span class="m-result__date">'
                    )
                    .concat(
                      Object(h.formatDate)(e[n].item.published_at),
                      "</span>            </a>          </article>"
                    );
              y.hide(), C.html(t), C.show();
            } else C.html(""), C.hide(), y.show();
          } else C.html(""), C.hide(), y.hide();
        }),
        M.on("change", function () {
          M.is(":checked")
            ? (a()("html").attr("data-theme", "dark"),
              localStorage.setItem("theme", "dark"))
            : (a()("html").attr("data-theme", "light"),
              localStorage.setItem("theme", "light"));
        }),
        M.on("mouseenter", function () {
          H(!0);
        }),
        M.on("mouseleave", function () {
          H(!1);
        }),
        a()(window).on("click", function (e) {
          A && f && !f.contains(e.target) && ((A = !1), D());
        }),
        a()(document).on("keyup", function (e) {
          "Escape" === e.key && w.hasClass("opened") && j.trigger("click");
        }),
        I
          ? (a()("html").attr("data-theme", I),
            "dark" === I && M.attr("checked", !0))
          : Object(h.isDarkMode)() && M.attr("checked", !0),
        t.length > 0) &&
          new i.a(t[0], {
            tolerance: {
              down: 10,
              up: 20,
            },
            offset: 15,
            onUnpin: function () {
              if (!Object(h.isMobile)() && L) {
                var e = L[0];
                e && e.state.isVisible && e.hide();
              }
            },
          }).init();
        if (p.length > 0)
          new m.d(".js-recent-slider", {
            modules: [m.b, m.a],
            freeMode: !0,
            slidesPerView: "auto",
            a11y: !0,
            on: {
              init: function () {
                Object(c.a)(".js-recent-article-title", 50);
              },
            },
          });
        if (
          ("undefined" != typeof disableFadeAnimation && disableFadeAnimation
            ? a()("[data-aos]").addClass("no-aos-animation")
            : d.a.init({
                once: !0,
                startEvent: "DOMContentLoaded",
              }),
          v.length > 0)
        ) {
          var P = document.getElementById("secondary-navigation-template");
          L = Object(l.a)(".js-open-secondary-menu", {
            appendTo: document.body,
            content: P.innerHTML,
            allowHTML: !0,
            arrow: !0,
            trigger: "click",
            interactive: !0,
            onShow: function () {
              H(!0);
            },
            onHidden: function () {
              H(!1);
            },
          });
        }
        Object(l.a)(".js-tooltip"),
          Object(c.a)(".js-article-card-title", 100),
          Object(c.a)(".js-article-card-title-no-image", 250),
          "undefined" != typeof disableNewsletter &&
            disableNewsletter &&
            _.remove(),
          "undefined" != typeof ghostSearchApiKey
            ? E(ghostHost, ghostSearchApiKey)
            : (b.css("visibility", "hidden"), j.remove(), w.remove());
      });
    },
  },
  [[16, 0, 1]],
]);
