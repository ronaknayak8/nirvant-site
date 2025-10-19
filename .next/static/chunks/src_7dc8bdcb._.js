(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hero",
    ()=>hero,
    "mission",
    ()=>mission,
    "offers",
    ()=>offers,
    "pillars",
    ()=>pillars,
    "teamIntro",
    ()=>teamIntro,
    "whyChooseUs",
    ()=>whyChooseUs
]);
const hero = {
    tagline: "Clarity begins with understanding yourself.",
    subtext: "Nirvant is where clarity meets growth. We help students, professionals, and leaders find balance between mind, purpose, and performance.",
    cta: "Book an Appointment"
};
const mission = {
    title: "Our Mission",
    description: "At Nirvant, we believe personal and professional growth begins from within. Our mission is to bring mental wellness, education, and technology together—helping individuals build emotional strength, career clarity, and inner confidence through content, mentorship, and meaningful connections."
};
const pillars = [
    {
        name: "Nirvant Wellness",
        focus: "Emotional & Mental Health",
        description: "Short videos, reflections, and podcasts designed to help you reset, heal, and regain focus."
    },
    {
        name: "Nirvant Tech",
        focus: "Tech-driven Self-Growth Tools",
        description: "We blend AI and modern tools to simplify growth—through explainers, apps, and interactive content."
    },
    {
        name: "Nirvant Edge",
        focus: "Career, Mindset & Relationships",
        description: "Workshops, long-form videos, and newsletters that sharpen your perspective and keep you grounded."
    }
];
const offers = [
    {
        title: "Personal Mentorship",
        description: "One-on-one sessions tailored to your academic, emotional, or career journey. Our mentors guide you with clarity and care."
    },
    {
        title: "Wellness Programs",
        description: "Structured content and sessions designed to improve focus, reduce stress, and build long-term emotional strength."
    },
    {
        title: "Tech for Growth",
        description: "AI-powered tools and digital resources that make personal growth more measurable, engaging, and effective."
    }
];
const whyChooseUs = {
    title: "Why Choose Nirvant?",
    points: [
        "Integrated approach—mental wellness meets professional growth.",
        "Personalized mentorship rooted in real human understanding.",
        "Community-driven platform that evolves with your needs.",
        "Built for students, professionals, and visionaries alike."
    ]
};
const teamIntro = {
    title: "Meet Our Team",
    description: "A collective of educators, designers, and technologists who share one vision—help people grow from within."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-sky-50 min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-20 mt-[70px] bg-gradient-to-b from-sky-400 via-white to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: "text-5xl md:text-6xl font-bold text-sky-800 mb-4",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].tagline
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 9,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-gray-700 max-w-2xl mb-6 text-lg md:text-xl",
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1,
                    delay: 0.5
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].subtext
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 18,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex gap-4 flex-col sm:flex-row",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    delay: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].cta
                    }, void 0, false, {
                        fileName: "[project]/src/sections/HeroSection.tsx",
                        lineNumber: 33,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-3 border border-sky-600 text-sky-600 font-medium rounded-lg hover:bg-sky-100 transition",
                        children: "Explore Nirvant"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/HeroSection.tsx",
                        lineNumber: 36,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 27,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/HeroSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7dc8bdcb._.js.map