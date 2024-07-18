"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPreview = void 0;
const AppButton_1 = require("@/src/components/AppButton");
const AppNavLink_1 = require("@/src/components/AppNavLink");
const react_markdown_1 = __importDefault(require("react-markdown"));
const image_1 = __importDefault(require("next/image"));
const collapsible_1 = require("./ui/collapsible");
const lucide_icon_component_1 = __importDefault(require("lucide-icon-component"));
const doc_data_1 = require("@/data/doc-data");
const tabs_1 = require("./ui/tabs");
const ComponentCard = ({ title = "Title", children, description = "Description", markdown, markdownCode, image, badgeText, }) => {
    return (React.createElement("div", { className: "bg-background flex flex-col gap-4 rounded-lg border p-4 w-full" },
        React.createElement("div", null,
            React.createElement("div", { className: "text-lg font-bold mb-2" }, title),
            React.createElement(react_markdown_1.default, { className: "prose dark:prose-invert text-muted-foreground text-sm" }, description)),
        React.createElement(tabs_1.Tabs, { defaultValue: "try" },
            React.createElement(tabs_1.TabsList, { className: "w-full justify-end" },
                React.createElement(tabs_1.TabsTrigger, { value: "try" }, "Try me"),
                React.createElement(tabs_1.TabsTrigger, { value: "code" }, "Code")),
            React.createElement(tabs_1.TabsContent, { value: "try" },
                React.createElement("div", { className: "bg-accent p-6 rounded-lg relative overflow-hidden pb-12" },
                    children,
                    badgeText && (React.createElement("div", { className: "absolute text-xs p-1 px-2 bg-indigo-700 text-white bottom-0 left-0 w-full rounded-bl-lg" }, badgeText)))),
            React.createElement(tabs_1.TabsContent, { value: "code" },
                React.createElement(react_markdown_1.default, { className: "prose dark:prose-invert" }, markdownCode))),
        image && (React.createElement("div", { className: "border rounded-lg overflow-hidden" },
            React.createElement(image_1.default, { src: image, alt: "Alt text", width: 2683, height: 2654 }))),
        React.createElement("div", { className: "border rounded-lg p-3" },
            React.createElement(collapsible_1.Collapsible, { className: "group" },
                React.createElement(collapsible_1.CollapsibleTrigger, { className: "text-lg font-medium w-full " },
                    React.createElement("div", { className: "w-full items-center flex justify-between" },
                        React.createElement("div", null, "Props"),
                        React.createElement(lucide_icon_component_1.default, { icon: "chevron-right", className: "ml-auto group-[aria-expanded=false]:hidden group-aria-expanded:hidden" }))),
                React.createElement(collapsible_1.CollapsibleContent, null,
                    React.createElement(react_markdown_1.default, { className: "prose dark:prose-invert" }, markdown))))));
};
const ComponentPreview = ({}) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex" },
            React.createElement(react_markdown_1.default, { className: "prose dark:prose-invert" }, doc_data_1.markdown)),
        React.createElement("div", { className: "z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex" },
            React.createElement(react_markdown_1.default, { className: "prose dark:prose-invert w-full" }, doc_data_1.installationMd)),
        React.createElement("div", { className: "z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex" },
            React.createElement(ComponentCard, { title: "Nav Link", description: doc_data_1.navlinkDescriptionMd, markdown: doc_data_1.appNavLinkMd, markdownCode: doc_data_1.appNavLinkCodeMd, badgeText: "Click the link to see the active state", image: "https://lh3.googleusercontent.com/u/2/drive-viewer/AKGpihZ9N2qQuLZpJ8pBVfhuTmBpZeWZ4QONr4DCXgjLLclHhHzRSB235YaimzTnu-w2OHcOaDlBAIz1vTYFV_GCFYahfQq4_7fRb5M=w3049-h2654-rw-v1" },
                React.createElement("div", { className: "grid gap-3" },
                    React.createElement("div", { className: "flex gap-4 items-center p-3 bg-background rounded-lg" },
                        React.createElement("h2", { className: "text-lg font-bold" }, "MyApp"),
                        React.createElement("div", { className: "flex gap-3 items-center" },
                            React.createElement(AppNavLink_1.AppNavLink, { href: "/demo" }, "Dasboard"),
                            React.createElement(AppNavLink_1.AppNavLink, { href: "/other-demo" }, "Click me"))),
                    React.createElement("div", null,
                        React.createElement(AppNavLink_1.AppNavLink, { href: "/demo", as: "button" }, "Link as button")))),
            React.createElement(ComponentCard, { title: "Nav Button", description: doc_data_1.buttonDescriptionMd, markdown: doc_data_1.appButtonMd, markdownCode: doc_data_1.appButtonCodeMd, image: "https://lh3.googleusercontent.com/u/2/drive-viewer/AKGpihZHb8q2fcy43tSoJaX1DWyTxOymjOrSUBTmBLp71PqCmM7_CqE-9raphuPYRuLAoGZzk_2OWeahnopd_PO9Jlf6mCbdiF8KkA=w3049-h2654-rw-v1" },
                React.createElement("div", { className: "flex gap-2" },
                    React.createElement(AppButton_1.AppButton, { label: "Home", icon: "home" }),
                    React.createElement(AppButton_1.AppButton, { label: "Delete", loading: true, icon: "trash-2", variant: "destructive" })))),
        React.createElement("div", { className: "z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex" },
            React.createElement(react_markdown_1.default, { className: "prose dark:prose-invert" }, doc_data_1.configFileMd),
            React.createElement("div", { className: "mt-4 flex w-full justify-end" },
                React.createElement(AppNavLink_1.AppNavLink, { customHref: "https://www.npmjs.com/package/app-components", target: "_blank", as: "button", className: "bg-[#cb0000]", icon: "external-link" }, "Npm")))));
};
exports.ComponentPreview = ComponentPreview;
