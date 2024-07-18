"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AppScreenReaders_1 = __importDefault(require("./AppScreenReaders"));
const lucide_icon_component_1 = __importDefault(require("lucide-icon-component"));
const button_1 = require("./shadcn/button");
const AppButton = (_a) => {
    var { icon, loading = false, size, children, disabled, label, screenReaderText, roleRestrictions, userRole, asChild } = _a, rest = __rest(_a, ["icon", "loading", "size", "children", "disabled", "label", "screenReaderText", "roleRestrictions", "userRole", "asChild"]);
    const selectedIcon = icon;
    const textSize = size === "sm" ? "text-xs" : "";
    const iconSize = size === "sm" ? 14 : 16;
    const screenReaderTextValue = screenReaderText || label || "Clickable button";
    if (roleRestrictions) {
        const userAccount = roleRestrictions.find((role) => role === userRole);
        if (!userAccount) {
            return null;
        }
    }
    const { onClick } = rest;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AppScreenReaders_1.default.Button, { label: screenReaderTextValue, onClick: onClick }), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: size, disabled: disabled || loading, asChild: asChild }, rest, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 items-center", children: [selectedIcon && ((0, jsx_runtime_1.jsx)(lucide_icon_component_1.default, { size: iconSize, className: "", icon: selectedIcon })), label && (0, jsx_runtime_1.jsxs)("span", { className: textSize, children: [" ", label] }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }), loading && (0, jsx_runtime_1.jsx)(lucide_icon_component_1.default, { className: "animate-spin", icon: "loader-2" })] }) }))] }));
};
exports.AppButton = AppButton;
