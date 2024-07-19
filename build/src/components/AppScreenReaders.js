"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SRInputLabel = ({ blockId, label }) => {
    return ((0, jsx_runtime_1.jsx)("label", { htmlFor: `i-${blockId}`, className: "sr-only", children: label }));
};
const SRButton = ({ label, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "sr-only", "aria-label": `${label} button`, children: label }));
};
const SRLink = ({ href, label }) => {
    return ((0, jsx_runtime_1.jsx)("a", { href: href, className: "sr-only", children: label }));
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
