(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TeamCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function TeamCard(param) {
    let { name, role, image } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            y: -5,
            scale: 1.03
        },
        className: "flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-2 w-72",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 h-80 bg-gradient-to-br from-sky-50 to-indigo-100 rounded-lg overflow-hidden mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: name,
                    width: 256,
                    height: 320,
                    className: "object-cover object-[center_30%] w-full h-full",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamCard.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TeamCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "px-4 py-2 w-full text-center rounded-b-2xl transition-colors cursor-pointer hover:bg-sky-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700",
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TeamCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TeamCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = TeamCard;
var _c;
__turbopack_context__.k.register(_c, "TeamCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/team.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "designTeam",
    ()=>designTeam,
    "founders",
    ()=>founders,
    "medicoTeam",
    ()=>medicoTeam,
    "techTeam",
    ()=>techTeam
]);
const founders = [
    {
        name: "Aurobinda Nayak",
        role: "Founder & CEO",
        description: "Visionary leader at Nirvant",
        image: "/team/auro.png"
    },
    {
        name: "Prateekshya Mohapatra",
        role: "Co-Founder and COO",
        description: "Growth Mentor Coach",
        image: "/team/prat.png"
    }
];
const techTeam = [
    {
        name: "Subham Khuntia",
        role: "Technical Associate",
        description: "Technology Consultant",
        image: "/team/subh.png"
    },
    {
        name: "Prahallad Nayak",
        role: "Tech Lead",
        description: "Technical leadership",
        image: "/team/prah.png"
    }
];
const medicoTeam = [
    {
        name: "Prachurya Das",
        role: "Medico",
        description: "Educational Mentor",
        image: "/team/prac.png"
    },
    {
        name: "Sandipta Sahoo",
        role: "Medicos",
        description: "Mental Therapist",
        image: "/team/sand.png"
    },
    {
        name: "Jeeban Nayak",
        role: "Medico",
        description: "Educational Mentor",
        image: "/team/jeeb.png"
    },
    {
        name: "Smaranika Priyadarshini",
        role: "Medico",
        description: "Educational Mentor",
        image: "/team/smar.png"
    },
    {
        name: "Satyabrata Mahakud",
        role: "Medico Team",
        description: "Academic Controller and Manager at Nirvant",
        image: "/team/saty.png"
    }
];
const designTeam = [
    {
        name: "Aryasruti Barik",
        role: "Digital Design Team",
        description: "Social Media Marketing Controller at Nirvant",
        image: "/team/arya.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutPage",
    ()=>aboutPage,
    "hero",
    ()=>hero,
    "mission",
    ()=>mission,
    "pillars",
    ()=>pillars,
    "teamCategories",
    ()=>teamCategories,
    "whatWeOffer",
    ()=>whatWeOffer,
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
const whatWeOffer = {
    title: "What We Offer",
    items: [
        {
            title: "Personalized Mentorship",
            description: "Tailored guidance for your unique journey.",
            icon: "👥"
        },
        {
            title: "Courses & Workshops",
            description: "Practical skills and knowledge for growth.",
            icon: "📚"
        },
        {
            title: "Tech Tools & AI Integrations",
            description: "Cutting-edge solutions to enhance productivity.",
            icon: "💻"
        }
    ]
};
const whyChooseUs = {
    title: "Why Choose Nirvant?",
    items: [
        {
            title: "Expert Team",
            description: "Highly qualified mentors, wellness coaches, and tech specialists.",
            icon: "🧠"
        },
        {
            title: "Holistic Approach",
            description: "We combine wellness, education, and career growth seamlessly.",
            icon: "🌐"
        },
        {
            title: "Innovative Tools",
            description: "Tech-driven solutions to track your progress and enhance learning.",
            icon: "⚡"
        }
    ]
};
const teamCategories = [
    {
        title: "Founders & Co-Founders",
        key: "founders"
    },
    {
        title: "Medico Team",
        key: "medicoTeam"
    },
    {
        title: "Tech Team",
        key: "techTeam"
    },
    {
        title: "Digital Design Team",
        key: "designTeam"
    }
];
const aboutPage = {
    hero: {
        title: "About Nirvant",
        subtitle: "A dynamic hub for visionary leaders, ambitious students, and forward-thinking investors"
    },
    story: "\nNirvant is a dynamic hub where visionary leaders, ambitious students, and forward-thinking investors come together to drive meaningful change. \nWe combine cutting-edge mental health solutions, advanced technology, and educational excellence to deliver transformative content and personalized mentorship tailored to your unique journey. \nOur mission is to empower individuals and organizations to unlock their full potential by providing actionable insights, innovative strategies, and unwavering support. \nThrough our diverse channels—Nirvant Wellness, Nirvant Tech, and Nirvant Edge—we offer a wide range of resources that nurture emotional clarity, mental resilience, and professional growth. \nOur personalized mentorship ensures that every learner receives guidance aligned with their goals, fostering confidence and sustained success in an ever-evolving world. \nAt Nirvant, we believe that true growth happens at the convergence of knowledge, support, and innovation. \nWhether you are a student seeking clarity, a professional aiming to elevate your career, or an investor looking to partner with a purpose-driven enterprise, Nirvant is your trusted ally on the path to a healthier, more impactful future. \nJoin us and be part of a community committed to shaping success with intention and heart.\n  ",
    philosophy: "\nAt Nirvant, growth happens at the intersection of knowledge, support, and innovation. \nWe focus on clarity, emotional resilience, and reflection, empowering students, professionals, and investors to reach their highest potential. \nEvery initiative is designed to combine transformative content with personalized guidance, ensuring actionable insights and sustainable progress.\n  "
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TeamCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$team$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/team.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function AboutPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-br from-green-50 via-sky-50 to-indigo-50 py-32 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-6xl font-extrabold text-teal-900 mb-6 drop-shadow-lg",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutPage"].hero.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl text-gray-700 max-w-3xl mx-auto",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutPage"].hero.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-gradient-to-r from-teal-50 via-green-50 to-sky-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-8 text-center text-teal-900",
                        children: "Our Story & Vision"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg leading-relaxed text-gray-800 max-w-4xl mx-auto whitespace-pre-line text-justify",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutPage"].story
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-12 text-center text-teal-900",
                        children: "Meet Our Founders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$team$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["founders"].map((member, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...member
                            }, idx, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-8 text-center text-teal-900",
                        children: "Our Approach"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg leading-relaxed text-gray-800 max-w-4xl mx-auto whitespace-pre-line text-justify",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutPage"].philosophy
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = AboutPage;
var _c;
__turbopack_context__.k.register(_c, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_022b266c._.js.map