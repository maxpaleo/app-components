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
const _config_1 = require("@config");
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
    return (<>
      <AppScreenReaders_1.default.Button label={screenReaderTextValue} onClick={onClick}/>

      <_config_1.Button size={size} disabled={disabled || loading} asChild={asChild} {...rest}>
        <div className="flex gap-2 items-center">
          {selectedIcon && (<lucide_icon_component_1.default size={iconSize} className="" icon={selectedIcon}/>)}
          {label && <span className={textSize}> {label}</span>}
          <>{children}</>
          {loading && <lucide_icon_component_1.default className="animate-spin" icon="loader-2"/>}
        </div>
      </_config_1.Button>
    </>);
};
exports.AppButton = AppButton;
