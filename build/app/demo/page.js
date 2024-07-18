"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DemoPage;
const ComponentPreview_1 = require("@/components/ComponentPreview");
function DemoPage() {
    return (React.createElement("main", { className: "flex min-h-screen gap-4 flex-col items-center p-24" },
        React.createElement(ComponentPreview_1.ComponentPreview, null)));
}
