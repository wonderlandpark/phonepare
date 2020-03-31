(function(e) {
  function a(a) {
    for (
      var i, r, s = a[0], c = a[1], l = a[2], d = 0, u = [];
      d < s.length;
      d++
    )
      (r = s[d]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && u.push(o[r][0]),
        (o[r] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    p && p(a);
    while (u.length) u.shift()();
    return n.push.apply(n, l || []), t();
  }
  function t() {
    for (var e, a = 0; a < n.length; a++) {
      for (var t = n[a], i = !0, s = 1; s < t.length; s++) {
        var c = t[s];
        0 !== o[c] && (i = !1);
      }
      i && (n.splice(a--, 1), (e = r((r.s = t[0]))));
    }
    return e;
  }
  var i = {},
    o = { app: 0 },
    n = [];
  function r(a) {
    if (i[a]) return i[a].exports;
    var t = (i[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = e),
    (r.c = i),
    (r.d = function(e, a, t) {
      r.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (r.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, a) {
      if ((1 & a && (e = r(e)), 8 & a)) return e;
      if (4 & a && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            t,
            i,
            function(a) {
              return e[a];
            }.bind(null, i)
          );
      return t;
    }),
    (r.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return r.d(a, "a", a), a;
    }),
    (r.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (r.p = "/PHHI/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = s.push.bind(s);
  (s.push = a), (s = s.slice());
  for (var l = 0; l < s.length; l++) a(s[l]);
  var p = c;
  n.push([0, "chunk-vendors"]), t();
})({
  0: function(e, a, t) {
    e.exports = t("56d7");
  },
  "034f": function(e, a, t) {
    "use strict";
    var i = t("85ec"),
      o = t.n(i);
    o.a;
  },
  1878: function(e, a, t) {
    "use strict";
    var i = t("cfb9"),
      o = t.n(i);
    o.a;
  },
  "39fe": function(e, a, t) {
    "use strict";
    var i = t("f958"),
      o = t.n(i);
    o.a;
  },
  "3c67": function(e) {
    e.exports = JSON.parse(
      '{"names":{"spacegray":"스페이스 그레이","apple silver":"실버","apple gold":"골드","midnightgreen":"미드나이트 그린","cosmicblack":"코스믹 블랙","cosmicgray":"코스믹 그레이","cloudblue":"클라우드 블루","cloudwhite":"클라우드 화이트","crownsilver":"크라운 실버","majesticblack":"마제스틱 블랙","royalgold":"로얄 골드","prismblack":"프리즘 블랙","prismwhite":"프리즘 화이트","ceramicwhite":"세라믹 화이트","ceramicblack":"세라믹 블랙","flamingopink":"플라밍고 핑크","prismgreen":"프리즘 그린","canariayellow":"카나리아 옐로우","midnightblack":"미드나이트 블랙","coralblue":"코랄 블루","titaniumgray":"티타늄 그레이","lilacpurple":"라일락 퍼플","deepseablue":"딥씨 블루","orchidgray":"오키드 그레이","maplegold":"메이플 골드","applepurple":"퍼플","black":"블랙","white":"화이트","appleyellow":"옐로우","applegreen":"그린","productred":"(PRODUCT)RED","applegray":"그레이","oceanblue":"오션 블루","lavenderpurple":"라벤더 퍼플","metalliccopper":"메탈릭 코퍼","auraglow":"아우라 글로우","aura white":"아우라 화이트","aurared":"아우라 레드","aurapink":"아우라 핑크","aura black":"아우라 블랙","aurablue":"아우라 블루","prismblue":"프리즘 블루","arcticsilver":"아크틱 실버","appleblue":"블루","zetblack":"제트 블랙","appleblack":"블랙","rose gold":"로즈 골드","coral":"코럴","oldspacegray":"스페이스 그레이"}}'
    );
  },
  "56d7": function(e, a, t) {
    "use strict";
    t.r(a);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var i = t("2b0e"),
      o = function() {
        var e = this,
          a = e.$createElement,
          i = e._self._c || a;
        return i(
          "div",
          { staticClass: "ui container", attrs: { id: "app" } },
          [
            i("img", {
              staticClass: "logo",
              attrs: { alt: "logo", src: t("cf05") }
            }),
            i("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } })
          ],
          1
        );
      },
      n = [],
      r = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          [
            t("div", { staticClass: "ui center aligned container" }, [
              t("h1", [e._v("핸드폰끼리 비교해드립니다.")]),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [
                        t("Selection", {
                          attrs: {
                            phone: "galaxys20ultra",
                            company: "samsung"
                          },
                          on: { selected: e.first, company: e.fuckingfirst }
                        }),
                        t("Phone", { attrs: { id: e.one, company: e.onec } })
                      ],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [
                        t("Selection", {
                          attrs: { phone: "iphone11promax", company: "apple" },
                          on: { selected: e.second, company: e.fuckingsecond }
                        }),
                        t("Phone", { attrs: { id: e.two, company: e.twoc } })
                      ],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("Selection", {
                              attrs: {
                                phone: "galaxys20plus",
                                company: "samsung"
                              },
                              on: { selected: e.third, company: e.fuckingthird }
                            }),
                            t("Phone", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ]),
              t("h2", { staticClass: "ui left aligned header" }, [
                e._v("기본 정보")
              ]),
              t("div", { staticClass: "ui divider" }),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("General", { attrs: { id: e.one, company: e.onec } })],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("General", { attrs: { id: e.two, company: e.twoc } })],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("General", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ]),
              t("h2", { staticClass: "ui left aligned header" }, [
                e._v("배터리")
              ]),
              t("div", { staticClass: "ui divider" }),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Battery", { attrs: { id: e.one, company: e.onec } })],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Battery", { attrs: { id: e.two, company: e.twoc } })],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("Battery", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ]),
              t("h2", { staticClass: "ui left aligned header" }, [
                e._v("디스플레이")
              ]),
              t("div", { staticClass: "ui divider" }),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Display", { attrs: { id: e.one, company: e.onec } })],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Display", { attrs: { id: e.two, company: e.twoc } })],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("Display", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ]),
              t("h2", { staticClass: "ui left aligned header" }, [
                e._v("카메라")
              ]),
              t("div", { staticClass: "ui divider" }),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Camera", { attrs: { id: e.one, company: e.onec } })],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Camera", { attrs: { id: e.two, company: e.twoc } })],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("Camera", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ]),
              t("h2", { staticClass: "ui left aligned header" }, [
                e._v("저장공간")
              ]),
              t("div", { staticClass: "ui divider" }),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Memory", { attrs: { id: e.one, company: e.onec } })],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Memory", { attrs: { id: e.two, company: e.twoc } })],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("Memory", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ]),
              t("h2", { staticClass: "ui left aligned header" }, [
                e._v("크기 및 무게")
              ]),
              t("div", { staticClass: "ui divider" }),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Size", { attrs: { id: e.one, company: e.onec } })],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Size", { attrs: { id: e.two, company: e.twoc } })],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("Size", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ]),
              t("h2", { staticClass: "ui left aligned header" }, [
                e._v("기타")
              ]),
              t("div", { staticClass: "ui divider" }),
              t("div", { staticClass: "ui center aligned grid" }, [
                t(
                  "div",
                  {
                    class: {
                      "ui three column row": e.window.width > 1199,
                      "ui two column row": e.window.width <= 1199
                    }
                  },
                  [
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Others", { attrs: { id: e.one, company: e.onec } })],
                      1
                    ),
                    t(
                      "div",
                      { staticClass: "column" },
                      [t("Others", { attrs: { id: e.two, company: e.twoc } })],
                      1
                    ),
                    e.window.width > 1199
                      ? t(
                          "div",
                          { staticClass: "column" },
                          [
                            t("Others", {
                              attrs: { id: e.three, company: e.threec }
                            })
                          ],
                          1
                        )
                      : e._e()
                  ]
                )
              ])
            ]),
            t("Footer")
          ],
          1
        );
      },
      s = [],
      c = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          [
            e._v(" 제조사: "),
            t("sui-dropdown", {
              staticClass: "inverted",
              attrs: {
                fluid: "",
                placeholder: "제조사",
                selection: "",
                options: e.options
              },
              model: {
                value: e.current,
                callback: function(a) {
                  e.current = a;
                },
                expression: "current"
              }
            }),
            e._v(" 제품: "),
            t("Dropdown", {
              staticClass: "inverted",
              attrs: { count: e.count, company: e.current, phone: e.phone },
              on: { selected: e.onData }
            })
          ],
          1
        );
      },
      l = [],
      p = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("sui-dropdown", {
          staticClass: "large",
          attrs: {
            fluid: "",
            options: e.products,
            placeholder: "제품",
            search: "",
            selection: ""
          },
          model: {
            value: e.current,
            callback: function(a) {
              e.current = a;
            },
            expression: "current"
          }
        });
      },
      d = [],
      u = (t("99af"), t("7db0"), t("d81d"), t("b0c0"), t("ae11"));
    function h(e) {
      if (u[e]) {
        var a = u[e].map(function(e) {
          return {
            key: e.id,
            value: e.id,
            text: "".concat(e.name, " (").concat(e.date, " 출시)"),
            image: { src: "/phones/".concat(e.id, ".jpg") }
          };
        });
        return a;
      }
      return console.log([]), [];
    }
    function m(e, a) {
      if ((console.log(e, a), !u[e])) return {};
      var t = { img: "/phone/NotSelected.jpg" };
      if (
        !u[e].find(function(e) {
          return e.id === a;
        })
      )
        return t;
      console.log(u);
      var i = u[e].find(function(e) {
        return e.id === a;
      });
      return (i.img = "/phones/".concat(i.id, ".jpg")), i;
    }
    var y = {
        name: "Company",
        props: { company: String, phone: String },
        watch: {
          company: function() {
            (this.$data.products = h(this.company)),
              (this.$data.company = this.company),
              (this.$data.current = null);
          },
          current: function() {
            this.$emit("selected", this.current);
          }
        },
        beforeMount: function() {
          (this.$data.products = h(this.company)),
            (this.$data.current = this.phone);
        },
        data: function() {
          return { current: null, companyName: this.company, products: [] };
        }
      },
      g = y,
      w = t("2877"),
      f = Object(w["a"])(g, p, d, !1, null, null, null),
      v = f.exports,
      P = {
        name: "Company",
        components: { Dropdown: v },
        props: ["company", "phone"],
        watch: {
          current: function(e) {
            (this.$data.current = e), this.$emit("selected", null);
          }
        },
        methods: {
          onData: function(e) {
            this.$emit("selected", e), this.$emit("company", this.current);
          }
        },
        beforeMount: function() {
          (this.$data.current = this.company),
            this.$emit("company", this.current);
        },
        data: function() {
          return {
            current: null,
            product: "",
            options: [
              { text: "Apple", value: "apple" },
              { text: "Samsung", value: "samsung" },
              { text: "LG", value: "lg" }
            ]
          };
        }
      },
      S = P,
      x = Object(w["a"])(S, c, l, !1, null, null, null),
      b = x.exports,
      D = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("div", { staticClass: "ui center aligned container" }, [
          t("i", { staticClass: "icon huge microchip" }),
          t("h3", [e._v("프로세서")]),
          t("p", [e._v(e._s(e.phone.cpu))]),
          t("i", { staticClass: "fas fa-memory fa-4x" }),
          t("h3", [e._v("메모리")]),
          t("p", [e._v(e._s(e.phone.ram))]),
          t("i", { staticClass: "fas fa-calendar-minus fa-4x" }),
          t("h3", [e._v("출시일")]),
          t("p", [e._v(e._s(e.phone.date))]),
          t("i", { staticClass: "fas fa-server fa-4x" }),
          t("h3", [e._v("출시 OS")]),
          t("p", [e._v(e._s(e.phone.os))])
        ]);
      },
      M = [],
      _ = {
        name: "Phone",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        data: function() {
          return { phone: m(this.company, this.id) };
        }
      },
      A = _,
      C = Object(w["a"])(A, D, M, !1, null, null, null),
      O = C.exports,
      R = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          { staticClass: "ui center aligned container" },
          [
            t("br"),
            t("img", {
              attrs: {
                src: e.phone.img ? e.phone.img : "/phones/NotSelected.jpg"
              }
            }),
            t("h1", [e._v(e._s(e.phone.name))]),
            t("h3", [e._v("색상")]),
            e._l(e.phone.color, function(a) {
              return t("a", { key: a, staticClass: "ui label", class: a }, [
                e._v(" " + e._s(e.a >= 768 ? e.colors.names[a] : "") + " ")
              ]);
            }),
            t("div", { staticClass: "ui divider" })
          ],
          2
        );
      },
      k = [],
      z = t("3c67"),
      I = {
        name: "Phone",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        created: function() {
          var e = this;
          window.addEventListener("resize", function() {
            e.$data.a = window.innerWidth;
          }),
            this.handleResize();
        },
        data: function() {
          return {
            phone: m(this.company, this.id),
            colors: z,
            a: window.innerWidth
          };
        }
      },
      L = I,
      G = (t("1878"), Object(w["a"])(L, R, k, !1, null, "5db04dd8", null)),
      B = G.exports,
      $ = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("div", { staticClass: "ui center aligned container" }, [
          t("h3", [e._v("배터리용량")]),
          t("p", [e._v(e._s(e.phone.battery) + "mAh")]),
          t("h3", [e._v("충전방식")]),
          t("p", [e._v(e._s(e.phone.charge))])
        ]);
      },
      E = [],
      j = {
        name: "Battery",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        data: function() {
          return { phone: m(this.company, this.id) };
        }
      },
      X = j,
      H = Object(w["a"])(X, $, E, !1, null, null, null),
      W = H.exports,
      N = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("div", { staticClass: "ui center aligned container" }, [
          t("h3", [e._v("디스플레이")]),
          t("h1", { staticClass: "size" }, [
            e._v(e._s(e.phone.display.size) + '"')
          ]),
          t("p", { style: { "margin-top": "-10px" } }, [
            e._v(e._s(e.phone.display.type))
          ]),
          t("h3", [e._v("해상도")]),
          t("p", [e._v(e._s(e.phone.display.resolution))]),
          t("h3", [e._v("PPI")]),
          t("p", [e._v(e._s(e.phone.display.ppi))])
        ]);
      },
      F = [],
      J = {
        name: "Display",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        data: function() {
          return { phone: m(this.company, this.id) };
        }
      },
      T = J,
      q = (t("39fe"), Object(w["a"])(T, N, F, !1, null, "6d81b29e", null)),
      U = q.exports,
      V = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          { staticClass: "ui center aligned container" },
          e._l(e.phone.memory, function(a) {
            return t("p", { key: a }, [
              e._v(" " + e._s(a) + e._s(isNaN(a) ? "" : "G") + " "),
              t("br")
            ]);
          }),
          0
        );
      },
      Y = [],
      K = {
        name: "Display",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        data: function() {
          return { phone: m(this.company, this.id) };
        }
      },
      Q = K,
      Z = Object(w["a"])(Q, V, Y, !1, null, null, null),
      ee = Z.exports,
      ae = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("div", { staticClass: "ui center aligned container" }, [
          t("h3", [e._v("크기 (W×H×D)")]),
          t("p", [e._v(e._s(e.phone.size) + " mm")]),
          t("h3", [e._v("무게")]),
          t("p", [e._v(e._s(e.phone.weight) + "g")])
        ]);
      },
      te = [],
      ie = {
        name: "Size",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        data: function() {
          return { phone: m(this.company, this.id) };
        }
      },
      oe = ie,
      ne = Object(w["a"])(oe, ae, te, !1, null, null, null),
      re = ne.exports,
      se = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("div", { staticClass: "ui center aligned container" }, [
          t("h3", [e._v("방수등급")]),
          t("p", [e._v(e._s(e.phone.waterproof))])
        ]);
      },
      ce = [],
      le = {
        name: "Phone",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        data: function() {
          return { phone: m(this.company, this.id) };
        }
      },
      pe = le,
      de = Object(w["a"])(pe, se, ce, !1, null, null, null),
      ue = de.exports,
      he = function() {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          { staticClass: "ui center aligned container" },
          [
            t("h3", [e._v("전면 카메라")]),
            e._l(e.phone.camera.front, function(a) {
              return t("p", { key: a }, [e._v(" " + e._s(a) + " ")]);
            }),
            t("h3", [e._v("후면 카메라")]),
            e._l(e.phone.camera.back, function(a) {
              return t("p", { key: a }, [e._v(" " + e._s(a) + " ")]);
            })
          ],
          2
        );
      },
      me = [],
      ye = {
        name: "Camrea",
        props: { company: String, id: String },
        watch: {
          company: function() {
            this.$data.phone = m(this.company, this.id);
          },
          id: function() {
            this.$data.phone = m(this.company, this.id);
          }
        },
        data: function() {
          return { phone: m(this.company, this.id) };
        }
      },
      ge = ye,
      we = Object(w["a"])(ge, he, me, !1, null, null, null),
      fe = we.exports,
      ve = function() {
        var e = this,
          a = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      Pe = [
        function() {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t("div", [
            t("div", { staticClass: "ui divider" }),
            t("h4", [
              e._v(" 이 페이지는 "),
              t("i", { staticClass: "icon red heart" }),
              e._v("와 "),
              t("i", { staticClass: "icon vuejs" }),
              e._v("로 제작되었습니다."),
              t("br"),
              e._v(" Copyright 2020 wonderlandpark, All rights reserved."),
              t("br"),
              t(
                "a",
                {
                  attrs: { href: "https://github.com/wonderlandpark/phone-hub" }
                },
                [t("i", { staticClass: "icon github" }), e._v("Github")]
              )
            ])
          ]);
        }
      ],
      Se = { name: "Footer" },
      xe = Se,
      be = Object(w["a"])(xe, ve, Pe, !1, null, null, null),
      De = be.exports,
      Me = {
        name: "HelloWorld",
        components: {
          Selection: b,
          General: O,
          Phone: B,
          Footer: De,
          Battery: W,
          Display: U,
          Memory: ee,
          Size: re,
          Camera: fe,
          Others: ue
        },
        methods: {
          first: function(e) {
            this.one = e;
          },
          second: function(e) {
            this.two = e;
          },
          third: function(e) {
            this.three = e;
          },
          fuckingfirst: function(e) {
            this.onec = e;
          },
          fuckingsecond: function(e) {
            this.twoc = e;
          },
          fuckingthird: function(e) {
            this.threec = e;
          },
          handleResize: function() {
            (this.window.width = window.innerWidth),
              (this.window.height = window.innerHeight);
          }
        },
        created: function() {
          window.addEventListener("resize", this.handleResize),
            this.handleResize();
        },
        destroyed: function() {
          window.removeEventListener("resize", this.handleResize);
        },
        data: function() {
          return {
            one: "galaxys20ultra",
            two: "iphone11promax",
            three: "galaxys20plus",
            onec: "samsung",
            twoc: "apple",
            threec: "samsung",
            compared: !1,
            window: { width: 0, height: 0 }
          };
        }
      },
      _e = Me,
      Ae = Object(w["a"])(_e, r, s, !1, null, null, null),
      Ce = Ae.exports,
      Oe = { name: "App", components: { HelloWorld: Ce } },
      Re = Oe,
      ke = (t("034f"), Object(w["a"])(Re, o, n, !1, null, null, null)),
      ze = ke.exports,
      Ie = t("080a"),
      Le = t.n(Ie);
    t("c4ca");
    (i["a"].config.productionTip = !1),
      i["a"].use(Le.a),
      new i["a"]({
        render: function(e) {
          return e(ze);
        }
      }).$mount("#app");
  },
  "85ec": function(e, a, t) {},
  ae11: function(e) {
    e.exports = JSON.parse(
      '{"apple":[{"id":"iphone11promax","name":"iPhone 11 Pro Max","date":"2019. 09","display":{"size":"6.5","resolution":"2688 x 1242","type":"Super Retina XDR","ppi":"458"},"cpu":"Apple A13 Bionic APL1W85 SoC","ram":"4 GB LPDDR4X SDRAM","size":"77.8 x 158 x 8.1","weight":"226","battery":"3969","charge":"유선, 무선(고속, 일반)","os":"iOS 13.0","color":["spacegray","apple silver","apple gold","midnightgreen"],"memory":[64,256,512],"waterproof":"IP68","camera":{"front":["12MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광각: 12MP","광학 2배줌 지원"]}},{"id":"iphone11pro","name":"iPhone 11 Pro","date":"2019. 09","display":{"size":"5.8","resolution":"2436 x 1125","type":"Super Retina XDR","ppi":"458"},"cpu":"Apple A13 Bionic APL1W85 SoC","ram":"4 GB LPDDR4X SDRAM","size":"71.4 x 144 x 8.1","weight":"188","battery":"3046","charge":"유선, 무선(고속, 일반)","os":"iOS 13.0","color":["spacegray","apple silver","apple gold","midnightgreen"],"memory":[64,256,512],"waterproof":"IP68","camera":{"front":["12MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광각: 12MP","광학 2배줌 지원"]}},{"id":"iphone11","name":"iPhone 11","date":"2019. 09","display":{"size":"6.1","resolution":"1792 x 828","type":"Liquid Retina HD","ppi":"326"},"cpu":"Apple A13 Bionic APL1W85 SoC","ram":"4 GB LPDDR4X SDRAM","size":"75.7 x 150.9 x 8.3","weight":"194","battery":"3110","charge":"유선, 무선(고속, 일반)","os":"iOS 13.0","color":["applepurple","appleyellow","applegreen","spacegray","white","productred"],"memory":[64,128,256],"waterproof":"IP68","camera":{"front":["12MP"],"back":["기본: 12MP(OIS 지원)","광각: 12MP","광학 2배줌 지원"]}},{"id":"iphonexsmax","name":"iPhone XS Max","date":"2018. 11","display":{"size":"6.5","resolution":"2688 x 1242","type":"Super Retina HD display","ppi":"458"},"cpu":"Apple A12 Bionic APL1W81 SoC","ram":"4 GB LPDDR4X SDRAM","size":"77.4 x 157.5 x 7.7","weight":"208","battery":"3174","charge":"유선, 무선(일반)","os":"iOS 12.0","color":["apple silver","spacegray","apple gold"],"memory":[64,256,512],"waterproof":"IP68","camera":{"front":["7MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광학 2배줌 지원"]}},{"id":"iphonexs","name":"iPhone XS","date":"2018. 11","display":{"size":"5.8","resolution":"2436 x 1125","type":"Super Retina HD display","ppi":"458"},"cpu":"Apple A12 Bionic APL1W81 SoC","ram":"4 GB LPDDR4X SDRAM","size":"70.9 x 143.6 x 7.7","weight":"177","battery":"2658","charge":"유선, 무선(일반)","os":"iOS 12.0","color":["apple silver","spacegray","apple gold"],"memory":[64,256,512],"waterproof":"IP68","camera":{"front":["7MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광학 2배줌 지원"]}},{"id":"iphonexr","name":"iPhone XR","date":"2018.09","display":{"size":"6.1","resolution":"1792 x 828","type":"Liquid Retina HD Display","ppi":"326"},"cpu":"Apple A12 Bionic APL1W81 SoC.","ram":"3 GB LPDDR4X SDRAM","size":"71.4 x 144 x 8.1","weight":"194","battery":"2942","charge":"유선, 무선(고속, 일반)","os":"iOS 12.0","color":["black","white","appleblue","appleyellow","productred","coral"],"memory":[64,128,256],"waterproof":"IP67","camera":{"front":["7MP"],"back":["12MP(OIS 지원)"]}},{"id":"iphonex","name":"iPhone X","date":"2017. 11","display":{"size":"5.8","resolution":"2436 x 1125","type":"Super Retina HD display","ppi":"458"},"cpu":"Apple A11 Bionic APL1W72 SoC","ram":"3 GB LPDDR4X SDRAM","size":"70.9 x 143.6 x 7.7","weight":"174","battery":"2716","charge":"유선, 무선(일반)","os":"iOS 11.1","color":["apple silver","applegray"],"memory":[64,256],"waterproof":"IP67","camera":{"front":["7MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광학 1.8배줌 지원"]}},{"id":"iphone8plus","name":"iPhone 8+","date":"2017.09","display":{"size":"5.5","resolution":" 2208 x 1242","type":"Retina HD Display","ppi":"401"},"cpu":"Apple A11 Bionic APL1W72 SoC.","ram":"3 GB LPDDR4X SDRAM","size":"78.1 x 158.4 x 7.5 mm","weight":"202","battery":"2691","charge":"유선, 무선(고속, 일반)","os":"iOS 11.0","color":["apple gold","apple silver","spacegray","productred"],"memory":[64,128,256],"waterproof":"IP67","camera":{"front":["7MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP","광학 1.8배줌 지원"]}},{"id":"iphone8","name":"iPhone 8","date":"2017.09","display":{"size":"4.7","resolution":" 1334 x 750","type":"Retina HD Display","ppi":"326"},"cpu":"Apple A11 Bionic APL1W72 SoC.","ram":"2 GB LPDDR4X SDRAM","size":"67.3 x 138.4 x 7.3 mm","weight":"148","battery":"1821","charge":"유선, 무선(고속, 일반)","os":"iOS 11.0","color":["apple gold","apple silver","spacegray","productred"],"memory":[64,128,256],"waterproof":"IP67","camera":{"front":["7MP"],"back":["12MP(OIS 지원)"]}},{"id":"iphone7plus","name":"iPhone 7+","date":"2016.09","display":{"size":"5.5","resolution":"2208 x 1242","type":"Retina HD Display","ppi":"401"},"cpu":"Apple A10 Fusion APL1W24 SoC.","ram":"2 GB LPDDR4X SDRAM","size":"77.9 x 158.2 x 7.3 mm","weight":"188","battery":"2900","charge":"유선","os":"iOS 10.0","color":["rose gold","apple gold","apple silver","appleblack","zetblack","productred"],"memory":[32,128,256],"waterproof":"IP67","camera":{"front":["7MP"],"back":["12MP(OIS 지원)","12MP"]}},{"id":"iphone7","name":"iPhone 7","date":"2016.09","display":{"size":"4.7","resolution":"1334 x 750","type":"Retina HD Display","ppi":"326"},"cpu":"Apple A10 Fusion APL1W24 SoC.","ram":"2 GB LPDDR4X SDRAM","size":"67.1 x 138.3 x 7.1 mm","weight":"138","battery":"1960","charge":"유선","os":"iOS 10.0","color":["rose gold","apple gold","apple silver","appleblack","zetblack","productred"],"memory":[32,128,256],"waterproof":"IP67","camera":{"front":["7MP"],"back":["12MP(OIS 지원)"]}},{"id":"iphone6splus","name":"iPhone 6s+","date":"2015.09","display":{"size":"5.5","resolution":"2208 x 1242","type":"Retina HD Display","ppi":"401"},"cpu":"Apple A9 APL0898 & APL1022 SoC.","ram":"2 GB LPDDR4X SDRAM","size":"77.9 x 158.2 x 7.3 mm","weight":"192","battery":"2750","charge":"유선","os":"iOS 9.0","color":["oldspacegray","apple silver","apple gold","rose gold"],"memory":[16,32,64,128],"waterproof":"지원하지 않음","camera":{"front":["5MP"],"back":["12MP"]}},{"id":"iphone6s","name":"iPhone 6s","date":"2015.09","display":{"size":"4.7","resolution":"1334 x 750","type":"Retina HD Display","ppi":"326"},"cpu":"Apple A9 APL0898 & APL1022 SoC.","ram":"2 GB LPDDR4X SDRAM","size":"67.1 x 138.3 x 7.1 mm","weight":"143","battery":"1715","charge":"유선","os":"iOS 9.0","color":["oldspacegray","apple silver","apple gold","rose gold"],"memory":[16,32,64,128],"waterproof":"지원하지 않음","camera":{"front":["5MP"],"back":["12MP"]}},{"id":"iphone6plus","name":"iPhone 6+","date":"2015.09","display":{"size":"5.5","resolution":"2208 x 1242","type":"Retina HD Display","ppi":"401"},"cpu":"Apple A8 APL1011 SoC.","ram":"1 GB LPDDR3 SDRAM","size":"77.8 x 158.1 x 7.1 mm","weight":"172","battery":"2915","charge":"유선","os":"iOS 9.0","color":["oldspacegray","apple silver","apple gold","rose gold"],"memory":[16,64,128],"waterproof":"지원하지 않음","camera":{"front":["1.2MP"],"back":["8MP(OIS지원)"]}},{"id":"iphone6","name":"iPhone 6","date":"2015.09","display":{"size":"4.7","resolution":"1334 x 750","type":"Retina HD Display","ppi":"326"},"cpu":"Apple A8 APL1011 SoC.","ram":"1 GB LPDDR3 SDRAM","size":"67 x 138.1 x 6.9 mm","weight":"129","battery":"1810","charge":"유선","os":"iOS 9.0","color":["oldspacegray","apple silver","apple gold"],"memory":[16,32,64,128],"waterproof":"지원하지 않음","camera":{"front":["1.2MP"],"back":["8MP"]}}],"samsung":[{"id":"galaxys20ultra","name":"Galaxy S20 Ultra 5G","date":"2020.02","display":{"size":"6.9","resolution":"3200 x 1440","type":"Dynamic AMOLED","ppi":"511"},"cpu":"퀄컴 스냅드래곤 865 SM8250","ram":"12 GB LPDDR5 SDRAM","size":"76 x 166.9 x 8.8","weight":"220","battery":"5000","charge":"유선, 무선(고속, 일반)","os":"Android 10","color":["cosmicblack","cosmicgray"],"memory":[128,256,512,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["40MP"],"back":["기본: 108MP(OIS 지원)","망원: 48MP(OIS 지원)","광각: 12MP","광학 4배줌 지원(하드웨어 수치)","최대 10배 하이브리드 광학 줌 및 최대 100배 디지털 줌"]}},{"id":"galaxys20plus","name":"Galaxy S20+ 5G","date":"2020.02","display":{"size":"6.7","resolution":"3200 x 1440","type":"Dynamic AMOLED","ppi":"525"},"cpu":"퀄컴 스냅드래곤 865 SM8250","ram":"12 GB LPDDR5 SDRAM","size":"73.7 x 161.9 x 7.8","weight":"186","battery":"4500","charge":"유선, 무선(고속, 일반)","os":"Android 10","color":["cosmicgray","cloudblue","cloudwhite"],"memory":[128,256,512,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["12MP"],"back":["기본: 12MP(OIS 지원)","망원: 48MP(OIS 지원)","광각: 12MP","광학 1.08배줌 지원(하드웨어 수치)","최대 3배 하이브리드 광학 줌 및 최대 30배 디지털 줌"]}},{"id":"galaxys20","name":"Galaxy S20 5G","date":"2020.02","display":{"size":"6.2","resolution":"3200 x 1440","type":"Dynamic AMOLED","ppi":"563"},"cpu":"퀄컴 스냅드래곤 865 SM8250","ram":"12 GB LPDDR5 SDRAM","size":"69.1 x 151.7 x 7.9","weight":"163","battery":"4000","charge":"유선, 무선(고속, 일반)","os":"Android 10","color":["cosmicgray","cloudblue","cloudwhite"],"memory":[128,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["12MP"],"back":["기본: 12MP(OIS 지원)","망원: 64MP(OIS 지원)","광각: 12MP","광학 1.08배줌 지원(하드웨어 수치)","최대 3배 하이브리드 광학 줌 및 최대 30배 디지털 줌"]}},{"id":"galaxynote10plus5g","name":"Galaxy Note 10+ 5G","date":"2019. 08","display":{"size":"6.8","resolution":"3040 x 1440","type":"Dynamic AMOLED ","ppi":"494"},"cpu":"삼성 엑시노스 9 Series (9825) SoC","ram":"12 GB LPDDR4X SDRAM","size":"77.2 x 162.3 x 7.9","weight":"196","battery":"4300","charge":"유선, 무선(고속, 일반)","os":"Android 9","color":["auraglow","aura white","aura black","aurablue"],"memory":[256,512,"외장 슬롯 지원"],"waterproof":"IP68"},{"id":"galaxynote105g","name":"Galaxy Note 10 5G","date":"2019. 08","display":{"size":"6.3","resolution":"2280x1440","type":"Dynamic AMOLED","ppi":"401"},"cpu":"삼성 엑시노스 9 Series (9820) SoC","ram":"12 GB LPDDR4X SDRAM","size":"151×71.8×7.9","weight":"170","battery":"3500","charge":"유선, 무선(고속, 일반)","os":"Android 9","color":["auraglow","aura white","aura black","aurared","aurapink"],"memory":[256],"waterproof":"IP68","camera":{"front":["10MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광각: 16MP","광학 0.5~2배줌 지원"]}},{"id":"galaxys105g","name":"Galaxy S10 5G","date":"2019.02","display":{"size":"6.7","resolution":"3040 x 1440","type":"Dynamic AMOLED","ppi":"505"},"cpu":"삼성 엑시노스 9 Series (9820) SoC","ram":"8 GB LPDDR4X SDRAM","size":"77.1 x 162.6 x 7.94","weight":"198","battery":"4500","charge":"유선, 무선(고속, 일반)","os":"Android 9","color":["majesticblack","royalgold","crownsilver"],"memory":[256,512,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["10MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광각: 16MP","광학 0.5~2배줌 지원"]}},{"id":"galaxys10plus","name":"Galaxy S10+","date":"2019.02","display":{"size":"6.4","resolution":"3040 x 1440","type":"Dynamic AMOLED","ppi":"522"},"cpu":"삼성 엑시노스 9 Series (9820) SoC","ram":"8 GB LPDDR4X SDRAM","size":"74.1 x 157.6 x 7.8","weight":"175","battery":"4100","charge":"유선, 무선(고속, 일반)","os":"Android 9","color":["prismblack","prismwhite","ceramicblack","ceramicwhite","flamingopink"],"memory":[128,512,1024,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["기본: 10MP","심도: 8MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광각: 16MP","광학 0.5~2배줌 지원"]}},{"id":"galaxys10","name":"Galaxy S10","date":"2019.02","display":{"size":"6.1","resolution":"3040 x 1440","type":"Dynamic AMOLED","ppi":"550"},"cpu":"삼성 엑시노스 9 Series (9820) SoC","ram":"8 GB LPDDR4X SDRAM","size":"70.4 x 149.9 x 7.8","weight":"157","battery":"3400","charge":"유선, 무선(고속, 일반)","os":"Android 9","color":["prismblack","prismwhite","prismgreen","flamingopink"],"memory":[128,512,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["32MP"],"back":["기본: 48MP(OIS 지원)","망원: 12MP(OIS 지원)","광각: 5MP"]}},{"id":"galaxys10e","name":"Galaxy S10e","date":"2019.02","display":{"size":"5.8","resolution":"2280 x 1080","type":"Dynamic AMOLED","ppi":"438"},"cpu":"삼성 엑시노스 9 Series (9820) SoC","ram":"6 GB LPDDR4X SDRAM","size":"69.9 x 142.2 x 7.9","weight":"150","battery":"3100","charge":"유선, 무선(고속, 일반)","os":"Android 9","color":["prismblack","prismwhite","canariayellow","prismgreen","prismblue","flamingopink"],"memory":[128,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["10MP"],"back":["기본: 12MP(OIS 지원)","광각: 16MP","광학 0.5배줌 지원"]}},{"id":"galaxynote9","name":"Galaxy Note 9","date":"2018. 08","display":{"size":"6.4","resolution":"2960 x 1440","type":"Super AMOLED","ppi":"516"},"cpu":"삼성 엑시노스 9 Series (9810) SoC","ram":"6 GB/8 GB LPDDR4X SDRAM","size":"76.4 x 161.9 x 8.8","weight":"201","battery":"4000","charge":"유선, 무선(고속, 일반)","os":"Android 8.1","color":["midnightblack","oceanblue","lavenderpurple","metalliccopper"],"memory":[128,512],"camera":{"front":["12MP"],"back":["기본: 8MP(OIS 지원)","망원: 12MP(OIS 지원)","광학 2배줌 지원"]},"waterproof":"IP68"},{"id":"galaxys9plus","name":"Galaxy S9+","date":"2018.02","display":{"size":"5.8","resolution":"2960 x 1440","type":"Super AMOLED","ppi":"529"},"cpu":"삼성 엑시노스 9 Series (9810) SoC.","ram":"6 GB LPDDR4X SDRAM","size":"73.8 x 158.1 x 8.5","weight":"189","battery":"3500","charge":"유선, 무선(고속, 일반)","os":"Android 8.0","color":["midnightblack","coralblue","lilacpurple","titaniumgray"],"memory":[64,256,"외장 슬롯 지원"],"camera":{"front":["8MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광학 2배줌 지원"]},"waterproof":"IP68"},{"id":"galaxys9","name":"Galaxy S9","date":"2018.02","display":{"size":"5.8","resolution":"2960 x 1440","type":"Super AMOLED","ppi":"570"},"cpu":"삼성 엑시노스 9 Series (9810) SoC.","ram":"4 GB LPDDR4X SDRAM","size":"68.7 x 147.7 x 8.5","weight":"163","battery":"3000","charge":"유선, 무선(고속, 일반)","os":"Android 8.0","color":["midnightblack","coralblue","lilacpurple","titaniumgray"],"memory":[64,128,256,"외장 슬롯 지원"],"camera":{"front":["8MP"],"back":["12MP(OIS 지원)"]},"waterproof":"IP68"},{"id":"galaxynote8","name":"Galaxy Note 8","date":"2017. 08","display":{"size":"6.3","resolution":"2960 x 1440","type":"Super AMOLED","ppi":"521"},"cpu":"삼성 엑시노스 9 Series (8895) SoC","ram":"6 GB LPDDR4X SDRAM","size":"74.8 x 162.5 x 8.6","weight":"195","battery":"3300","charge":"유선, 무선(고속, 일반)","os":"Android 7.1","color":["midnightblack","deepseablue","orchidgray","maplegold"],"memory":[64,256,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["8MP"],"back":["기본: 12MP(OIS 지원)","망원: 12MP(OIS 지원)","광학 2배줌 지원"]}},{"id":"galaxys8","name":"Galaxy S8","date":"2017.02","display":{"size":"5.8","resolution":"2960 x 1440","type":"Super AMOLED","ppi":"529"},"cpu":"삼성 엑시노스 9 Series (9810) SoC.","ram":"6 GB LPDDR4X SDRAM","size":"73.8 x 158.1 x 8.5","weight":"189","battery":"3500","charge":"유선, 무선(고속, 일반)","os":"Android 8.0","color":["midnightblack","coralblue","orchidgray","maplegold","arcticsilver"],"memory":[64,256,"외장 슬롯 지원"],"waterproof":"IP68","camera":{"front":["8MP"],"back":["12MP(OIS 지원)"]}}]}'
    );
  },
  cf05: function(e, a, t) {
    e.exports = t.p + "img/logo.536c2ab3.png";
  },
  cfb9: function(e, a, t) {},
  f958: function(e, a, t) {}
});
//# sourceMappingURL=app.3df90c55.js.map
