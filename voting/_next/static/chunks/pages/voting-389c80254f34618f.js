(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [664], {
        23810: function(e, r, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/voting", function() {
                return n(18509)
            }])
        },
        18509: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return J
                }
            });
            var t = n(85893),
                o = n(67294),
                s = n(56016),
                i = n(67370),
                a = n(47568),
                c = n(40872),
                l = n(34051),
                d = n.n(l),
                u = n(64761),
                p = n(64523),
                x = n(71232),
                h = n(19236),
                f = n(88393),
                j = n(49834),
                g = n(97564),
                v = n(43523),
                m = n(37065),
                C = n(32819),
                w = n(74922),
                b = n(14882),
                k = n(21474),
                F = n(44909),
                W = n(56378),
                Z = n(37882),
                E = n(34736),
                z = n(21017),
                I = n(95117),
                y = n(35001);

            function _(e) {
                var r = e.size || "md";
                (0, u.rZ)();
                return (0, t.jsx)(p.x, {
                    p: "md" == r ? "2px" : "6px",
                    sx: function(e) {
                        return {
                            color: "#FFFFFF",
                            background: e.colors.flare[6],
                            borderRadius: e.radius.md,
                            width: "md" == r ? "83px" : "100px",
                            minWidth: "md" == r ? "83px" : "100px"
                        }
                    },
                    children: (0, t.jsx)(I.x, {
                        align: "center",
                        size: "md" == r ? "xs" : "md",
                        children: e.state == y.PX.SUCCEEDED ? "Accepted" : e.state == y.PX.DEFEATED ? "Rejected" : e.state
                    })
                })
            }
            var S = n(56217),
                A = n(11924),
                N = n(11163);

            function D(e) {
                var r = (0, u.rZ)(),
                    n = (0, W.Mu)(),
                    o = (0, A.$6)().supportedChainId,
                    s = (0, N.useRouter)(),
                    i = (0, F._Q)().notConnectedChainId,
                    a = function() {
                        return (0, t.jsx)(E.k, {
                            onClick: function() {
                                return s.push("/proposal/view/".concat(e.proposalId))
                            },
                            children: (0, t.jsx)(z.Z, {
                                pr: "md",
                                pl: "28px",
                                p: 9,
                                withBorder: !0,
                                radius: "xs",
                                sx: function(e) {
                                    return {
                                        border: "1px solid #F0F0F0",
                                        transition: "color 250ms ease-in-out,background-color 250ms ease-in-out",
                                        "&:hover": {
                                            backgroundColor: "rgba(154, 154, 154, 0.35)"
                                        }
                                    }
                                },
                                children: (0, t.jsxs)(x.Z, {
                                    position: "apart",
                                    sx: {
                                        flexWrap: "nowrap"
                                    },
                                    children: [(0, t.jsxs)(x.Z, {
                                        spacing: "xl",
                                        sx: {
                                            flexWrap: "nowrap"
                                        },
                                        children: [(0, t.jsx)("div", {
                                            style: {
                                                minWidth: "40px"
                                            },
                                            children: (0, t.jsx)(S.T, {
                                                chain: o || i
                                            })
                                        }), (0, t.jsx)(h.D, {
                                            order: 4,
                                            size: 15,
                                            color: r.colors.flare[6],
                                            sx: {
                                                flexGrow: 0
                                            },
                                            children: e.title
                                        })]
                                    }), (0, t.jsx)(_, {
                                        state: e.state
                                    })]
                                })
                            })
                        })
                    },
                    c = function() {
                        return (0, t.jsx)(E.k, {
                            onClick: function() {
                                return s.push("/proposal/view/".concat(e.proposalId))
                            },
                            children: (0, t.jsx)(z.Z, {
                                pr: "sm",
                                pl: "10px",
                                p: 9,
                                withBorder: !0,
                                radius: "xs",
                                sx: function(e) {
                                    return {
                                        border: "1px solid #F0F0F0"
                                    }
                                },
                                children: (0, t.jsxs)(x.Z, {
                                    position: "apart",
                                    sx: {
                                        width: "100%",
                                        flexWrap: "nowrap"
                                    },
                                    children: [(0, t.jsx)(h.D, {
                                        order: 4,
                                        size: 15,
                                        color: "#4B4B4B",
                                        sx: {
                                            flexgrow: 1,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        },
                                        children: e.title
                                    }), (0, t.jsx)(_, {
                                        state: e.state
                                    })]
                                })
                            })
                        })
                    };
                switch (n) {
                    case "xs":
                    case "sm":
                        return (0, t.jsx)(c, {});
                    default:
                        return (0, t.jsx)(a, {})
                }
            }
            var B = n(81286),
                P = n(53573);

            function R(e) {
                (0, c.Z)({}, e);
                var r, n = (0, u.rZ)(),
                    s = (0, A.$6)(),
                    i = (s.provider, s.account, s.supportedChainId),
                    l = (0, o.useState)(16),
                    E = l[0],
                    z = (l[1], (0, o.useState)(0)),
                    I = z[0],
                    _ = z[1],
                    S = (0, W.Mu)(),
                    N = (0, C.g)({
                        offset: 60
                    }),
                    R = N.scrollIntoView,
                    T = N.targetRef,
                    L = (0, F._Q)(),
                    M = L.notConnectedChainId,
                    Q = (L.setNotConnectedChainId, i || M),
                    K = (0, b.sT)(),
                    O = (0, B.a)(["proposals", E, I, i, M, Q], (0, a.Z)(d().mark((function e() {
                        var r, n;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {}, i || M) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 3:
                                    return e.next = 5, K(Q).governance.getProposalList({
                                        chainId: Q,
                                        limit: E,
                                        offset: I,
                                        sort: y.ER.DESC,
                                        sortBy: y.o5.START_TIME,
                                        canceled: !1
                                    });
                                case 5:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        refetchOnWindowFocus: !1,
                        keepPreviousData: !1,
                        onError: function(e) {
                            (0, w.c0)({
                                id: "proposals",
                                title: "Error",
                                message: "".concat(e.message),
                                autoClose: 5e3,
                                color: "red"
                            })
                        }
                    }),
                    V = O.error,
                    X = O.data,
                    $ = O.isLoading,
                    G = O.refetch;
                if (!X || V) return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)(p.x, {
                        children: " No data ... "
                    })
                });
                var H = Math.ceil((X.count || 0) / E),
                    Y = Math.ceil((I || 0) / E),
                    q = function() {
                        return (0, t.jsxs)(x.Z, {
                            p: "md",
                            pt: 40,
                            spacing: "xs",
                            children: [(0, t.jsx)(h.D, {
                                order: 2,
                                size: "h3",
                                color: n.primaryColor,
                                children: "List of proposals"
                            }), (0, t.jsx)(f.u, {
                                label: "Refresh list",
                                children: (0, t.jsx)(j.A, {
                                    variant: "light",
                                    onClick: function() {
                                        return G()
                                    },
                                    children: (0, t.jsx)(Z.Du, {
                                        size: 20
                                    })
                                })
                            })]
                        })
                    },
                    U = function() {
                        return (0, t.jsxs)(x.Z, {
                            p: "md",
                            pt: 56,
                            spacing: "xs",
                            children: [(0, t.jsx)(h.D, {
                                order: 2,
                                size: "h3",
                                color: n.primaryColor,
                                children: "List of proposals"
                            }), (0, t.jsx)(f.u, {
                                label: "Refresh list",
                                children: (0, t.jsx)(j.A, {
                                    variant: "light",
                                    onClick: function() {
                                        return G()
                                    },
                                    children: (0, t.jsx)(Z.Du, {
                                        size: 20
                                    })
                                })
                            })]
                        })
                    },
                    J = function() {
                        return "xs" === S ? (0, t.jsx)(q, {}) : (0, t.jsx)(U, {})
                    };
                return (0, t.jsxs)(g.K, {
                    justify: "flex-start",
                    ref: T,
                    children: [(0, t.jsx)(k.f, {
                        visible: $,
                        overlayBlur: 2
                    }), (0, t.jsx)(J, {}), (0, t.jsxs)(g.K, {
                        spacing: "xs",
                        pb: "80px",
                        children: [null === (r = X.items) || void 0 === r ? void 0 : r.map((function(e, r) {
                            return (0, t.jsx)(D, {
                                title: e.description,
                                state: e.status,
                                proposalId: e.proposalId
                            }, r)
                        })), 0 == X.count ? (0, t.jsx)(P.r, {
                            mt: 44,
                            children: "No proposals found..."
                        }) : Q && X.count ? (0, t.jsx)(v.M, {
                            children: (0, t.jsx)(m.t, {
                                radius: "xs",
                                pt: "xl",
                                value: Y + 1,
                                onChange: function(e) {
                                    _((e - 1) * E), R()
                                },
                                total: H
                            })
                        }) : (0, t.jsx)(t.Fragment, {})]
                    })]
                })
            }
            var T = n(26042),
                L = n(20050),
                M = n(25963),
                Q = n(64948),
                K = n(60102),
                O = n(85084),
                V = n(95566),
                X = n(12994),
                $ = n(65289),
                G = n(56371);

            function H(e) {
                (0, c.Z)({}, e);
                var r = (0, A.$6)(),
                    n = r.provider,
                    o = r.account,
                    l = r.supportedChainId,
                    u = (0, W.qm)().smallScreen,
                    x = (0, K.e)(),
                    h = (0, F._Q)().notConnectedChainId,
                    f = l || h,
                    j = (0, W.ZN)(f),
                    v = (0, B.a)(["VoteData", o, l], (0, a.Z)(d().mark((function e() {
                        var r, t;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {}, n && o && l) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 3:
                                    return e.next = 5, (0, X.C)(n, o, l);
                                case 5:
                                    return t = e.sent, e.abrupt("return", t);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        staleTime: 3e4
                    }),
                    m = v.data,
                    C = v.refetch,
                    w = (null === m || void 0 === m ? void 0 : m.votePower) ? (0, W.az)((0, G.formatEther)(m.votePower)) : "/";
                return (0, t.jsx)(z.Z, {
                    radius: "sm",
                    withBorder: !0,
                    children: (0, t.jsx)(z.Z.Section, {
                        children: (0, t.jsx)(p.x, {
                            sx: function(e) {
                                return {
                                    background: e.colors.flare[6],
                                    color: "#ffffff"
                                }
                            },
                            children: (0, t.jsxs)(L.r, {
                                justify: "space-between",
                                m: 0,
                                children: [(0, t.jsx)(L.r.Col, {
                                    span: u ? 12 : 8,
                                    pt: "lg",
                                    pb: u ? "xs" : "lg",
                                    pl: "md",
                                    pr: "md",
                                    children: (0, t.jsxs)(g.K, {
                                        children: [(0, t.jsxs)(I.x, {
                                            p: 0,
                                            size: "md",
                                            children: ["By owning", " ", f == $.AW.Flare ? "Wrapped Flare tokens (WFLR)" : f == $.AW.Songbird ? "Wrapped Songbird tokens (WSGB)" : f == $.AW.Coston ? "Wrapped Coston tokens (WCFLR)" : "Wrapped Coston2 tokens (WC2FLR)", " ", "you also get the right to vote on issues that govern the development and operations of the", " ", f == $.AW.Flare ? "Flare" : f == $.AW.Songbird ? "Songbird" : f == $.AW.Coston ? "Coston" : "Coston2", " ", "network. For every token you own you get one vote but note that you should wrap your tokens before proposals get published. See the", " ", (0, t.jsx)(I.x, {
                                                onClick: function() {
                                                    (0, M.h7)((0, T.Z)({
                                                        title: (0, t.jsx)(V.r, {
                                                            size: "lg",
                                                            children: "Help on governance voting"
                                                        }),
                                                        size: 884,
                                                        children: (0, t.jsx)(s.f, {
                                                            QNAs: "flare" == j ? Q.E : i.L
                                                        })
                                                    }, x))
                                                },
                                                size: "md",
                                                sx: {
                                                    color: "#E62058",
                                                    cursor: "pointer"
                                                },
                                                span: !0,
                                                td: "underline",
                                                children: "help section for details"
                                            }), "."]
                                        }), (0, t.jsxs)(I.x, {
                                            size: "md",
                                            children: [(0, t.jsx)(I.x, {
                                                span: !0,
                                                size: "md",
                                                weight: 700,
                                                children: "Power users:\xa0"
                                            }), "Your votes can also be transferred to another address or received from others."]
                                        })]
                                    })
                                }), (0, t.jsx)(L.r.Col, {
                                    span: u ? 12 : 4,
                                    pr: "md",
                                    pb: "lg",
                                    sx: {
                                        display: "flex",
                                        alignItems: o ? "flex-end" : "center",
                                        marginBottom: o && !u ? "25px" : "0",
                                        justifyContent: "center"
                                    },
                                    children: (0, t.jsx)(g.K, {
                                        align: "center",
                                        spacing: "xs",
                                        children: o ? (0, t.jsxs)(t.Fragment, {
                                            children: [(0, t.jsx)(I.x, {
                                                size: "xl",
                                                weight: 700,
                                                align: "center",
                                                children: "Your current votes"
                                            }), (0, t.jsx)(I.x, {
                                                size: "xl",
                                                weight: 700,
                                                align: "center",
                                                children: w
                                            }), (0, t.jsx)(O.u, {
                                                onClick: function() {
                                                    (0, M.m6)((0, T.Z)({
                                                        modal: "transferVotesInfo",
                                                        title: (0, t.jsx)(V.r, {
                                                            children: "Information about transferred votes"
                                                        }),
                                                        innerProps: {
                                                            callBack: C
                                                        }
                                                    }, x))
                                                },
                                                size: "xs",
                                                label: "Transfer votes"
                                            })]
                                        }) : (0, t.jsx)(I.x, {
                                            size: "xl",
                                            weight: 700,
                                            align: "center",
                                            children: "Connect your wallet to see your current votes"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            var Y = n(9150),
                q = n(92305),
                U = n(91093),
                J = function() {
                    var e = (0, A.$6)().supportedChainId,
                        r = (0, F._Q)().notConnectedChainId,
                        n = e || r,
                        a = (0, W.ZN)(n),
                        c = (0, o.useState)($.AW.Songbird),
                        l = c[0],
                        d = c[1];
                    return (0, t.jsx)(q.Z, {
                        chainWhenNotConnected: l,
                        setChainWhenNotConnected: d,
                        children: (0, t.jsxs)(Y._, {
                            children: [(0, t.jsx)(U.V, {
                                helpmodalTitle: "Help on governance voting",
                                helpModalContent: (0, t.jsx)(s.f, {
                                    QNAs: "flare" == a ? Q.E : i.L
                                }),
                                children: "Governance Proposals"
                            }), (0, t.jsx)(H, {}), (0, t.jsx)(R, {})]
                        })
                    })
                }
        }
    },
    function(e) {
        e.O(0, [612, 834, 123, 715, 774, 888, 179], (function() {
            return r = 23810, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);