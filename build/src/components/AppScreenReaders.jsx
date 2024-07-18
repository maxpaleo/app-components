"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@/lib/utils");
var react_1 = __importDefault(require("react"));
var SRInputLabel = function (_a) {
    var blockId = _a.blockId, label = _a.label;
    return (<label htmlFor={(0, utils_1.cn)("i-", blockId)} className="sr-only">
      {label}
    </label>);
};
var SRButton = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (<button onClick={onClick} className="sr-only" aria-label={"".concat(label, " button")}>
      {label}
    </button>);
};
var SRLink = function (_a) {
    var href = _a.href, label = _a.label;
    return (<a href={href} className="sr-only">
      {label}
    </a>);
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
var SR = {
    InputLabel: SRInputLabel,
    Button: SRButton,
    Link: SRLink,
};
exports.default = SR;
