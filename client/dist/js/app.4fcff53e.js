(function(e) {
  function t(t) {
    for (
      var r, a, o = t[0], c = t[1], u = t[2], l = 0, d = [];
      l < o.length;
      l++
    )
      (a = o[l]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]),
        (i[a] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    m && m(t);
    while (d.length) d.shift()();
    return s.push.apply(s, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], r = !0, a = 1; a < n.length; a++) {
        var o = n[a];
        0 !== i[o] && (r = !1);
      }
      r && (s.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    i = { app: 0 },
    s = [];
  function o(e) {
    return (
      c.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-1140ddfb": "97ae0551",
        "chunk-23062012": "2b9bf24b",
        "chunk-5485316a": "aab3f2b4",
        "chunk-70744eb6": "94443a79",
        "chunk-9a197f76": "c82aae19",
        "chunk-a4325cbc": "89c744f6",
        "chunk-c423b0dc": "2f787c22",
        "chunk-ec4f77e0": "0a07549f",
        "chunk-f90365b4": "494542e8",
      }[e] +
      ".js"
    );
  }
  function c(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function(e) {
    var t = [],
      n = {
        "chunk-1140ddfb": 1,
        "chunk-23062012": 1,
        "chunk-5485316a": 1,
        "chunk-70744eb6": 1,
        "chunk-9a197f76": 1,
        "chunk-a4325cbc": 1,
        "chunk-c423b0dc": 1,
        "chunk-ec4f77e0": 1,
        "chunk-f90365b4": 1,
      };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function(t, n) {
            for (
              var r =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-1140ddfb": "ae8b7ff0",
                    "chunk-23062012": "8ac77522",
                    "chunk-5485316a": "dff0e3a8",
                    "chunk-70744eb6": "46b9e443",
                    "chunk-9a197f76": "fc064674",
                    "chunk-a4325cbc": "bcdd1156",
                    "chunk-c423b0dc": "034e2f9c",
                    "chunk-ec4f77e0": "60b01578",
                    "chunk-f90365b4": "5d1485d2",
                  }[e] +
                  ".css",
                i = c.p + r,
                s = document.getElementsByTagName("link"),
                o = 0;
              o < s.length;
              o++
            ) {
              var u = s[o],
                l = u.getAttribute("data-href") || u.getAttribute("href");
              if ("stylesheet" === u.rel && (l === r || l === i)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
              (u = d[o]), (l = u.getAttribute("data-href"));
              if (l === r || l === i) return t();
            }
            var m = document.createElement("link");
            (m.rel = "stylesheet"),
              (m.type = "text/css"),
              (m.onload = t),
              (m.onerror = function(t) {
                var r = (t && t.target && t.target.src) || i,
                  s = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = r),
                  delete a[e],
                  m.parentNode.removeChild(m),
                  n(s);
              }),
              (m.href = i);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(m);
          }).then(function() {
            a[e] = 0;
          }))
        );
    var r = i[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var s = new Promise(function(t, n) {
          r = i[e] = [t, n];
        });
        t.push((r[2] = s));
        var u,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          c.nc && l.setAttribute("nonce", c.nc),
          (l.src = o(e));
        var d = new Error();
        u = function(t) {
          (l.onerror = l.onload = null), clearTimeout(m);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = r),
                (d.request = a),
                n[1](d);
            }
            i[e] = void 0;
          }
        };
        var m = setTimeout(function() {
          u({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = u), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = r),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/"),
    (c.oe = function(e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var d = 0; d < u.length; d++) t(u[d]);
  var m = l;
  s.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "00ba": function(e, t, n) {
    "use strict";
    var r = n("97ec"),
      a = n.n(r);
    a.a;
  },
  "017e": function(e, t, n) {
    "use strict";
    var r = n("2c59"),
      a = n.n(r);
    a.a;
  },
  "0859": function(e, t, n) {
    e.exports = n.p + "img/logo-with-names.ef56c35d.jpg";
  },
  "0875": function(e, t, n) {},
  "10b6": function(e, t, n) {
    e.exports = n.p + "img/small-logo.a97f49b4.png";
  },
  "24db": function(e, t, n) {
    "use strict";
    var r = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", [
          r(
            "div",
            { staticClass: "card", staticStyle: { "\x3c!--width": "100%" } },
            [
              r(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "recipe",
                      params: { recipeId: e.recipe.id },
                      query: { isPersonal: e.recipe.isPersonal },
                    },
                    id: "recipe-preview",
                  },
                },
                [
                  r("div", { staticClass: "recipe-body" }, [
                    e.image_load
                      ? r("img", {
                          staticClass: "card-img-top",
                          attrs: { src: e.recipe.image },
                        })
                      : e._e(),
                  ]),
                ]
              ),
              r(
                "div",
                { staticClass: "card-body" },
                [
                  r(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "recipe",
                          params: { recipeId: e.recipe.id },
                          query: { isPersonal: e.recipe.isPersonal },
                        },
                        id: "title-link",
                      },
                    },
                    [
                      r("h5", { staticClass: "card-title" }, [
                        e._v(" " + e._s(e.recipe.title) + " "),
                      ]),
                    ]
                  ),
                  r(
                    "ul",
                    { staticClass: "list-group list-group-flush" },
                    [
                      r("p", { attrs: { id: "recipe_info" } }, [
                        e._v(" " + e._s(e.recipe.readyInMinutes) + " minutes "),
                        r("span", { attrs: { id: "line" } }, [e._v("|")]),
                        e._v(" " + e._s(e.recipe.popularity) + " likes "),
                      ]),
                      !0 === e.recipe.isViewed
                        ? r("p", { attrs: { id: "viewed_recipe" } }, [
                            e._v(" you have watched this recipe "),
                          ])
                        : e._e(),
                      r("FavoriteButton", {
                        staticClass: "favoriteButton",
                        attrs: { recipe: e.recipe },
                      }),
                      r("div", { staticClass: "food_icons" }, [
                        !0 === e.recipe.vegetarian
                          ? r("img", {
                              attrs: {
                                id: "vegetarian",
                                src: n("a4a8"),
                                height: "35px",
                                width: "35px",
                                title: "vegetarian",
                              },
                            })
                          : e._e(),
                        !0 === e.recipe.vegan
                          ? r("img", {
                              attrs: {
                                id: "vegan",
                                src: n("5455"),
                                height: "35px",
                                width: "35px",
                                title: "vegan",
                              },
                            })
                          : e._e(),
                        !0 === e.recipe.glutenFree
                          ? r("img", {
                              attrs: {
                                id: "glutenFree",
                                src: n("513c"),
                                height: "35px",
                                width: "35px",
                                title: "gluten free",
                              },
                            })
                          : e._e(),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      a = [],
      i = n("e6e2"),
      s = {
        name: "RecipePreviewHorizontal",
        components: { FavoriteButton: i["a"] },
        mounted: function() {
          var e = this;
          console.log("recipe preview mounted"),
            this.axios.get(this.recipe.image).then(function(t) {
              e.image_load = !0;
            });
        },
        data: function() {
          return { image_load: !1 };
        },
        props: { recipe: { type: Object, required: !0 } },
      },
      o = s,
      c = (n("75b8"), n("2877")),
      u = Object(c["a"])(o, r, a, !1, null, "12f06014", null);
    t["a"] = u.exports;
  },
  "296e": function(e, t, n) {
    "use strict";
    var r = n("d92e"),
      a = n.n(r);
    a.a;
  },
  "2c59": function(e, t, n) {},
  3947: function(e, t, n) {},
  "513c": function(e, t, n) {
    e.exports = n.p + "img/gluten-free.abaa7a78.png";
  },
  5455: function(e, t, n) {
    e.exports = n.p + "img/vegan.be542ea0.png";
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("4160"), n("d3b7"), n("159b"), n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("2b0e"),
      a = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { attrs: { id: "app" } },
          [
            r("div", { attrs: { id: "nav" } }, [
              r(
                "nav",
                {
                  staticClass: "navbar navbar-expand-lg navbar-light bg-light",
                },
                [
                  r(
                    "router-link",
                    {
                      staticClass: "navbar-brand logo-nav",
                      attrs: { to: { name: "main" } },
                    },
                    [r("img", { attrs: { id: "small-logo", src: n("10b6") } })]
                  ),
                  r(
                    "router-link",
                    {
                      staticClass: "navbar-brand",
                      attrs: { id: "nav-title", to: { name: "main" } },
                    },
                    [r("b", [e._v("Peachy Recipes")])]
                  ),
                  r(
                    "router-link",
                    {
                      staticClass: "navbar-brand",
                      attrs: { to: { name: "search" } },
                    },
                    [e._v("Search")]
                  ),
                  r(
                    "router-link",
                    {
                      staticClass: "navbar-brand",
                      attrs: { to: { name: "about" } },
                    },
                    [e._v("About")]
                  ),
                  e.$root.store.username
                    ? r("span", [
                        r("span", { attrs: { id: "logged-in-user" } }, [
                          r("span", { attrs: { id: "welcome-user" } }, [
                            e._v("Hello " + e._s(e.$root.store.username)),
                          ]),
                          e._v("| "),
                          r("button", { on: { click: e.Logout } }, [
                            e._v("Logout"),
                          ]),
                        ]),
                        r(
                          "span",
                          { staticClass: "logged-in" },
                          [
                            r(
                              "b-dropdown",
                              {
                                staticClass: "m-md-2",
                                attrs: {
                                  id: "nav-dropdown",
                                  text: "Personal Area",
                                },
                              },
                              [
                                r(
                                  "b-dropdown-item",
                                  [
                                    r(
                                      "router-link",
                                      {
                                        staticClass: "navbar-brand",
                                        attrs: { to: { name: "favorites" } },
                                      },
                                      [e._v("My Favorite Recipes")]
                                    ),
                                  ],
                                  1
                                ),
                                r(
                                  "b-dropdown-item",
                                  [
                                    r(
                                      "router-link",
                                      {
                                        staticClass: "navbar-brand",
                                        attrs: {
                                          to: { name: "personalRecipes" },
                                        },
                                      },
                                      [e._v("My Recipes")]
                                    ),
                                  ],
                                  1
                                ),
                                r(
                                  "b-dropdown-item",
                                  [
                                    r(
                                      "router-link",
                                      {
                                        staticClass: "navbar-brand",
                                        attrs: {
                                          to: { name: "familyRecipes" },
                                        },
                                      },
                                      [e._v("Family Recipes")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            r(
                              "div",
                              { staticClass: "add-button" },
                              [
                                r(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modal-1",
                                        modifiers: { "modal-1": !0 },
                                      },
                                    ],
                                  },
                                  [e._v("Add Recipe")]
                                ),
                                r("NewRecipe", { attrs: { id: "modal-1" } }),
                              ],
                              1
                            ),
                            r(
                              "div",
                              { attrs: { id: "recipe_cart" } },
                              [
                                r(
                                  "router-link",
                                  {
                                    staticClass: "navbar-brand",
                                    attrs: { to: { name: "MealPlanning" } },
                                  },
                                  [e._v("Upcoming Meal ")]
                                ),
                                r("span", { attrs: { id: "shopping-cart" } }, [
                                  e._v(e._s(e.numOfMeals)),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ])
                    : r(
                        "span",
                        { attrs: { id: "guest" } },
                        [
                          r(
                            "router-link",
                            {
                              staticClass: "navbar-brand",
                              attrs: { to: { name: "register" } },
                            },
                            [e._v("Register")]
                          ),
                          r(
                            "router-link",
                            {
                              staticClass: "navbar-brand",
                              attrs: { to: { name: "login" } },
                            },
                            [e._v("Login")]
                          ),
                          e._v("| "),
                          r("span", { attrs: { id: "welcome-guest" } }, [
                            e._v("Hello Guest!"),
                          ]),
                        ],
                        1
                      ),
                ],
                1
              ),
            ]),
            r("router-view"),
          ],
          1
        );
      },
      i = [],
      s = (n("0d03"), n("25f0"), n("4795"), n("96cf"), n("1da1")),
      o = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-modal",
              {
                attrs: { id: "modal-1", title: "Create Your New Recipe" },
                scopedSlots: e._u([
                  {
                    key: "modal-footer",
                    fn: function(t) {
                      var r = t.cancel;
                      return [
                        n(
                          "b-button",
                          {
                            attrs: { id: "close-button", size: "sm" },
                            on: {
                              click: function(e) {
                                return r();
                              },
                            },
                          },
                          [e._v(" close ")]
                        ),
                      ];
                    },
                  },
                ]),
              },
              [
                n(
                  "div",
                  [
                    e.show
                      ? n(
                          "b-form",
                          { on: { submit: e.onSubmit, reset: e.onReset } },
                          [
                            n(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "title",
                                  label: "Title:",
                                  "label-for": "input-1",
                                },
                              },
                              [
                                n("b-form-input", {
                                  attrs: {
                                    id: "input-1",
                                    type: "text",
                                    placeholder: "Enter your recipe title",
                                    state: e.validateState("title"),
                                    required: "",
                                  },
                                  model: {
                                    value: e.$v.form.title.$model,
                                    callback: function(t) {
                                      e.$set(e.$v.form.title, "$model", t);
                                    },
                                    expression: "$v.form.title.$model",
                                  },
                                }),
                                e.$v.form.title.required
                                  ? e.$v.form.title.length
                                    ? e.$v.form.title.valid
                                      ? e._e()
                                      : n("b-form-invalid-feedback", [
                                          e._v(
                                            " title can't contain special characters "
                                          ),
                                        ])
                                    : n("b-form-invalid-feedback", [
                                        e._v(
                                          " title length should be between up to 100 characters long "
                                        ),
                                      ])
                                  : n("b-form-invalid-feedback", [
                                      e._v(" title is required "),
                                    ]),
                              ],
                              1
                            ),
                            n(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-2",
                                  label: "Image url:",
                                  "label-for": "input-2",
                                },
                              },
                              [
                                n("b-form-input", {
                                  attrs: {
                                    id: "input-2",
                                    placeholder:
                                      "Enter your recipe's image url",
                                    state: e.validateState("image"),
                                  },
                                  model: {
                                    value: e.$v.form.image.$model,
                                    callback: function(t) {
                                      e.$set(e.$v.form.image, "$model", t);
                                    },
                                    expression: "$v.form.image.$model",
                                  },
                                }),
                                e.$v.form.image.url
                                  ? e._e()
                                  : n("b-form-invalid-feedback", [
                                      e._v(" please enter a valid url "),
                                    ]),
                              ],
                              1
                            ),
                            n(
                              "div",
                              [
                                n(
                                  "b-form",
                                  { attrs: { inline: "" } },
                                  [
                                    n(
                                      "label",
                                      {
                                        staticClass: "mr-sm-2",
                                        attrs: {
                                          for: "inline-form-custom-select-pref",
                                        },
                                      },
                                      [e._v("Minutes to make")]
                                    ),
                                    n("b-form-input", {
                                      staticClass: "mb-2 mr-sm-2 mb-sm-0",
                                      attrs: {
                                        id: "inline-form-input-readyTime",
                                        type: "number",
                                        state: e.validateState(
                                          "readyInMinutes"
                                        ),
                                      },
                                      model: {
                                        value: e.$v.form.readyInMinutes.$model,
                                        callback: function(t) {
                                          e.$set(
                                            e.$v.form.readyInMinutes,
                                            "$model",
                                            t
                                          );
                                        },
                                        expression:
                                          "$v.form.readyInMinutes.$model",
                                      },
                                    }),
                                    n(
                                      "label",
                                      {
                                        staticClass: "mr-sm-2",
                                        attrs: {
                                          for: "inline-form-custom-select-pref",
                                        },
                                      },
                                      [e._v("Serving size")]
                                    ),
                                    n("b-form-input", {
                                      attrs: {
                                        id: "inline-form-input-username",
                                        type: "number",
                                        state: e.validateState("servingSize"),
                                      },
                                      model: {
                                        value: e.$v.form.servingSize.$model,
                                        callback: function(t) {
                                          e.$set(
                                            e.$v.form.servingSize,
                                            "$model",
                                            t
                                          );
                                        },
                                        expression:
                                          "$v.form.servingSize.$model",
                                      },
                                    }),
                                    e.$v.form.servingSize.valid
                                      ? e._e()
                                      : n("b-form-invalid-feedback", [
                                          e._v(
                                            " serving size to make need to be a positive number "
                                          ),
                                        ]),
                                    e.$v.form.readyInMinutes.valid
                                      ? e._e()
                                      : n("b-form-invalid-feedback", [
                                          e._v(
                                            " minutes to make need to be a positive number "
                                          ),
                                        ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            n("b-form-group", {
                              attrs: {
                                label:
                                  "Select if the following matches your recipe:",
                                id: "input-group-4",
                              },
                              scopedSlots: e._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(t) {
                                      var r = t.ariaDescribedby;
                                      return [
                                        n(
                                          "b-form-checkbox-group",
                                          {
                                            attrs: {
                                              id: "checkboxes-4",
                                              "aria-describedby": r,
                                            },
                                            model: {
                                              value: e.form.checked,
                                              callback: function(t) {
                                                e.$set(e.form, "checked", t);
                                              },
                                              expression: "form.checked",
                                            },
                                          },
                                          [
                                            n(
                                              "b-form-checkbox",
                                              {
                                                attrs: {
                                                  value: "vegan",
                                                  "unchecked-value":
                                                    "not_vegan",
                                                },
                                                model: {
                                                  value: e.form.nutritious,
                                                  callback: function(t) {
                                                    e.$set(
                                                      e.form,
                                                      "nutritious",
                                                      t
                                                    );
                                                  },
                                                  expression: "form.nutritious",
                                                },
                                              },
                                              [e._v("Vegan")]
                                            ),
                                            n(
                                              "b-form-checkbox",
                                              {
                                                attrs: {
                                                  value: "vegetarian",
                                                  "unchecked-value":
                                                    "not_vegetarian",
                                                },
                                              },
                                              [e._v("Vegeterian")]
                                            ),
                                            n(
                                              "b-form-checkbox",
                                              {
                                                attrs: {
                                                  value: "gluten-free",
                                                  "unchecked-value":
                                                    "not_gluten-free",
                                                },
                                              },
                                              [e._v("Gluten Free")]
                                            ),
                                          ],
                                          1
                                        ),
                                        n(
                                          "div",
                                          { staticClass: "ingredients" },
                                          [
                                            n(
                                              "h5",
                                              { staticClass: "input-title" },
                                              [e._v("Ingredients")]
                                            ),
                                            n("div", [
                                              n(
                                                "table",
                                                { staticClass: "table" },
                                                [
                                                  n("thead", [
                                                    n("th", [e._v("Name")]),
                                                    n("th", [e._v("Amount")]),
                                                    n("th", [e._v("Unit")]),
                                                  ]),
                                                  e._l(e.ingredients, function(
                                                    t
                                                  ) {
                                                    return n(
                                                      "tr",
                                                      { key: t.ingredientName },
                                                      [
                                                        n("td", [
                                                          e._v(
                                                            e._s(
                                                              t.ingredientName
                                                            )
                                                          ),
                                                        ]),
                                                        n("td", [
                                                          e._v(e._s(t.amount)),
                                                        ]),
                                                        n("td", [
                                                          e._v(e._s(t.unit)),
                                                        ]),
                                                      ]
                                                    );
                                                  }),
                                                ],
                                                2
                                              ),
                                            ]),
                                            n(
                                              "b-form",
                                              {
                                                attrs: { inline: "" },
                                                on: {
                                                  submit: function(t) {
                                                    return (
                                                      t.preventDefault(),
                                                      e.addIngredient.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                n(
                                                  "label",
                                                  {
                                                    staticClass: "sr-only",
                                                    attrs: {
                                                      for:
                                                        "inline-form-input-name",
                                                    },
                                                  },
                                                  [e._v("Name")]
                                                ),
                                                n("b-form-input", {
                                                  staticClass:
                                                    "mb-2 mr-sm-2 mb-sm-0",
                                                  attrs: {
                                                    id: "ingredient-name",
                                                    placeholder: "Name",
                                                    state: e.validateState(
                                                      "ingredientName"
                                                    ),
                                                  },
                                                  model: {
                                                    value:
                                                      e.$v.form.ingredientName
                                                        .$model,
                                                    callback: function(t) {
                                                      e.$set(
                                                        e.$v.form
                                                          .ingredientName,
                                                        "$model",
                                                        t
                                                      );
                                                    },
                                                    expression:
                                                      "$v.form.ingredientName.$model",
                                                  },
                                                }),
                                                n(
                                                  "label",
                                                  {
                                                    staticClass: "sr-only",
                                                    attrs: {
                                                      for:
                                                        "inline-form-input-name",
                                                    },
                                                  },
                                                  [e._v("Amount")]
                                                ),
                                                n("b-form-input", {
                                                  staticClass:
                                                    "mb-2 mr-sm-2 mb-sm-0",
                                                  attrs: {
                                                    id: "amount",
                                                    placeholder: "Amount",
                                                    type: "text",
                                                    state: e.validateState(
                                                      "amount"
                                                    ),
                                                  },
                                                  model: {
                                                    value:
                                                      e.$v.form.amount.$model,
                                                    callback: function(t) {
                                                      e.$set(
                                                        e.$v.form.amount,
                                                        "$model",
                                                        t
                                                      );
                                                    },
                                                    expression:
                                                      "$v.form.amount.$model",
                                                  },
                                                }),
                                                n(
                                                  "label",
                                                  {
                                                    staticClass: "sr-only",
                                                    attrs: {
                                                      for:
                                                        "inline-form-input-name",
                                                    },
                                                  },
                                                  [e._v("Unit")]
                                                ),
                                                n("b-form-input", {
                                                  staticClass:
                                                    "mb-2 mr-sm-2 mb-sm-0",
                                                  attrs: {
                                                    id: "unit",
                                                    placeholder: "Unit",
                                                    type: "text",
                                                    state: e.validateState(
                                                      "unit"
                                                    ),
                                                  },
                                                  model: {
                                                    value:
                                                      e.$v.form.unit.$model,
                                                    callback: function(t) {
                                                      e.$set(
                                                        e.$v.form.unit,
                                                        "$model",
                                                        t
                                                      );
                                                    },
                                                    expression:
                                                      "$v.form.unit.$model",
                                                  },
                                                }),
                                                n(
                                                  "div",
                                                  [
                                                    n(
                                                      "b-button",
                                                      {
                                                        staticClass:
                                                          "submit-buttons",
                                                        attrs: {
                                                          type: "submit",
                                                          variant: "primary",
                                                        },
                                                      },
                                                      [e._v("Add Ingredient")]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                e.$v.form.ingredientName.length
                                                  ? e.$v.form.ingredientName
                                                      .alpha
                                                    ? e._e()
                                                    : n(
                                                        "b-form-invalid-feedback",
                                                        [
                                                          e._v(
                                                            " ingredient name should include letters only "
                                                          ),
                                                        ]
                                                      )
                                                  : n(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        e._v(
                                                          " ingredient name should be up to 100 characters long "
                                                        ),
                                                      ]
                                                    ),
                                                e.$v.form.amount.valid
                                                  ? e._e()
                                                  : n(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        e._v(
                                                          " amount should be a positive number "
                                                        ),
                                                      ]
                                                    ),
                                                e.$v.form.unit.alpha
                                                  ? e.$v.form.unit.length
                                                    ? e._e()
                                                    : n(
                                                        "b-form-invalid-feedback",
                                                        [
                                                          e._v(
                                                            " unit should be up to 45 characters long "
                                                          ),
                                                        ]
                                                      )
                                                  : n(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        e._v(
                                                          " unit should contain letters only "
                                                        ),
                                                      ]
                                                    ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        n(
                                          "div",
                                          { staticClass: "instructions" },
                                          [
                                            n(
                                              "h5",
                                              { staticClass: "input-title" },
                                              [e._v("Instructions")]
                                            ),
                                            n("div", [
                                              n(
                                                "table",
                                                { staticClass: "table" },
                                                [
                                                  n("thead", [
                                                    n("th", [e._v("Number")]),
                                                    n("th", [e._v("Step")]),
                                                  ]),
                                                  e._l(
                                                    e.instructionsArray,
                                                    function(t) {
                                                      return n(
                                                        "tr",
                                                        { key: t.number },
                                                        [
                                                          n("td", [
                                                            e._v(
                                                              e._s(t.number)
                                                            ),
                                                          ]),
                                                          n("td", [
                                                            e._v(e._s(t.step)),
                                                          ]),
                                                        ]
                                                      );
                                                    }
                                                  ),
                                                ],
                                                2
                                              ),
                                            ]),
                                            n(
                                              "b-form",
                                              {
                                                attrs: { inline: "" },
                                                on: {
                                                  submit: function(t) {
                                                    return (
                                                      t.preventDefault(),
                                                      e.addInstructions.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                n(
                                                  "label",
                                                  {
                                                    staticClass: "sr-only",
                                                    attrs: {
                                                      for:
                                                        "inline-form-input-name",
                                                    },
                                                  },
                                                  [e._v("instruction")]
                                                ),
                                                n("b-form-textarea", {
                                                  staticClass:
                                                    "mb-2 mr-sm-2 mb-sm-0",
                                                  attrs: {
                                                    placeholder:
                                                      "Instruction Step",
                                                    id: "step-text",
                                                    value: "instruction",
                                                  },
                                                  model: {
                                                    value: e.form.step,
                                                    callback: function(t) {
                                                      e.$set(e.form, "step", t);
                                                    },
                                                    expression: "form.step",
                                                  },
                                                }),
                                                n(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "submit-buttons",
                                                  },
                                                  [
                                                    n(
                                                      "b-button",
                                                      {
                                                        attrs: {
                                                          type: "submit",
                                                          variant: "primary",
                                                        },
                                                      },
                                                      [e._v("Add Instruction")]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ];
                                    },
                                  },
                                ],
                                null,
                                !1,
                                1811786478
                              ),
                            }),
                            n(
                              "div",
                              { staticClass: "buttons" },
                              [
                                n(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "submit",
                                      variant: "primary",
                                    },
                                  },
                                  [e._v("Submit")]
                                ),
                                n(
                                  "b-button",
                                  {
                                    attrs: { type: "reset", variant: "danger" },
                                  },
                                  [e._v("Reset")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : e._e(),
                  ],
                  1
                ),
              ]
            ),
          ],
          1
        );
      },
      c = [],
      u = (n("b680"), n("acd8"), n("ac1f"), n("5319"), n("b5ae")),
      l = {
        name: "NewRecipe",
        created: function() {
          (this.ingredients = []),
            (this.instructionsArray = []),
            (this.showIngridentsMeesage = !1),
            (this.showInstructionMeesage = !1),
            (this.IngridentsMeesage = ""),
            (this.showMessages = !0);
        },
        destroyed: function() {
          this.onReset();
        },
        data: function() {
          return {
            form: {
              title: "",
              image: "",
              readyInMinutes: null,
              servingSize: null,
              ingredients: [],
              vegan: null,
              vegetarian: null,
              glutenFree: null,
              checked: [],
              ingredientName: "",
              amount: null,
              unit: "",
              step: "",
            },
            show: !0,
          };
        },
        validations: {
          form: {
            title: {
              required: u["required"],
              length: function(e) {
                return Object(u["maxLength"])(100)(e);
              },
              valid: function(e) {
                return !/[#?@'$%^*]/.test(e);
              },
            },
            image: { url: u["url"] },
            readyInMinutes: {
              valid: function(e) {
                if (void 0 == e) return !0;
                var t = /[-]/.test(e);
                return !t && e >= 1;
              },
              numeric: u["numeric"],
            },
            servingSize: {
              valid: function(e) {
                if (void 0 == e) return !0;
                var t = /[-]/.test(e);
                return !t && e > 0;
              },
              numeric: u["numeric"],
            },
            ingredientName: {
              valid: function(e) {
                return (
                  void 0 == e ||
                  (Object(u["maxLength"])(100)(e) && /^[A-Za-z\s]*$/.test(e))
                );
              },
            },
            amount: {
              valid: function(e) {
                return void 0 == e || e > 0;
              },
            },
            unit: {
              alpha: u["alpha"],
              length: function(e) {
                return Object(u["maxLength"])(100)(45);
              },
            },
            step: {
              length: function(e) {
                return Object(u["maxLength"])(1e3)(e);
              },
            },
          },
        },
        methods: {
          validateState: function(e) {
            var t = this.$v.form[e],
              n = t.$dirty,
              r = t.$error;
            return n ? !r : null;
          },
          onSubmit: function(e) {
            var t = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function(n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          (e.preventDefault(),
                          t.$v.form.$touch(),
                          !t.$v.form.$anyError)
                        ) {
                          n.next = 4;
                          break;
                        }
                        return n.abrupt("return");
                      case 4:
                        return (
                          console.log(
                            "submitting recipe ".concat(t.form.title)
                          ),
                          console.dir("submitting recipe ".concat(t.form)),
                          (n.next = 8),
                          t.AddRecipe()
                        );
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          AddRecipe: function() {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r, a, i;
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.$root.toast(
                              "Recipe Added",
                              "new recipe added successfully",
                              "success"
                            ),
                            console.log("serving size " + e.form.servingSize),
                            (n = !1),
                            (r = !1),
                            (a = !1),
                            void 0 != e.form.nutritious &&
                              e.form.nutritious.forEach(function(e) {
                                "vegan" === e && (n = 1),
                                  "vegetarian" === e && (r = 1),
                                  "gluten-free" === e && (a = 1);
                              }),
                            (i = "http://localhost:3000"),
                            (t.prev = 7),
                            (t.next = 10),
                            e.axios
                              .create({ withCredentials: !0 })
                              .post(i + "/users/add", {
                                title: e.form.title,
                                image: e.form.image,
                                readyInMinutes: e.form.readyInMinutes,
                                vegan: n,
                                vegetarian: r,
                                glutenFree: a,
                                ingredientsAndQuantities: e.ingredients,
                                instructions: e.instructionsArray,
                                servingSize: e.form.servingSize,
                              })
                          );
                        case 10:
                          console.log("serving size " + e.form.servingSize),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t["catch"](7)),
                            (e.form.submitError = t.t0.response.data.message);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[7, 13]]
                );
              })
            )();
          },
          onReset: function() {
            var e = this;
            (this.form = {
              title: "",
              image: "",
              readyInMinutes: null,
              servingSize: null,
              vegan: null,
              vegetarian: null,
              glutenFree: null,
              checked: [],
              ingredientName: "",
              amount: null,
              unit: null,
              step: "",
            }),
              (this.instructionsArray = []),
              (this.ingredients = []),
              this.$nextTick(function() {
                e.$v.$reset();
              }),
              (this.showIngridentsMeesage = !1),
              (this.showInstructionMeesage = !1);
          },
          addIngredient: function() {
            console.log("add Ingredient"),
              this.$v.form.amount.$anyError ||
                this.$v.form.unit.$anyError ||
                this.$v.form.ingredientName.$anyError ||
                (null != this.form.amount && "" == this.form.ingredientName) ||
                (console.log("unit " + this.form.unit),
                console.log(this.form.unit),
                (this.showIngridentsMeesage = !0),
                (this.IngridentsMeesage = this.form.ingredientName),
                this.ingredients.push({
                  ingredientName: this.form.ingredientName,
                  amount: parseFloat(this.form.amount).toFixed(2),
                  unit: this.form.unit,
                }),
                (this.form.ingredientName = ""),
                (this.form.amount = null),
                (this.form.unit = null),
                console.log(this.ingredients));
          },
          addInstructions: function() {
            this.$v.form.step.$anyError ||
              ((this.showInstructionMeesage = !0),
              (this.form.step = this.form.step.replace("'", "")),
              this.instructionsArray.push({
                number: this.instructionsArray.length + 1,
                step: this.form.step,
              }),
              (this.form.step = ""));
          },
        },
      },
      d = l,
      m = (n("00ba"), n("d21b"), n("2877")),
      f = Object(m["a"])(d, o, c, !1, null, null, null),
      p = f.exports,
      v = {
        name: "App",
        components: { NewRecipe: p },
        methods: {
          Logout: function() {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.$root.store.logout(),
                            e.$root.toast(
                              "Logout",
                              "User logged out successfully",
                              "success"
                            ),
                            (n = "http://localhost:3000"),
                            (t.prev = 3),
                            (t.next = 6),
                            e.axios.post(n + "/Logout")
                          );
                        case 6:
                          t.next = 11;
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t["catch"](3)),
                            (e.form.submitError = t.t0.response.data.message);
                        case 11:
                          e.$router.push("/")["catch"](function() {
                            e.$forceUpdate();
                          });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 8]]
                );
              })
            )();
          },
          getNumOfMeals: function() {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = "http://localhost:3000"),
                            (t.prev = 1),
                            (t.next = 4),
                            e.axios
                              .create({ withCredentials: !0 })
                              .get(n + "/users/NumRecipesUpcomingMeal", {
                                withCredentials: !0,
                              })
                          );
                        case 4:
                          (r = t.sent),
                            (e.numOfMeals = r.data.toString()),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t["catch"](1)),
                            console.log("no upcomming meals");
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
          updateCart: function() {
            var e = this;
            (this.loop = setInterval(function() {
              e.getNumOfMeals();
            }, 1e4)),
              console.log("this.numOfMeals: " + this.numOfMeals);
          },
        },
        mounted: function() {
          this.updateCart();
        },
        data: function() {
          return { numOfMeals: 0 };
        },
      },
      g = v,
      b = (n("5c0b"), Object(m["a"])(g, a, i, !1, null, null, null)),
      h = b.exports,
      k = n("a7fe"),
      w = n.n(k),
      _ = n("bc3a"),
      y = n.n(_),
      x = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          {
            staticClass: "mainPage",
            style: {
              background: "url(" + n("a7f1") + ")  no-repeat",
              backgroundSize: "410px",
            },
          },
          [
            r("div", { staticClass: "mainPage" }, [
              r("div", { staticClass: "container" }, [
                r("img", { attrs: { id: "logo", src: n("0859") } }),
                r("div", { staticClass: "row" }, [
                  r(
                    "div",
                    { staticClass: "col-sm" },
                    [r("RecipePreviewListMain")],
                    1
                  ),
                ]),
              ]),
            ]),
          ]
        );
      },
      $ = [],
      A = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          [
            n("b-row", [
              n(
                "div",
                { staticClass: "col-sm" },
                [
                  n("h4", [e._v("Explore this recipes")]),
                  e._l(e.randomRecipes, function(e) {
                    return n(
                      "b-col",
                      { key: e.id },
                      [
                        n("RecipePreviewHorizontal", {
                          staticClass: "recipePreview",
                          attrs: { recipe: e },
                        }),
                      ],
                      1
                    );
                  }),
                  n(
                    "button",
                    {
                      staticClass: "random-button",
                      on: { click: e.changeRandom },
                    },
                    [e._v(" Get other recipes ")]
                  ),
                ],
                2
              ),
              n("div", { staticClass: "col-sm" }, [
                n("h4", [e._v("Last Seen")]),
                e.$root.store.username
                  ? n(
                      "div",
                      e._l(e.lastSeenRecipes, function(e) {
                        return n(
                          "b-col",
                          { key: e.id },
                          [
                            n("RecipePreviewHorizontal", {
                              staticClass: "recipePreview",
                              attrs: { recipe: e },
                            }),
                          ],
                          1
                        );
                      }),
                      1
                    )
                  : n("div", { attrs: { id: "login" } }, [n("Login")], 1),
              ]),
            ]),
          ],
          1
        );
      },
      C = [],
      R = n("2909"),
      S = n("24db"),
      M = n("578a"),
      O = {
        name: "RecipePreviewList",
        components: { RecipePreviewHorizontal: S["a"], Login: M["a"] },
        data: function() {
          return { randomRecipes: [], lastSeenRecipes: [] };
        },
        mounted: function() {
          this.updateRecipes();
        },
        methods: {
          changeRandom: function() {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          console.log("changing the random "),
                          (t.next = 3),
                          e.getRandom()
                        );
                      case 3:
                        e.componentKey += 1;
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getRandom: function() {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r, a, i;
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = "http://localhost:3000"),
                            (t.prev = 1),
                            (t.next = 4),
                            e.axios.get(n + "/recipes/random", {
                              withCredentials: !0,
                            })
                          );
                        case 4:
                          (a = t.sent),
                            (i = a.data),
                            (e.randomRecipes = []),
                            (r = e.randomRecipes).push.apply(
                              r,
                              Object(R["a"])(i)
                            ),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t["catch"](1)),
                            console.dir("error at recipe preview list"),
                            console.dir(t.t0);
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          updateRecipes: function() {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r, a, i;
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = "http://localhost:3000"),
                            (t.prev = 1),
                            (t.next = 4),
                            e.axios
                              .create({ withCredentials: !0 })
                              .get(n + "/users/lastThreeViewed", {
                                withCredentials: !0,
                              })
                          );
                        case 4:
                          (a = t.sent),
                            (i = a.data),
                            (e.lastSeenRecipes = []),
                            (r = e.lastSeenRecipes).push.apply(
                              r,
                              Object(R["a"])(i)
                            ),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t["catch"](1)),
                            console.dir("error at recipe preview list"),
                            console.dir(t.t0);
                        case 14:
                          return (t.next = 16), e.getRandom();
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
        },
      },
      I = O,
      j = (n("abb4"), Object(m["a"])(I, A, C, !1, null, "29ba77e3", null)),
      E = j.exports,
      P = {
        data: function() {
          return {};
        },
        mounted: function() {
          console.log("main page mounted");
        },
        components: { RecipePreviewListMain: E },
      },
      B = P,
      N = (n("8e7c"), Object(m["a"])(B, x, $, !1, null, "48809494", null)),
      L = N.exports,
      U = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "container" },
          [
            n("h1", [e._v("sorry, we haven't developed this peacher yet")]),
            e._m(0),
            n(
              "router-link",
              { staticClass: "home", attrs: { to: "/", exact: "" } },
              [e._v("ET Go Home")]
            ),
          ],
          1
        );
      },
      F = [
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", [
            r("img", {
              staticStyle: { width: "150px" },
              attrs: { src: n("8797") },
            }),
          ]);
        },
      ],
      H = (n("6c09"), {}),
      q = Object(m["a"])(H, U, F, !1, null, "e3340cf8", null),
      z = q.exports,
      Q = [
        { path: "/", name: "main", component: L },
        {
          path: "/register",
          name: "register",
          component: function() {
            return n.e("chunk-ec4f77e0").then(n.bind(null, "eaff"));
          },
        },
        {
          path: "/login",
          name: "login",
          component: function() {
            return n.e("chunk-5485316a").then(n.bind(null, "62cc"));
          },
        },
        {
          path: "/search",
          name: "search",
          component: function() {
            return n.e("chunk-23062012").then(n.bind(null, "37906"));
          },
        },
        {
          path: "/recipe/:recipeId",
          name: "recipe",
          component: function() {
            return n.e("chunk-70744eb6").then(n.bind(null, "6619"));
          },
        },
        {
          path: "/myFavorite",
          name: "favorites",
          component: function() {
            return n.e("chunk-a4325cbc").then(n.bind(null, "000b"));
          },
        },
        {
          path: "/PersonalRecipes",
          name: "personalRecipes",
          component: function() {
            return n.e("chunk-1140ddfb").then(n.bind(null, "d71c"));
          },
        },
        {
          path: "/FamilyRecipes",
          name: "familyRecipes",
          component: function() {
            return n.e("chunk-f90365b4").then(n.bind(null, "9983"));
          },
        },
        {
          path: "/about",
          name: "about",
          component: function() {
            return n.e("chunk-9a197f76").then(n.bind(null, "478b"));
          },
        },
        {
          path: "/MealPlanning",
          name: "MealPlanning",
          component: function() {
            return n.e("chunk-c423b0dc").then(n.bind(null, "2b07"));
          },
        },
        { path: "*", name: "notFound", component: z },
      ],
      D = Q,
      G = n("8c4f"),
      T = n("1dce"),
      Z = n.n(T),
      J = (n("f9e3"), n("2dd8"), n("1073")),
      V = n("cbd0"),
      K = n("b1fc"),
      Y = n("7049"),
      X = n("a7e2"),
      W = n("f9bc"),
      ee = n("44d4"),
      te = n("cca8"),
      ne = n("51c2"),
      re = n("498a"),
      ae = n("5f5b"),
      ie = n("b1e0");
    r["default"].use(G["a"]);
    var se = new G["a"]({ routes: D });
    [
      J["a"],
      V["a"],
      K["a"],
      Y["a"],
      X["a"],
      W["a"],
      ee["a"],
      te["a"],
      ne["a"],
      re["a"],
      ae["a"],
      ie["a"],
    ].forEach(function(e) {
      return r["default"].use(e);
    }),
      r["default"].use(Z.a),
      y.a.interceptors.request.use(
        function(e) {
          return e;
        },
        function(e) {
          return Promise.reject(e);
        }
      ),
      y.a.interceptors.response.use(
        function(e) {
          return e;
        },
        function(e) {
          return Promise.reject(e);
        }
      ),
      r["default"].use(w.a, y.a),
      (r["default"].config.productionTip = !1);
    var oe = {
      username: localStorage.username,
      user_id: localStorage.user_id,
      login: function(e, t) {
        localStorage.setItem("username", e),
          (this.username = e),
          console.log("login", this.username),
          localStorage.setItem("user_id", t),
          (this.user_id = t),
          console.log("login user_id", this.user_id);
        var n = { 0: [0, 0] };
        sessionStorage.setItem("making_progress", JSON.stringify(n));
      },
      logout: function() {
        console.log("logout"),
          localStorage.removeItem("username"),
          localStorage.removeItem("last_search_str"),
          localStorage.removeItem("user_id"),
          sessionStorage.removeItem("making_progress"),
          (this.username = void 0),
          (this.user_id = void 0);
      },
    };
    new r["default"]({
      router: se,
      data: function() {
        return { store: oe };
      },
      methods: {
        toast: function(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.$bvToast.toast("".concat(t), {
            title: "".concat(e),
            toaster: "b-toaster-top-center",
            variant: n,
            solid: !0,
            appendToast: r,
            autoHideDelay: 3e3,
          });
        },
      },
      render: function(e) {
        return e(h);
      },
    }).$mount("#app");
  },
  "578a": function(e, t, n) {
    "use strict";
    var r = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-form",
              {
                on: {
                  submit: function(t) {
                    return t.preventDefault(), e.onLogin.apply(null, arguments);
                  },
                },
              },
              [
                n(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-Username",
                      "label-cols-sm": "3",
                      label: "Username:",
                      "label-for": "Username",
                    },
                  },
                  [
                    n("b-form-input", {
                      attrs: {
                        id: "Username",
                        type: "text",
                        state: e.validateState("username"),
                      },
                      model: {
                        value: e.$v.form.username.$model,
                        callback: function(t) {
                          e.$set(e.$v.form.username, "$model", t);
                        },
                        expression: "$v.form.username.$model",
                      },
                    }),
                    n("b-form-invalid-feedback", [
                      e._v(" Username is required "),
                    ]),
                  ],
                  1
                ),
                n(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-Password",
                      "label-cols-sm": "3",
                      label: "Password:",
                      "label-for": "Password",
                    },
                  },
                  [
                    n("b-form-input", {
                      attrs: {
                        id: "Password",
                        type: "password",
                        state: e.validateState("password"),
                      },
                      model: {
                        value: e.$v.form.password.$model,
                        callback: function(t) {
                          e.$set(e.$v.form.password, "$model", t);
                        },
                        expression: "$v.form.password.$model",
                      },
                    }),
                    n("b-form-invalid-feedback", [
                      e._v(" Password is required "),
                    ]),
                  ],
                  1
                ),
                n(
                  "b-button",
                  {
                    staticClass: "mx-auto w-100",
                    staticStyle: { width: "100px", display: "block" },
                    attrs: { type: "submit", variant: "primary" },
                  },
                  [e._v("Login")]
                ),
                n(
                  "div",
                  { staticClass: "mt-2", attrs: { id: "register" } },
                  [
                    e._v(" Do not have an account yet? "),
                    n("router-link", { attrs: { to: "register" } }, [
                      e._v(" Register in here"),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            e.form.submitError
              ? n(
                  "b-alert",
                  {
                    staticClass: "mt-2",
                    attrs: { variant: "warning", dismissible: "", show: "" },
                  },
                  [e._v(" Login failed: " + e._s(e.form.submitError) + " ")]
                )
              : e._e(),
          ],
          1
        );
      },
      a = [],
      i = (n("96cf"), n("1da1")),
      s = n("b5ae"),
      o = {
        name: "Login",
        data: function() {
          return { form: { username: "", password: "", submitError: void 0 } };
        },
        validations: {
          form: {
            username: { required: s["required"] },
            password: { required: s["required"] },
          },
        },
        methods: {
          validateState: function(e) {
            var t = this.$v.form[e],
              n = t.$dirty,
              r = t.$error;
            return n ? !r : null;
          },
          Login: function() {
            var e = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = "http://localhost:3000"),
                            (t.prev = 1),
                            (t.next = 4),
                            e.axios.post(
                              n + "/Login",
                              {
                                username: e.form.username,
                                password: e.form.password,
                              },
                              { withCredentials: !0 }
                            )
                          );
                        case 4:
                          (r = t.sent),
                            e.$root.store.login(
                              e.form.username,
                              r.data.user_id
                            ),
                            e.$router.push("/"),
                            (t.next = 13);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](1)),
                            console.log(t.t0.response),
                            (e.form.submitError = t.t0.response.data.message);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          onLogin: function() {
            console.log("login method called"),
              (this.form.submitError = void 0),
              this.$v.form.$touch(),
              this.$v.form.$anyError ||
                (console.log("login method go"), this.Login());
          },
        },
      },
      c = o,
      u = (n("017e"), n("2877")),
      l = Object(u["a"])(c, r, a, !1, null, "74917ba2", null);
    t["a"] = l.exports;
  },
  "5c0b": function(e, t, n) {
    "use strict";
    var r = n("9c0c"),
      a = n.n(r);
    a.a;
  },
  "6c09": function(e, t, n) {
    "use strict";
    var r = n("c4df"),
      a = n.n(r);
    a.a;
  },
  "75b8": function(e, t, n) {
    "use strict";
    var r = n("3947"),
      a = n.n(r);
    a.a;
  },
  8797: function(e, t, n) {
    e.exports = n.p + "img/sad.2c8c2bed.png";
  },
  "8a48": function(e, t, n) {},
  "8e7c": function(e, t, n) {
    "use strict";
    var r = n("f7cf"),
      a = n.n(r);
    a.a;
  },
  "97ec": function(e, t, n) {},
  "9c0c": function(e, t, n) {},
  a4a8: function(e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEuElEQVRoge2abYgWVRTHfz77YttuaokvqB82RYVC1JQ2ypcnFHELRUHSqC9lwuKHCEkt0iWQwpAgyEVBPwiGFoJYRh9KUcrFBF9CLUsp0djEQtFV11x3nT6cc5+ZZ57ZfebOnWH3Q38YZnbmnv85Z+aec889z0LfYj7wJ+BZHpdVtt/gMvZOBJ3pNzBGOcvlUjGnH+B/R1JCm55t4wMkSfQbLACuYu9IG9DYB/b2iv2IcTvKjKsAvtOxn2VtlC2mAQ+Af4AhMcaPBe4BXcD4DO2yxj7kDa+xkNmuMtsysSgBxiFfo514X8NggsrdBgaZm32ZtV4FBgB7gBsWcueBQ0AtsCwDu6xxHpkicxLILlPZ71O1KAGewU+jFQnkHwbuAN3ASOi7qbVUz7vUGFt0AIcR+19IyyiAR4GbQCewPMb4M8gXmemgs0k5vrIRGokEZk94T0kPA5VluIYjWecOUG1jRAhjlKcDCfxYmApsRRawx4G60PNfEEemxOB6Scd+G1d5LzihXAvjClQBf+HXOg+A48BsYBR+BqkB1gMXgD+AFmAe8HSAq0XHv+PoBMAm5frQRmgxUh4Ei7d7wAa93gL8SHSRty/A04Q4Oc7FA8US5T9QbuBw4BUk3aHK3wb2UrrX7u7BiTayq4smqI6LPQ14DNiMBJIHvB54lkem0Q2KDW4PnM8Czci0qkPS5CngNJLVqlJypEZ13o16mMd/2/eBnUh6BWigdHr9jJ+xTgfudwHrVC4XGOchU3BsSs5E7vsbgX/1wddAfeBZLX52MsfnwEn8eJkOXAuNaVb5KmSaXsSfcmk4U+LIFOQTecC7+OvGQKSH1Boy8Aukag3GRgPwJPBTaOxO5QEYjASn+ZrmfiqOVAeUb4gYPAkJ8q3ARiTtAjwSMvg1vZ8DZgErkJfwUIivDjinMutwQ5EjK/SPY5RfmcMIxsVKC7k5KvM3pY7aoODIAOA3kpfUc5Gk4CEvxAanVG5RAr0GBUem6cVZB7JFSDpusJRbr7pbHHQXHGnWi40OZACj6b2wjMLzqvuIg14P8CqBp/RGqwMZ+M02G1zQcxrlSiE+JqZBZgmzMnc4cBSmllnABrvbZY1K/AoiKQqOdOqFbdpNA4NUt00XJQwP8HJITQTpFXI2GKpnF0cAWYGv6/UIV7IEMEH+uytRDgl2gMmuZAlgtsbnXIlywFG9dlldkyKv5x/SIHsWCZjruHU1bDEEqbbvA8MceIpqrV8p3QlmjZWq8xtHnqLq9w394wpSmmeNgcAl1bnAkavIkSr83d8njsRx8L7qOoF9fRZGyQ5xBn45nuUUm4kswt1IM9sVkXt2M287yebHxieQjZQHfJASZ6QjAB/j1z9vpaQMZANmfsH9knR+CTBdzvaohzngU3xPdyMN46SoRt6+aVLsR4K9xoHTYK1yHuxtUBN+g64D+Ai7MqYW+aLmH2e6kc1bBdKzbQdWId1MW4xCnDA9thfLCUxEuubBtugRYDXwHOJYNdJSrUeC901k6twMyJ2h+LeQVYFnrkdU16dH5JEpYbJa3KMVeJnoeGhEpsStBMbfUtnCl7DN4SPUgDzSiKtH9hRdSCBfRaqEg3pcseRPjP8AtdXCb5vSn1kAAAAASUVORK5CYII=";
  },
  a7f1: function(e, t, n) {
    e.exports = n.p + "img/background.fdb6e163.jpg";
  },
  abb4: function(e, t, n) {
    "use strict";
    var r = n("0875"),
      a = n.n(r);
    a.a;
  },
  c4df: function(e, t, n) {},
  d21b: function(e, t, n) {
    "use strict";
    var r = n("8a48"),
      a = n.n(r);
    a.a;
  },
  d92e: function(e, t, n) {},
  e6e2: function(e, t, n) {
    "use strict";
    var r = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            !1 === e.recipe.isFavorite
              ? n("b-icon", {
                  staticClass: "heart_icon",
                  attrs: { icon: "heart", "font-scale": "1.8" },
                  on: {
                    click: function(t) {
                      return e.markFavorite(e.recipe);
                    },
                  },
                })
              : e._e(),
            !0 === e.recipe.isFavorite
              ? n("b-icon", {
                  staticClass: "heart_icon",
                  attrs: {
                    id: "favorite",
                    icon: "heart-fill",
                    "font-scale": "1.8",
                  },
                  on: {
                    click: function(t) {
                      return e.unmarkFavorite(e.recipe);
                    },
                  },
                })
              : e._e(),
          ],
          1
        );
      },
      a = [],
      i = (n("96cf"), n("1da1")),
      s = {
        name: "FavoriteButton",
        props: { recipe: { type: Object, required: !0 } },
        data: function() {
          return {};
        },
        methods: {
          markFavorite: function(e) {
            var t = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function n() {
                var r;
                return regeneratorRuntime.wrap(
                  function(n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            console.log("marking as favorite"),
                            (r = "http://localhost:3000"),
                            (n.prev = 2),
                            (n.next = 5),
                            t.axios
                              .create({ withCredentials: !0 })
                              .post(
                                r + "/users/favorites",
                                { recipeId: e.id },
                                { params: { personal: e.isPersonal } }
                              )
                          );
                        case 5:
                          (e.isFavorite = !0), (n.next = 13);
                          break;
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n["catch"](2)),
                            401 == n.t0.response.status
                              ? t.$router.push("/login")
                              : 409 == n.t0.response.status &&
                                (e.isFavorite = !0),
                            console.dir("error at marking as favorite"),
                            console.dir(n.t0);
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 8]]
                );
              })
            )();
          },
          unmarkFavorite: function(e) {
            var t = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function n() {
                var r;
                return regeneratorRuntime.wrap(
                  function(n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            console.log("unmarking as favorite"),
                            (r = "http://localhost:3000"),
                            (n.prev = 2),
                            (n.next = 5),
                            t.axios
                              .create({ withCredentials: !0 })
                              ["delete"](r + "/users/favorites", {
                                data: { recipeId: e.id },
                                params: { personal: e.isPersonal },
                              })
                          );
                        case 5:
                          (e.isFavorite = !1), (n.next = 12);
                          break;
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n["catch"](2)),
                            console.dir("error at unmarking as favorite"),
                            console.dir(n.t0);
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 8]]
                );
              })
            )();
          },
        },
      },
      o = s,
      c = (n("296e"), n("2877")),
      u = Object(c["a"])(o, r, a, !1, null, "22e2c831", null);
    t["a"] = u.exports;
  },
  f7cf: function(e, t, n) {},
});
//# sourceMappingURL=app.4fcff53e.js.map
