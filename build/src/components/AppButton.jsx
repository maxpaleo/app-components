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
import SR from "./AppScreenReaders";
import Icon from "lucide-icon-component";
import { Button } from "@config";
export var AppButton = function (_a) {
    var icon = _a.icon, _b = _a.loading, loading = _b === void 0 ? false : _b, size = _a.size, children = _a.children, disabled = _a.disabled, label = _a.label, screenReaderText = _a.screenReaderText, roleRestrictions = _a.roleRestrictions, userRole = _a.userRole, asChild = _a.asChild, rest = __rest(_a, ["icon", "loading", "size", "children", "disabled", "label", "screenReaderText", "roleRestrictions", "userRole", "asChild"]);
    var selectedIcon = icon;
    var textSize = size === "sm" ? "text-xs" : "";
    var iconSize = size === "sm" ? 14 : 16;
    var screenReaderTextValue = screenReaderText || label || "Clickable button";
    if (roleRestrictions) {
        var userAccount = roleRestrictions.find(function (role) { return role === userRole; });
        if (!userAccount) {
            return null;
        }
    }
    var onClick = rest.onClick;
    return (<>
      <SR.Button label={screenReaderTextValue} onClick={onClick}/>

      <Button size={size} disabled={disabled || loading} asChild={asChild} {...rest}>
        <div className="flex gap-2 items-center">
          {selectedIcon && (<Icon size={iconSize} className="" icon={selectedIcon}/>)}
          {label && <span className={textSize}> {label}</span>}
          <>{children}</>
          {loading && <Icon className="animate-spin" icon="loader-2"/>}
        </div>
      </Button>
    </>);
};
