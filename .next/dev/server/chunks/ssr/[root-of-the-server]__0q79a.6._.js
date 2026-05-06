module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/blog/blogito/blogito/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/blog/blogito/blogito/app/favicon.ico.mjs { IMAGE => \"[project]/blog/blogito/blogito/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/blog/blogito/blogito/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/blog/blogito/blogito/lib/getPosts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//hacer un endpoint donde se puedan subr imagenes para usar y no usar el cache y ademas el force cache 
//hacerun curd de mensajes que suban mensajes nadamas 
__turbopack_context__.s([
    "getPosts",
    ()=>getPosts
]);
// ":D": "sonrisa.jpg"
const images = [
    "public/assets/images.jpeg",
    "public/assets/images2.jpeg",
    "public/assets/images3.jpeg"
];
async function getPosts(options) {
    // Fetch que simula el cache de Next
    await fetch("https://google.com", options);
    return Array.from({
        length: 5
    }).map((_, i)=>({
            id: i + 1,
            title: `Post ${i + 1}`,
            content: "Contenido de ejemplo",
            image: images[Math.floor(Math.random() * images.length)],
            timestamp: new Date().toISOString(),
            random: Math.random()
        }));
}
}),
"[project]/blog/blogito/blogito/app/post/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog/blogito/blogito/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog/blogito/blogito/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$lib$2f$getPosts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog/blogito/blogito/lib/getPosts.ts [app-rsc] (ecmascript)");
;
;
;
async function Page({ params }) {
    const { id } = await params;
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$lib$2f$getPosts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPosts"])({
        cache: "no-store"
    });
    const post = posts.find((p)=>p.id === Number(id));
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Post no encontrado"
        }, void 0, false, {
            fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
            lineNumber: 18,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: post.title
            }, void 0, false, {
                fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: post.image,
                width: 300
            }, void 0, false, {
                fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: post.content
            }, void 0, false, {
                fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Timestamp:"
                    }, void 0, false, {
                        fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                        lineNumber: 29,
                        columnNumber: 16
                    }, this),
                    " ",
                    post.timestamp
                ]
            }, void 0, true, {
                fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Random:"
                    }, void 0, false, {
                        fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 16
                    }, this),
                    " ",
                    post.random
                ]
            }, void 0, true, {
                fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2f$blogito$2f$blogito$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: "Volver"
            }, void 0, false, {
                fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/blog/blogito/blogito/app/post/[id]/page.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/blog/blogito/blogito/app/post/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/blog/blogito/blogito/app/post/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0q79a.6._.js.map