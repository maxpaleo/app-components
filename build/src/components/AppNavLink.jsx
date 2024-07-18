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
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var AppScreenReaders_1 = __importDefault(require("./AppScreenReaders"));
var AppButton_1 = require("./AppButton");
var lucide_icon_component_1 = __importDefault(require("lucide-icon-component"));
var AppNavLink = function (_a) {
    var className = _a.className, href = _a.href, children = _a.children, customHref = _a.customHref, _b = _a.as, as = _b === void 0 ? "link" : _b, icon = _a.icon, variant = _a.variant, rest = __rest(_a, ["className", "href", "children", "customHref", "as", "icon", "variant"]);
    var pathname = (0, navigation_1.usePathname)();
    var params = (0, navigation_1.useParams)();
    var pathnameWithoutParams = function () {
        // Convert params object to an array of its values
        var paramValues = Object.values(params);
        // Remove param values from the pathname
        var cleanedPathname = pathname;
        paramValues.forEach(function (param) {
            cleanedPathname = cleanedPathname.replace("/".concat(param), "");
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
    var cleanPath = pathnameWithoutParams();
    var isPartOfPath = cleanPath === href || pathname === href;
    var setHref = (href || customHref);
    var ButtonElement = function (_a) {
        var children = _a.children;
        return (<AppButton_1.AppButton variant={variant} className={className} icon={icon}>
        {children}
      </AppButton_1.AppButton>);
    };
    var NavLink = function (_a) {
        var children = _a.children;
        return (<>
        <AppScreenReaders_1.default.Link label={"Navigate to page: ".concat(setHref)} href={String(setHref)}/>
        {as === "link" && icon && <lucide_icon_component_1.default icon={icon}/>}
        <link_1.default href={setHref} className={"hover:opacity/100 font-medium transition-colors ".concat(as === "link" ? (isPartOfPath ? "opacity/100" : "opacity-65") : "")} {...rest}>
          {children}
        </link_1.default>
      </>);
    };
    return as === "link" ? (<NavLink>{children}</NavLink>) : (<NavLink>
      <ButtonElement>{children}</ButtonElement>
    </NavLink>);
};
exports.AppNavLink = AppNavLink;
