"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/lib/utils");
const react_1 = __importDefault(require("react"));
const SRInputLabel = ({ blockId, label }) => {
    return (react_1.default.createElement("label", { htmlFor: (0, utils_1.cn)("i-", blockId), className: "sr-only" }, label));
};
const SRButton = ({ label, onClick }) => {
    return (react_1.default.createElement("button", { onClick: onClick, className: "sr-only", "aria-label": `${label} button` }, label));
};
const SRLink = ({ href, label }) => {
    return (react_1.default.createElement("a", { href: href, className: "sr-only" }, label));
};
/**
 * Screen reader components
 * - These components are used to provide screen reader support for the application.
 * - The components are not meant to be visible to the user.
 * - The props passed in can be more descriptive than the ones used in the visible components. For example, a button with label "Close" can have a screen reader label "Close control center".
 *
 * ### Example
 * @example
 *
 * ```tsx
 * // Adds an invisible screen reader label to an input for accessibility.
 *  <SR.InputLabel blockId={blockId} label={params.label} />
 * ```
 */
const SR = {
    InputLabel: SRInputLabel,
    Button: SRButton,
    Link: SRLink,
};
exports.default = SR;
