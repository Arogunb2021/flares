(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(83370)
            }])
        },
        83370: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return He
                }
            });
            var n = t(85893),
                o = t(92305),
                a = t(11924),
                i = t(71232),
                l = t(18540),
                s = t(80579),
                c = t(56016),
                d = t(34736),
                u = t(95117),
                p = t(35627),
                h = t(57556),
                m = function() {
                    var e = (0, a.$6)(),
                        r = e.provider,
                        t = e.supportedChainId;
                    return t ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(i.Z, {
                            spacing: 0,
                            children: [(0, n.jsx)(d.k, {
                                onClick: function() {
                                    return (0, h.o)(r, t)
                                },
                                children: (0, n.jsxs)(u.x, {
                                    underline: !0,
                                    color: "#E62058",
                                    children: [" ", "Click here", " "]
                                })
                            }), (0, n.jsxs)(u.x, {
                                children: [" \xa0to add ", p.T[t].symbol, " to your wallet. "]
                            })]
                        })
                    }) : (0, n.jsx)(n.Fragment, {})
                },
                x = [{
                    title: "How do I add Wrapped Flare token to my wallet?",
                    body: (0, n.jsx)(m, {})
                }, {
                    title: "What addresses are used by the Flare network?",
                    body: "The address structure is the same as on the Ethereum network, therefore you can reuse the same addresses from that network. If you do not yet own an address, you can use the default address that is generated when opening a crypto currency wallet, such as Metamask."
                }, {
                    title: "Why the two tokens FLR and WFLR? How do I exchange them?",
                    body: "Flare (FLR) represents the native crypto currency of the Flare network and is used primarily for the payment of transaction fees, similarly as Ether is used on the Ethereum network. To be able to use the functionality of the Flare network (e.g., delegating, distribution claiming, voting) you must convert FLR tokens to the wrapped FLR tokens (or WFLR) using a process called wrapping. The amount of WLFR you receive is equal to the amount FLR you wrapped (1 WFLR = 1 FLR) and you can always exchange WFLR back to FLR using the unwrap function. The only additional costs are the transaction fees."
                }, {
                    title: "How do I acquire FLR tokens?",
                    body: "If you held Ripple (XRP) on December 12, 2020, you will receive FLR tokens as part of the airdrop. Alternatively, you will be able to buy FLR tokens on the exchanges that list them."
                }, {
                    title: "How much of my FLR tokens should I wrap?",
                    body: "If you plan to use the functionality of the Flare network, you should wrap as much as possible. However, keep in mind that you need FLR to pay the transaction fees (even if you are transferring or unwapping WFLR). A typical transaction can cost you between 0.002 and 0.02 FLR."
                }, {
                    title: "Why should I delegate my WFLR tokens to FTSO data providers?",
                    body: "By delegating your WFLR tokens, you can earn rewards if the data provider to whom you delegated your tokens is successful. FTSO data providers provide exchange rates from exchanges to the Flare network (e.g., ETH/USD rate) and if they provide better (more precise) rates they receive higher rewards. Note that by delegating you still keep all your WFLR tokens and can use them freely."
                }, {
                    title: "To whom should I delegate my tokens?",
                    body: "The list of FTSO data providers is available at https://flare-ftso-monitor.flare.network/data-providers. The main criterion to watch out for is the reward rate which shows the current reward rate (in percentage). The higher the reward rate, the bigger your reward will be."
                }, {
                    title: "Do I immediately start earning rewards after I delegate my tokens?",
                    body: "No. Rewards are distributed in units that are called epochs. Each epoch lasts 3 and a half days (84 hours). You will be entitled to a reward for a specific epoch if you delegated your WFLR tokens to a data provider before the so-called snapshot block for that epoch happened. This block is randomly selected around a day before an epoch started. For example, if an epoch started on Jan 1, you should have delegated your tokens before Dec 31, and you will be entitled to the reward after the epoch ends."
                }, {
                    title: "Do I have to delegate my tokens before every epoch starts?",
                    body: "No, once you delegate your tokens to a FTSO data provider, the system assumes that you will be delegating to this provider from now on (until you change it)."
                }, {
                    title: "How can I change my delegation?",
                    body: "You just click on the Delegate button, select a different data provider and click the submit button. If you re-delegated before the snapshot block for the next epoch, the new delegation will already be used in this epoch otherwise the old delegation will still be used."
                }, {
                    title: "How high of a reward will I receive?",
                    body: "The amount of WFLR tokens you delegate is determined at the epoch\u2019s snapshot block. This amount is then multiplied by the reward rate (as a percentage) the provider to whom you delegated your tokens achieved by the end of this epoch."
                }, {
                    title: "How do I claim my delegation rewards?",
                    body: "The table will show your unclaimed delegation rewards for specific epochs. By selecting them and clicking on the Claim button you will receive these rewards in WFLR tokens to your account. Be careful to claim your rewards regularly as they will be revoked 90 days after a specific epoch ended."
                }, {
                    title: "What is the function of an executor?",
                    body: "Executors are addresses you entrust to claim your rewards for your account (and your PDA). You can set your own service to simplify claiming or select an existing service which will regularly claim for you for a fee. Note that executors can only claim to your account (or to your PDA) and cannot perform other actions on your account."
                }, {
                    title: "What is the FlareDrop distribution?",
                    body: "The FlareDrop is a distribution method for the 24.25B remaining FLR tokens after the original airdrop. It is distributed monthly over 36 (30-day) months to those that wrap their FLR tokens."
                }, {
                    title: "How much of the FlareDrop distribution will I receive?",
                    body: "Each of the first 35 monthly allocations constitute 2.37% of the FlareDrop, and the last one 2.05%. Users receive an amount equal to their month\u2019s WFLR holdings divided by the total WFLR held that month, multiplied by the monthly allocation. Month\u2019s WFLR holdings are calculated as an average of holdings at three random blocks in that month."
                }],
                v = [{
                    title: "How do I add the wrapped Songbird token (WSGB) to my wallet?",
                    body: (0, n.jsx)(m, {})
                }],
                b = t(1958),
                g = t(56378),
                f = t(21017),
                y = t(47568),
                w = t(26042),
                j = t(828),
                F = t(34051),
                k = t.n(F),
                D = t(64761),
                C = t(97564),
                A = t(54777),
                P = t(25963),
                T = t(85002),
                E = t(60102),
                Z = t(93043),
                S = t(49384),
                R = t(47129);

            function W(e) {
                var r = (0, D.rZ)(),
                    t = (0, g.Mu)(),
                    o = (0, a.$6)().supportedChainId,
                    l = (0, g.tS)(o).nativeCurrency;
                if (!e.ExecutorData.executor) return (0, n.jsx)(u.x, {
                    color: r.primaryColor,
                    children: "None"
                });
                var s = function() {
                        switch (e.ExecutorData.registered) {
                            case "registered":
                                return "(".concat(e.ExecutorData.registered, ", ").concat(e.ExecutorData.executorFee, " ").concat(l, " fee)");
                            case "manual":
                                return "(".concat(e.ExecutorData.registered, ")");
                            default:
                                return ""
                        }
                    },
                    c = function() {
                        return (0, n.jsxs)(C.K, {
                            align: "center",
                            spacing: 0,
                            children: [(0, n.jsx)(u.x, {
                                color: r.primaryColor,
                                children: e.ExecutorData.executor
                            }), (0, n.jsx)(u.x, {
                                color: r.primaryColor,
                                children: s()
                            })]
                        })
                    },
                    d = function() {
                        return (0, n.jsxs)(C.K, {
                            align: "center",
                            spacing: 0,
                            children: [(0, n.jsxs)(i.Z, {
                                spacing: "sm",
                                position: "center",
                                children: [(0, n.jsx)(u.x, {
                                    color: r.primaryColor,
                                    children: (0, S.Sy)(e.ExecutorData.executor, 7, 7)
                                }), (0, n.jsx)(R.Z, {
                                    title: "Executor address",
                                    text: e.ExecutorData.executor
                                })]
                            }), (0, n.jsx)(u.x, {
                                color: r.primaryColor,
                                children: s()
                            })]
                        })
                    };
                switch (t) {
                    case "xs":
                    case "sm":
                        return (0, n.jsx)(d, {});
                    default:
                        return (0, n.jsx)(c, {})
                }
            }
            var B = t(3317),
                O = t(91759),
                I = t(95566);

            function M(e) {
                var r = e.tokenBalance,
                    t = e.mobileModalTitle,
                    o = (0, D.rZ)(),
                    a = (0, j.Z)((0, O.q)(!1), 2),
                    s = a[0],
                    c = a[1],
                    d = c.close,
                    p = c.open;
                return (0, n.jsxs)(n.Fragment, {
                    children: [" ", (0, n.jsx)(l.z, {
                        smallerThan: "md",
                        styles: {
                            display: "none"
                        },
                        children: (0, n.jsx)(i.Z, {
                            spacing: 1,
                            children: (0, n.jsxs)(B.J, {
                                withinPortal: !0,
                                styles: {
                                    dropdown: {
                                        border: "1px solid #242425",
                                        zIndex: 1e5
                                    },
                                    arrow: {
                                        border: "1px solid #242425"
                                    }
                                },
                                position: "top",
                                withArrow: !0,
                                shadow: "md",
                                opened: s,
                                radius: "lg",
                                transitionProps: {
                                    exitDuration: 300
                                },
                                children: [(0, n.jsx)(B.J.Target, {
                                    children: (0, n.jsx)(u.x, {
                                        color: o.primaryColor,
                                        onMouseEnter: p,
                                        onMouseLeave: d,
                                        style: {
                                            pointerEvents: "auto",
                                            cursor: "default"
                                        },
                                        children: r && (0, g.az)(r)
                                    })
                                }), (0, n.jsx)(B.J.Dropdown, {
                                    pt: 5,
                                    sx: {
                                        height: "36px",
                                        pointerEvents: "none"
                                    },
                                    children: (0, n.jsx)(u.x, {
                                        color: o.primaryColor,
                                        children: (0, g.mb)(r)
                                    })
                                })]
                            })
                        })
                    }), (0, n.jsx)(l.z, {
                        largerThan: "md",
                        styles: {
                            display: "none"
                        },
                        children: (0, n.jsx)(i.Z, {
                            spacing: 0,
                            onClick: function() {
                                return (0, P.h7)({
                                    title: (0, n.jsx)(I.r, {
                                        children: t
                                    }),
                                    radius: "sm",
                                    overlayProps: {
                                        blur: 6,
                                        opacity: 0
                                    },
                                    centered: !0,
                                    children: (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)(u.x, {
                                            size: "lg",
                                            color: o.primaryColor,
                                            children: (0, g.mb)(r)
                                        })
                                    })
                                })
                            },
                            style: {
                                pointerEvents: "auto",
                                cursor: "default"
                            },
                            children: (0, n.jsx)(u.x, {
                                color: o.primaryColor,
                                children: r && (0, g.az)(r)
                            })
                        })
                    })]
                })
            }
            var z = t(21474),
                L = t(45441),
                N = t(78818),
                q = t(49834),
                H = t(42365),
                U = t(37882),
                G = t(65289),
                K = t(83824);

            function _(e) {
                var r = function() {
                        return (0, n.jsxs)(f.Z, {
                            pr: "12px",
                            pl: "28px",
                            p: 9,
                            sx: function(e) {
                                return {
                                    background: "rgba(154, 154, 154, 0.05)",
                                    borderRadius: e.radius.xl,
                                    pointerEvents: "none",
                                    "&:hover": {
                                        background: "rgba(154, 154, 154, 0.35)"
                                    }
                                }
                            },
                            children: [(0, n.jsxs)(i.Z, {
                                position: "apart",
                                children: [(0, n.jsx)(i.Z, {
                                    children: (0, n.jsx)(u.x, {
                                        style: {
                                            minWidth: "120px"
                                        },
                                        color: "#535353",
                                        children: e.label
                                    })
                                }), (0, n.jsx)(i.Z, {
                                    position: "right",
                                    spacing: "xs",
                                    children: e.buttons && e.buttons.map((function(e, r) {
                                        return (0, n.jsx)(K.e, {
                                            buttonType: e.buttonType,
                                            label: e.label,
                                            onClick: function(r) {
                                                return e.onClick(r)
                                            },
                                            isDisabled: e.isDisabled
                                        }, r)
                                    }))
                                })]
                            }), e.chainId == G.AW.Flare || e.chainId == G.AW.Coston2 ? (0, n.jsx)(p, {}) : e.chainId == G.AW.Songbird || e.chainId == G.AW.Coston ? (0, n.jsx)(d, {}) : (0, n.jsx)(n.Fragment, {})]
                        })
                    },
                    t = (0, D.rZ)(),
                    o = (0, g.Mu)(),
                    a = (0, H.UH)().FtsoProviders,
                    l = (0, E.e)(),
                    s = function(e) {
                        if (a) {
                            var r = a.find((function(r) {
                                return r.address == e
                            }));
                            return null === r || void 0 === r ? void 0 : r.name
                        }
                    },
                    c = function(r) {
                        (0, P.m6)((0, w.Z)({
                            modal: "FTSODelegationsSongbird",
                            title: (0, n.jsx)(I.r, {
                                children: "Delegate FTSO provider"
                            }),
                            innerProps: {
                                callBack: e.refetchProviders,
                                DelegationsData: e.priceProviders ? {
                                    FtsoDelegatees: e.priceProviders
                                } : void 0,
                                editingProvider: r,
                                delegationAccount: e.delegationAccount
                            }
                        }, l))
                    },
                    d = function(r) {
                        var o = r.mobile;
                        return e.priceProviders && 0 != e.priceProviders.length ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(N.T, {
                                h: "xs"
                            }), (0, n.jsxs)(C.K, {
                                spacing: 0,
                                children: [(0, n.jsx)(i.Z, {
                                    position: "center",
                                    children: e.priceProviders[0] && s(e.priceProviders[0].address) ? (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(u.x, {
                                            align: "center",
                                            color: t.primaryColor,
                                            children: e.priceProviders[0] ? "".concat(s(e.priceProviders[0].address), " (").concat(e.priceProviders[0].percentage, "%)") : "First FTSO data provider"
                                        }), (0, n.jsx)(q.A, {
                                            sx: {
                                                pointerEvents: "auto"
                                            },
                                            onClick: function() {
                                                var r;
                                                return c(null === e || void 0 === e || null === (r = e.priceProviders) || void 0 === r ? void 0 : r[0])
                                            },
                                            children: (0, n.jsx)(U.z, {
                                                size: 30
                                            })
                                        })]
                                    }) : (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(u.x, {
                                            align: "center",
                                            color: t.primaryColor,
                                            children: e.priceProviders[0] ? "".concat(o ? (0, S.Sy)(e.priceProviders[0].address.toString(), 5, 5) : e.priceProviders[0].address, " (").concat(e.priceProviders[0].percentage, "%)") : "First FTSO data provider"
                                        }), (0, n.jsx)(q.A, {
                                            sx: {
                                                pointerEvents: "auto"
                                            },
                                            onClick: function() {
                                                var r;
                                                return c(null === e || void 0 === e || null === (r = e.priceProviders) || void 0 === r ? void 0 : r[0])
                                            },
                                            children: (0, n.jsx)(U.z, {
                                                size: 30
                                            })
                                        })]
                                    })
                                }), e.priceProviders[0].percentage < 100 ? (0, n.jsx)(i.Z, {
                                    position: "center",
                                    children: e.priceProviders[1] && s(e.priceProviders[1].address) ? (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(u.x, {
                                            align: "center",
                                            color: t.primaryColor,
                                            children: e.priceProviders[1] ? "".concat(s(e.priceProviders[1].address), " (").concat(e.priceProviders[1].percentage, "%)") : "Second FTSO data provider"
                                        }), (0, n.jsx)(q.A, {
                                            sx: {
                                                pointerEvents: "auto"
                                            },
                                            onClick: function() {
                                                var r;
                                                return c(null === e || void 0 === e || null === (r = e.priceProviders) || void 0 === r ? void 0 : r[1])
                                            },
                                            children: (0, n.jsx)(U.z, {
                                                size: 30
                                            })
                                        })]
                                    }) : (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(u.x, {
                                            align: "center",
                                            color: t.primaryColor,
                                            children: e.priceProviders[1] ? "".concat(o ? (0, S.Sy)(e.priceProviders[1].address.toString(), 5, 5) : e.priceProviders[1].address, " (").concat(e.priceProviders[1].percentage, "%)") : "Second FTSO data provider"
                                        }), (0, n.jsx)(q.A, {
                                            sx: {
                                                pointerEvents: "auto"
                                            },
                                            onClick: function() {
                                                var r;
                                                return c(null === e || void 0 === e || null === (r = e.priceProviders) || void 0 === r ? void 0 : r[1])
                                            },
                                            children: (0, n.jsx)(U.z, {
                                                size: 30
                                            })
                                        })]
                                    })
                                }) : (0, n.jsx)(n.Fragment, {})]
                            })]
                        }) : (0, n.jsx)(n.Fragment, {})
                    },
                    p = function(r) {
                        var o, a = r.mobile;
                        return e.priceProviders && 0 != e.priceProviders.length ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(N.T, {
                                h: "xs"
                            }), (0, n.jsx)(C.K, {
                                spacing: 0,
                                pt: "xs",
                                children: null === (o = e.priceProviders) || void 0 === o ? void 0 : o.map((function(e, r) {
                                    return s(e.address) ? (0, n.jsxs)(u.x, {
                                        align: "center",
                                        color: t.primaryColor,
                                        children: [s(e.address), " (", e.percentage, "%)"]
                                    }, r) : (0, n.jsxs)(u.x, {
                                        align: "center",
                                        color: t.primaryColor,
                                        children: [a ? (0, S.Sy)(e.address.toString(), 6, 6) : e.address, " (", e.percentage, "%)"]
                                    }, r)
                                }))
                            })]
                        }) : (0, n.jsx)(n.Fragment, {})
                    },
                    h = function() {
                        return (0, n.jsx)(f.Z, {
                            pr: "10px",
                            pl: "10px",
                            p: 9,
                            sx: function(e) {
                                return {
                                    background: "rgba(154, 154, 154, 0.05)",
                                    borderRadius: e.radius.xl
                                }
                            },
                            children: (0, n.jsxs)(C.K, {
                                align: "center",
                                spacing: 5,
                                children: [(0, n.jsx)(u.x, {
                                    align: "center",
                                    color: "#9A9A9A",
                                    children: e.label
                                }), e.value && (e.chainId == G.AW.Flare || e.chainId == G.AW.Coston2 ? (0, n.jsx)(p, {
                                    mobile: !0
                                }) : e.chainId == G.AW.Songbird || e.chainId == G.AW.Coston ? (0, n.jsx)(d, {
                                    mobile: !0
                                }) : (0, n.jsx)(n.Fragment, {})), (0, n.jsx)(i.Z, {
                                    position: "center",
                                    spacing: "xs",
                                    pt: 10,
                                    children: e.buttons && e.buttons.map((function(e, r) {
                                        return (0, n.jsx)(K.e, {
                                            buttonType: e.buttonType,
                                            label: e.label,
                                            onClick: function(r) {
                                                return e.onClick(r)
                                            },
                                            isDisabled: e.isDisabled
                                        }, r)
                                    }))
                                })]
                            })
                        })
                    };
                switch (o) {
                    case "xs":
                    case "sm":
                    case "md":
                        return (0, n.jsx)(h, {});
                    default:
                        return (0, n.jsx)(r, {})
                }
            }
            var Q = t(7081),
                Y = t(10319),
                V = t(39010),
                J = t(86904),
                $ = t(77055),
                X = t(64376),
                ee = t(6477),
                re = t(81286),
                te = t(67294),
                ne = t(464),
                oe = t(32161),
                ae = t(30081),
                ie = t(52924),
                le = t(33989);
            class se extends le.l {
                constructor(e, r) {
                    super(), this.client = e, this.queries = [], this.result = [], this.observers = [], this.observersMap = {}, r && this.setQueries(r)
                }
                onSubscribe() {
                    1 === this.listeners.length && this.observers.forEach((e => {
                        e.subscribe((r => {
                            this.onUpdate(e, r)
                        }))
                    }))
                }
                onUnsubscribe() {
                    this.listeners.length || this.destroy()
                }
                destroy() {
                    this.listeners = [], this.observers.forEach((e => {
                        e.destroy()
                    }))
                }
                setQueries(e, r) {
                    this.queries = e, ae.V.batch((() => {
                        const e = this.observers,
                            t = this.findMatchingObservers(this.queries);
                        t.forEach((e => e.observer.setOptions(e.defaultedQueryOptions, r)));
                        const n = t.map((e => e.observer)),
                            o = Object.fromEntries(n.map((e => [e.options.queryHash, e]))),
                            a = n.map((e => e.getCurrentResult())),
                            i = n.some(((r, t) => r !== e[t]));
                        (e.length !== n.length || i) && (this.observers = n, this.observersMap = o, this.result = a, this.hasListeners() && ((0, oe.e5)(e, n).forEach((e => {
                            e.destroy()
                        })), (0, oe.e5)(n, e).forEach((e => {
                            e.subscribe((r => {
                                this.onUpdate(e, r)
                            }))
                        })), this.notify()))
                    }))
                }
                getCurrentResult() {
                    return this.result
                }
                getOptimisticResult(e) {
                    return this.findMatchingObservers(e).map((e => e.observer.getOptimisticResult(e.defaultedQueryOptions)))
                }
                findMatchingObservers(e) {
                    const r = this.observers,
                        t = e.map((e => this.client.defaultQueryOptions(e))),
                        n = t.flatMap((e => {
                            const t = r.find((r => r.options.queryHash === e.queryHash));
                            return null != t ? [{
                                defaultedQueryOptions: e,
                                observer: t
                            }] : []
                        })),
                        o = n.map((e => e.defaultedQueryOptions.queryHash)),
                        a = t.filter((e => !o.includes(e.queryHash))),
                        i = r.filter((e => !n.some((r => r.observer === e)))),
                        l = e => {
                            const r = this.client.defaultQueryOptions(e),
                                t = this.observersMap[r.queryHash];
                            return null != t ? t : new ie.z(this.client, r)
                        },
                        s = a.map(((e, r) => {
                            if (e.keepPreviousData) {
                                const t = i[r];
                                if (void 0 !== t) return {
                                    defaultedQueryOptions: e,
                                    observer: t
                                }
                            }
                            return {
                                defaultedQueryOptions: e,
                                observer: l(e)
                            }
                        }));
                    return n.concat(s).sort(((e, r) => t.indexOf(e.defaultedQueryOptions) - t.indexOf(r.defaultedQueryOptions)))
                }
                onUpdate(e, r) {
                    const t = this.observers.indexOf(e); - 1 !== t && (this.result = (0, oe.Rc)(this.result, t, r), this.notify())
                }
                notify() {
                    ae.V.batch((() => {
                        this.listeners.forEach((e => {
                            e(this.result)
                        }))
                    }))
                }
            }
            var ce = t(85945),
                de = t(37122);

            function ue({
                queries: e,
                context: r
            }) {
                const t = (0, ce.NL)({
                        context: r
                    }),
                    n = (0, de.S)(),
                    o = te.useMemo((() => e.map((e => {
                        const r = t.defaultQueryOptions(e);
                        return r._optimisticResults = n ? "isRestoring" : "optimistic", r
                    }))), [e, t, n]),
                    [a] = te.useState((() => new se(t, o))),
                    i = a.getOptimisticResult(o);
                return (0, ne.$)(te.useCallback((e => n ? () => {} : a.subscribe(ae.V.batchCalls(e))), [a, n]), (() => a.getCurrentResult()), (() => a.getCurrentResult())), te.useEffect((() => {
                    a.setQueries(o, {
                        listeners: !1
                    })
                }), [o, a]), i
            }
            var pe = t(35553),
                he = t(14579),
                me = t(64523),
                xe = t(97818);
            const ve = {
                gap: {
                    type: "spacing",
                    property: "gap"
                },
                rowGap: {
                    type: "spacing",
                    property: "rowGap"
                },
                columnGap: {
                    type: "spacing",
                    property: "columnGap"
                },
                align: {
                    type: "identity",
                    property: "alignItems"
                },
                justify: {
                    type: "identity",
                    property: "justifyContent"
                },
                wrap: {
                    type: "identity",
                    property: "flexWrap"
                },
                direction: {
                    type: "identity",
                    property: "flexDirection"
                }
            };
            var be = t(11686),
                ge = Object.defineProperty,
                fe = Object.defineProperties,
                ye = Object.getOwnPropertyDescriptors,
                we = Object.getOwnPropertySymbols,
                je = Object.prototype.hasOwnProperty,
                Fe = Object.prototype.propertyIsEnumerable,
                ke = (e, r, t) => r in e ? ge(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t;
            const De = {},
                Ce = (0, te.forwardRef)(((e, r) => {
                    const t = (0, D.N4)("Flex", De, e),
                        {
                            gap: n,
                            rowGap: o,
                            columnGap: a,
                            align: i,
                            justify: l,
                            wrap: s,
                            direction: c,
                            sx: d
                        } = t,
                        u = ((e, r) => {
                            var t = {};
                            for (var n in e) je.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
                            if (null != e && we)
                                for (var n of we(e)) r.indexOf(n) < 0 && Fe.call(e, n) && (t[n] = e[n]);
                            return t
                        })(t, ["gap", "rowGap", "columnGap", "align", "justify", "wrap", "direction", "sx"]);
                    return te.createElement(me.x, (p = ((e, r) => {
                        for (var t in r || (r = {})) je.call(r, t) && ke(e, t, r[t]);
                        if (we)
                            for (var t of we(r)) Fe.call(r, t) && ke(e, t, r[t]);
                        return e
                    })({}, u), h = {
                        sx: [{
                            display: "flex"
                        }, e => (0, be.M)({
                            gap: n,
                            rowGap: o,
                            columnGap: a,
                            align: i,
                            justify: l,
                            wrap: s,
                            direction: c
                        }, e, ve), ...(0, xe.R)(d)],
                        ref: r
                    }, fe(p, ye(h))));
                    var p, h
                }));

            function Ae(e) {
                var r = e.rewardStatus,
                    t = e.showAmount,
                    o = e.currency,
                    a = e.onClick;
                return (0, n.jsx)(d.k, {
                    disabled: "pending" === r,
                    sx: function(e) {
                        return {
                            height: "44px",
                            width: "245px",
                            background: "pending" == r ? "#F0F0F0" : "#FFFFFF",
                            borderRadius: e.radius.xl,
                            color: "pending" == r ? "#A5A5A5" : "#E62058",
                            border: "1px solid ".concat("pending" == r ? "#E3E3E3" : "#E62058"),
                            transition: "color 250ms ease-in-out,background-color 250ms ease-in-out",
                            cursor: "pending" == r ? "default" : "pointer",
                            "&:hover": {
                                color: "claim" == r ? "#FFFFFF" : void 0,
                                borderColor: "claim" == r ? "#E62058" : void 0,
                                backgroundColor: "claim" == r ? "#E62058" : void 0
                            },
                            "&:active": {
                                color: "claim" == r ? "#FFFFFF" : void 0,
                                borderColor: "claim" == r ? "#E62058" : void 0,
                                backgroundColor: "claim" == r ? "#E62058" : void 0
                            }
                        }
                    },
                    onClick: function() {
                        a()
                    },
                    children: (0, n.jsxs)(i.Z, {
                        position: "center",
                        spacing: 5,
                        styles: function(e) {
                            return {
                                root: {
                                    "&:hover": {
                                        color: "#E62058",
                                        borderColor: "#E62058",
                                        backgroundColor: "transparent"
                                    }
                                }
                            }
                        },
                        children: [(0, n.jsx)(u.x, {
                            align: "center",
                            size: "md",
                            color: "currentColor",
                            children: "claim" === r ? "Claim" : "Pending"
                        }), (0, n.jsx)(u.x, {
                            align: "center",
                            size: "xl",
                            weight: 700,
                            color: "currentColor",
                            children: t
                        }), (0, n.jsx)(u.x, {
                            align: "center",
                            size: "md",
                            color: "currentColor",
                            children: o
                        })]
                    })
                })
            }

            function Pe(e) {
                var r = e.allClaimed,
                    t = e.showAmount,
                    o = e.isZero,
                    a = e.currency,
                    l = e.onClick,
                    s = !(!r && !o);
                return (0, n.jsx)(d.k, {
                    disabled: s,
                    sx: function(e) {
                        return {
                            height: "44px",
                            width: "245px",
                            background: s ? "#F0F0F0" : "#FFFFFF",
                            borderRadius: e.radius.xl,
                            color: s ? "#A5A5A5" : "#E62058",
                            border: "1px solid ".concat(s ? "#E3E3E3" : "#E62058"),
                            transition: "color 250ms ease-in-out,background-color 250ms ease-in-out",
                            cursor: s ? "default" : "pointer",
                            "&:hover": {
                                color: s ? void 0 : "#FFFFFF",
                                borderColor: s ? void 0 : "#E62058",
                                backgroundColor: s ? void 0 : "#E62058"
                            },
                            "&:active": {
                                color: s ? void 0 : "#FFFFFF",
                                borderColor: s ? void 0 : "#E62058",
                                backgroundColor: s ? void 0 : "#E62058"
                            }
                        }
                    },
                    onClick: function() {
                        l()
                    },
                    children: (0, n.jsx)(i.Z, {
                        position: "center",
                        spacing: 5,
                        styles: function(e) {
                            return {
                                root: {
                                    "&:hover": {
                                        color: "#E62058",
                                        borderColor: "#E62058",
                                        backgroundColor: "transparent"
                                    }
                                }
                            }
                        },
                        children: s ? (0, n.jsx)(u.x, {
                            align: "center",
                            size: "md",
                            color: "currentColor",
                            children: "Nothing to claim"
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(u.x, {
                                align: "center",
                                size: "md",
                                color: "currentColor",
                                children: "Claim"
                            }), (0, n.jsx)(u.x, {
                                align: "center",
                                size: "xl",
                                weight: 700,
                                color: "currentColor",
                                children: t
                            }), (0, n.jsx)(u.x, {
                                align: "center",
                                size: "md",
                                color: "currentColor",
                                children: a
                            })]
                        })
                    })
                })
            }
            Ce.displayName = "@mantine/core/Flex";
            var Te = function(e, r) {
                    if (e) {
                        if (!pe.parseEther(e).isZero()) return {
                            rewardStatus: "claim",
                            amount: (0, g.az)(e)
                        };
                        if (r) return {
                            rewardStatus: "pending",
                            amount: (0, g.az)(r)
                        }
                    }
                    return {
                        rewardStatus: "pending",
                        amount: "0.00"
                    }
                },
                Ee = function(e) {
                    return e ? pe.parseEther(e).isZero() ? {
                        amount: (0, g.az)(e),
                        isZero: !0
                    } : {
                        amount: (0, g.az)(e),
                        isZero: !1
                    } : {
                        amount: "0.00",
                        isZero: !0
                    }
                };

            function Ze(e) {
                var r = e.rewardsRefetch,
                    t = e.rewardsData,
                    o = e.pendingData,
                    l = e.flareDropData,
                    s = e.flareDropDistributionRefetch,
                    c = (0, a.$6)().supportedChainId,
                    d = (0, g.tS)(c).nativeCurrency,
                    p = (0, g.Mu)(),
                    h = (0, E.e)(),
                    m = (0, g.ZN)(c),
                    x = function() {
                        return (0, n.jsx)(me.x, {
                            sx: function(e) {
                                return {
                                    minHeight: "87px",
                                    background: e.fn.linearGradient(45, "#A8C2E9", "#E2C4E3", "#E2C2C3")
                                }
                            },
                            children: (0, n.jsxs)(i.Z, {
                                position: "apart",
                                pt: "md",
                                pb: "md",
                                pl: 45,
                                pr: 45,
                                children: [(0, n.jsxs)(Ce, {
                                    direction: "flare" == m ? "column" : "row",
                                    align: "center",
                                    justify: "space-between",
                                    sx: {
                                        width: "songbird" == m ? "100%" : void 0
                                    },
                                    gap: "md",
                                    children: [(0, n.jsx)(u.x, {
                                        color: "#FFFFFF",
                                        size: "xl",
                                        children: "Claim your delegation rewards"
                                    }), (0, n.jsx)(Ae, {
                                        showAmount: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).amount,
                                        currency: d,
                                        onClick: function() {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "claimRewards",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Claim your delegation rewards"
                                                }),
                                                innerProps: {
                                                    callBack: r,
                                                    rewardsCombinedData: t,
                                                    pendingRewardsData: o
                                                }
                                            }, h))
                                        },
                                        rewardStatus: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).rewardStatus
                                    })]
                                }), "flare" == m && (0, n.jsxs)(C.K, {
                                    align: "center",
                                    children: [(0, n.jsx)(u.x, {
                                        color: "#FFFFFF",
                                        size: "xl",
                                        children: "Claim your FlareDrop distribution"
                                    }), (0, n.jsx)(Pe, {
                                        isZero: Ee(null === l || void 0 === l ? void 0 : l.claimableAmount).isZero,
                                        showAmount: Ee(null === l || void 0 === l ? void 0 : l.claimableAmount).amount,
                                        allClaimed: null === l || void 0 === l ? void 0 : l.allClaimed,
                                        currency: d,
                                        onClick: function() {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "claimFlareDrop",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Claim your FlareDrop distribution"
                                                }),
                                                innerProps: {
                                                    callBack: s,
                                                    flareDropData: l
                                                }
                                            }, h))
                                        }
                                    })]
                                })]
                            })
                        })
                    },
                    v = function() {
                        return (0, n.jsx)(me.x, {
                            sx: function(e) {
                                return {
                                    background: e.fn.linearGradient(45, "#A8C2E9", "#E2C4E3", "#E2C2C3")
                                }
                            },
                            children: (0, n.jsxs)(C.K, {
                                align: "center",
                                pt: "md",
                                pb: "md",
                                pl: 45,
                                pr: 45,
                                children: [(0, n.jsx)(u.x, {
                                    color: "#FFFFFF",
                                    size: "xl",
                                    align: "center",
                                    children: "Claim your delegation rewards"
                                }), (0, n.jsx)(Ae, {
                                    showAmount: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).amount,
                                    currency: d,
                                    onClick: function() {
                                        (0, P.m6)((0, w.Z)({
                                            modal: "claimRewards",
                                            title: (0, n.jsx)(I.r, {
                                                children: "Claim your delegation rewards"
                                            }),
                                            innerProps: {
                                                callBack: r,
                                                rewardsCombinedData: t,
                                                pendingRewardsData: o
                                            }
                                        }, h))
                                    },
                                    rewardStatus: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).rewardStatus
                                }), "flare" == m && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(u.x, {
                                        color: "#FFFFFF",
                                        size: "xl",
                                        align: "center",
                                        children: "Claim your FlareDrop distribution"
                                    }), (0, n.jsx)(Pe, {
                                        isZero: Ee(null === l || void 0 === l ? void 0 : l.claimableAmount).isZero,
                                        showAmount: Ee(null === l || void 0 === l ? void 0 : l.claimableAmount).amount,
                                        allClaimed: null === l || void 0 === l ? void 0 : l.allClaimed,
                                        currency: d,
                                        onClick: function() {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "claimFlareDrop",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Claim your FlareDrop distribution"
                                                }),
                                                innerProps: {
                                                    callBack: s,
                                                    flareDropData: l
                                                }
                                            }, h))
                                        }
                                    })]
                                })]
                            })
                        })
                    };
                switch (p) {
                    case "xs":
                    case "sm":
                    case "md":
                        return (0, n.jsx)(v, {});
                    default:
                        return (0, n.jsx)(x, {})
                }
            }
            var Se = t(73403),
                Re = t(2593);

            function We(e) {
                var r = e.refetchPDARewards,
                    t = e.rewardsDataPDARewards,
                    o = e.pendingDataPDARewards,
                    l = e.DelegationAccountData,
                    s = e.flareDropData,
                    c = e.flareDropDistributionRefetch,
                    d = (0, a.$6)().supportedChainId,
                    p = (0, g.tS)(d).nativeCurrency,
                    h = (0, g.Mu)(),
                    m = (0, E.e)(),
                    x = (0, g.ZN)(d),
                    v = function() {
                        return (0, n.jsx)(me.x, {
                            sx: function(e) {
                                return {
                                    minHeight: "87px",
                                    background: e.fn.linearGradient(45, "#A8C2E9", "#E2C4E3", "#E2C2C3")
                                }
                            },
                            children: (null === l || void 0 === l ? void 0 : l.Enabled) ? (0, n.jsxs)(i.Z, {
                                position: "apart",
                                pt: "md",
                                pb: "md",
                                pl: 45,
                                pr: 45,
                                children: [(0, n.jsxs)(Ce, {
                                    direction: "flare" == x ? "column" : "row",
                                    align: "center",
                                    justify: "space-between",
                                    sx: {
                                        width: "songbird" == x ? "100%" : void 0
                                    },
                                    gap: "md",
                                    children: [(0, n.jsx)(u.x, {
                                        color: "#FFFFFF",
                                        size: "xl",
                                        children: "Claim your PDA delegation rewards"
                                    }), (0, n.jsx)(Ae, {
                                        showAmount: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).amount,
                                        currency: p,
                                        onClick: function() {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "claimRewardsPDA",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Claim your PDA delegation rewards"
                                                }),
                                                innerProps: {
                                                    callBack: r,
                                                    delegationAccount: null === l || void 0 === l ? void 0 : l.DelegationAccount,
                                                    rewardsCombinedDataPDA: t,
                                                    pendingRewardsData: o
                                                }
                                            }, m))
                                        },
                                        rewardStatus: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).rewardStatus
                                    })]
                                }), "flare" == x && (0, n.jsxs)(C.K, {
                                    align: "center",
                                    children: [(0, n.jsx)(u.x, {
                                        color: "#FFFFFF",
                                        size: "xl",
                                        children: "Claim your PDA FlareDrop distribution"
                                    }), (0, n.jsx)(Pe, {
                                        showAmount: Ee(null === s || void 0 === s ? void 0 : s.claimableAmount).amount,
                                        isZero: Ee(null === s || void 0 === s ? void 0 : s.claimableAmount).isZero,
                                        allClaimed: null === s || void 0 === s ? void 0 : s.allClaimed,
                                        currency: p,
                                        onClick: function() {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "claimFlareDropPDA",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Claim your PDA FlareDrop distribution"
                                                }),
                                                innerProps: {
                                                    callBack: c,
                                                    delegationAccount: null === l || void 0 === l ? void 0 : l.DelegationAccount,
                                                    FlareDropDataPDA: s
                                                }
                                            }, m))
                                        }
                                    })]
                                })]
                            }) : (0, n.jsx)(n.Fragment, {})
                        })
                    },
                    b = function() {
                        return (0, n.jsx)(me.x, {
                            sx: function(e) {
                                return {
                                    minHeight: "87px",
                                    background: e.fn.linearGradient(45, "#A8C2E9", "#E2C4E3", "#E2C2C3")
                                }
                            },
                            children: (null === l || void 0 === l ? void 0 : l.Enabled) ? (0, n.jsxs)(C.K, {
                                align: "center",
                                pt: "md",
                                pb: "md",
                                pl: 45,
                                pr: 45,
                                children: [(0, n.jsx)(u.x, {
                                    color: "#FFFFFF",
                                    size: "xl",
                                    align: "center",
                                    children: "Claim your PDA delegation rewards"
                                }), (0, n.jsx)(Ae, {
                                    showAmount: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).amount,
                                    currency: p,
                                    onClick: function() {
                                        (0, P.m6)((0, w.Z)({
                                            modal: "claimRewardsPDA",
                                            title: (0, n.jsx)(I.r, {
                                                children: "Claim your PDA delegation rewards"
                                            }),
                                            innerProps: {
                                                callBack: r,
                                                delegationAccount: null === l || void 0 === l ? void 0 : l.DelegationAccount,
                                                rewardsCombinedDataPDA: t,
                                                pendingRewardsData: o
                                            }
                                        }, m))
                                    },
                                    rewardStatus: Te(null === t || void 0 === t ? void 0 : t.totalUnclaimedAmountCombined, null === o || void 0 === o ? void 0 : o.totalPendingRewards).rewardStatus
                                }), "flare" == x && (0, n.jsxs)(C.K, {
                                    align: "center",
                                    children: [(0, n.jsx)(u.x, {
                                        color: "#FFFFFF",
                                        size: "xl",
                                        children: "Claim your PDA FlareDrop distribution"
                                    }), (0, n.jsx)(Pe, {
                                        showAmount: Ee(null === s || void 0 === s ? void 0 : s.claimableAmount).amount,
                                        isZero: Ee(null === s || void 0 === s ? void 0 : s.claimableAmount).isZero,
                                        allClaimed: null === s || void 0 === s ? void 0 : s.allClaimed,
                                        currency: p,
                                        onClick: function() {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "claimFlareDropPDA",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Claim your PDA FlareDrop distribution"
                                                }),
                                                innerProps: {
                                                    callBack: c,
                                                    delegationAccount: null === l || void 0 === l ? void 0 : l.DelegationAccount,
                                                    FlareDropDataPDA: s
                                                }
                                            }, m))
                                        }
                                    })]
                                })]
                            }) : (0, n.jsx)(n.Fragment, {})
                        })
                    };
                switch (h) {
                    case "xs":
                    case "sm":
                    case "md":
                        return (0, n.jsx)(b, {});
                    default:
                        return (0, n.jsx)(v, {})
                }
            }

            function Be() {
                var e = (0, a.$6)(),
                    r = e.provider,
                    t = e.account,
                    o = e.supportedChainId,
                    i = (0, D.rZ)(),
                    l = (0, te.useState)(!1),
                    s = l[0],
                    c = l[1],
                    d = (0, g.tS)(o).wrappedCurrency,
                    u = (0, E.e)(),
                    p = (0, Q.Y1)().activeTab,
                    h = (0, g.ZN)(o),
                    m = (0, re.a)(["DelegationAccountData", t, o, p], (0, y.Z)(k().mark((function e() {
                        var n, a;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = {
                                            DelegationAccount: "",
                                            Enabled: !1
                                        }, r && t && o) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 3:
                                    return e.next = 5, (0, X.BN)(r, t, o);
                                case 5:
                                    return a = e.sent, e.abrupt("return", {
                                        DelegationAccount: a._delegationAccount,
                                        Enabled: a._enabled
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: "delegation" == p,
                        staleTime: 9e4
                    }),
                    x = m.data,
                    v = m.refetch,
                    b = m.isLoading,
                    f = (0, re.a)(["DelegationsPersonalDelegationAccount", t, o, x, p], (0, y.Z)(k().mark((function e() {
                        var n, a;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = {
                                            FtsoDelegatees: []
                                        }, r && t && o && (null === x || void 0 === x ? void 0 : x.Enabled) && (null === x || void 0 === x ? void 0 : x.DelegationAccount)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 3:
                                    return e.next = 5, (0, $.Jb)(r, x.DelegationAccount, o);
                                case 5:
                                    return a = e.sent, e.abrupt("return", {
                                        FtsoDelegatees: (null === a || void 0 === a ? void 0 : a.delegates) ? a.delegates : []
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: 1 == (null === x || void 0 === x ? void 0 : x.Enabled) && "delegation" == p,
                        staleTime: 9e4
                    }),
                    F = f.data,
                    A = f.refetch,
                    S = (0, re.a)(["DelegationAccountVotePower", t, o, x, p], (0, y.Z)(k().mark((function e() {
                        var n, a;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = {
                                            votePower: "/"
                                        }, r && t && o && (null === x || void 0 === x ? void 0 : x.Enabled) && (null === x || void 0 === x ? void 0 : x.DelegationAccount)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 3:
                                    return e.next = 5, (0, Se.Qn)(r, x.DelegationAccount, o);
                                case 5:
                                    if (null != (a = e.sent)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 8:
                                    return Re.O$.from(a).isZero() && (a = "none"), e.abrupt("return", {
                                        votePower: a
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: 1 == (null === x || void 0 === x ? void 0 : x.Enabled) && "delegation" == p,
                        staleTime: 9e4
                    }),
                    R = S.data,
                    W = S.refetch,
                    B = (0, j.Z)(ue({
                        queries: [{
                            queryKey: ["CombinedDelegationRewardsPDA", t, o, p, x],
                            queryFn: (0, y.Z)(k().mark((function e() {
                                var n, a;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = {
                                                    currentMangerRewards: !1,
                                                    oldMangerRewards: !1,
                                                    totalUnclaimedAmountCombined: "0.0",
                                                    oldManagerAdress: "0x"
                                                }, r && t && o) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", n);
                                        case 3:
                                            return e.next = 5, (0, V.lr)(r, null === x || void 0 === x ? void 0 : x.DelegationAccount, o, !0);
                                        case 5:
                                            return a = e.sent, e.abrupt("return", a);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            keepPreviousData: !1,
                            enabled: 1 == (null === x || void 0 === x ? void 0 : x.Enabled) && "delegation" == p,
                            staleTime: 9e4
                        }, {
                            queryKey: ["PendingRewardsPDA", t, o, p, x],
                            queryFn: (0, y.Z)(k().mark((function e() {
                                var n, a;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = {
                                                    currentRewardEpoch: 0,
                                                    totalPendingRewards: ""
                                                }, r && t && o) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", n);
                                        case 3:
                                            return e.next = 5, (0, V.Kv)(r, null === x || void 0 === x ? void 0 : x.DelegationAccount, o);
                                        case 5:
                                            if (a = e.sent) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return", n);
                                        case 8:
                                            return e.abrupt("return", a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            keepPreviousData: !1,
                            enabled: 1 == (null === x || void 0 === x ? void 0 : x.Enabled) && "delegation" == p,
                            staleTime: 9e4
                        }]
                    }), 2),
                    O = B[0],
                    N = O.data,
                    q = O.refetch,
                    H = B[1],
                    U = H.data,
                    K = H.refetch,
                    Y = (0, re.a)(["DelegationAccountTokenBalancesPDA", t, x, o, p], (0, y.Z)(k().mark((function e() {
                        var n, a;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = {
                                            WrappedTokenBalance: ""
                                        }, r && t && o && (null === x || void 0 === x ? void 0 : x.Enabled) && (null === x || void 0 === x ? void 0 : x.DelegationAccount)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 3:
                                    return e.next = 5, (0, ee.Pc)(r, x.DelegationAccount, o);
                                case 5:
                                    return a = e.sent, e.abrupt("return", {
                                        WrappedTokenBalance: pe.formatEther(a)
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: 1 == (null === x || void 0 === x ? void 0 : x.Enabled) && "delegation" == p
                    }),
                    ne = Y.data,
                    oe = Y.refetch,
                    ae = (0, re.a)(["FlareDropPDA", t, o, x, p], (0, y.Z)(k().mark((function e() {
                        var n, a;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = {
                                            allClaimed: !1,
                                            claimableAmount: pe.formatEther(T.x),
                                            endMonth: null,
                                            claimableDistributions: []
                                        }, r && t && o && (null === x || void 0 === x ? void 0 : x.Enabled) && (null === x || void 0 === x ? void 0 : x.DelegationAccount)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 3:
                                    return e.next = 5, (0, J.Q)(r, x.DelegationAccount, o);
                                case 5:
                                    return a = e.sent, e.abrupt("return", a);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: 1 == (null === x || void 0 === x ? void 0 : x.Enabled) && "flare" == h && "delegation" == p,
                        staleTime: 9e4
                    }),
                    ie = ae.data,
                    le = ae.refetch,
                    se = (0, Z.Y)((function() {
                        return (0, X.p8)(r, o)
                    }), {
                        supportedChainId: o,
                        showNotifications: !0,
                        transactionActive: c,
                        onSuccessCallback: A
                    }),
                    ce = (0, Z.Y)((function() {
                        return (0, X.e9)(r, o)
                    }), {
                        supportedChainId: o,
                        showNotifications: !0,
                        transactionActive: c,
                        onSuccessCallback: W
                    }),
                    de = [{
                        label: "Withdraw",
                        onClick: function(e) {
                            (0, P.m6)((0, w.Z)({
                                modal: "withdrawFromPersonalDelegationAccount",
                                title: (0, n.jsxs)(I.r, {
                                    children: ["Withdraw ", d, " Tokens"]
                                }),
                                innerProps: {
                                    callBack: oe,
                                    DelegationAccountBalance: null === ne || void 0 === ne ? void 0 : ne.WrappedTokenBalance,
                                    delegationAccount: null === x || void 0 === x ? void 0 : x.DelegationAccount
                                }
                            }, u))
                        },
                        buttonType: "tertiary"
                    }],
                    me = {
                        label: "FTSO provider delegations",
                        value: F ? F.FtsoDelegatees.map((function(e, r) {
                            return "".concat(e.address, " (").concat(e.percentage, "%)")
                        })).join(" ") : "None",
                        buttons: function() {
                            switch (o) {
                                case G.AW.Flare:
                                case G.AW.Coston2:
                                    var e = [{
                                            label: (null === F || void 0 === F ? void 0 : F.FtsoDelegatees) && (null === F || void 0 === F ? void 0 : F.FtsoDelegatees.length) >= 1 ? "Redelegate" : "Delegate",
                                            buttonType: "tertiary",
                                            onClick: function(e) {
                                                (0, P.m6)((0, w.Z)({
                                                    modal: "FTSODelegations",
                                                    title: (0, n.jsx)(I.r, {
                                                        children: "Delegate FTSO providers"
                                                    }),
                                                    innerProps: {
                                                        callBack: (0, y.Z)(k().mark((function e() {
                                                            return k().wrap((function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return e.next = 2, Promise.all([A()]);
                                                                    case 2:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        }))),
                                                        delegationAccount: null === x || void 0 === x ? void 0 : x.DelegationAccount,
                                                        DelegationsData: F
                                                    }
                                                }, u))
                                            }
                                        }],
                                        r = (null === F || void 0 === F ? void 0 : F.FtsoDelegatees.reduce((function(e, r) {
                                            return e + r.percentage
                                        }), 0)) || 0;
                                    return ((null === F || void 0 === F ? void 0 : F.FtsoDelegatees) && (null === F || void 0 === F ? void 0 : F.FtsoDelegatees.length) >= 1 || r >= 100) && e.push({
                                        label: "Undelegate all",
                                        buttonType: "tertiary",
                                        onClick: function(e) {
                                            se.mutate()
                                        }
                                    }), e;
                                case G.AW.Songbird:
                                case G.AW.Coston:
                                    var t = (null === F || void 0 === F ? void 0 : F.FtsoDelegatees.reduce((function(e, r) {
                                        return e + r.percentage
                                    }), 0)) || 0;
                                    return (null === F || void 0 === F ? void 0 : F.FtsoDelegatees) && (null === F || void 0 === F ? void 0 : F.FtsoDelegatees.length) >= 1 || t >= 100 ? [{
                                        label: "Undelegate all",
                                        buttonType: "tertiary",
                                        onClick: function(e) {
                                            se.mutate()
                                        }
                                    }] : [{
                                        label: "Delegate",
                                        buttonType: "tertiary",
                                        onClick: function(e) {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "FTSODelegationsSongbird",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Delegate FTSO provider"
                                                }),
                                                innerProps: {
                                                    callBack: (0, y.Z)(k().mark((function e() {
                                                        return k().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.next = 2, Promise.all([A()]);
                                                                case 2:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    }))),
                                                    DelegationsData: F,
                                                    delegationAccount: null === x || void 0 === x ? void 0 : x.DelegationAccount
                                                }
                                            }, u))
                                        }
                                    }];
                                default:
                                    return []
                            }
                        }(),
                        priceProviders: null === F || void 0 === F ? void 0 : F.FtsoDelegatees,
                        refetchProviders: A,
                        chainId: o
                    },
                    xe = {
                        label: "Governance vote delegation",
                        value: null === R || void 0 === R ? void 0 : R.votePower,
                        buttons: "none" != (null === R || void 0 === R ? void 0 : R.votePower) && "/" != (null === R || void 0 === R ? void 0 : R.votePower) ? [{
                            label: "Undelegate",
                            buttonType: "tertiary",
                            onClick: function(e) {
                                ce.mutate()
                            }
                        }] : [{
                            label: "Transfer votes",
                            buttonType: "tertiary",
                            onClick: function(e) {
                                (0, P.m6)((0, w.Z)({
                                    modal: "delegateVotesDelegationAccount",
                                    title: (0, n.jsx)(I.r, {
                                        children: "Transfer delegation account votes to"
                                    }),
                                    innerProps: {
                                        callBack: W,
                                        delegationAccount: null === x || void 0 === x ? void 0 : x.DelegationAccount
                                    }
                                }, u))
                            }
                        }],
                        mobileShorten: !1
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(z.f, {
                        transaction: s,
                        borderRadius: i.radius.xs,
                        visible: b || s,
                        overlayBlur: 2
                    }), (0, n.jsx)(he.J, {
                        children: (0, n.jsxs)(C.K, {
                            spacing: "lg",
                            pt: "sm",
                            children: [function() {
                                var e = [{
                                    label: "Account address",
                                    value: (null === x || void 0 === x ? void 0 : x.Enabled) ? x.DelegationAccount : "Not enabled",
                                    buttons: (null === x || void 0 === x ? void 0 : x.Enabled) && x.DelegationAccount ? [{
                                        label: "Disable",
                                        onClick: function(e) {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "disablePDA",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Disable delegation account"
                                                }),
                                                innerProps: {
                                                    callBack: v
                                                }
                                            }, u))
                                        },
                                        buttonType: "tertiary"
                                    }, {
                                        label: "View in Explorer",
                                        onClick: function(e) {
                                            Oe(o, x.DelegationAccount)
                                        },
                                        buttonType: "tertiary"
                                    }] : [{
                                        label: "Enable",
                                        onClick: function(e) {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "enablePDA",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Enable delegation account"
                                                }),
                                                innerProps: {
                                                    callBack: v
                                                }
                                            }, u))
                                        },
                                        buttonType: "tertiary"
                                    }],
                                    mobileShorten: null === x || void 0 === x ? void 0 : x.Enabled
                                }];
                                return (null === x || void 0 === x ? void 0 : x.Enabled) && x.DelegationAccount && e.push({
                                    label: "".concat(d, " balance"),
                                    costumComponentMiddle: (0, n.jsx)(M, {
                                        tokenBalance: null === ne || void 0 === ne ? void 0 : ne.WrappedTokenBalance,
                                        mobileModalTitle: "".concat(d, " balance")
                                    }),
                                    buttons: de
                                }), e
                            }().map((function(e, r) {
                                return (0, n.jsx)(L.l, {
                                    mobileShorten: e.mobileShorten,
                                    costumComponentMiddle: e.costumComponentMiddle,
                                    label: e.label,
                                    value: e.value,
                                    buttons: e.buttons
                                }, r)
                            })), (null === x || void 0 === x ? void 0 : x.Enabled) && x.DelegationAccount ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(_, {
                                    priceProviders: me.priceProviders,
                                    label: me.label,
                                    value: me.value,
                                    buttons: me.buttons,
                                    chainId: me.chainId,
                                    refetchProviders: me.refetchProviders,
                                    delegationAccount: null === x || void 0 === x ? void 0 : x.DelegationAccount
                                }), (0, n.jsx)(L.l, {
                                    mobileShorten: xe.mobileShorten,
                                    label: xe.label,
                                    value: xe.value,
                                    buttons: xe.buttons
                                })]
                            }) : (0, n.jsx)(n.Fragment, {})]
                        })
                    }), (0, n.jsx)(We, {
                        pendingDataPDARewards: U,
                        rewardsDataPDARewards: N,
                        refetchPDARewards: (0, y.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all([q(), K(), oe()]);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))),
                        DelegationAccountData: x,
                        flareDropData: ie,
                        flareDropDistributionRefetch: (0, y.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all([oe(), le()]);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })]
                })
            }
            var Oe = function(e, r) {
                e && r && window.open("".concat(G.lI[e].blockExplorerUrls[0], "/address/").concat(r), "_blank")
            };

            function Ie() {
                var e = (0, D.rZ)(),
                    r = (0, g.Mu)(),
                    t = (0, a.$6)(),
                    o = t.provider,
                    i = t.account,
                    l = t.supportedChainId,
                    c = (0, g.tS)(l),
                    d = c.nativeCurrency,
                    p = c.wrappedCurrency,
                    h = (0, Q.Y1)(),
                    m = h.activeTab,
                    x = h.setActiveTab,
                    v = (0, te.useState)(!1),
                    b = v[0],
                    f = v[1],
                    F = (0, E.e)(),
                    S = (0, g.ZN)(l),
                    R = (0, re.a)(["TokenBalances", i, l, m], (0, y.Z)(k().mark((function e() {
                        var r, t, n;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {
                                            TokenBalance: "",
                                            WrappedTokenBalance: ""
                                        }, o && i && l) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 3:
                                    return e.next = 5, (0, ee.yX)(o, i, l);
                                case 5:
                                    return t = e.sent, e.next = 8, (0, ee.Pc)(o, i, l);
                                case 8:
                                    return n = e.sent, e.abrupt("return", {
                                        TokenBalance: pe.formatEther(t),
                                        WrappedTokenBalance: pe.formatEther(n)
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: "main" == m
                    }),
                    B = R.data,
                    O = R.refetch,
                    N = R.isLoading,
                    q = (0, re.a)(["Delegations", i, l, m], (0, y.Z)(k().mark((function e() {
                        var r, t;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {
                                            FtsoDelegatees: []
                                        }, o && i && l) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 3:
                                    return e.next = 5, (0, $.Jb)(o, i, l);
                                case 5:
                                    return t = e.sent, e.abrupt("return", {
                                        FtsoDelegatees: (null === t || void 0 === t ? void 0 : t.delegates) ? t.delegates : []
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: "main" == m,
                        staleTime: 9e4
                    }),
                    H = q.data,
                    U = q.refetch,
                    K = q.isLoading,
                    ne = (0, j.Z)(ue({
                        queries: [{
                            queryKey: ["CombinedDelegationRewards", i, l, m],
                            queryFn: (0, y.Z)(k().mark((function e() {
                                var r, t;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = {
                                                    currentMangerRewards: !1,
                                                    oldMangerRewards: !1,
                                                    totalUnclaimedAmountCombined: "0.0",
                                                    oldManagerAdress: "0x"
                                                }, o && i && l) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", r);
                                        case 3:
                                            return e.next = 5, (0, V.lr)(o, i, l);
                                        case 5:
                                            return t = e.sent, e.abrupt("return", t);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            keepPreviousData: !1,
                            enabled: "main" == m,
                            staleTime: 9e4
                        }, {
                            queryKey: ["PendingRewards", i, l, m],
                            queryFn: (0, y.Z)(k().mark((function e() {
                                var r, t;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = {
                                                    currentRewardEpoch: 0,
                                                    totalPendingRewards: ""
                                                }, o && i && l) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", r);
                                        case 3:
                                            return e.next = 5, (0, V.Kv)(o, i, l);
                                        case 5:
                                            if (t = e.sent) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return", r);
                                        case 8:
                                            return e.abrupt("return", t);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            keepPreviousData: !1,
                            enabled: "main" == m,
                            staleTime: 9e4
                        }]
                    }), 2),
                    oe = ne[0],
                    ae = oe.data,
                    ie = oe.refetch,
                    le = ne[1],
                    se = le.data,
                    ce = le.refetch,
                    de = (0, re.a)(["FlareDrop", i, l, m], (0, y.Z)(k().mark((function e() {
                        var r, t;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {
                                            allClaimed: !1,
                                            claimableAmount: pe.formatEther(T.x),
                                            endMonth: null,
                                            claimableDistributions: []
                                        }, o && i && l) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 3:
                                    return e.next = 5, (0, J.Q)(o, i, l);
                                case 5:
                                    return t = e.sent, e.abrupt("return", t);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: "flare" == S && "main" == m,
                        staleTime: 9e4
                    }),
                    me = de.data,
                    xe = de.refetch,
                    ve = (0, re.a)(["ExecutorInfo", i, l, m], (0, y.Z)(k().mark((function e() {
                        var r, t, n, a, s;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {
                                            executor: "",
                                            registered: void 0,
                                            executorFee: "0.0"
                                        }, o && i && l) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 3:
                                    return e.next = 5, (0, X.Y5)(o, i, l);
                                case 5:
                                    if (0 != (t = e.sent).length) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 10:
                                    return e.next = 12, (0, X.bV)(o, t[0], l);
                                case 12:
                                    return n = e.sent, a = n._registered ? "registered" : "manual", s = pe.formatEther(n._currentFeeValue), e.abrupt("return", {
                                        executor: t[0],
                                        registered: a,
                                        executorFee: s
                                    });
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), {
                        enabled: "main" == m,
                        staleTime: 9e4
                    }),
                    be = ve.data,
                    ge = ve.refetch,
                    fe = (0, Z.Y)((function() {
                        return (0, $.Sq)(o, l)
                    }), {
                        supportedChainId: l,
                        showNotifications: !0,
                        transactionActive: f,
                        onSuccessCallback: (0, y.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all([U(), O()]);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }),
                    ye = [{
                        label: "Wrap",
                        buttonType: "tertiary",
                        onClick: function(e) {
                            (0, P.m6)((0, w.Z)({
                                modal: "wrapTokens",
                                title: (0, n.jsxs)(I.r, {
                                    children: ["Wrap ", d, " Tokens"]
                                }),
                                innerProps: {
                                    callBack: O,
                                    TokenBalance: null === B || void 0 === B ? void 0 : B.TokenBalance
                                }
                            }, F))
                        }
                    }, {
                        label: "Send",
                        buttonType: "tertiary",
                        onClick: function(e) {
                            (0, P.m6)((0, w.Z)({
                                modal: "sendTokens",
                                title: (0, n.jsxs)(I.r, {
                                    children: ["Send ", d, " tokens"]
                                }),
                                innerProps: {
                                    callBack: O,
                                    TokenBalance: null === B || void 0 === B ? void 0 : B.TokenBalance
                                }
                            }, F))
                        }
                    }],
                    we = [{
                        label: "Unwrap",
                        buttonType: "tertiary",
                        onClick: function(e) {
                            (0, P.m6)((0, w.Z)({
                                modal: "unwrapWrappedtokens",
                                title: (0, n.jsxs)(I.r, {
                                    children: ["Unwrap ", p, " Tokens"]
                                }),
                                innerProps: {
                                    callBack: O,
                                    WrappedTokenBalance: null === B || void 0 === B ? void 0 : B.WrappedTokenBalance
                                }
                            }, F))
                        }
                    }, {
                        label: "Send",
                        buttonType: "tertiary",
                        onClick: function(e) {
                            (0, P.m6)((0, w.Z)({
                                modal: "sendWrappedTokens",
                                title: (0, n.jsxs)(I.r, {
                                    children: ["Send ", p, " tokens"]
                                }),
                                innerProps: {
                                    callBack: O,
                                    WrappedBalance: null === B || void 0 === B ? void 0 : B.WrappedTokenBalance
                                }
                            }, F))
                        }
                    }],
                    je = [{
                        label: "Account address",
                        value: i,
                        buttons: [{
                            label: "View in Explorer",
                            onClick: function(e) {
                                Oe(l, i)
                            },
                            buttonType: "tertiary"
                        }],
                        mobileShorten: !0
                    }, {
                        label: "".concat(d, " balance"),
                        costumComponentMiddle: (0, n.jsx)(M, {
                            tokenBalance: null === B || void 0 === B ? void 0 : B.TokenBalance,
                            mobileModalTitle: "".concat(d, " balance")
                        }),
                        buttons: ye
                    }, {
                        label: "".concat(p, " balance"),
                        costumComponentMiddle: (0, n.jsx)(M, {
                            tokenBalance: null === B || void 0 === B ? void 0 : B.WrappedTokenBalance,
                            mobileModalTitle: "".concat(p, " balance")
                        }),
                        buttons: we
                    }],
                    Fe = {
                        label: "Executor",
                        buttons: (null === be || void 0 === be ? void 0 : be.executor) ? [{
                            label: "Change",
                            buttonType: "tertiary",
                            onClick: function(e) {
                                (0, P.m6)((0, w.Z)({
                                    modal: "setExecutor",
                                    title: (0, n.jsx)(I.r, {
                                        children: "Set executor"
                                    }),
                                    innerProps: {
                                        callBack: (0, y.Z)(k().mark((function e() {
                                            return k().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Promise.all([ge(), O()]);
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))
                                    }
                                }, F))
                            }
                        }] : [{
                            label: "Add",
                            buttonType: "tertiary",
                            onClick: function(e) {
                                (0, P.m6)((0, w.Z)({
                                    modal: "setExecutor",
                                    title: (0, n.jsx)(I.r, {
                                        children: "Set executor"
                                    }),
                                    innerProps: {
                                        callBack: (0, y.Z)(k().mark((function e() {
                                            return k().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Promise.all([ge(), O()]);
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))
                                    }
                                }, F))
                            }
                        }],
                        costumComponentMiddle: be ? (0, n.jsx)(W, {
                            ExecutorData: be
                        }) : (0, n.jsx)(u.x, {
                            color: e.primaryColor,
                            children: "/"
                        })
                    },
                    ke = {
                        label: "FTSO provider delegations",
                        value: H ? H.FtsoDelegatees.map((function(e, r) {
                            return "".concat(e.address, " (").concat(e.percentage, "%)")
                        })).join(" ") : "None",
                        buttons: function() {
                            switch (l) {
                                case G.AW.Flare:
                                case G.AW.Coston2:
                                    var e = [{
                                            label: (null === H || void 0 === H ? void 0 : H.FtsoDelegatees) && (null === H || void 0 === H ? void 0 : H.FtsoDelegatees.length) >= 1 ? "Redelegate" : "Delegate",
                                            buttonType: "tertiary",
                                            onClick: function(e) {
                                                (0, P.m6)((0, w.Z)({
                                                    modal: "FTSODelegations",
                                                    title: (0, n.jsx)(I.r, {
                                                        children: "Delegate FTSO providers"
                                                    }),
                                                    innerProps: {
                                                        callBack: (0, y.Z)(k().mark((function e() {
                                                            return k().wrap((function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return e.next = 2, Promise.all([U(), O()]);
                                                                    case 2:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        }))),
                                                        DelegationsData: H
                                                    }
                                                }, F))
                                            }
                                        }],
                                        r = (null === H || void 0 === H ? void 0 : H.FtsoDelegatees.reduce((function(e, r) {
                                            return e + r.percentage
                                        }), 0)) || 0;
                                    return ((null === H || void 0 === H ? void 0 : H.FtsoDelegatees) && (null === H || void 0 === H ? void 0 : H.FtsoDelegatees.length) >= 1 || r >= 100) && e.push({
                                        label: "Undelegate all",
                                        buttonType: "tertiary",
                                        onClick: function(e) {
                                            fe.mutate()
                                        }
                                    }), e;
                                case G.AW.Songbird:
                                case G.AW.Coston:
                                    var t = (null === H || void 0 === H ? void 0 : H.FtsoDelegatees.reduce((function(e, r) {
                                        return e + r.percentage
                                    }), 0)) || 0;
                                    return (null === H || void 0 === H ? void 0 : H.FtsoDelegatees) && (null === H || void 0 === H ? void 0 : H.FtsoDelegatees.length) >= 1 || t >= 100 ? [{
                                        label: "Undelegate all",
                                        buttonType: "tertiary",
                                        onClick: function(e) {
                                            fe.mutate()
                                        }
                                    }] : [{
                                        label: "Delegate",
                                        buttonType: "tertiary",
                                        onClick: function(e) {
                                            (0, P.m6)((0, w.Z)({
                                                modal: "FTSODelegationsSongbird",
                                                title: (0, n.jsx)(I.r, {
                                                    children: "Delegate FTSO provider"
                                                }),
                                                innerProps: {
                                                    callBack: (0, y.Z)(k().mark((function e() {
                                                        return k().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.next = 2, Promise.all([U(), O()]);
                                                                case 2:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    }))),
                                                    DelegationsData: H,
                                                    delegationAccount: void 0
                                                }
                                            }, F))
                                        }
                                    }];
                                default:
                                    return []
                            }
                        }(),
                        priceProviders: null === H || void 0 === H ? void 0 : H.FtsoDelegatees,
                        refetchProviders: U,
                        chainId: l
                    },
                    De = function() {
                        switch (r) {
                            case "xs":
                            case "sm":
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(C.K, {
                                        align: "center",
                                        spacing: "md",
                                        pb: "md",
                                        mx: "xs",
                                        children: (0, n.jsxs)(s.m.List, {
                                            children: [(0, n.jsx)(s.m.Tab, {
                                                value: "main",
                                                children: "Main Account"
                                            }), (0, n.jsx)(s.m.Tab, {
                                                value: "delegation",
                                                children: "Delegation Account"
                                            })]
                                        })
                                    }), (0, n.jsx)(A.i, {
                                        size: "xs"
                                    })]
                                });
                            default:
                                return (0, n.jsx)(n.Fragment, {})
                        }
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(z.f, {
                        transaction: b,
                        borderRadius: e.radius.xs,
                        visible: N && "main" == m || K && "main" == m || b,
                        overlayBlur: 2
                    }), (0, n.jsxs)(Y.Y, {
                        variant: "pills",
                        defaultValue: "main",
                        value: m,
                        onTabChange: function(e) {
                            return x(e)
                        },
                        children: [(0, n.jsx)(De, {}), (0, n.jsxs)(s.m.Panel, {
                            value: "main",
                            pt: "xs",
                            children: [(0, n.jsx)(he.J, {
                                children: (0, n.jsxs)(C.K, {
                                    spacing: "lg",
                                    pt: "sm",
                                    children: [je.map((function(e, r) {
                                        return (0, n.jsx)(L.l, {
                                            costumComponentMiddle: e.costumComponentMiddle,
                                            mobileShorten: e.mobileShorten,
                                            label: e.label,
                                            value: e.value,
                                            buttons: e.buttons
                                        }, r)
                                    })), (0, n.jsx)(_, {
                                        priceProviders: ke.priceProviders,
                                        label: ke.label,
                                        value: ke.value,
                                        buttons: ke.buttons,
                                        chainId: ke.chainId,
                                        refetchProviders: ke.refetchProviders
                                    }), (0, n.jsx)(L.l, {
                                        costumComponentMiddle: Fe.costumComponentMiddle,
                                        label: Fe.label,
                                        buttons: Fe.buttons
                                    })]
                                })
                            }), (0, n.jsx)(Ze, {
                                rewardsData: ae,
                                pendingData: se,
                                rewardsRefetch: (0, y.Z)(k().mark((function e() {
                                    return k().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Promise.all([ie(), ce(), O()]);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                flareDropData: me,
                                flareDropDistributionRefetch: (0, y.Z)(k().mark((function e() {
                                    return k().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Promise.all([O(), xe()]);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            })]
                        }), (0, n.jsx)(s.m.Panel, {
                            value: "delegation",
                            pt: "xs",
                            children: (0, n.jsx)(Be, {})
                        })]
                    })]
                })
            }

            function Me() {
                return (0, n.jsx)(f.Z, {
                    shadow: "md",
                    radius: "sm",
                    withBorder: !0,
                    children: (0, n.jsx)(f.Z.Section, {
                        children: (0, n.jsx)(Ie, {})
                    })
                })
            }
            var ze = t(9150);

            function Le() {
                return (0, n.jsx)(f.Z, {
                    radius: "sm",
                    withBorder: !0,
                    children: (0, n.jsx)(f.Z.Section, {
                        children: (0, n.jsxs)(me.x, {
                            pt: "lg",
                            pb: "lg",
                            pl: "md",
                            pr: "md",
                            sx: function(e) {
                                return {
                                    background: e.colors.flare[6],
                                    color: "#ffffff",
                                    fontSize: e.fontSizes.md
                                }
                            },
                            children: [(0, n.jsxs)(u.x, {
                                children: ["Here, you can manage both Songbird (SGB) and Flare (FLR) network tokens, wrap and delegate them to FTSO data providers and thereby contribute to the networks' decentralization and stability. You can also participate in governance voting from this portal.", " "]
                            }), (0, n.jsx)(N.T, {
                                h: "md"
                            }), (0, n.jsxs)(u.x, {
                                children: ["Please start by clicking on the \u2018Connect to Wallet\u2019 button, select your wallet and follow the instructions. This page is compatible for both desktop and mobile browsers. For technical support, please make a request in the General room on our", " ", (0, n.jsx)(u.x, {
                                    sx: {
                                        color: "#E62058",
                                        cursor: "pointer"
                                    },
                                    span: !0,
                                    td: "underline",
                                    onClick: function() {
                                        return window.open("https://discord.com/invite/flarenetwork")
                                    },
                                    children: "Discord"
                                }), " ", "or on our", " ", (0, n.jsx)(u.x, {
                                    sx: {
                                        color: "#E62058",
                                        cursor: "pointer"
                                    },
                                    span: !0,
                                    td: "underline",
                                    onClick: function() {
                                        return window.open("https://t.me/FlareNetwork")
                                    },
                                    children: "Telegram"
                                }), "."]
                            })]
                        })
                    })
                })
            }
            var Ne = t(91093),
                qe = [{
                    title: "What is a Personal delegation account (PDA)?",
                    body: "Every address on the Songbird network can have its own personal delegation account. A PDA is essentially an address, meant for temporary storage of funds. It has a limited set of possible actions, and you can only withdraw funds from it to your main account."
                }, {
                    title: "How can I use a PDA?",
                    body: "A PDA allows you to delay the realization of earnings from FTSO delegations without risking the loss of not claiming them in time since the claiming for past epochs is limited. Your PDA can serve as an intermediary storage for rewards that can at some later time be transferred to your main account, which can lead to positive tax benefits in certain jurisdictions."
                }, {
                    title: "What actions can I perform as an owner of a PDA?",
                    body: "You can delegate the tokens held on your PDA to FTSO data providers and claim the rewards. Moreover, you can claim the rewards you are entitled to on your main account directly to your PDA. You can also withdraw funds from the PDA, but only to your main account."
                }, {
                    title: "Can I close my PDA?",
                    body: "Yes. This action will also transfer any wrapped Songbird tokens still on your PDA to your main account. You can also reopen your PDA at a later time."
                }, {
                    title: "Why are there no SGB tokens shown on my PDA?",
                    body: "All SGB tokens received to your PDA will be wrapped automatically. Therefore, you will only see wrapped SGB tokens on your PDA. Consequently, you do not need to wrap any tokens on your PDA before delegating them."
                }, {
                    title: "Can the tokens in my PDA be used for voting on governance proposals?",
                    body: "Not directly but you can delegate your votes to some other account (e.g., to your main account) which can use them in the voting process."
                }],
                He = function() {
                    var e = (0, a.$6)(),
                        r = e.provider,
                        t = e.account,
                        d = e.supportedChainId,
                        u = (0, Q.Y1)(),
                        p = u.activeTab,
                        h = u.setActiveTab,
                        m = (0, g.ZN)(d);
                    return t && r ? (0, n.jsx)(o.Z, {
                        children: (0, n.jsxs)(ze._, {
                            children: [(0, n.jsxs)(i.Z, {
                                position: "apart",
                                sx: {
                                    alignItems: "baseline"
                                },
                                pb: 10,
                                children: [(0, n.jsx)(Ne.V, {
                                    helpmodalTitle: "delegation" == p ? "Help on personal delegation account" : "Help on account",
                                    helpModalContent: "flare" == m ? (0, n.jsx)(c.f, {
                                        QNAs: "delegation" == p ? b.J : x
                                    }) : (0, n.jsx)(c.f, {
                                        QNAs: "delegation" == p ? qe : v
                                    }),
                                    children: "Account information"
                                }), (0, n.jsx)(l.z, {
                                    smallerThan: "sm",
                                    styles: {
                                        display: "none"
                                    },
                                    children: (0, n.jsx)(Y.Y, {
                                        variant: "pills",
                                        defaultValue: "main",
                                        value: p,
                                        onTabChange: function(e) {
                                            return h(e)
                                        },
                                        children: (0, n.jsxs)(s.m.List, {
                                            children: [(0, n.jsx)(s.m.Tab, {
                                                value: "main",
                                                children: "Main Account"
                                            }), (0, n.jsx)(s.m.Tab, {
                                                value: "delegation",
                                                children: "Delegation Account"
                                            })]
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(Me, {})]
                        })
                    }) : (0, n.jsx)(o.Z, {
                        children: (0, n.jsxs)(ze._, {
                            children: [(0, n.jsx)(Ne.V, {
                                helpModalContent: void 0,
                                children: "Welcome to the Flare portal!"
                            }), (0, n.jsx)(Le, {})]
                        })
                    })
                }
        },
        47129: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return p
                }
            });
            var n = t(26042),
                o = t(85893),
                a = t(64761),
                i = t(34736),
                l = t(95117),
                s = t(25963),
                c = t(37882),
                d = t(95566),
                u = t(60102);

            function p(e) {
                var r = (0, a.rZ)(),
                    t = (0, u.e)();
                return (0, o.jsx)(i.k, {
                    onClick: function() {
                        return (0, s.h7)((0, n.Z)({
                            title: (0, o.jsx)(d.r, {
                                children: e.title
                            }),
                            children: (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(l.x, {
                                    sx: {
                                        overflowWrap: "break-word"
                                    },
                                    size: "lg",
                                    color: r.primaryColor,
                                    children: e.text
                                })
                            })
                        }, t))
                    },
                    children: (0, o.jsx)(c.tE, {
                        size: 25,
                        fill: "#9A9A9A"
                    })
                })
            }
        },
        14579: function(e, r, t) {
            "use strict";
            t.d(r, {
                J: function() {
                    return d
                }
            });
            var n = t(14924),
                o = t(26042),
                a = t(69396),
                i = t(85893),
                l = t(56817),
                s = t(21017),
                c = (0, l.k)((function(e) {
                    return {
                        section: (0, n.Z)({
                            paddingTop: e.spacing.md,
                            paddingBottom: e.spacing.md,
                            paddingLeft: "45px",
                            paddingRight: "45px"
                        }, "@media (max-width: ".concat(e.breakpoints.md, ")"), {
                            paddingTop: e.spacing.xs,
                            paddingBottom: e.spacing.xs,
                            paddingLeft: "8px",
                            paddingRight: "8px"
                        })
                    }
                }));

            function d(e) {
                var r = c().classes;
                return (0, i.jsx)(s.Z, {
                    mt: 20,
                    children: (0, i.jsx)(s.Z.Section, (0, a.Z)((0, o.Z)({
                        className: r.section
                    }, e), {
                        children: e.children
                    }))
                })
            }
        },
        45441: function(e, r, t) {
            "use strict";
            t.d(r, {
                l: function() {
                    return h
                }
            });
            var n = t(85893),
                o = t(21017),
                a = t(71232),
                i = t(95117),
                l = t(64761),
                s = t(97564),
                c = t(56378),
                d = t(49384),
                u = t(47129),
                p = t(83824);

            function h(e) {
                var r = function() {
                        return (0, n.jsx)(o.Z, {
                            pr: "12px",
                            pl: "28px",
                            p: 9,
                            sx: function(e) {
                                return {
                                    background: "rgba(154, 154, 154, 0.05)",
                                    borderRadius: e.radius.xl,
                                    pointerEvents: "none",
                                    "&:hover": {
                                        background: "rgba(154, 154, 154, 0.35)"
                                    }
                                }
                            },
                            children: (0, n.jsxs)(a.Z, {
                                position: "apart",
                                spacing: 0,
                                children: [(0, n.jsxs)(a.Z, {
                                    children: [(0, n.jsx)(i.x, {
                                        style: {
                                            minWidth: "120px"
                                        },
                                        color: "#535353",
                                        children: e.label
                                    }), e.value ? (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)(i.x, {
                                            style: {
                                                maxWidth: "500px"
                                            },
                                            color: t.primaryColor,
                                            children: e.value
                                        })
                                    }) : e.costumComponentMiddle ? e.costumComponentMiddle : (0, n.jsx)(n.Fragment, {})]
                                }), (0, n.jsx)(a.Z, {
                                    position: "right",
                                    spacing: "xs",
                                    children: e.buttons ? e.buttons.map((function(e, r) {
                                        return (0, n.jsx)(p.e, {
                                            buttonType: e.buttonType,
                                            label: e.label,
                                            onClick: function(r) {
                                                return e.onClick(r)
                                            },
                                            isDisabled: e.isDisabled
                                        }, r)
                                    })) : e.costumComponentEnd ? e.costumComponentEnd : (0, n.jsx)(n.Fragment, {})
                                })]
                            })
                        })
                    },
                    t = (0, l.rZ)(),
                    h = function() {
                        return (0, n.jsx)(o.Z, {
                            pr: "10px",
                            pl: "10px",
                            p: 9,
                            sx: function(e) {
                                return {
                                    background: "rgba(154, 154, 154, 0.05)",
                                    borderRadius: e.radius.xl
                                }
                            },
                            children: (0, n.jsxs)(s.K, {
                                align: "center",
                                children: [(0, n.jsx)(i.x, {
                                    align: "center",
                                    color: "#9A9A9A",
                                    children: e.label
                                }), e.value ? (0, n.jsxs)(a.Z, {
                                    spacing: "sm",
                                    position: "center",
                                    children: [(0, n.jsx)(i.x, {
                                        align: "center",
                                        style: {
                                            maxWidth: "500px",
                                            wordBreak: "break-all"
                                        },
                                        color: t.primaryColor,
                                        children: e.mobileShorten ? (0, d.Sy)(e.value.toString(), 7, 7) : e.value
                                    }), e.mobileShorten && (0, n.jsx)(u.Z, {
                                        title: e.label,
                                        text: e.value.toString()
                                    })]
                                }) : e.costumComponentMiddle ? e.costumComponentMiddle : (0, n.jsx)(n.Fragment, {}), (0, n.jsx)(a.Z, {
                                    position: "center",
                                    spacing: "xs",
                                    children: e.buttons ? e.buttons.map((function(e, r) {
                                        return (0, n.jsx)(p.e, {
                                            buttonType: e.buttonType,
                                            label: e.label,
                                            onClick: function(r) {
                                                return e.onClick(r)
                                            },
                                            isDisabled: e.isDisabled
                                        }, r)
                                    })) : e.costumComponentEnd ? e.costumComponentEnd : (0, n.jsx)(n.Fragment, {})
                                })]
                            })
                        })
                    };
                switch ((0, c.Mu)()) {
                    case "xs":
                    case "sm":
                    case "md":
                        return (0, n.jsx)(h, {});
                    default:
                        return (0, n.jsx)(r, {})
                }
            }
        },
        10319: function(e, r, t) {
            "use strict";
            t.d(r, {
                Y: function() {
                    return s
                }
            });
            var n = t(14924),
                o = t(26042),
                a = t(69396),
                i = t(85893),
                l = t(80579);

            function s(e) {
                return (0, i.jsx)(l.m, (0, o.Z)({
                    unstyled: !0,
                    styles: function(e) {
                        return {
                            root: (0, n.Z)({}, "@media (max-width: ".concat(e.breakpoints.md, ")"), {
                                marginTop: "30px"
                            }),
                            tab: (0, a.Z)((0, o.Z)({}, e.fn.focusStyles()), (0, n.Z)({
                                height: "45px",
                                backgroundColor: "#F0F0F0",
                                color: "#9A9A9A",
                                border: "none",
                                padding: "".concat(e.spacing.xs, " ").concat(e.spacing.md),
                                cursor: "pointer",
                                fontSize: e.fontSizes.xl,
                                display: "flex",
                                alignItems: "center",
                                borderRadius: e.radius.xl,
                                "&:disabled": {
                                    opacity: .5,
                                    cursor: "not-allowed"
                                },
                                "&[data-active]": {
                                    backgroundColor: e.colors.flare[6],
                                    color: "#FFFFFF"
                                }
                            }, "@media (max-width: ".concat(e.breakpoints.xs, ")"), {
                                fontSize: e.fontSizes.lg
                            })),
                            tabsList: (0, n.Z)({
                                display: "flex",
                                borderRadius: e.radius.xl,
                                backgroundColor: "#F0F0F0",
                                border: "1px solid #E3E3E3"
                            }, "@media (max-width: ".concat(e.breakpoints.xs, ")"), {})
                        }
                    }
                }, e))
            }
        }
    },
    function(e) {
        e.O(0, [612, 579, 123, 774, 888, 179], (function() {
            return r = 48312, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);