"use strict";
"use client";
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
exports.AppNavLink = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const AppScreenReaders_1 = __importDefault(require("./AppScreenReaders"));
const AppButton_1 = require("./AppButton");
const lucide_icon_component_1 = __importDefault(require("lucide-icon-component"));
const AppNavLink = (_a) => {
    var { className, href, children, customHref, as = "link", icon, variant } = _a, rest = __rest(_a, ["className", "href", "children", "customHref", "as", "icon", "variant"]);
    const pathname = (0, navigation_1.usePathname)();
    const params = (0, navigation_1.useParams)();
    const pathnameWithoutParams = () => {
        // Convert params object to an array of its values
        const paramValues = Object.values(params);
        // Remove param values from the pathname
        let cleanedPathname = pathname;
        paramValues.forEach((param) => {
            cleanedPathname = cleanedPathname.replace(`/${param}`, "");
        });
        return cleanedPathname;
    };
    /**
     * This checks if the current path is part of the href path.
     * The navlink will be active if the current path is equal to or part of the href path.
     * This is useful to show active AppNavLinks with nested routes.
     *
     * FOr example, data sources in the dashboard: /dashboard/data/k2rd1a8w since k2rd1a8w is a path paramter, it will match /dashboard/data as well.
     */
    const cleanPath = pathnameWithoutParams();
    const isPartOfPath = cleanPath === href || pathname === href;
    const setHref = (href || customHref);
    const ButtonElement = ({ children }) => {
        return (react_1.default.createElement(AppButton_1.AppButton, { variant: variant, className: className, icon: icon }, children));
    };
    const NavLink = ({ children }) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(AppScreenReaders_1.default.Link, { label: `Navigate to page: ${setHref}`, href: String(setHref) }),
            as === "link" && icon && react_1.default.createElement(lucide_icon_component_1.default, { icon: icon }),
            react_1.default.createElement(link_1.default, Object.assign({ href: setHref, className: `hover:opacity/100 font-medium transition-colors ${as === "link" ? (isPartOfPath ? "opacity/100" : "opacity-65") : ""}` }, rest), children)));
    };
    return as === "link" ? (react_1.default.createElement(NavLink, null, children)) : (react_1.default.createElement(NavLink, null,
        react_1.default.createElement(ButtonElement, null, children)));
};
exports.AppNavLink = AppNavLink;
