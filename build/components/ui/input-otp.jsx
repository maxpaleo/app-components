"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputOTPSeparator = exports.InputOTPSlot = exports.InputOTPGroup = exports.InputOTP = void 0;
var React = __importStar(require("react"));
var input_otp_1 = require("input-otp");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var InputOTP = React.forwardRef(function (_a, ref) {
    var className = _a.className, containerClassName = _a.containerClassName, props = __rest(_a, ["className", "containerClassName"]);
    return (<input_otp_1.OTPInput ref={ref} containerClassName={(0, utils_1.cn)("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)} className={(0, utils_1.cn)("disabled:cursor-not-allowed", className)} {...props}/>);
});
exports.InputOTP = InputOTP;
InputOTP.displayName = "InputOTP";
var InputOTPGroup = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<div ref={ref} className={(0, utils_1.cn)("flex items-center", className)} {...props}/>);
});
exports.InputOTPGroup = InputOTPGroup;
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = React.forwardRef(function (_a, ref) {
    var index = _a.index, className = _a.className, props = __rest(_a, ["index", "className"]);
    var inputOTPContext = React.useContext(input_otp_1.OTPInputContext);
    var _b = inputOTPContext.slots[index], char = _b.char, hasFakeCaret = _b.hasFakeCaret, isActive = _b.isActive;
    return (<div ref={ref} className={(0, utils_1.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-2 ring-ring ring-offset-background", className)} {...props}>
      {char}
      {hasFakeCaret && (<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000"/>
        </div>)}
    </div>);
});
exports.InputOTPSlot = InputOTPSlot;
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return (<div ref={ref} role="separator" {...props}>
    <lucide_react_1.Dot />
  </div>);
});
exports.InputOTPSeparator = InputOTPSeparator;
InputOTPSeparator.displayName = "InputOTPSeparator";
