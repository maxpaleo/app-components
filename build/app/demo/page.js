"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DemoPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const ComponentPreview_1 = require("@/components/ComponentPreview");
function DemoPage() {
    return ((0, jsx_runtime_1.jsx)("main", { className: "flex min-h-screen gap-4 flex-col items-center p-24", children: (0, jsx_runtime_1.jsx)(ComponentPreview_1.ComponentPreview, {}) }));
}
