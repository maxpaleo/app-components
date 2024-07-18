"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPreview = void 0;
var AppButton_1 = require("@/src/components/AppButton");
var AppNavLink_1 = require("@/src/components/AppNavLink");
var react_markdown_1 = __importDefault(require("react-markdown"));
var image_1 = __importDefault(require("next/image"));
var collapsible_1 = require("./ui/collapsible");
var lucide_icon_component_1 = __importDefault(require("lucide-icon-component"));
var doc_data_1 = require("@/data/doc-data");
var tabs_1 = require("./ui/tabs");
var ComponentCard = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Title" : _b, children = _a.children, _c = _a.description, description = _c === void 0 ? "Description" : _c, markdown = _a.markdown, markdownCode = _a.markdownCode, image = _a.image, badgeText = _a.badgeText;
    return (<div className="bg-background flex flex-col gap-4 rounded-lg border p-4 w-full">
      <div>
        <div className="text-lg font-bold mb-2">{title}</div>
        <react_markdown_1.default className="prose dark:prose-invert text-muted-foreground text-sm">
          {description}
        </react_markdown_1.default>
      </div>

      <tabs_1.Tabs defaultValue="try">
        <tabs_1.TabsList className="w-full justify-end">
          <tabs_1.TabsTrigger value="try">Try me</tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="code">Code</tabs_1.TabsTrigger>
        </tabs_1.TabsList>
        <tabs_1.TabsContent value="try">
          <div className="bg-accent p-6 rounded-lg relative overflow-hidden pb-12">
            {children}
            {badgeText && (<div className="absolute text-xs p-1 px-2 bg-indigo-700 text-white bottom-0 left-0 w-full rounded-bl-lg">
                {badgeText}
              </div>)}
          </div>
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="code">
          <react_markdown_1.default className="prose dark:prose-invert">
            {markdownCode}
          </react_markdown_1.default>
        </tabs_1.TabsContent>
      </tabs_1.Tabs>

      {image && (<div className="border rounded-lg overflow-hidden">
          <image_1.default src={image} alt="Alt text" width={2683} height={2654}/>
        </div>)}
      <div className="border rounded-lg p-3">
        <collapsible_1.Collapsible className="group">
          <collapsible_1.CollapsibleTrigger className="text-lg font-medium w-full ">
            <div className="w-full items-center flex justify-between">
              <div>Props</div>
              <lucide_icon_component_1.default icon="chevron-right" className="ml-auto group-[aria-expanded=false]:hidden group-aria-expanded:hidden"/>
            </div>
          </collapsible_1.CollapsibleTrigger>
          <collapsible_1.CollapsibleContent>
            <react_markdown_1.default className="prose dark:prose-invert">
              {markdown}
            </react_markdown_1.default>
          </collapsible_1.CollapsibleContent>
        </collapsible_1.Collapsible>
      </div>
    </div>);
};
var ComponentPreview = function (_a) {
    return (<>
      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <react_markdown_1.default className="prose dark:prose-invert">
          {doc_data_1.markdown}
        </react_markdown_1.default>
      </div>
      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <react_markdown_1.default className="prose dark:prose-invert w-full">
          {doc_data_1.installationMd}
        </react_markdown_1.default>
      </div>

      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <ComponentCard title="Nav Link" description={doc_data_1.navlinkDescriptionMd} markdown={doc_data_1.appNavLinkMd} markdownCode={doc_data_1.appNavLinkCodeMd} badgeText="Click the link to see the active state" image="https://lh3.googleusercontent.com/u/2/drive-viewer/AKGpihZ9N2qQuLZpJ8pBVfhuTmBpZeWZ4QONr4DCXgjLLclHhHzRSB235YaimzTnu-w2OHcOaDlBAIz1vTYFV_GCFYahfQq4_7fRb5M=w3049-h2654-rw-v1">
          <div className="grid gap-3">
            <div className="flex gap-4 items-center p-3 bg-background rounded-lg">
              <h2 className="text-lg font-bold">MyApp</h2>
              <div className="flex gap-3 items-center">
                <AppNavLink_1.AppNavLink href="/demo">Dasboard</AppNavLink_1.AppNavLink>
                <AppNavLink_1.AppNavLink href="/other-demo">Click me</AppNavLink_1.AppNavLink>
              </div>
            </div>

            <div>
              <AppNavLink_1.AppNavLink href="/demo" as="button">
                Link as button
              </AppNavLink_1.AppNavLink>
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Nav Button" description={doc_data_1.buttonDescriptionMd} markdown={doc_data_1.appButtonMd} markdownCode={doc_data_1.appButtonCodeMd} image="https://lh3.googleusercontent.com/u/2/drive-viewer/AKGpihZHb8q2fcy43tSoJaX1DWyTxOymjOrSUBTmBLp71PqCmM7_CqE-9raphuPYRuLAoGZzk_2OWeahnopd_PO9Jlf6mCbdiF8KkA=w3049-h2654-rw-v1">
          <div className="flex gap-2">
            <AppButton_1.AppButton label="Home" icon="home"/>
            <AppButton_1.AppButton label="Delete" loading icon="trash-2" variant={"destructive"}/>
          </div>
        </ComponentCard>
      </div>

      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <react_markdown_1.default className="prose dark:prose-invert">
          {doc_data_1.configFileMd}
        </react_markdown_1.default>
        <div className="mt-4 flex w-full justify-end">
          <AppNavLink_1.AppNavLink customHref={"https://www.npmjs.com/package/app-components"} target="_blank" as="button" className="bg-[#cb0000]" icon="external-link">
            Npm
          </AppNavLink_1.AppNavLink>
        </div>
      </div>
    </>);
};
exports.ComponentPreview = ComponentPreview;
