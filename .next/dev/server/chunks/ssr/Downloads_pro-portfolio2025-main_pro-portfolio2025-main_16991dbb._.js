module.exports = [
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-6 pt-20 md:pt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"
            }, void 0, false, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"
            }, void 0, false, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 order-2 lg:order-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 25,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 26,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-zinc-400 uppercase tracking-wider",
                                        children: "Open to Work"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2
                                        },
                                        className: "text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-bold font-heading tracking-tighter uppercase text-white mb-2",
                                        children: [
                                            "Hey,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this),
                                            "I'm Neha ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-stroke text-transparent",
                                                children: "Singh"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 40,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8,
                                            rotate: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1,
                                            rotate: -6
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.4
                                        },
                                        className: "absolute -top-10 right-0 md:right-20 lg:right-10 hidden md:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-script text-5xl md:text-7xl text-purple-400 transform -rotate-12 block whitespace-nowrap",
                                                children: "Full Stack Developer"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute -bottom-2 left-0 w-full h-3 text-purple-400",
                                                viewBox: "0 0 100 10",
                                                preserveAspectRatio: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0 5 Q 50 10 100 5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    pathLength: "1",
                                                    className: "animate-draw"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.3
                                        },
                                        className: "md:hidden mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-script text-4xl text-purple-400",
                                            children: "Full Stack Dev"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.4
                                },
                                className: "text-lg text-zinc-400 max-w-md mt-6 mb-8 leading-relaxed",
                                children: [
                                    "Passionate ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Full Stack Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 85,
                                        columnNumber: 24
                                    }, this),
                                    " & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "BCA Student (2026)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 85,
                                        columnNumber: 64
                                    }, this),
                                    ". I build scalable web platforms using MERN stack, Next.js, and modern tools. Turning complex problems into elegant, user-friendly solutions."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.6
                                },
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        size: "lg",
                                        className: "bg-white text-black hover:bg-zinc-200 rounded-full px-8 text-base font-bold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#projects",
                                            children: [
                                                "View Work ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        variant: "outline",
                                        size: "lg",
                                        className: "rounded-full px-8 text-base border-zinc-700 text-white hover:bg-zinc-900 hover:text-white bg-transparent",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#contact",
                                            children: "Contact Me"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.3
                        },
                        className: "relative order-1 lg:order-2 flex justify-center lg:justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: 20,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear"
                                },
                                className: "absolute -top-12 -right-12 md:-right-4 w-32 h-32 md:w-40 md:h-40 border border-dashed border-zinc-700 rounded-full flex items-center justify-center z-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 md:w-32 md:h-32 border border-zinc-800 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 w-[280px] md:w-[350px] aspect-4/5 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-zinc-800 rounded-2xl transform rotate-6 scale-105 opacity-50 transition-transform group-hover:rotate-3 duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-zinc-900 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0 duration-500 border border-zinc-800"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-full w-full rounded-xl overflow-hidden border-4 border-zinc-900/50 shadow-2xl bg-zinc-950",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/photo1.jpg",
                                                alt: "Neha Singh",
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0,
                                            rotate: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            rotate: 12
                                        },
                                        transition: {
                                            delay: 0.8,
                                            type: "spring"
                                        },
                                        className: "absolute -bottom-6 -right-6 bg-green-500 text-black font-bold font-heading uppercase text-sm py-4 px-4 rounded-full shadow-lg transform rotate-12 border-2 border-white z-20 flex items-center justify-center w-24 h-24 text-center leading-tight",
                                        children: [
                                            "Good",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this),
                                            "Vibes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0,
                                            rotate: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            rotate: -12
                                        },
                                        transition: {
                                            delay: 1,
                                            type: "spring"
                                        },
                                        className: "absolute top-10 -left-10 bg-white text-black font-bold font-heading uppercase text-xs py-2 px-4 rounded-full shadow-lg transform -rotate-12 z-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-3 h-3 inline-block mr-1 text-purple-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this),
                                            "2026 Grad"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.5,
                    duration: 1
                },
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs uppercase tracking-widest text-zinc-500",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-12 bg-linear-to-b from-zinc-500 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/hero.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-24 bg-[#0a0a0a] relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 md:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-12 md:gap-20 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/3 sticky top-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-4",
                                children: [
                                    "About ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-600",
                                        children: "Me"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                        lineNumber: 19,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    width: 0
                                },
                                whileInView: {
                                    width: "60px"
                                },
                                viewport: {
                                    once: true
                                },
                                className: "h-1 bg-purple-500 mb-6"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 leading-relaxed mb-6",
                                children: "I'm a focused and enthusiastic developer with a keen eye for detail. I love creating things that live on the internet, whether that be websites, applications, or anything in between."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-script text-3xl text-purple-400 -rotate-6 inline-block",
                                children: "Always learning!"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-2/3 grid gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-6 flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-zinc-800 p-3 rounded-lg h-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-6 h-6 text-purple-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold font-heading uppercase mb-2",
                                                        children: "Who I Am"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-400 leading-relaxed",
                                                        children: [
                                                            "My name is ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Neha Singh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 34
                                                            }, this),
                                                            ". I am currently pursuing my BCA degree. I have a strong passion for frontend development and UI design. I enjoy turning complex problems into simple, beautiful and intuitive designs."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-6 flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-zinc-800 p-3 rounded-lg h-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                    className: "w-6 h-6 text-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold font-heading uppercase mb-2",
                                                        children: "Education"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-medium",
                                                        children: "Bachelor of Computer Applications (BCA)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-400 text-sm mb-2",
                                                        children: "Expected Graduation: 2026"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-500 text-sm leading-relaxed",
                                                        children: "Relevant coursework: Web Development, Data Structures, Database Management Systems, Object Oriented Programming."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 0.3
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-6 flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-zinc-800 p-3 rounded-lg h-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                    className: "w-6 h-6 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold font-heading uppercase mb-2",
                                                        children: "My Goal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-400 leading-relaxed",
                                                        children: "To join a creative team of developers where I can contribute to exciting projects while continuing to grow my skills in the JavaScript ecosystem."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/about.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = About;
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const skills = {
    Languages: [
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Java",
        "Python"
    ],
    Frontend: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Redux Toolkit",
        "Bootstrap"
    ],
    Tools: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        "Netlify",
        "Figma"
    ]
};
const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "Chrome DevTools",
    "npm/yarn",
    "Netlify"
];
function Skills() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "skills",
        className: "py-24 bg-[#050505] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 md:px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-4",
                                children: [
                                    "My ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-500",
                                        children: "Tech Stack"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                                        lineNumber: 50,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 max-w-2xl mx-auto",
                                children: "The technologies and tools I use to bring ideas to life."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: Object.entries(skills).map(([category, items], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: index * 0.1
                                },
                                className: "bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold font-heading uppercase mb-6 text-zinc-200 border-b border-zinc-800 pb-4",
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: items.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "secondary",
                                                className: "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 text-sm font-medium border-zinc-700 transition-all hover:text-white hover:scale-105 cursor-default",
                                                children: skill
                                            }, skill, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/skills.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const projects = [
    {
        title: "BuddyBudget",
        description: "A full-stack budget management app. Built secure role-based auth with JWT & HTTP-only cookies. Features real-time financial tracking with Chart.js visualization and REST APIs for CRUD operations.",
        tags: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Chart.js"
        ],
        github: "https://github.com/Neha-singh16/Budget-backend",
        demo: "#",
        featured: true,
        year: "2025"
    },
    {
        title: "WatchHub",
        description: "Scalable video streaming platform with live search and debounce (reduced API calls by 40%). Integrated YouTube API for content fetching and implemented optimized UI rendering.",
        tags: [
            "React",
            "Node.js",
            "YouTube API",
            "Tailwind"
        ],
        github: "https://github.com/Neha-singh16/Watch-Hub",
        demo: "#",
        featured: true,
        year: "2025"
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js and Framer Motion to showcase my skills and projects. Features dark mode and smooth animations.",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Framer Motion"
        ],
        github: "#",
        demo: "#",
        featured: false,
        year: "2025"
    }
];
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-24 bg-[#0a0a0a] border-t border-zinc-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "text-4xl md:text-7xl font-bold font-heading uppercase tracking-tighter text-white",
                                    children: [
                                        "Selected ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-stroke-purple",
                                            children: "Works"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                            lineNumber: 84,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 mt-4 max-w-md",
                                    children: "A collection of projects that showcase my journey in frontend development."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "hidden md:flex rounded-full border-zinc-700 text-white hover:bg-white hover:text-black bg-transparent",
                            children: [
                                "View GitHub ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    className: "ml-2 w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: index * 0.1
                            },
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: `bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-900/10 ${project.demo && project.demo !== "#" ? "cursor-pointer" : ""}`,
                                onClick: ()=>{
                                    if (project.demo && project.demo !== "#") window.open(project.demo, "_blank");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "p-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-64 bg-zinc-800 relative overflow-hidden group-hover:bg-zinc-800/80 transition-colors flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-linear-to-tr from-zinc-900 to-zinc-800/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl font-bold text-zinc-800 select-none group-hover:text-zinc-700 transition-colors duration-500 font-heading uppercase",
                                                    children: project.title.split(" ")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white",
                                                    children: project.year
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-6 md:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold font-heading uppercase text-white group-hover:text-purple-400 transition-colors",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            project.demo && project.demo !== "#" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: project.demo,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                "aria-label": `${project.title} demo`,
                                                                className: "h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/6 hover:bg-white/10 text-white transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: true,
                                                                "aria-hidden": true,
                                                                className: "h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/2 text-white/40 cursor-not-allowed",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 25
                                                            }, this),
                                                            project.github && project.github !== "#" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: project.github,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                "aria-label": `${project.title} source on GitHub`,
                                                                className: "h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/6 hover:bg-white/10 text-white transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: true,
                                                                "aria-hidden": true,
                                                                className: "h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/2 text-white/40 cursor-not-allowed",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-400 mb-6 line-clamp-3",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mt-auto",
                                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: "bg-transparent border-zinc-700 text-zinc-400 group-hover:text-zinc-300",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 text-center md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "rounded-full border-zinc-700 text-white hover:bg-white hover:text-black w-full bg-transparent",
                        children: [
                            "View GitHub ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                className: "ml-2 w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                                lineNumber: 203,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/projects.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Input({ className, type = 'text', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        suppressHydrationWarning: true,
        // ensure a stable `type` is rendered on both server and client
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/input.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/ui/card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Contact() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return ()=>observer.disconnect();
    }, []);
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Open user's mail client with prefilled message (mailto fallback)
        const to = "singhn5443@gmail.com";
        const subject = `Message from ${formData.firstName} ${formData.lastName}`;
        const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
        const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            console.log("Form submitted:", formData);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "contact",
        className: "py-24 bg-[#050505] relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-900/50 to-transparent"
            }, void 0, false, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12 md:gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-6 text-white",
                                        children: [
                                            "Let's ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 66,
                                                columnNumber: 23
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-purple-500",
                                                children: "Connect"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 66,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 text-lg mb-8 leading-relaxed",
                                        children: "I'm currently looking for new opportunities as a Full Stack Developer. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-zinc-500 uppercase tracking-wider font-medium",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "mailto:singhn5443@gmail.com",
                                                                className: "text-lg text-white hover:text-purple-400 transition-colors",
                                                                children: "singhn5443@gmail.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-zinc-500 uppercase tracking-wider font-medium",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg text-white",
                                                                children: "Delhi, India"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/in/neha-singh-2142392a1/",
                                                target: "_blank",
                                                className: "w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/Neha-singh16",
                                                target: "_blank",
                                                className: "w-12 h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-purple-600 transition-colors hover:scale-110",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-zinc-900/50 border-zinc-800 p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-zinc-400 uppercase",
                                                                children: "First Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                className: "bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white",
                                                                placeholder: "Jane",
                                                                value: formData.firstName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        firstName: e.target.value
                                                                    }),
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-zinc-400 uppercase",
                                                                children: "Last Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                className: "bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white",
                                                                placeholder: "Doe",
                                                                value: formData.lastName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        lastName: e.target.value
                                                                    }),
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-zinc-400 uppercase",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        className: "bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white",
                                                        type: "email",
                                                        placeholder: "jane@example.com",
                                                        value: formData.email,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                email: e.target.value
                                                            }),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-zinc-400 uppercase",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                        className: "bg-zinc-950 border-zinc-800 focus:border-purple-500 min-h-[150px] resize-none text-white",
                                                        placeholder: "Tell me about your project...",
                                                        value: formData.message,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                message: e.target.value
                                                            }),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "w-full h-12 bg-white text-black hover:bg-zinc-200 text-base font-bold rounded-lg",
                                                children: [
                                                    "Send Message ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "ml-2 w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/contact.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
"use client";
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    const scrollToTop = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-linear-to-b from-[#050505] to-[#07070a] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-semibold mb-3",
                                        children: "Let's build something together"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 mb-4",
                                        children: "Available for internships & early-career roles. Open to remote opportunities."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-lg font-medium hover:underline",
                                            href: "mailto:sanjayadhithyan@gmail.com",
                                            children: "singhn5443@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white text-xl font-extrabold tracking-wider",
                                            children: "Neha Singh"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#8b5cf6] text-xs -mt-1",
                                            children: "Full Stack Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5 flex flex-col items-end gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/in/neha-singh-2142392a1/",
                                                "aria-label": "LinkedIn",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "p-2 rounded-lg bg-white/3 hover:bg-white/6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/Neha-singh16",
                                                "aria-label": "GitHub",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "p-2 rounded-lg bg-white/3 hover:bg-white/6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/nehaa16.__/",
                                                "aria-label": "Instagram",
                                                className: "p-2 rounded-lg bg-white/3 hover:bg-white/6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/pdf/NehaResumeOct.pdf",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "inline-flex items-center gap-3 bg-[#8b5cf6] hover:bg-purple-600 text-black px-4 py-2 rounded-lg font-semibold shadow-md",
                                                children: "Download Resume"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: scrollToTop,
                                                className: "inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white",
                                                "aria-label": "Back to top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-8 h-8 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-transparent",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Top"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-zinc-800 my-8"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "© ",
                                    currentYear,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium",
                                        children: "Neha Singh"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 34
                                    }, this),
                                    ". All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:underline",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$pro$2d$portfolio2025$2d$main$2f$pro$2d$portfolio2025$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:underline",
                                        children: "Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/pro-portfolio2025-main/pro-portfolio2025-main/components/footer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_pro-portfolio2025-main_pro-portfolio2025-main_16991dbb._.js.map