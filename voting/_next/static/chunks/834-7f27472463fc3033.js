"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [834], {
        37065: function(e, t, o) {
            o.d(t, {
                t: function() {
                    return Oe
                }
            });
            var n = o(67294),
                r = o(64761),
                a = o(14258),
                i = o(15851);

            function l(e, t) {
                const o = t - e + 1;
                return Array.from({
                    length: o
                }, ((t, o) => o + e))
            }
            const s = "dots";

            function c({
                total: e,
                siblings: t = 1,
                boundaries: o = 1,
                page: r,
                initialPage: a = 1,
                onChange: c
            }) {
                const d = Math.max(Math.trunc(e), 0),
                    [u, p] = (0, i.C)({
                        value: r,
                        onChange: c,
                        defaultValue: a,
                        finalValue: a
                    }),
                    f = e => {
                        p(e <= 0 ? 1 : e > d ? d : e)
                    };
                return {
                    range: (0, n.useMemo)((() => {
                        if (2 * t + 3 + 2 * o >= d) return l(1, d);
                        const e = Math.max(u - t, o),
                            n = Math.min(u + t, d - o),
                            r = e > o + 2,
                            a = n < d - (o + 1);
                        if (!r && a) {
                            return [...l(1, 2 * t + o + 2), s, ...l(d - (o - 1), d)]
                        }
                        if (r && !a) {
                            const e = o + 1 + 2 * t;
                            return [...l(1, o), s, ...l(d - e, d)]
                        }
                        return [...l(1, o), s, ...l(e, n), s, ...l(d - o + 1, d)]
                    }), [d, t, u]),
                    active: u,
                    setPage: f,
                    next: () => f(u + 1),
                    previous: () => f(u - 1),
                    first: () => f(1),
                    last: () => f(d)
                }
            }
            var d = o(69328),
                u = o(68216);
            const [p, f] = (0, u.R)("Pagination.Root component was not found in tree"), m = {
                siblings: 1,
                boundaries: 1
            };

            function v(e) {
                const {
                    total: t,
                    value: o,
                    defaultValue: a,
                    onChange: i,
                    disabled: l,
                    children: s,
                    siblings: u,
                    boundaries: f,
                    color: v,
                    radius: g,
                    onNextPage: b,
                    onPreviousPage: y,
                    onFirstPage: h,
                    onLastPage: P,
                    getItemProps: w,
                    classNames: O,
                    styles: x,
                    unstyled: C,
                    variant: E,
                    size: N
                } = (0, r.N4)("PaginationRoot", m, e), {
                    range: j,
                    setPage: z,
                    next: k,
                    previous: I,
                    active: L,
                    first: M,
                    last: S
                } = c({
                    page: o,
                    initialPage: a,
                    onChange: i,
                    total: t,
                    siblings: u,
                    boundaries: f
                }), D = (0, d.x)(b, k), R = (0, d.x)(y, I), F = (0, d.x)(h, M), Y = (0, d.x)(P, S);
                return n.createElement(p, {
                    value: {
                        total: t,
                        range: j,
                        active: L,
                        disabled: l,
                        color: v,
                        radius: g,
                        getItemProps: w,
                        onChange: z,
                        onNext: D,
                        onPrevious: R,
                        onFirst: F,
                        onLast: Y,
                        stylesApi: {
                            name: "Pagination",
                            classNames: O,
                            styles: x,
                            unstyled: C,
                            variant: E,
                            size: N
                        }
                    }
                }, s)
            }
            var g = o(96768),
                b = o(56817);
            const y = {
                xs: (0, g.h)(22),
                sm: (0, g.h)(26),
                md: (0, g.h)(32),
                lg: (0, g.h)(38),
                xl: (0, g.h)(44)
            };
            var h = (0, b.k)(((e, {
                    color: t,
                    radius: o,
                    withPadding: n
                }, {
                    size: r
                }) => {
                    const i = e.fn.variant({
                        color: t,
                        variant: "filled"
                    });
                    return {
                        control: {
                            cursor: "pointer",
                            userSelect: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `${(0,g.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,
                            color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
                            height: (0, a.a)({
                                size: r,
                                sizes: y
                            }),
                            minWidth: (0, a.a)({
                                size: r,
                                sizes: y
                            }),
                            padding: n ? `0 calc(${(0,a.a)({size:r,sizes:e.spacing})} / 2)` : void 0,
                            fontSize: (0, a.a)({
                                size: r,
                                sizes: e.fontSizes
                            }),
                            borderRadius: e.fn.radius(o),
                            lineHeight: 1,
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.white,
                            "&:not([data-disabled])": e.fn.hover({
                                backgroundColor: "dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[0]
                            }),
                            "&:active:not([data-disabled])": e.activeStyles,
                            "&[data-disabled]": {
                                opacity: .4,
                                cursor: "not-allowed"
                            },
                            "&[data-active]": {
                                borderColor: "transparent",
                                color: i.color,
                                backgroundColor: i.background,
                                "&:not([data-disabled])": e.fn.hover({
                                    backgroundColor: i.hover
                                })
                            }
                        }
                    }
                })),
                P = o(34736),
                w = Object.defineProperty,
                O = Object.defineProperties,
                x = Object.getOwnPropertyDescriptors,
                C = Object.getOwnPropertySymbols,
                E = Object.prototype.hasOwnProperty,
                N = Object.prototype.propertyIsEnumerable,
                j = (e, t, o) => t in e ? w(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o;
            const z = {
                    withPadding: !0
                },
                k = (0, n.forwardRef)(((e, t) => {
                    const o = (0, r.N4)("PaginationControl", z, e),
                        {
                            active: a,
                            className: i,
                            disabled: l,
                            withPadding: s
                        } = o,
                        c = ((e, t) => {
                            var o = {};
                            for (var n in e) E.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                            if (null != e && C)
                                for (var n of C(e)) t.indexOf(n) < 0 && N.call(e, n) && (o[n] = e[n]);
                            return o
                        })(o, ["active", "className", "disabled", "withPadding"]),
                        d = f(),
                        {
                            classes: u,
                            cx: p
                        } = h({
                            color: d.color,
                            radius: d.radius,
                            withPadding: s
                        }, d.stylesApi);
                    return n.createElement(P.k, (m = ((e, t) => {
                        for (var o in t || (t = {})) E.call(t, o) && j(e, o, t[o]);
                        if (C)
                            for (var o of C(t)) N.call(t, o) && j(e, o, t[o]);
                        return e
                    })({}, c), v = {
                        disabled: l,
                        "data-active": a || void 0,
                        "data-disabled": l || void 0,
                        ref: t,
                        className: p(u.control, i)
                    }, O(m, x(v))));
                    var m, v
                }));
            k.displayName = "@mantine/core/PaginationControl";
            var I = Object.defineProperty,
                L = Object.defineProperties,
                M = Object.getOwnPropertyDescriptors,
                S = Object.getOwnPropertySymbols,
                D = Object.prototype.hasOwnProperty,
                R = Object.prototype.propertyIsEnumerable,
                F = (e, t, o) => t in e ? I(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                Y = (e, t) => {
                    for (var o in t || (t = {})) D.call(t, o) && F(e, o, t[o]);
                    if (S)
                        for (var o of S(t)) R.call(t, o) && F(e, o, t[o]);
                    return e
                },
                A = (e, t) => L(e, M(t));

            function T(e) {
                return `calc(${(0,a.a)({size:e,sizes:y})} / 2)`
            }

            function $(e) {
                var t = e,
                    {
                        size: o,
                        children: r,
                        path: a
                    } = t,
                    i = ((e, t) => {
                        var o = {};
                        for (var n in e) D.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                        if (null != e && S)
                            for (var n of S(e)) t.indexOf(n) < 0 && R.call(e, n) && (o[n] = e[n]);
                        return o
                    })(t, ["size", "children", "path"]);
                return n.createElement("svg", Y({
                    width: o,
                    height: o,
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, i), n.createElement("path", {
                    d: a,
                    fill: "currentColor"
                }))
            }
            var Z = (0, b.k)(((e, t, {
                    size: o
                }) => ({
                    dots: {
                        height: (0, a.a)({
                            size: o,
                            sizes: y
                        }),
                        minWidth: (0, a.a)({
                            size: o,
                            sizes: y
                        }),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                    }
                }))),
                V = o(64523),
                X = Object.defineProperty,
                _ = Object.getOwnPropertySymbols,
                G = Object.prototype.hasOwnProperty,
                q = Object.prototype.propertyIsEnumerable,
                B = (e, t, o) => t in e ? X(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o;
            const H = {
                    icon: e => n.createElement($, A(Y({}, e), {
                        path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
                    }))
                },
                K = (0, n.forwardRef)(((e, t) => {
                    const o = (0, r.N4)("PaginationDots", H, e),
                        {
                            className: a,
                            icon: i
                        } = o,
                        l = ((e, t) => {
                            var o = {};
                            for (var n in e) G.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                            if (null != e && _)
                                for (var n of _(e)) t.indexOf(n) < 0 && q.call(e, n) && (o[n] = e[n]);
                            return o
                        })(o, ["className", "icon"]),
                        s = f(),
                        {
                            classes: c,
                            cx: d
                        } = Z(null, s.stylesApi);
                    return n.createElement(V.x, ((e, t) => {
                        for (var o in t || (t = {})) G.call(t, o) && B(e, o, t[o]);
                        if (_)
                            for (var o of _(t)) q.call(t, o) && B(e, o, t[o]);
                        return e
                    })({
                        ref: t,
                        className: d(c.dots, a)
                    }, l), n.createElement(i, {
                        size: T(s.stylesApi.size)
                    }))
                }));
            K.displayName = "@mantine/core/PaginationDots";
            var Q = Object.defineProperty,
                W = Object.getOwnPropertySymbols,
                J = Object.prototype.hasOwnProperty,
                U = Object.prototype.propertyIsEnumerable,
                ee = (e, t, o) => t in e ? Q(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o;

            function te({
                dotsIcon: e
            }) {
                const t = f(),
                    o = t.range.map(((o, r) => {
                        var a;
                        return "dots" === o ? n.createElement(K, {
                            icon: e,
                            key: r
                        }) : n.createElement(k, ((e, t) => {
                            for (var o in t || (t = {})) J.call(t, o) && ee(e, o, t[o]);
                            if (W)
                                for (var o of W(t)) U.call(t, o) && ee(e, o, t[o]);
                            return e
                        })({
                            key: r,
                            active: o === t.active,
                            "aria-current": o === t.active ? "page" : void 0,
                            onClick: () => t.onChange(o),
                            disabled: t.disabled
                        }, null == (a = t.getItemProps) ? void 0 : a.call(t, o)), o)
                    }));
                return n.createElement(n.Fragment, null, o)
            }
            te.displayName = "@mantine/core/PaginationItems";
            var oe = o(48427),
                ne = (0, b.k)((e => ({
                    icon: {
                        transform: "rtl" === e.dir ? "rotate(180deg)" : "unset"
                    }
                }))),
                re = Object.defineProperty,
                ae = Object.getOwnPropertySymbols,
                ie = Object.prototype.hasOwnProperty,
                le = Object.prototype.propertyIsEnumerable,
                se = (e, t, o) => t in e ? re(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o;

            function ce({
                icon: e,
                name: t,
                action: o,
                type: a
            }) {
                const i = {
                        icon: e
                    },
                    l = (0, n.forwardRef)(((e, l) => {
                        const s = (0, r.N4)(t, i, e),
                            {
                                icon: c
                            } = s,
                            d = ((e, t) => {
                                var o = {};
                                for (var n in e) ie.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                                if (null != e && ae)
                                    for (var n of ae(e)) t.indexOf(n) < 0 && le.call(e, n) && (o[n] = e[n]);
                                return o
                            })(s, ["icon"]),
                            {
                                classes: u
                            } = ne(),
                            p = f(),
                            m = "next" === a ? p.active === p.total : 1 === p.active;
                        return n.createElement(k, ((e, t) => {
                            for (var o in t || (t = {})) ie.call(t, o) && se(e, o, t[o]);
                            if (ae)
                                for (var o of ae(t)) le.call(t, o) && se(e, o, t[o]);
                            return e
                        })({
                            disabled: p.disabled || m,
                            ref: l,
                            onClick: p[o],
                            withPadding: !1
                        }, d), n.createElement(c, {
                            className: u.icon,
                            size: T(p.stylesApi.size)
                        }))
                    }));
                return l.displayName = `@mantine/core/${t}`, (0, oe.F)(l)
            }
            const de = ce({
                    icon: e => n.createElement($, A(Y({}, e), {
                        path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
                    })),
                    name: "PaginationNext",
                    action: "onNext",
                    type: "next"
                }),
                ue = ce({
                    icon: e => n.createElement($, A(Y({}, e), {
                        path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
                    })),
                    name: "PaginationPrevious",
                    action: "onPrevious",
                    type: "previous"
                }),
                pe = ce({
                    icon: e => n.createElement($, A(Y({}, e), {
                        path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
                    })),
                    name: "PaginationFirst",
                    action: "onFirst",
                    type: "previous"
                }),
                fe = ce({
                    icon: e => n.createElement($, A(Y({}, e), {
                        path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                    })),
                    name: "PaginationLast",
                    action: "onLast",
                    type: "next"
                });
            var me = o(71232),
                ve = Object.defineProperty,
                ge = Object.getOwnPropertySymbols,
                be = Object.prototype.hasOwnProperty,
                ye = Object.prototype.propertyIsEnumerable,
                he = (e, t, o) => t in e ? ve(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                Pe = (e, t) => {
                    for (var o in t || (t = {})) be.call(t, o) && he(e, o, t[o]);
                    if (ge)
                        for (var o of ge(t)) ye.call(t, o) && he(e, o, t[o]);
                    return e
                };
            const we = {
                withControls: !0,
                siblings: 1,
                boundaries: 1
            };

            function Oe(e) {
                const t = (0, r.N4)("Pagination", we, e),
                    {
                        withEdges: o,
                        withControls: i,
                        classNames: l,
                        styles: s,
                        unstyled: c,
                        variant: d,
                        size: u,
                        total: p,
                        value: f,
                        defaultValue: m,
                        onChange: g,
                        disabled: b,
                        siblings: y,
                        boundaries: h,
                        color: P,
                        radius: w,
                        onNextPage: O,
                        onPreviousPage: x,
                        onFirstPage: C,
                        onLastPage: E,
                        getItemProps: N,
                        getControlProps: j,
                        spacing: z,
                        nextIcon: k,
                        previousIcon: I,
                        lastIcon: L,
                        firstIcon: M,
                        dotsIcon: S
                    } = t,
                    D = ((e, t) => {
                        var o = {};
                        for (var n in e) be.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                        if (null != e && ge)
                            for (var n of ge(e)) t.indexOf(n) < 0 && ye.call(e, n) && (o[n] = e[n]);
                        return o
                    })(t, ["withEdges", "withControls", "classNames", "styles", "unstyled", "variant", "size", "total", "value", "defaultValue", "onChange", "disabled", "siblings", "boundaries", "color", "radius", "onNextPage", "onPreviousPage", "onFirstPage", "onLastPage", "getItemProps", "getControlProps", "spacing", "nextIcon", "previousIcon", "lastIcon", "firstIcon", "dotsIcon"]),
                    R = (0, r.rZ)();
                return p <= 0 ? null : n.createElement(v, {
                    classNames: l,
                    styles: s,
                    unstyled: c,
                    variant: d,
                    size: u,
                    total: p,
                    value: f,
                    defaultValue: m,
                    onChange: g,
                    disabled: b,
                    siblings: y,
                    boundaries: h,
                    color: P,
                    radius: w,
                    onNextPage: O,
                    onPreviousPage: x,
                    onFirstPage: C,
                    onLastPage: E,
                    getItemProps: N
                }, n.createElement(me.Z, Pe({
                    spacing: null != z ? z : `calc(${(0,a.a)({size:u,sizes:R.spacing})} / 2)`
                }, D), o && n.createElement(pe, Pe({
                    icon: M
                }, null == j ? void 0 : j("first"))), i && n.createElement(ue, Pe({
                    icon: I
                }, null == j ? void 0 : j("previous"))), n.createElement(te, {
                    dotsIcon: S
                }), i && n.createElement(de, Pe({
                    icon: k
                }, null == j ? void 0 : j("next"))), o && n.createElement(fe, Pe({
                    icon: L
                }, null == j ? void 0 : j("last")))))
            }
            Oe.displayName = "@mantine/core/Pagination", Oe.Root = v, Oe.Items = te, Oe.Control = k, Oe.Dots = K, Oe.Next = de, Oe.Previous = ue, Oe.Last = fe, Oe.First = pe
        },
        88393: function(e, t, o) {
            o.d(t, {
                u: function() {
                    return re
                }
            });
            var n = o(67294),
                r = o(24241),
                a = o(80665),
                i = o(3594),
                l = o(64761),
                s = o(94993);
            const c = (0, n.createContext)(!1),
                d = c.Provider;

            function u({
                children: e,
                openDelay: t = 0,
                closeDelay: o = 0
            }) {
                return n.createElement(d, {
                    value: !0
                }, n.createElement(s.e0, {
                    delay: {
                        open: t,
                        close: o
                    }
                }, e))
            }
            u.displayName = "@mantine/core/TooltipGroup";
            var p = o(56817),
                f = Object.defineProperty,
                m = Object.defineProperties,
                v = Object.getOwnPropertyDescriptors,
                g = Object.getOwnPropertySymbols,
                b = Object.prototype.hasOwnProperty,
                y = Object.prototype.propertyIsEnumerable,
                h = (e, t, o) => t in e ? f(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                P = (e, t) => {
                    for (var o in t || (t = {})) b.call(t, o) && h(e, o, t[o]);
                    if (g)
                        for (var o of g(t)) y.call(t, o) && h(e, o, t[o]);
                    return e
                };

            function w(e, t) {
                if (!t) return {
                    backgroundColor: "dark" === e.colorScheme ? e.colors.gray[2] : e.colors.gray[9],
                    color: "dark" === e.colorScheme ? e.black : e.white
                };
                const o = e.fn.variant({
                    variant: "filled",
                    color: t,
                    primaryFallback: !1
                });
                return {
                    backgroundColor: o.background,
                    color: o.color
                }
            }
            var O = (0, p.k)(((e, {
                color: t,
                radius: o,
                width: n,
                multiline: r
            }) => {
                return {
                    tooltip: (a = P(P({}, e.fn.fontStyles()), w(e, t)), i = {
                        lineHeight: e.lineHeight,
                        fontSize: e.fontSizes.sm,
                        borderRadius: e.fn.radius(o),
                        padding: `calc(${e.spacing.xs} / 2) ${e.spacing.xs}`,
                        position: "absolute",
                        whiteSpace: r ? "unset" : "nowrap",
                        pointerEvents: "none",
                        width: n
                    }, m(a, v(i))),
                    arrow: {
                        backgroundColor: "inherit",
                        border: 0,
                        zIndex: 1
                    }
                };
                var a, i
            }));
            const x = "Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported";
            var C = o(88301),
                E = o(55863);
            var N = o(33794),
                j = o(64523),
                z = Object.defineProperty,
                k = Object.defineProperties,
                I = Object.getOwnPropertyDescriptors,
                L = Object.getOwnPropertySymbols,
                M = Object.prototype.hasOwnProperty,
                S = Object.prototype.propertyIsEnumerable,
                D = (e, t, o) => t in e ? z(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                R = (e, t) => {
                    for (var o in t || (t = {})) M.call(t, o) && D(e, o, t[o]);
                    if (L)
                        for (var o of L(t)) S.call(t, o) && D(e, o, t[o]);
                    return e
                },
                F = (e, t) => k(e, I(t));
            const Y = {
                refProp: "ref",
                withinPortal: !0,
                offset: 10,
                position: "right",
                zIndex: (0, i.w)("popover")
            };

            function A(e) {
                var t;
                const o = (0, l.N4)("TooltipFloating", Y, e),
                    {
                        children: i,
                        refProp: c,
                        withinPortal: d,
                        style: u,
                        className: p,
                        classNames: f,
                        styles: m,
                        unstyled: v,
                        radius: g,
                        color: b,
                        label: y,
                        offset: h,
                        position: P,
                        multiline: w,
                        width: z,
                        zIndex: k,
                        disabled: I,
                        variant: D
                    } = o,
                    A = ((e, t) => {
                        var o = {};
                        for (var n in e) M.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                        if (null != e && L)
                            for (var n of L(e)) t.indexOf(n) < 0 && S.call(e, n) && (o[n] = e[n]);
                        return o
                    })(o, ["children", "refProp", "withinPortal", "style", "className", "classNames", "styles", "unstyled", "radius", "color", "label", "offset", "position", "multiline", "width", "zIndex", "disabled", "variant"]),
                    {
                        handleMouseMove: T,
                        x: $,
                        y: Z,
                        opened: V,
                        boundaryRef: X,
                        floating: _,
                        setOpened: G
                    } = function({
                        offset: e,
                        position: t
                    }) {
                        const [o, r] = (0, n.useState)(!1), a = (0, n.useRef)(), {
                            x: i,
                            y: l,
                            reference: c,
                            floating: d,
                            refs: u,
                            update: p,
                            placement: f
                        } = (0, s.YF)({
                            placement: t,
                            middleware: [(0, C.uY)({
                                crossAxis: !0,
                                padding: 5,
                                rootBoundary: "document"
                            })]
                        }), m = f.includes("right") ? e : t.includes("left") ? -1 * e : 0, v = f.includes("bottom") ? e : t.includes("top") ? -1 * e : 0, g = (0, n.useCallback)((({
                            clientX: e,
                            clientY: t
                        }) => {
                            c({
                                getBoundingClientRect: () => ({
                                    width: 0,
                                    height: 0,
                                    x: e,
                                    y: t,
                                    left: e + m,
                                    top: t + v,
                                    right: e,
                                    bottom: t
                                })
                            })
                        }), [c]);
                        return (0, n.useEffect)((() => {
                            if (u.floating.current) {
                                const e = a.current;
                                e.addEventListener("mousemove", g);
                                const t = (0, E.Kx)(u.floating.current);
                                return t.forEach((e => {
                                    e.addEventListener("scroll", p)
                                })), () => {
                                    e.removeEventListener("mousemove", g), t.forEach((e => {
                                        e.removeEventListener("scroll", p)
                                    }))
                                }
                            }
                        }), [c, u.floating.current, p, g, o]), {
                            handleMouseMove: g,
                            x: i,
                            y: l,
                            opened: o,
                            setOpened: r,
                            boundaryRef: a,
                            floating: d
                        }
                    }({
                        offset: h,
                        position: P
                    }),
                    {
                        classes: q,
                        cx: B
                    } = O({
                        radius: g,
                        color: b,
                        multiline: w,
                        width: z
                    }, {
                        name: "TooltipFloating",
                        classNames: f,
                        styles: m,
                        unstyled: v,
                        variant: D
                    });
                if (!(0, r.k)(i)) throw new Error(x);
                const H = (0, a.Y)(X, i.ref);
                return n.createElement(n.Fragment, null, n.createElement(N.q, {
                    withinPortal: d
                }, n.createElement(j.x, F(R({}, A), {
                    ref: _,
                    className: B(q.tooltip, p),
                    style: F(R({}, u), {
                        zIndex: k,
                        display: !I && V ? "block" : "none",
                        top: null != Z ? Z : "",
                        left: null != (t = Math.round($)) ? t : ""
                    })
                }), y)), (0, n.cloneElement)(i, F(R({}, i.props), {
                    [c]: H,
                    onMouseEnter: e => {
                        var t, o;
                        null == (o = (t = i.props).onMouseEnter) || o.call(t, e), T(e), G(!0)
                    },
                    onMouseLeave: e => {
                        var t, o;
                        null == (o = (t = i.props).onMouseLeave) || o.call(t, e), G(!1)
                    }
                })))
            }
            A.displayName = "@mantine/core/TooltipFloating";
            var T = o(58463),
                $ = o(83051),
                Z = o(37048),
                V = o(30212);

            function X(e) {
                const [t, o] = (0, n.useState)(!1), r = "boolean" === typeof e.opened ? e.opened : t, a = (0, n.useContext)(c), i = (0, $.M)(), {
                    delay: l,
                    currentId: d,
                    setCurrentId: u
                } = (0, s.tj)(), p = (0, n.useCallback)((e => {
                    o(e), e && u(i)
                }), [u, i]), {
                    x: f,
                    y: m,
                    reference: v,
                    floating: g,
                    context: b,
                    refs: y,
                    update: h,
                    placement: P,
                    middlewareData: {
                        arrow: {
                            x: w,
                            y: O
                        } = {}
                    }
                } = (0, s.YF)({
                    placement: e.position,
                    open: r,
                    onOpenChange: p,
                    middleware: [(0, C.cv)(e.offset), (0, C.uY)({
                        padding: 8
                    }), (0, C.RR)(), (0, T.x7)({
                        element: e.arrowRef,
                        padding: e.arrowOffset
                    }), ...e.inline ? [(0, C.Qo)()] : []]
                }), {
                    getReferenceProps: x,
                    getFloatingProps: E
                } = (0, s.NI)([(0, s.XI)(b, {
                    enabled: e.events.hover,
                    delay: a ? l : {
                        open: e.openDelay,
                        close: e.closeDelay
                    },
                    mouseOnly: !e.events.touch
                }), (0, s.KK)(b, {
                    enabled: e.events.focus,
                    keyboardOnly: !0
                }), (0, s.qs)(b, {
                    role: "tooltip"
                }), (0, s.bQ)(b, {
                    enabled: void 0 === typeof e.opened
                }), (0, s.Qu)(b, {
                    id: i
                })]);
                (0, V.L)({
                    opened: r,
                    position: e.position,
                    positionDependencies: e.positionDependencies,
                    floating: {
                        refs: y,
                        update: h
                    }
                }), (0, Z.l)((() => {
                    var t;
                    null == (t = e.onPositionChange) || t.call(e, P)
                }), [P]);
                return {
                    x: f,
                    y: m,
                    arrowX: w,
                    arrowY: O,
                    reference: v,
                    floating: g,
                    getFloatingProps: E,
                    getReferenceProps: x,
                    isGroupPhase: r && d && d !== i,
                    opened: r,
                    placement: P
                }
            }
            var _ = o(14870),
                G = o(58036),
                q = o(63468),
                B = Object.defineProperty,
                H = Object.defineProperties,
                K = Object.getOwnPropertyDescriptors,
                Q = Object.getOwnPropertySymbols,
                W = Object.prototype.hasOwnProperty,
                J = Object.prototype.propertyIsEnumerable,
                U = (e, t, o) => t in e ? B(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                ee = (e, t) => {
                    for (var o in t || (t = {})) W.call(t, o) && U(e, o, t[o]);
                    if (Q)
                        for (var o of Q(t)) J.call(t, o) && U(e, o, t[o]);
                    return e
                },
                te = (e, t) => H(e, K(t));
            const oe = {
                    position: "top",
                    refProp: "ref",
                    withinPortal: !1,
                    inline: !1,
                    arrowSize: 4,
                    arrowOffset: 5,
                    arrowRadius: 0,
                    arrowPosition: "side",
                    offset: 5,
                    transitionProps: {
                        duration: 100,
                        transition: "fade"
                    },
                    width: "auto",
                    events: {
                        hover: !0,
                        focus: !1,
                        touch: !1
                    },
                    zIndex: (0, i.w)("popover"),
                    positionDependencies: []
                },
                ne = (0, n.forwardRef)(((e, t) => {
                    var o;
                    const i = (0, n.useRef)(null),
                        s = (0, l.N4)("Tooltip", oe, e),
                        {
                            children: c,
                            position: d,
                            refProp: u,
                            label: p,
                            openDelay: f,
                            closeDelay: m,
                            onPositionChange: v,
                            opened: g,
                            withinPortal: b,
                            radius: y,
                            color: h,
                            classNames: P,
                            styles: w,
                            unstyled: C,
                            style: E,
                            className: z,
                            withArrow: k,
                            arrowSize: I,
                            arrowOffset: L,
                            arrowRadius: M,
                            arrowPosition: S,
                            offset: D,
                            transitionProps: R,
                            multiline: F,
                            width: Y,
                            events: A,
                            zIndex: T,
                            disabled: $,
                            positionDependencies: Z,
                            onClick: V,
                            onMouseEnter: B,
                            onMouseLeave: H,
                            inline: K,
                            variant: U,
                            keepMounted: ne
                        } = s,
                        re = ((e, t) => {
                            var o = {};
                            for (var n in e) W.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                            if (null != e && Q)
                                for (var n of Q(e)) t.indexOf(n) < 0 && J.call(e, n) && (o[n] = e[n]);
                            return o
                        })(s, ["children", "position", "refProp", "label", "openDelay", "closeDelay", "onPositionChange", "opened", "withinPortal", "radius", "color", "classNames", "styles", "unstyled", "style", "className", "withArrow", "arrowSize", "arrowOffset", "arrowRadius", "arrowPosition", "offset", "transitionProps", "multiline", "width", "events", "zIndex", "disabled", "positionDependencies", "onClick", "onMouseEnter", "onMouseLeave", "inline", "variant", "keepMounted"]),
                        {
                            classes: ae,
                            cx: ie,
                            theme: le
                        } = O({
                            radius: y,
                            color: h,
                            width: Y,
                            multiline: F
                        }, {
                            name: "Tooltip",
                            classNames: P,
                            styles: w,
                            unstyled: C,
                            variant: U
                        }),
                        se = X({
                            position: (0, _._)(le.dir, d),
                            closeDelay: m,
                            openDelay: f,
                            onPositionChange: v,
                            opened: g,
                            events: A,
                            arrowRef: i,
                            arrowOffset: L,
                            offset: D + (k ? I / 2 : 0),
                            positionDependencies: [...Z, c],
                            inline: K
                        });
                    if (!(0, r.k)(c)) throw new Error(x);
                    const ce = (0, a.Y)(se.reference, c.ref, t);
                    return n.createElement(n.Fragment, null, n.createElement(N.q, {
                        withinPortal: b
                    }, n.createElement(G.u, te(ee({
                        keepMounted: ne,
                        mounted: !$ && se.opened
                    }, R), {
                        transition: R.transition || "fade",
                        duration: se.isGroupPhase ? 10 : null != (o = R.duration) ? o : 100
                    }), (e => {
                        var t, o;
                        return n.createElement(j.x, ee(ee({}, re), se.getFloatingProps({
                            ref: se.floating,
                            className: ae.tooltip,
                            style: te(ee(ee({}, E), e), {
                                zIndex: T,
                                top: null != (t = se.y) ? t : 0,
                                left: null != (o = se.x) ? o : 0
                            })
                        })), p, n.createElement(q.Y, {
                            ref: i,
                            arrowX: se.arrowX,
                            arrowY: se.arrowY,
                            visible: k,
                            position: se.placement,
                            arrowSize: I,
                            arrowOffset: L,
                            arrowRadius: M,
                            arrowPosition: S,
                            className: ae.arrow
                        }))
                    }))), (0, n.cloneElement)(c, se.getReferenceProps(ee({
                        onClick: V,
                        onMouseEnter: B,
                        onMouseLeave: H,
                        onMouseMove: e.onMouseMove,
                        onPointerDown: e.onPointerDown,
                        onPointerEnter: e.onPointerEnter,
                        [u]: ce,
                        className: ie(z, c.props.className)
                    }, c.props))))
                }));
            ne.Group = u, ne.Floating = A, ne.displayName = "@mantine/core/Tooltip";
            const re = ne
        },
        40872: function(e, t, o) {
            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }

            function r() {
                return n.apply(this, arguments)
            }
            o.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);