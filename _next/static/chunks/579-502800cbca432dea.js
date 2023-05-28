"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [579], {
        80579: function(e, a, r) {
            r.d(a, {
                m: function() {
                    return ke
                }
            });
            var t = r(67294),
                o = r(64761),
                n = r(68216);
            const l = "Tabs component was not found in the tree",
                i = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",
                [s, c] = (0, n.R)(l);
            var d = r(96768),
                b = r(56817),
                u = r(89893),
                p = Object.defineProperty,
                f = Object.getOwnPropertySymbols,
                v = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                y = (e, a, r) => a in e ? p(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[a] = r,
                h = (e, a) => {
                    for (var r in a || (a = {})) v.call(a, r) && y(e, r, a[r]);
                    if (f)
                        for (var r of f(a)) m.call(a, r) && y(e, r, a[r]);
                    return e
                };

            function g({
                orientation: e,
                inverted: a,
                placement: r
            }, t, o) {
                const n = "vertical" === e;
                return "default" === o ? {
                    [n ? "left" === r ? "borderRight" : "borderLeft" : a ? "borderTop" : "borderBottom"]: `${(0,d.h)(2)} solid ${"dark"===t.colorScheme?t.colors.dark[4]:t.colors.gray[3]}`
                } : "outline" === o ? {
                    [n ? "left" === r ? "borderRight" : "borderLeft" : a ? "borderTop" : "borderBottom"]: `${(0,d.h)(1)} solid ${"dark"===t.colorScheme?t.colors.dark[4]:t.colors.gray[3]}`
                } : "pills" === o ? {
                    gap: `calc(${t.spacing.sm} / 2)`
                } : {}
            }
            var w = (0, b.k)(((e, a, {
                    variant: r
                }) => {
                    const t = "vertical" === a.orientation;
                    return {
                        tabsList: h({
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: t ? "column" : "row",
                            justifyContent: u.H[a.position],
                            '& [role="tab"]': {
                                flex: a.grow ? 1 : void 0
                            }
                        }, g(a, e, r))
                    }
                })),
                O = r(64523),
                T = Object.defineProperty,
                k = Object.defineProperties,
                j = Object.getOwnPropertyDescriptors,
                N = Object.getOwnPropertySymbols,
                P = Object.prototype.hasOwnProperty,
                x = Object.prototype.propertyIsEnumerable,
                C = (e, a, r) => a in e ? T(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[a] = r;
            const S = {
                    grow: !1,
                    position: "left"
                },
                I = (0, t.forwardRef)(((e, a) => {
                    const r = (0, o.N4)("TabsList", S, e),
                        {
                            children: n,
                            className: l,
                            grow: i,
                            position: s
                        } = r,
                        d = ((e, a) => {
                            var r = {};
                            for (var t in e) P.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && N)
                                for (var t of N(e)) a.indexOf(t) < 0 && x.call(e, t) && (r[t] = e[t]);
                            return r
                        })(r, ["children", "className", "grow", "position"]),
                        {
                            orientation: b,
                            variant: u,
                            color: p,
                            radius: f,
                            inverted: v,
                            placement: m,
                            classNames: y,
                            styles: h,
                            unstyled: g
                        } = c(),
                        {
                            classes: T,
                            cx: I
                        } = w({
                            orientation: b,
                            grow: i,
                            color: p,
                            position: s,
                            radius: f,
                            inverted: v,
                            placement: m
                        }, {
                            name: "Tabs",
                            unstyled: g,
                            classNames: y,
                            styles: h,
                            variant: u
                        });
                    return t.createElement(O.x, (R = ((e, a) => {
                        for (var r in a || (a = {})) P.call(a, r) && C(e, r, a[r]);
                        if (N)
                            for (var r of N(a)) x.call(a, r) && C(e, r, a[r]);
                        return e
                    })({}, d), $ = {
                        className: I(T.tabsList, l),
                        ref: a,
                        role: "tablist",
                        "aria-orientation": b
                    }, k(R, j($))), n);
                    var R, $
                }));
            I.displayName = "@mantine/core/TabsList";
            var R = r(97818),
                $ = (0, b.k)(((e, {
                    orientation: a
                }) => ({
                    panel: {
                        flex: "vertical" === a ? 1 : void 0
                    }
                }))),
                D = Object.defineProperty,
                E = Object.defineProperties,
                L = Object.getOwnPropertyDescriptors,
                K = Object.getOwnPropertySymbols,
                W = Object.prototype.hasOwnProperty,
                M = Object.prototype.propertyIsEnumerable,
                z = (e, a, r) => a in e ? D(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[a] = r;
            const V = {},
                B = (0, t.forwardRef)(((e, a) => {
                    const r = (0, o.N4)("TabsPanel", V, e),
                        {
                            value: n,
                            children: l,
                            sx: i,
                            className: s
                        } = r,
                        d = ((e, a) => {
                            var r = {};
                            for (var t in e) W.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && K)
                                for (var t of K(e)) a.indexOf(t) < 0 && M.call(e, t) && (r[t] = e[t]);
                            return r
                        })(r, ["value", "children", "sx", "className"]),
                        b = c(),
                        {
                            classes: u,
                            cx: p
                        } = $({
                            orientation: b.orientation,
                            color: b.color,
                            radius: b.radius,
                            inverted: b.inverted,
                            placement: b.placement
                        }, {
                            name: "Tabs",
                            unstyled: b.unstyled,
                            classNames: b.classNames,
                            styles: b.styles,
                            variant: b.variant
                        }),
                        f = b.value === n,
                        v = b.keepMounted || f ? l : null;
                    return t.createElement(O.x, (m = ((e, a) => {
                        for (var r in a || (a = {})) W.call(a, r) && z(e, r, a[r]);
                        if (K)
                            for (var r of K(a)) M.call(a, r) && z(e, r, a[r]);
                        return e
                    })({}, d), y = {
                        ref: a,
                        sx: [{
                            display: f ? void 0 : "none"
                        }, ...(0, R.R)(i)],
                        className: p(u.panel, s),
                        role: "tabpanel",
                        id: b.getPanelId(n),
                        "aria-labelledby": b.getTabId(n)
                    }, E(m, L(y))), v);
                    var m, y
                }));
            B.displayName = "@mantine/core/TabsPanel";
            var _ = r(16650),
                A = Object.defineProperty,
                H = Object.defineProperties,
                F = Object.getOwnPropertyDescriptors,
                q = Object.getOwnPropertySymbols,
                G = Object.prototype.hasOwnProperty,
                J = Object.prototype.propertyIsEnumerable,
                Q = (e, a, r) => a in e ? A(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[a] = r,
                U = (e, a) => {
                    for (var r in a || (a = {})) G.call(a, r) && Q(e, r, a[r]);
                    if (q)
                        for (var r of q(a)) J.call(a, r) && Q(e, r, a[r]);
                    return e
                },
                X = (e, a) => H(e, F(a));

            function Y(e, {
                orientation: a,
                color: r,
                radius: t,
                inverted: o,
                placement: n
            }, l) {
                const i = "vertical" === a,
                    s = e.fn.variant({
                        color: r,
                        variant: "filled"
                    }),
                    c = (0, d.h)(e.fn.radius(t)),
                    b = "vertical" === a ? "left" === n ? `${c} 0 0 ${c}` : ` 0 ${c} ${c} 0` : o ? `0 0 ${c} ${c}` : `${c} ${c} 0 0`;
                return "default" === l ? X(U({
                    [i ? "left" === n ? "borderRight" : "borderLeft" : o ? "borderTop" : "borderBottom"]: `${(0,d.h)(2)} solid transparent`,
                    [i ? "left" === n ? "marginRight" : "marginLeft" : o ? "marginTop" : "marginBottom"]: (0, d.h)(-2),
                    borderRadius: b
                }, e.fn.hover({
                    backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[0],
                    borderColor: "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
                })), {
                    "&[data-active]": U({
                        borderColor: s.background,
                        color: "dark" === e.colorScheme ? e.white : e.black
                    }, e.fn.hover({
                        borderColor: s.background
                    }))
                }) : "outline" === l ? {
                    borderRadius: b,
                    border: `${(0,d.h)(1)} solid transparent`,
                    [i ? "left" === n ? "borderRight" : "borderLeft" : o ? "borderTop" : "borderBottom"]: "none",
                    "&[data-active]": {
                        borderColor: "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3],
                        "&::before": {
                            content: '""',
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
                            position: "absolute",
                            bottom: i ? 0 : o ? "unset" : (0, d.h)(-1),
                            top: i ? 0 : o ? (0, d.h)(-1) : "unset",
                            [i ? "width" : "height"]: (0, d.h)(1),
                            right: i ? "left" === n ? (0, d.h)(-1) : "unset" : 0,
                            left: i ? "left" === n ? "unset" : (0, d.h)(-1) : 0
                        }
                    }
                } : "pills" === l ? X(U({
                    borderRadius: e.fn.radius(t)
                }, e.fn.hover({
                    backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[0]
                })), {
                    "&[data-active]": U({
                        backgroundColor: s.background,
                        color: e.white
                    }, e.fn.hover({
                        backgroundColor: s.background
                    }))
                }) : {}
            }
            var Z = (0, b.k)(((e, a, {
                    variant: r
                }) => ({
                    tabLabel: {},
                    tab: U({
                        position: "relative",
                        padding: `${e.spacing.xs} ${e.spacing.md}`,
                        paddingLeft: a.withIcon ? e.spacing.xs : void 0,
                        paddingRight: a.withRightSection ? e.spacing.xs : void 0,
                        fontSize: e.fontSizes.sm,
                        whiteSpace: "nowrap",
                        zIndex: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "horizontal" === a.orientation ? "center" : void 0,
                        lineHeight: 1,
                        "&:disabled": U({
                            opacity: .5,
                            cursor: "not-allowed"
                        }, e.fn.hover({
                            backgroundColor: "transparent"
                        })),
                        "&:focus": {
                            zIndex: 1
                        }
                    }, Y(e, a, r)),
                    tabRightSection: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:not(:only-child)": {
                            marginLeft: (0, d.h)(7)
                        }
                    },
                    tabIcon: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:not(:only-child)": {
                            marginRight: (0, d.h)(7)
                        }
                    }
                }))),
                ee = r(34736),
                ae = Object.defineProperty,
                re = Object.defineProperties,
                te = Object.getOwnPropertyDescriptors,
                oe = Object.getOwnPropertySymbols,
                ne = Object.prototype.hasOwnProperty,
                le = Object.prototype.propertyIsEnumerable,
                ie = (e, a, r) => a in e ? ae(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[a] = r;
            const se = {},
                ce = (0, t.forwardRef)(((e, a) => {
                    const r = (0, o.N4)("TabsTab", se, e),
                        {
                            value: n,
                            children: l,
                            onKeyDown: i,
                            onClick: s,
                            className: d,
                            icon: b,
                            rightSection: u,
                            color: p
                        } = r,
                        f = ((e, a) => {
                            var r = {};
                            for (var t in e) ne.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && oe)
                                for (var t of oe(e)) a.indexOf(t) < 0 && le.call(e, t) && (r[t] = e[t]);
                            return r
                        })(r, ["value", "children", "onKeyDown", "onClick", "className", "icon", "rightSection", "color"]),
                        v = c(),
                        m = !!b,
                        y = !!u,
                        {
                            theme: h,
                            classes: g,
                            cx: w
                        } = Z({
                            withIcon: m || y && !l,
                            withRightSection: y || m && !l,
                            orientation: v.orientation,
                            color: p || v.color,
                            radius: v.radius,
                            inverted: v.inverted,
                            placement: v.placement
                        }, {
                            name: "Tabs",
                            unstyled: v.unstyled,
                            classNames: v.classNames,
                            styles: v.styles,
                            variant: v.variant
                        }),
                        O = n === v.value;
                    return t.createElement(ee.k, (T = ((e, a) => {
                        for (var r in a || (a = {})) ne.call(a, r) && ie(e, r, a[r]);
                        if (oe)
                            for (var r of oe(a)) le.call(a, r) && ie(e, r, a[r]);
                        return e
                    })({}, f), k = {
                        unstyled: v.unstyled,
                        className: w(g.tab, d),
                        "data-active": O || void 0,
                        ref: a,
                        type: "button",
                        role: "tab",
                        id: v.getTabId(n),
                        "aria-selected": O,
                        tabIndex: O || null === v.value ? 0 : -1,
                        "aria-controls": v.getPanelId(n),
                        onClick: e => {
                            v.onTabChange(v.allowTabDeactivation && n === v.value ? null : n), null == s || s(e)
                        },
                        onKeyDown: (0, _.R)({
                            siblingSelector: '[role="tab"]',
                            parentSelector: '[role="tablist"]',
                            activateOnFocus: v.activateTabWithKeyboard,
                            loop: v.loop,
                            dir: h.dir,
                            orientation: v.orientation,
                            onKeyDown: i
                        })
                    }, re(T, te(k))), b && t.createElement("span", {
                        className: g.tabIcon
                    }, b), l && t.createElement("span", {
                        className: g.tabLabel
                    }, l), u && t.createElement("span", {
                        className: g.tabRightSection
                    }, u));
                    var T, k
                }));
            ce.displayName = "@mantine/core/Tab";
            var de = r(31943),
                be = r(83051),
                ue = r(15851);

            function pe({
                defaultValue: e,
                value: a,
                onTabChange: r,
                orientation: o,
                children: n,
                loop: l,
                id: c,
                activateTabWithKeyboard: d,
                allowTabDeactivation: b,
                variant: u,
                color: p,
                radius: f,
                inverted: v,
                placement: m,
                keepMounted: y = !0,
                classNames: h,
                styles: g,
                unstyled: w
            }) {
                const O = (0, be.M)(c),
                    [T, k] = (0, ue.C)({
                        value: a,
                        defaultValue: e,
                        finalValue: null,
                        onChange: r
                    });
                return t.createElement(s, {
                    value: {
                        placement: m,
                        value: T,
                        orientation: o,
                        id: O,
                        loop: l,
                        activateTabWithKeyboard: d,
                        getTabId: (0, de.A)(`${O}-tab`, i),
                        getPanelId: (0, de.A)(`${O}-panel`, i),
                        onTabChange: k,
                        allowTabDeactivation: b,
                        variant: u,
                        color: p,
                        radius: f,
                        inverted: v,
                        keepMounted: y,
                        classNames: h,
                        styles: g,
                        unstyled: w
                    }
                }, n)
            }
            pe.displayName = "@mantine/core/TabsProvider";
            var fe = (0, b.k)(((e, {
                    orientation: a,
                    placement: r
                }) => ({
                    root: {
                        display: "vertical" === a ? "flex" : void 0,
                        flexDirection: "right" === r ? "row-reverse" : "row"
                    }
                }))),
                ve = Object.defineProperty,
                me = Object.defineProperties,
                ye = Object.getOwnPropertyDescriptors,
                he = Object.getOwnPropertySymbols,
                ge = Object.prototype.hasOwnProperty,
                we = Object.prototype.propertyIsEnumerable,
                Oe = (e, a, r) => a in e ? ve(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[a] = r;
            const Te = {
                    orientation: "horizontal",
                    loop: !0,
                    activateTabWithKeyboard: !0,
                    allowTabDeactivation: !1,
                    unstyled: !1,
                    inverted: !1,
                    variant: "default",
                    placement: "left"
                },
                ke = (0, t.forwardRef)(((e, a) => {
                    const r = (0, o.N4)("Tabs", Te, e),
                        {
                            defaultValue: n,
                            value: l,
                            orientation: i,
                            loop: s,
                            activateTabWithKeyboard: c,
                            allowTabDeactivation: d,
                            children: b,
                            id: u,
                            onTabChange: p,
                            variant: f,
                            color: v,
                            className: m,
                            unstyled: y,
                            classNames: h,
                            styles: g,
                            radius: w,
                            inverted: T,
                            keepMounted: k,
                            placement: j
                        } = r,
                        N = ((e, a) => {
                            var r = {};
                            for (var t in e) ge.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && he)
                                for (var t of he(e)) a.indexOf(t) < 0 && we.call(e, t) && (r[t] = e[t]);
                            return r
                        })(r, ["defaultValue", "value", "orientation", "loop", "activateTabWithKeyboard", "allowTabDeactivation", "children", "id", "onTabChange", "variant", "color", "className", "unstyled", "classNames", "styles", "radius", "inverted", "keepMounted", "placement"]),
                        {
                            classes: P,
                            cx: x
                        } = fe({
                            orientation: i,
                            color: v,
                            radius: w,
                            inverted: T,
                            placement: j
                        }, {
                            unstyled: y,
                            name: "Tabs",
                            classNames: h,
                            styles: g,
                            variant: f
                        });
                    return t.createElement(pe, {
                        activateTabWithKeyboard: c,
                        defaultValue: n,
                        orientation: i,
                        onTabChange: p,
                        value: l,
                        id: u,
                        loop: s,
                        allowTabDeactivation: d,
                        color: v,
                        variant: f,
                        radius: w,
                        inverted: T,
                        keepMounted: k,
                        placement: j,
                        classNames: h,
                        styles: g,
                        unstyled: y
                    }, t.createElement(O.x, (C = ((e, a) => {
                        for (var r in a || (a = {})) ge.call(a, r) && Oe(e, r, a[r]);
                        if (he)
                            for (var r of he(a)) we.call(a, r) && Oe(e, r, a[r]);
                        return e
                    })({}, N), S = {
                        className: x(P.root, m),
                        id: u,
                        ref: a
                    }, me(C, ye(S))), b));
                    var C, S
                }));
            ke.List = I, ke.Tab = ce, ke.Panel = B, ke.displayName = "@mantine/core/Tabs"
        }
    }
]);