"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [123], {
        9150: function(e, r, n) {
            n.d(r, {
                _: function() {
                    return t
                }
            });
            var i = n(85893),
                o = n(72445);

            function t(e) {
                return (0, i.jsx)(o.W, {
                    size: 920,
                    px: 0,
                    children: e.children
                })
            }
        },
        91093: function(e, r, n) {
            n.d(r, {
                V: function() {
                    return j
                }
            });
            var i = n(14924),
                o = n(26042),
                t = n(85893),
                s = n(64761),
                l = n(71232),
                a = n(34736),
                c = n(19236),
                h = n(67841),
                d = n(25963),
                x = n(11163),
                p = n(37882),
                u = n(60102),
                g = n(95566),
                m = n(1703);

            function j(e) {
                var r = (0, s.rZ)(),
                    n = (0, x.useRouter)(),
                    j = (0, u.e)();
                return (0, t.jsxs)(l.Z, {
                    pl: "md",
                    pb: "md",
                    sx: function(e) {
                        return (0, i.Z)({
                            paddingTop: 44
                        }, "@media (max-width: ".concat(e.breakpoints.sm, "px)"), {
                            paddingTop: 20
                        })
                    },
                    spacing: "xs",
                    children: [e.buttonBackUrl && (0, t.jsx)(a.k, {
                        onClick: function() {
                            return n.push(e.buttonBackUrl)
                        },
                        children: (0, t.jsx)(p.HO, {
                            size: 30,
                            fill: r.colors.flare[6]
                        })
                    }), (0, t.jsx)(c.D, {
                        order: 2,
                        size: "h3",
                        color: r.primaryColor,
                        children: e.children
                    }), e.helpModalContent && (0, t.jsx)(h.z, {
                        radius: "xl",
                        size: "xs",
                        rightIcon: (0, t.jsx)(m.Z, {
                            size: 20
                        }),
                        onClick: function() {
                            (0, d.h7)((0, o.Z)({
                                title: (0, t.jsx)(g.r, {
                                    size: "lg",
                                    children: e.helpmodalTitle
                                }),
                                size: 884,
                                children: e.helpModalContent
                            }, j))
                        },
                        styles: {
                            rightIcon: {
                                marginLeft: 4
                            }
                        },
                        children: "Help"
                    })]
                })
            }
        },
        56217: function(e, r, n) {
            n.d(r, {
                T: function() {
                    return d
                }
            });
            var i = n(85893),
                o = n(65289),
                t = n(25675),
                s = n.n(t);

            function l(e) {
                var r = e.width || "40",
                    n = e.height || "40";
                return (0, i.jsx)(s(), {
                    src: "/token-logos/C2FLR.svg",
                    alt: "C2FLR",
                    width: r,
                    height: n
                })
            }

            function a(e) {
                var r = e.width || "40",
                    n = e.height || "40";
                return (0, i.jsx)(s(), {
                    src: "/token-logos/CFLR.svg",
                    alt: "CFLR",
                    width: r,
                    height: n
                })
            }

            function c(e) {
                var r = e.width || "40",
                    n = e.height || "40";
                return (0, i.jsx)(s(), {
                    src: "/token-logos/FLR.svg",
                    alt: "FLR",
                    width: r,
                    height: n
                })
            }

            function h(e) {
                var r = e.width || "40",
                    n = e.height || "40";
                return (0, i.jsx)(s(), {
                    src: "/token-logos/SGB.svg",
                    alt: "SGB",
                    width: r,
                    height: n
                })
            }
            var d = function(e) {
                var r = e.chain,
                    n = e.width,
                    t = e.height;
                switch (r) {
                    case o.AW.Flare:
                        return (0, i.jsx)(c, {
                            width: n,
                            height: t
                        });
                    case o.AW.Coston2:
                        return (0, i.jsx)(l, {
                            width: n,
                            height: t
                        });
                    case o.AW.Songbird:
                        return (0, i.jsx)(h, {
                            width: n,
                            height: t
                        });
                    case o.AW.Coston:
                        return (0, i.jsx)(a, {
                            width: n,
                            height: t
                        });
                    default:
                        return (0, i.jsx)(c, {
                            width: n,
                            height: t
                        })
                }
            }
        },
        92305: function(e, r, n) {
            n.d(r, {
                Z: function() {
                    return ue
                }
            });
            var i = n(99534),
                o = n(85893),
                t = n(98664),
                s = n(18540),
                l = n(37882),
                a = [{
                    label: "Account",
                    href: "/",
                    icon: (0, l.tB)({
                        size: 40
                    })
                }, {
                    label: "Voting",
                    href: "/voting",
                    icon: (0, l.lD)({
                        size: 40
                    })
                }],
                c = n(26042),
                h = n(69396),
                d = n(64761),
                x = n(34736),
                p = n(97564),
                u = n(95117),
                g = n(82846),
                m = n(64523),
                j = n(71232),
                f = n(38276),
                w = n(66058),
                k = n(11163),
                v = n(47568),
                y = n(34051),
                b = n.n(y),
                C = n(8908),
                z = n(25963),
                F = n(44909),
                Z = n(56378),
                N = n(56817),
                T = n(43523),
                M = n(67294),
                A = n(56217),
                E = (0, N.k)((function(e, r) {
                    return {
                        icon: {
                            transition: "transform 150ms ease",
                            transform: r.opened ? "rotate(180deg)" : "rotate(0deg)",
                            color: "currentColor"
                        }
                    }
                })),
                _ = (0, M.forwardRef)((function(e, r) {
                    var n = e.opened,
                        t = e.children,
                        a = e.iconChainId,
                        d = (0, i.Z)(e, ["opened", "children", "iconChainId"]),
                        p = E({
                            opened: n
                        }).classes;
                    return (0, o.jsx)(x.k, (0, h.Z)((0, c.Z)({
                        ref: r
                    }, d), {
                        children: (0, o.jsxs)(m.x, {
                            p: 2,
                            pl: 4,
                            sx: function(e) {
                                return {
                                    transition: "color 250ms ease-in-out,background-color 250ms ease-in-out",
                                    border: "1px solid ".concat(e.colors.flare[6]),
                                    borderRadius: e.radius.xl,
                                    minWidth: "176px",
                                    "&:hover": {
                                        color: "#E62058",
                                        borderColor: "#E62058"
                                    },
                                    "&:active": {
                                        color: "#E62058",
                                        borderColor: "#E62058"
                                    }
                                }
                            },
                            children: [(0, o.jsx)(s.z, {
                                largerThan: "sm",
                                styles: {
                                    display: "none"
                                },
                                children: (0, o.jsxs)(j.Z, {
                                    spacing: "sm",
                                    position: "apart",
                                    children: [(0, o.jsx)(A.T, {
                                        chain: a
                                    }), (0, o.jsx)(u.x, {
                                        size: "xl",
                                        color: "currentColor",
                                        style: {
                                            minWidth: "65px"
                                        },
                                        children: t
                                    }), (0, o.jsx)("div", {
                                        style: {
                                            margin: "10px",
                                            alignSelf: "flex-end"
                                        },
                                        children: (0, o.jsx)(T.M, {
                                            children: (0, o.jsx)(l._M, {
                                                className: p.icon,
                                                size: 20
                                            })
                                        })
                                    })]
                                })
                            }), (0, o.jsx)(s.z, {
                                smallerThan: "sm",
                                styles: {
                                    display: "none"
                                },
                                children: (0, o.jsxs)(j.Z, {
                                    spacing: "sm",
                                    children: [(0, o.jsx)(A.T, {
                                        chain: a
                                    }), (0, o.jsxs)(j.Z, {
                                        spacing: "sm",
                                        children: [(0, o.jsx)(u.x, {
                                            size: "xl",
                                            color: "currentColor",
                                            style: {
                                                minWidth: "65px"
                                            },
                                            children: t
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                margin: "10px"
                                            },
                                            children: (0, o.jsx)(T.M, {
                                                children: (0, o.jsx)(l._M, {
                                                    className: p.icon,
                                                    size: 20
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    }))
                }));
            _.displayName = "NetworkChange";
            var L = n(95566),
                R = n(65289),
                W = n(9341),
                B = n(43513),
                D = n(11924);

            function S(e) {
                e.appType;
                var r = e.mobileFooter,
                    n = (0, d.rZ)(),
                    i = (0, M.useState)(!1),
                    t = i[0],
                    s = i[1],
                    a = (0, Z.Mu)(),
                    c = (0, f.o)(),
                    h = (0, D.$6)(),
                    g = (h.provider, h.account),
                    w = h.supportedChainId,
                    y = (0, B.z)().switchToChain,
                    N = (0, k.useRouter)(),
                    T = (0, F._Q)(),
                    E = T.notConnectedChainId,
                    S = T.setNotConnectedChainId,
                    P = function() {
                        var e = (0, v.Z)(b().mark((function e(r) {
                            return b().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!N.asPath.includes("proposal/view")) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, N.push("/voting");
                                    case 3:
                                        S(r);
                                    case 4:
                                        if (!g) {
                                            e.next = 9;
                                            break
                                        }
                                        if (r !== w) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 7:
                                        return e.next = 9, y(r);
                                    case 9:
                                        return S(r), (0, z.pT)(), e.abrupt("return");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }();
                if (!g && !E) return (0, o.jsx)(o.Fragment, {});
                var I = R.N.supportedChains.map((function(e, n) {
                        return r ? (0, o.jsx)(m.x, {
                            onClick: function() {
                                return P(e)
                            },
                            p: 2,
                            pl: 6,
                            sx: function(r) {
                                return {
                                    background: e === (w || E) ? r.colors.flare[6] : "transparent",
                                    border: "1px solid ".concat(r.colors.flare[6]),
                                    borderRadius: r.radius.xl,
                                    minHeight: "60.25px",
                                    display: "flex",
                                    alignItems: "center",
                                    color: e === (w || E) ? "#ffffff" : r.primaryColor,
                                    "&:hover": {
                                        borderColor: "#E62058",
                                        backgroundColor: "transparent",
                                        color: "#E62058"
                                    }
                                }
                            },
                            children: (0, o.jsxs)(j.Z, {
                                children: [(0, o.jsx)(A.T, {
                                    width: "50px",
                                    height: "50px",
                                    chain: e
                                }), (0, o.jsxs)(p.K, {
                                    spacing: 0,
                                    children: [(0, o.jsx)(u.x, {
                                        size: "xl",
                                        color: "currentColor",
                                        children: (0, W.qz)(e)
                                    }), e === w && (0, o.jsx)(u.x, {
                                        color: "currentColor",
                                        children: "Connected"
                                    })]
                                })]
                            }, n)
                        }, n) : (0, o.jsx)(C.v.Item, {
                            icon: (0, o.jsx)(A.T, {
                                chain: e
                            }),
                            onClick: function() {
                                return P(e)
                            },
                            styles: function(e) {
                                return {
                                    color: e.colors.flare[6],
                                    "&:hover": {
                                        color: "#E62058"
                                    }
                                }
                            },
                            pl: 5,
                            children: "xs" == a || "sm" == a ? (0, o.jsx)(u.x, {
                                align: "center",
                                size: "xl",
                                mr: 45,
                                color: "currentColor",
                                children: (0, W.qz)(e)
                            }) : (0, o.jsx)(u.x, {
                                size: "xl",
                                color: "currentColor",
                                children: (0, W.qz)(e)
                            })
                        }, n)
                    })),
                    H = function() {
                        return (0, o.jsx)(x.k, {
                            onClick: function() {
                                return y(R.N.desiredChainID)
                            },
                            children: (0, o.jsx)(m.x, {
                                p: 2,
                                pl: 5,
                                pr: 15,
                                sx: function(e) {
                                    return {
                                        border: "1px solid #DEDEDE",
                                        borderRadius: e.radius.xl,
                                        minWidth: "176px"
                                    }
                                },
                                children: (0, o.jsxs)(j.Z, {
                                    spacing: "sm",
                                    children: [(0, o.jsx)(l.bR, {
                                        size: 40,
                                        fill: "red"
                                    }), (0, o.jsx)(j.Z, {
                                        spacing: "sm",
                                        children: (0, o.jsx)(u.x, {
                                            size: "xl",
                                            color: n.primaryColor,
                                            style: {
                                                minWidth: "65px"
                                            },
                                            children: "Wrong network"
                                        })
                                    })]
                                })
                            })
                        })
                    },
                    G = function() {
                        return (0, o.jsx)(x.k, {
                            onClick: function() {
                                c.modals.find((function(e) {
                                    return "networkSwitch" == e.ctx
                                })) ? c.closeModal("networkSwitch") : (0, z.m6)({
                                    modal: "networkSwitch",
                                    title: (0, o.jsx)(L.r, {
                                        children: "Supported Networks"
                                    }),
                                    radius: "xl",
                                    overlayProps: {
                                        blur: 6,
                                        opacity: 0
                                    },
                                    centered: !0,
                                    innerProps: {
                                        networks: I
                                    }
                                })
                            },
                            sx: function(e) {
                                return {
                                    height: "100%",
                                    paddingTop: "5px",
                                    color: t ? e.colors.flare[6] : "#9A9A9A"
                                }
                            },
                            children: (0, o.jsxs)(p.K, {
                                spacing: 0,
                                align: "center",
                                children: [(0, o.jsx)(l.bR, {
                                    size: 40,
                                    fill: "red"
                                }), (0, o.jsx)(u.x, {
                                    color: "#9A9A9A",
                                    size: "xs",
                                    children: "Network"
                                })]
                            })
                        })
                    };
                return g && !w ? r ? (0, o.jsx)(G, {}) : (0, o.jsx)(H, {}) : (0, o.jsx)(o.Fragment, {
                    children: r ? (0, o.jsx)(x.k, {
                        onClick: function() {
                            c.modals.find((function(e) {
                                return "networkSwitch" == e.ctx
                            })) ? c.closeModal("networkSwitch") : (0, z.m6)({
                                modal: "networkSwitch",
                                title: (0, o.jsx)(L.r, {
                                    children: "Supported Networks"
                                }),
                                radius: "xl",
                                overlayProps: {
                                    blur: 6,
                                    opacity: 0
                                },
                                centered: !0,
                                innerProps: {
                                    networks: I
                                }
                            })
                        },
                        sx: function(e) {
                            return {
                                height: "100%",
                                paddingTop: "5px",
                                color: t ? e.colors.flare[6] : "#9A9A9A"
                            }
                        },
                        children: (0, o.jsxs)(p.K, {
                            spacing: 0,
                            align: "center",
                            children: [(0, o.jsx)(A.T, {
                                width: "40px",
                                height: "40px",
                                chain: w || E
                            }), (0, o.jsx)(u.x, {
                                styles: {
                                    color: "currentColor"
                                },
                                size: "xs",
                                children: "Network"
                            })]
                        })
                    }) : (0, o.jsxs)(C.v, {
                        onOpen: function() {
                            return s(!0)
                        },
                        onClose: function() {
                            return s(!1)
                        },
                        radius: "md",
                        width: "target",
                        children: [(0, o.jsx)(C.v.Target, {
                            children: (0, o.jsxs)(_, {
                                opened: t,
                                iconChainId: w || E,
                                children: [" ", (0, W.qz)(w || E)]
                            })
                        }), (0, o.jsx)(C.v.Dropdown, {
                            children: I
                        })]
                    })
                })
            }

            function P(e) {
                var r = e.links,
                    n = (0, i.Z)(e, ["links"]),
                    t = (0, k.useRouter)(),
                    s = (0, w.N)(),
                    a = s.openLoginModal,
                    v = s.isLoginModal,
                    y = s.closeLoginModal,
                    b = (0, d.rZ)(),
                    C = (0, f.o)(),
                    z = r.map((function(e, r) {
                        return (0, o.jsx)(x.k, {
                            onClick: function() {
                                return t.push(e.href)
                            },
                            sx: function(r) {
                                return {
                                    height: "100%",
                                    paddingTop: "5px",
                                    color: t.asPath == e.href ? r.colors.flare[6] : "#9A9A9A"
                                }
                            },
                            children: (0, o.jsxs)(p.K, {
                                spacing: 0,
                                align: "center",
                                children: [e.icon, (0, o.jsx)(u.x, {
                                    styles: {
                                        color: "currentColor"
                                    },
                                    size: "xs",
                                    children: e.label
                                })]
                            })
                        }, r)
                    }));
                return (0, o.jsx)(o.Fragment, {
                    children: C.modals.length > 0 && !C.modals.find((function(e) {
                        return "networkSwitch" == e.ctx
                    })) ? (0, o.jsx)(o.Fragment, {}) : (0, o.jsx)(g.D, (0, h.Z)((0, c.Z)({
                        position: {
                            bottom: b.spacing.xs
                        },
                        sx: function(e) {
                            return {
                                width: "100%",
                                zIndex: 99999999
                            }
                        }
                    }, n), {
                        children: (0, o.jsx)(m.x, {
                            p: "sm",
                            pt: "0",
                            pb: "2px",
                            sx: function(e) {
                                return {
                                    margin: "0 ".concat(e.spacing.xs, "px 0 ").concat(e.spacing.xs, "px"),
                                    border: "solid 1px #DEE2E6",
                                    borderRadius: e.radius.lg,
                                    background: "#FFFFFF"
                                }
                            },
                            children: (0, o.jsxs)(j.Z, {
                                position: "apart",
                                children: [z, (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(x.k, {
                                        onClick: function() {
                                            v ? y() : a()
                                        },
                                        sx: function(e) {
                                            return {
                                                height: "100%",
                                                paddingTop: "5px",
                                                color: v ? e.colors.flare[6] : "#9A9A9A"
                                            }
                                        },
                                        children: (0, o.jsxs)(p.K, {
                                            spacing: 0,
                                            align: "center",
                                            children: [(0, o.jsx)(l.o, {
                                                size: 40
                                            }), (0, o.jsx)(u.x, {
                                                styles: {
                                                    color: "currentColor"
                                                },
                                                size: "xs",
                                                children: "Connection"
                                            })]
                                        })
                                    }), (0, o.jsx)(S, {
                                        mobileFooter: !0
                                    })]
                                })]
                            })
                        })
                    }))
                })
            }
            var I = n(14924),
                H = n(38561),
                G = n(20050),
                V = n(25675),
                K = n.n(V);

            function q() {
                return (0, o.jsx)(K(), {
                    src: "/flare_secondary_logo.svg",
                    alt: "flare_logo",
                    width: "103px",
                    height: "33px"
                })
            }
            var $ = n(67841);

            function U() {
                var e = (0, d.rZ)(),
                    r = (0, w.N)().openLoginModal;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s.z, {
                        smallerThan: "sm",
                        styles: {
                            display: "none"
                        },
                        children: (0, o.jsx)($.z, {
                            radius: "lg",
                            variant: "outline",
                            size: "lg",
                            gradient: e.defaultGradient,
                            sx: function(e) {
                                return {
                                    minWidth: "176px",
                                    maxHeight: "46px",
                                    transition: "color 250ms ease-in-out,background-color 250ms ease-in-out"
                                }
                            },
                            styles: function(e) {
                                return {
                                    root: {
                                        "&:not([data-disabled])": e.fn.hover({
                                            color: "#E62058",
                                            borderColor: "#E62058",
                                            backgroundColor: "transparent"
                                        }),
                                        "&:active": {
                                            color: "#E62058",
                                            borderColor: "#E62058",
                                            backgroundColor: "transparent"
                                        }
                                    }
                                }
                            },
                            onClick: r,
                            children: (0, o.jsx)(u.x, {
                                size: "md",
                                children: "Connect to Wallet"
                            })
                        })
                    }), (0, o.jsx)(s.z, {
                        largerThan: "sm",
                        styles: {
                            display: "none"
                        },
                        children: (0, o.jsx)($.z, {
                            radius: "lg",
                            styles: function(e) {
                                return {
                                    root: {
                                        "&:not([data-disabled])": e.fn.hover({
                                            color: "#E62058",
                                            borderColor: "#E62058",
                                            backgroundColor: "transparent"
                                        }),
                                        "&:active": {
                                            color: "#E62058",
                                            borderColor: "#E62058",
                                            backgroundColor: "transparent"
                                        }
                                    }
                                }
                            },
                            variant: "outline",
                            size: "sm",
                            gradient: e.defaultGradient,
                            onClick: r,
                            children: (0, o.jsx)(u.x, {
                                size: "sm",
                                children: "Connect to Wallet"
                            })
                        })
                    })]
                })
            }
            var Y = n(41664),
                O = n.n(Y),
                Q = n(49384);

            function J() {
                var e = (0, w.N)().openLoginModal,
                    r = (0, D.$6)().account;
                return r ? (0, o.jsx)(x.k, {
                    onClick: e,
                    children: (0, o.jsx)(m.x, {
                        p: 2,
                        pl: 5,
                        sx: function(e) {
                            return {
                                transition: "color 250ms ease-in-out,background-color 250ms ease-in-out",
                                border: "1px solid ".concat(e.colors.flare[6]),
                                borderRadius: e.radius.xl,
                                minWidth: "176px",
                                height: 46,
                                "&:hover": {
                                    color: "#E62058",
                                    borderColor: "#E62058"
                                }
                            }
                        },
                        children: (0, o.jsx)(T.M, {
                            style: {
                                height: "100%"
                            },
                            children: (0, o.jsx)(u.x, {
                                size: "lg",
                                color: "currentColor",
                                children: (0, Q.eF)(r)
                            })
                        })
                    })
                }) : (0, o.jsx)(o.Fragment, {})
            }
            var X = function(e) {
                    var r = e.links,
                        n = (0, k.useRouter)(),
                        i = (0, D.$6)().account,
                        t = (0, M.useState)(!1),
                        l = (t[0], t[1], r.map((function(e, r) {
                            return (0, o.jsxs)(x.k, {
                                onClick: function() {
                                    return n.push(e.href)
                                },
                                sx: function(r) {
                                    return (0, I.Z)({
                                        height: "100%",
                                        paddingBottom: "20px",
                                        marginTop: "10px",
                                        color: r.colors.flare[6],
                                        borderBottom: n.asPath == e.href ? "3px solid ".concat(r.colors.flare[6]) : "3px solid transparent"
                                    }, "@media (max-width: ".concat(r.breakpoints.xl, ")"), {
                                        paddingBottom: 0,
                                        margin: 0
                                    })
                                },
                                children: [(0, o.jsx)(s.z, {
                                    largerThan: 880,
                                    styles: {
                                        display: "none"
                                    },
                                    children: e.icon
                                }), (0, o.jsx)(s.z, {
                                    smallerThan: 880,
                                    styles: {
                                        display: "none"
                                    },
                                    children: (0, o.jsx)(u.x, {
                                        size: "xl",
                                        color: "currentColor",
                                        children: e.label
                                    })
                                })]
                            }, r)
                        })));
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(s.z, {
                            largerThan: "sm",
                            styles: {
                                display: "none"
                            },
                            children: (0, o.jsx)(H.h, {
                                height: 70,
                                pr: "10px",
                                pl: "10px",
                                pt: "0",
                                pb: "0",
                                sx: function(e) {
                                    return {
                                        borderBottom: "1px solid #DEDEDE"
                                    }
                                },
                                children: (0, o.jsxs)(j.Z, {
                                    position: "apart",
                                    style: {
                                        height: "100%"
                                    },
                                    children: [(0, o.jsx)(O(), {
                                        href: "/",
                                        passHref: !0,
                                        children: (0, o.jsx)(x.k, {
                                            component: "a",
                                            "aria-label": "Flare portal Home",
                                            children: (0, o.jsx)(q, {})
                                        })
                                    }), (0, o.jsx)(j.Z, {
                                        spacing: 2,
                                        children: !i && (0, o.jsx)(U, {})
                                    })]
                                })
                            })
                        }), (0, o.jsx)(s.z, {
                            smallerThan: "sm",
                            styles: {
                                display: "none"
                            },
                            children: (0, o.jsxs)(H.h, {
                                height: 95,
                                pr: "70px",
                                pl: "70px",
                                pt: "0",
                                pb: "0",
                                sx: function(e) {
                                    return {
                                        borderBottom: "1px solid #DEDEDE"
                                    }
                                },
                                children: [(0, o.jsx)(s.z, {
                                    largerThan: "xl",
                                    styles: {
                                        display: "none"
                                    },
                                    children: (0, o.jsxs)(j.Z, {
                                        position: "apart",
                                        style: {
                                            height: "100%"
                                        },
                                        children: [(0, o.jsx)(O(), {
                                            href: "/",
                                            passHref: !0,
                                            children: (0, o.jsx)(x.k, {
                                                component: "a",
                                                "aria-label": "Flare portal Home",
                                                children: (0, o.jsx)(q, {})
                                            })
                                        }), (0, o.jsx)(j.Z, {
                                            position: "center",
                                            spacing: 28,
                                            style: {
                                                height: "100%"
                                            },
                                            children: l
                                        }), i ? (0, o.jsxs)(j.Z, {
                                            spacing: "sm",
                                            position: "right",
                                            children: [(0, o.jsx)(S, {}), (0, o.jsx)(J, {})]
                                        }) : (0, o.jsxs)(j.Z, {
                                            spacing: "sm",
                                            position: "right",
                                            children: [(0, o.jsx)(S, {}), (0, o.jsx)(U, {})]
                                        })]
                                    })
                                }), (0, o.jsx)(s.z, {
                                    smallerThan: "xl",
                                    styles: {
                                        display: "none"
                                    },
                                    children: (0, o.jsxs)(G.r, {
                                        justify: "space-between",
                                        m: 0,
                                        align: "center",
                                        style: {
                                            height: "95px"
                                        },
                                        children: [(0, o.jsx)(G.r.Col, {
                                            span: 4,
                                            children: (0, o.jsx)(O(), {
                                                href: "/",
                                                passHref: !0,
                                                children: (0, o.jsx)(x.k, {
                                                    component: "a",
                                                    "aria-label": "Flare portal Home",
                                                    children: (0, o.jsx)(q, {})
                                                })
                                            })
                                        }), (0, o.jsx)(G.r.Col, {
                                            span: 4,
                                            style: {
                                                height: "100%"
                                            },
                                            children: (0, o.jsx)(j.Z, {
                                                position: "center",
                                                spacing: 28,
                                                style: {
                                                    height: "100%"
                                                },
                                                children: l
                                            })
                                        }), (0, o.jsx)(G.r.Col, {
                                            span: 4,
                                            style: {
                                                display: "flex",
                                                justifyContent: "flex-end"
                                            },
                                            children: i ? (0, o.jsxs)(j.Z, {
                                                spacing: "sm",
                                                position: "right",
                                                children: [(0, o.jsx)(S, {}), (0, o.jsx)(J, {})]
                                            }) : (0, o.jsxs)(j.Z, {
                                                spacing: "sm",
                                                position: "right",
                                                children: [(0, o.jsx)(S, {}), (0, o.jsx)(U, {})]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                ee = n(9008),
                re = n.n(ee),
                ne = n(90344),
                ie = n(9150),
                oe = function(e) {
                    var r = e.size,
                        n = e.fill,
                        i = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: n || "currentColor",
                        width: r,
                        height: r,
                        className: i,
                        children: (0, o.jsx)("path", {
                            d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                        })
                    })
                },
                te = function(e) {
                    var r = e.size,
                        n = e.fill,
                        i = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: n || "currentColor",
                        width: r,
                        height: r,
                        className: i,
                        children: (0, o.jsx)("path", {
                            d: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                        })
                    })
                },
                se = function(e) {
                    var r = e.size,
                        n = e.fill,
                        i = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: n || "currentColor",
                        width: r,
                        height: r,
                        className: i,
                        children: (0, o.jsx)("path", {
                            d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"
                        })
                    })
                },
                le = function(e) {
                    var r = e.size,
                        n = e.fill,
                        i = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: n || "currentColor",
                        width: r,
                        height: r,
                        className: i,
                        children: (0, o.jsx)("path", {
                            d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        })
                    })
                },
                ae = function(e) {
                    var r = e.size,
                        n = e.fill,
                        i = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: n || "currentColor",
                        width: r,
                        height: r,
                        className: i,
                        children: (0, o.jsx)("path", {
                            d: "M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 00.029-.463.33.33 0 00-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.232-.095z"
                        })
                    })
                },
                ce = function(e) {
                    var r = e.size,
                        n = e.fill,
                        i = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: n || "currentColor",
                        width: r,
                        height: r,
                        className: i,
                        children: (0, o.jsx)("path", {
                            d: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
                        })
                    })
                },
                he = function(e) {
                    var r = e.size,
                        n = e.fill,
                        i = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: n || "currentColor",
                        width: r,
                        height: r,
                        className: i,
                        children: (0, o.jsx)("path", {
                            d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        })
                    })
                },
                de = n(27484),
                xe = n.n(de);

            function pe() {
                var e = (0, d.rZ)(),
                    r = (0, Z.Mu)(),
                    n = xe()().year(),
                    i = [{
                        icon: (0, o.jsx)(he, {
                            size: 25,
                            fill: e.colors.gray[6]
                        }),
                        link: "https://twitter.com/FlareNetworks",
                        label: "Twitter",
                        ariaLabel: "Flare on Twitter"
                    }, {
                        icon: (0, o.jsx)(oe, {
                            size: 25,
                            fill: e.colors.gray[6]
                        }),
                        link: "https://discord.com/invite/flarenetwork",
                        label: "Discord",
                        ariaLabel: "Flare on Discord"
                    }, {
                        icon: (0, o.jsx)(te, {
                            size: 25,
                            fill: e.colors.gray[6]
                        }),
                        link: "https://t.me/FlareNetwork",
                        label: "Telegram",
                        ariaLabel: "Flare on Telegram"
                    }, {
                        icon: (0, o.jsx)(ae, {
                            size: 25,
                            fill: e.colors.gray[6]
                        }),
                        link: "https://www.reddit.com/r/FlareNetworks/",
                        label: "Redit",
                        ariaLabel: "Flare on Redit"
                    }, {
                        icon: (0, o.jsx)(le, {
                            size: 25,
                            fill: e.colors.gray[6]
                        }),
                        link: "https://www.youtube.com/channel/UCDyqyTWHYMWY5ie6xOCgG0w",
                        label: "Youtube",
                        ariaLabel: "Flare on Youtube"
                    }, {
                        icon: (0, o.jsx)(ce, {
                            size: 25,
                            fill: e.colors.gray[6]
                        }),
                        link: "https://medium.com/flarenetwork",
                        label: "Medium",
                        ariaLabel: "Flare on Medium"
                    }, {
                        icon: (0, o.jsx)(se, {
                            size: 25,
                            fill: e.colors.gray[6]
                        }),
                        link: "https://www.instagram.com/flare_networks/",
                        label: "Instagram",
                        ariaLabel: "Flare on Instagram"
                    }],
                    t = function() {
                        return (0, o.jsx)(ne.$, {
                            height: 80,
                            pb: "97px",
                            withBorder: !1,
                            children: (0, o.jsx)(ie._, {
                                children: (0, o.jsxs)(j.Z, {
                                    position: "apart",
                                    children: [(0, o.jsxs)(j.Z, {
                                        spacing: 31,
                                        children: [(0, o.jsxs)(u.x, {
                                            color: e.colors.gray[6],
                                            size: "lg",
                                            children: ["\xa9 ", n, " Flare Network"]
                                        }), (0, o.jsx)(x.k, {
                                            component: "a",
                                            target: "_blank",
                                            href: "https://flare.xyz/privacy-policy/",
                                            "aria-label": "Read more about Flare Privacy Policy",
                                            children: (0, o.jsx)(u.x, {
                                                color: e.colors.gray[6],
                                                size: "lg",
                                                children: "Terms & Privacy"
                                            })
                                        })]
                                    }), (0, o.jsx)(j.Z, {
                                        children: i.map((function(e, r) {
                                            return (0, o.jsx)(x.k, {
                                                target: "_blank",
                                                component: "a",
                                                href: e.link,
                                                "aria-label": e.ariaLabel,
                                                children: e.icon
                                            }, r)
                                        }))
                                    })]
                                })
                            })
                        })
                    },
                    s = function() {
                        return (0, o.jsx)(ne.$, {
                            height: 80,
                            pb: "180px",
                            withBorder: !1,
                            children: (0, o.jsxs)(p.K, {
                                align: "center",
                                children: [(0, o.jsx)(j.Z, {
                                    children: i.map((function(e, r) {
                                        return (0, o.jsx)(x.k, {
                                            target: "_blank",
                                            component: "a",
                                            href: e.link,
                                            "aria-label": e.ariaLabel,
                                            children: e.icon
                                        }, r)
                                    }))
                                }), (0, o.jsxs)(j.Z, {
                                    spacing: 31,
                                    children: [(0, o.jsxs)(u.x, {
                                        color: e.colors.gray[6],
                                        size: "lg",
                                        children: ["\xa9 ", n, " Flare Network"]
                                    }), (0, o.jsx)(x.k, {
                                        component: "a",
                                        target: "_blank",
                                        href: "https://flare.xyz/privacy-policy/",
                                        "aria-label": "Read more about Flare Privacy Policy",
                                        children: (0, o.jsx)(u.x, {
                                            color: e.colors.gray[6],
                                            size: "lg",
                                            children: "Terms & Privacy"
                                        })
                                    })]
                                })]
                            })
                        })
                    };
                switch (r) {
                    case "xs":
                    case "sm":
                    case "md":
                        return (0, o.jsx)(s, {});
                    default:
                        return (0, o.jsx)(t, {})
                }
            }

            function ue(e) {
                var r = e.children,
                    n = (e.isLoading, e.hideFooter),
                    l = (e.chainWhenNotConnected, e.setChainWhenNotConnected, (0, i.Z)(e, ["children", "isLoading", "hideFooter", "chainWhenNotConnected", "setChainWhenNotConnected"]), (0, k.useRouter)());
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(re(), {
                        children: [l.asPath.includes("voting") || l.asPath.includes("proposal") ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("title", {
                                children: "Governance Voting | Flare"
                            }), (0, o.jsx)("meta", {
                                name: "og:title",
                                content: "Governance Voting | Flare"
                            }), (0, o.jsx)("meta", {
                                name: "title",
                                content: "Governance Voting | Flare"
                            }), (0, o.jsx)("meta", {
                                property: "og:url",
                                content: "https://portal.flare.network/voting/"
                            })]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("title", {
                                children: "Token Management | Flare"
                            }), (0, o.jsx)("meta", {
                                name: "og:title",
                                content: "Token Management | Flare"
                            }), (0, o.jsx)("meta", {
                                name: "title",
                                content: "Token Management | Flare"
                            }), (0, o.jsx)("meta", {
                                property: "og:url",
                                content: "https://portal.flare.network/"
                            })]
                        }), (0, o.jsx)("meta", {
                            property: "og:site_name",
                            content: "Flare portal"
                        }), (0, o.jsx)("meta", {
                            name: "og:description",
                            content: "Flare is a new blockchain which presents developers with a simple and coherent stack for decentralized interoperability."
                        }), (0, o.jsx)("meta", {
                            name: "description",
                            content: "Flare is a new blockchain which presents developers with a simple and coherent stack for decentralized interoperability."
                        }), (0, o.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, o.jsx)("meta", {
                            property: "og:locale",
                            content: "en_US"
                        }), (0, o.jsx)("meta", {
                            property: "og:image",
                            content: "https://portal.flare.network/primary_logo_pink.png"
                        }), (0, o.jsx)("meta", {
                            name: "og:image:alt",
                            content: "Flare logo"
                        }), (0, o.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, o.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                        }), (0, o.jsx)("link", {
                            rel: "icon",
                            type: "image/svg+xml",
                            href: "/flare_secondary_icon_only.svg",
                            media: "(prefers-color-scheme: light)"
                        }), ";", (0, o.jsx)("link", {
                            rel: "icon",
                            type: "image/svg+xml",
                            href: "/flare_secondary_icon_only_light.svg",
                            media: "(prefers-color-scheme: dark)"
                        }), ";", (0, o.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.flare.ico"
                        }), ";"]
                    }), (0, o.jsxs)(t.V, {
                        styles: {
                            root: {
                                minHeight: "100vh",
                                display: "flex",
                                flexDirection: "column"
                            },
                            body: {
                                flexGrow: 1
                            }
                        },
                        fixed: !1,
                        footer: n ? void 0 : (0, o.jsx)(pe, {}),
                        header: (0, o.jsx)(X, {
                            links: a
                        }),
                        children: [r, (0, o.jsx)(s.z, {
                            largerThan: "sm",
                            styles: {
                                display: "none"
                            },
                            children: (0, o.jsx)(P, {
                                links: a
                            })
                        })]
                    })]
                })
            }
        }
    }
]);