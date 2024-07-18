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
const react_1 = __importDefault(require("react"));
const AppScreenReaders_1 = __importDefault(require("./AppScreenReaders"));
const lucide_icon_component_1 = __importDefault(require("lucide-icon-component"));
const button_1 = require("@/components/ui/button");
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AppScreenReaders_1.default.Button, { label: screenReaderTextValue, onClick: onClick }),
        react_1.default.createElement(button_1.Button, Object.assign({ size: size, disabled: disabled || loading, asChild: asChild }, rest),
            react_1.default.createElement("div", { className: "flex gap-2 items-center" },
                selectedIcon && (react_1.default.createElement(lucide_icon_component_1.default, { size: iconSize, className: "", icon: selectedIcon })),
                label && react_1.default.createElement("span", { className: textSize },
                    " ",
                    label),
                react_1.default.createElement(react_1.default.Fragment, null, children),
                loading && react_1.default.createElement(lucide_icon_component_1.default, { className: "animate-spin", icon: "loader-2" })))));
};
exports.AppButton = AppButton;
