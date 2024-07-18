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
import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import SR from "./AppScreenReaders";
import { AppButton } from "./AppButton";
import Icon from "lucide-icon-component";
export var AppNavLink = function (_a) {
    var className = _a.className, href = _a.href, children = _a.children, customHref = _a.customHref, _b = _a.as, as = _b === void 0 ? "link" : _b, icon = _a.icon, variant = _a.variant, rest = __rest(_a, ["className", "href", "children", "customHref", "as", "icon", "variant"]);
    var pathname = usePathname();
    var params = useParams();
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
        return (<AppButton variant={variant} className={className} icon={icon}>
        {children}
      </AppButton>);
    };
    var NavLink = function (_a) {
        var children = _a.children;
        return (<>
        <SR.Link label={"Navigate to page: ".concat(setHref)} href={String(setHref)}/>
        {as === "link" && icon && <Icon icon={icon}/>}
        <Link href={setHref} className={"hover:opacity/100 font-medium transition-colors ".concat(as === "link" ? (isPartOfPath ? "opacity/100" : "opacity-65") : "")} {...rest}>
          {children}
        </Link>
      </>);
    };
    return as === "link" ? (<NavLink>{children}</NavLink>) : (<NavLink>
      <ButtonElement>{children}</ButtonElement>
    </NavLink>);
};
