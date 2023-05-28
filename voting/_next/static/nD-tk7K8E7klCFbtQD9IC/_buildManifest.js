self.__BUILD_MANIFEST = function(s, a, e, t) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/:nextInternalLocale(en)/14/api/:path*"
            }, {
                source: "/:nextInternalLocale(en)/19/api/:path*"
            }],
            fallback: []
        },
        "/": [s, e, a, "static/chunks/pages/index-e13f1f7640dd6605.js"],
        "/_error": ["static/chunks/pages/_error-effe22be6ff34abe.js"],
        "/proposal/view/[proposalId]": [s, e, "static/chunks/939-64fe24338e9bb6f9.js", a, t, "static/chunks/pages/proposal/view/[proposalId]-c0a0b751c7ef861f.js"],
        "/voting": [s, "static/chunks/834-7f27472463fc3033.js", a, t, "static/chunks/pages/voting-389c80254f34618f.js"],
        sortedPages: ["/", "/_app", "/_error", "/proposal/view/[proposalId]", "/voting"]
    }
}("static/chunks/612-c9b70ae49e128cfb.js", "static/chunks/123-4b91f53726ac536f.js", "static/chunks/579-502800cbca432dea.js", "static/chunks/715-03c076f63090a4e3.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();