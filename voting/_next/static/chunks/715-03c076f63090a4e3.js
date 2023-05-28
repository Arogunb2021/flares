"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [715], {
        35001: function(e, t, o) {
            o.d(t, {
                YK: function() {
                    return r
                },
                o5: function() {
                    return a
                },
                PX: function() {
                    return s
                },
                ER: function() {
                    return i
                }
            });
            var n, r, a, s, i, c, l = o(47568),
                u = o(14924),
                h = o(82670),
                d = o(26042),
                p = o(69396),
                f = o(828),
                y = o(34051),
                v = o.n(y),
                b = o(9669),
                m = o.n(b),
                w = o(6230),
                E = o.n(w),
                g = o(51438),
                T = o(28668),
                R = o(25892),
                I = o(71418),
                k = ((0, R.Z)(Error), o(52951)),
                A = ((0, R.Z)(Error), o(48764).Buffer),
                S = function(e) {
                    return void 0 !== e && null !== e
                },
                N = function(e) {
                    return "string" === typeof e
                },
                O = function(e) {
                    return N(e) && "" !== e
                },
                _ = function(e) {
                    return "object" === typeof e && "string" === typeof e.type && "function" === typeof e.stream && "function" === typeof e.arrayBuffer && "function" === typeof e.constructor && "string" === typeof e.constructor.name && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag])
                },
                D = function(e) {
                    try {
                        return btoa(e)
                    } catch (t) {
                        return A.from(e).toString("base64")
                    }
                },
                W = function() {
                    var e = (0, l.Z)(v().mark((function e(t, o) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("function" !== typeof o) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", o(t));
                                case 2:
                                    return e.abrupt("return", o);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }();
            (function() {
                var e = (0, l.Z)(v().mark((function e(t, o, n) {
                    var r, a, s, i, c, l, y;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, W(o, t.TOKEN);
                            case 2:
                                return r = e.sent, e.next = 5, W(o, t.USERNAME);
                            case 5:
                                return a = e.sent, e.next = 8, W(o, t.PASSWORD);
                            case 8:
                                return s = e.sent, e.next = 11, W(o, t.HEADERS);
                            case 11:
                                return i = e.sent, c = "function" === typeof(null === n || void 0 === n ? void 0 : n.getHeaders) && (null === n || void 0 === n ? void 0 : n.getHeaders()) || {}, l = Object.entries((0, d.Z)({
                                    Accept: "application/json"
                                }, i, o.headers, c)).filter((function(e) {
                                    var t = (0, f.Z)(e, 2),
                                        o = (t[0], t[1]);
                                    return S(o)
                                })).reduce((function(e, t) {
                                    var o = (0, f.Z)(t, 2),
                                        n = o[0],
                                        r = o[1];
                                    return (0, p.Z)((0, d.Z)({}, e), (0, u.Z)({}, n, String(r)))
                                }), {}), O(r) && (l.Authorization = "Bearer ".concat(r)), O(a) && O(s) && (y = D("".concat(a, ":").concat(s)), l.Authorization = "Basic ".concat(y)), o.body && (o.mediaType ? l["Content-Type"] = o.mediaType : _(o.body) ? l["Content-Type"] = o.body.type || "application/octet-stream" : N(o.body) ? l["Content-Type"] = "text/plain" : (v = o.body, (0, h.Z)(v, E()) || (l["Content-Type"] = "application/json"))), e.abrupt("return", l);
                            case 18:
                            case "end":
                                return e.stop()
                        }
                        var v
                    }), e)
                })))
            })(),
            function() {
                var e = (0, l.Z)(v().mark((function e(t, o, n, r, a, s, i) {
                    var c, l, u;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return c = m().CancelToken.source(), l = {
                                    url: n,
                                    headers: s,
                                    data: null !== r && void 0 !== r ? r : a,
                                    method: o.method,
                                    withCredentials: t.WITH_CREDENTIALS,
                                    cancelToken: c.token
                                }, i((function() {
                                    return c.cancel("The user aborted a request.")
                                })), e.prev = 3, e.next = 6, m().request(l);
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 9:
                                if (e.prev = 9, e.t0 = e.catch(3), !(u = e.t0).response) {
                                    e.next = 14;
                                    break
                                }
                                return e.abrupt("return", u.response);
                            case 14:
                                throw e.t0;
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 9]
                    ])
                })))
            }();
            ! function(e) {
                e.OK = "OK", e.ERROR = "ERROR", e.REQUEST_BODY_ERROR = "REQUEST_BODY_ERROR", e.VALIDATION_ERROR = "VALIDATION_ERROR", e.TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS", e.UNAUTHORIZED = "UNAUTHORIZED", e.AUTH_ERROR = "AUTH_ERROR", e.UPSTREAM_HTTP_ERROR = "UPSTREAM_HTTP_ERROR", e.INVALID_REQUEST = "INVALID_REQUEST", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.PENDING = "PENDING"
            }(n || (n = {})),
            function(e) {
                e.ACCEPT = "accept", e.REJECT = "reject"
            }(r || (r = {})),
            function(e) {
                e.START_TIME = "startTime", e.END_TIME = "endTime", e.VOTE_POWER_BLOCK = "votePowerBlock", e.CONTRACT = "contract", e.PROPOSAL_ID = "proposalId", e.POLLING_TYPE = "pollingType", e.DESCRIPTION = "description"
            }(a || (a = {})),
            function(e) {
                e.PENDING = "Pending", e.ACTIVE = "Active", e.DEFEATED = "Defeated", e.SUCCEEDED = "Succeeded", e.CANCELED = "Canceled"
            }(s || (s = {})),
            function(e) {
                e.ASC = "ASC", e.DESC = "DESC"
            }(i || (i = {})),
            function(e) {
                e.WEIGHT = "weight", e.ID = "id"
            }(c || (c = {}))
        },
        64948: function(e, t, o) {
            o.d(t, {
                E: function() {
                    return a
                }
            });
            var n = o(85893),
                r = o(95117),
                a = [{
                    title: "How do I wrap my tokens so that I can vote?",
                    body: "Click the Account tab, locate your FLR balance, and click the Wrap button."
                }, {
                    title: "How are my current votes calculated?",
                    body: "The number of wrapped tokens you currently own equals the number of votes you currently have. However, if you transferred your votes to another address or if you received votes from other addresses, the number of your votes will be different. See the question about the transfer of votes for more information."
                }, {
                    title: "Why do I have a different number of votes on different proposals? Why is my current number of votes different from the number of votes I have available for voting on a proposal?",
                    body: "When a proposal is created, a random block from a few days before the proposal\u2019s creation is selected. The number of wrapped tokens you owned at that time, known as the vote calculation time, represents the number of votes available for voting on the proposal. Therefore, the number of votes you have can be different at different times."
                }, {
                    title: "Can I revoke or change my vote?",
                    body: "No. Once you have voted, you cannot revoke your vote or vote again."
                }, {
                    title: "Where can I see information about my votes?",
                    body: "You can see this information on the specific proposal\u2019s page."
                }, {
                    title: "How does transferring of votes work?",
                    body: "Votes can be transferred to another account while the WFLR tokens remain in your possession. This is useful, for example, if you have WFLR in multiple self-custody wallets, since you can simplify your voting process by transferring all the votes to a single wallet and voting only with that wallet. Note that you are crediting another account with votes only; the tokens themselves stay in the original wallet. Vote transfers remain active until you cancel them."
                }, {
                    title: "Who can submit new proposals? When will new proposals be published?",
                    body: "New proposals are submitted only by the Flare Foundation. Additionally, the Flare Foundation announces new proposals before they are published on its official web site and social media accounts."
                }, {
                    title: "What are the possible proposal statuses?",
                    body: "Before the voting can start, the status of a proposal is Pending. When you can vote, the status is Active. When voting has ended, the status is either Accepted or Rejected, depending on the results of the vote."
                }, {
                    title: "What are the criteria for accepting proposals?",
                    body: "Flare improvement proposal (FIP) will be accepted if a majority of votes cast are in favor of the proposal and the threshold (required voter turnout) is exceeded. Needed majority and threshold percentages are defined in each proposal."
                }, {
                    title: "Are the accepted proposals automatically executed?",
                    body: "No. The voting process is a poll for the Flare Foundation, which is responsible for abiding by the voting results. Unless evidence shows that a proposal, the voting process, or both were manipulated, the Flare Foundation will implement every accepted proposal."
                }, {
                    title: "Where can I get more information about the voting contracts and their functions?",
                    body: (0, n.jsxs)(n.Fragment, {
                        children: ["See the ", (0, n.jsx)(r.x, {
                            sx: {
                                color: "#E62058",
                                cursor: "pointer"
                            },
                            target: "_blank",
                            component: "a",
                            href: "https://docs.flare.network",
                            "aria-label": "Read more on Flare Documentation site",
                            children: "Flare Documentation site"
                        }), "."]
                    })
                }]
        },
        67370: function(e, t, o) {
            o.d(t, {
                L: function() {
                    return a
                }
            });
            var n = o(85893),
                r = o(95117),
                a = [{
                    title: "How do I wrap my tokens so that I can vote?",
                    body: "Click the Account tab, locate your SGB balance, and click the Wrap button."
                }, {
                    title: "How are my current votes calculated?",
                    body: "The number of wrapped tokens you currently own equals the number of votes you currently have. However, if you transferred your votes to another address or if you received votes from other addresses, the number of your votes will be different. See the question about the transfer of votes for more information."
                }, {
                    title: "Why do I have a different number of votes on different proposals? Why is my current number of votes different from the number of votes I have available for voting on a proposal?",
                    body: "When a proposal is created, a random block from a few days before the proposal\u2019s creation is selected. The number of wrapped tokens you owned at that time, known as the vote calculation time, represents the number of votes available for voting on the proposal. Therefore, the number of votes you have can be different at different times."
                }, {
                    title: "Can I revoke or change my vote?",
                    body: "No. Once you have voted, you cannot revoke your vote or vote again."
                }, {
                    title: "Where can I see information about my votes?",
                    body: "You can see this information on the specific proposal\u2019s page."
                }, {
                    title: "How does transferring of votes work?",
                    body: "Votes can be transferred to another account while the WSGB tokens remain in your possession. This is useful, for example, if you have WSGB in multiple self-custody wallets, since you can simplify your voting process by transferring all the votes to a single wallet and voting only with that wallet. Note that you are crediting another account with votes only; the tokens themselves stay in the original wallet. Vote transfers remain active until you cancel them."
                }, {
                    title: "Who can submit new proposals? When will new proposals be published?",
                    body: "New proposals are submitted only by the Flare Foundation. Additionally, the Flare Foundation announces new proposals before they are published on its official web site and social media accounts."
                }, {
                    title: "What are the possible proposal statuses?",
                    body: "Before the voting can start, the status of a proposal is Pending. When you can vote, the status is Active. When voting has ended, the status is either Accepted or Rejected, depending on the results of the vote."
                }, {
                    title: "What are the criteria for accepting proposals?",
                    body: "Songbird test proposals (STPs) will be accepted except if the majority of cast votes are against the proposal and the threshold (the percentage of votes needed to be cast) is exceeded. Specific thresholds are defined in each proposal."
                }, {
                    title: "Are the accepted proposals automatically executed?",
                    body: "No. The voting process is a poll for the Flare Foundation, which is responsible for abiding by the voting results. Unless evidence shows that a proposal, the voting process, or both were manipulated, the Flare Foundation will implement every accepted proposal."
                }, {
                    title: "Where can I get more information about the voting contracts and their functions?",
                    body: (0, n.jsxs)(n.Fragment, {
                        children: ["See the ", (0, n.jsx)(r.x, {
                            sx: {
                                color: "#E62058",
                                cursor: "pointer"
                            },
                            target: "_blank",
                            component: "a",
                            href: "https://docs.flare.network",
                            "aria-label": "Read more on Flare Documentation site",
                            children: "Flare Documentation site"
                        }), "."]
                    })
                }]
        }
    }
]);