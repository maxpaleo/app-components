import { AppButton } from "@/src/components/AppButton";
import { AppNavLink } from "@/src/components/AppNavLink";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "./ui/collapsible";
import Icon from "lucide-icon-component";
import { markdown, appNavLinkMd, appNavLinkCodeMd, appButtonMd, appButtonCodeMd, installationMd, buttonDescriptionMd, navlinkDescriptionMd, configFileMd, } from "@/data/doc-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
var ComponentCard = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Title" : _b, children = _a.children, _c = _a.description, description = _c === void 0 ? "Description" : _c, markdown = _a.markdown, markdownCode = _a.markdownCode, image = _a.image, badgeText = _a.badgeText;
    return (<div className="bg-background flex flex-col gap-4 rounded-lg border p-4 w-full">
      <div>
        <div className="text-lg font-bold mb-2">{title}</div>
        <ReactMarkdown className="prose dark:prose-invert text-muted-foreground text-sm">
          {description}
        </ReactMarkdown>
      </div>

      <Tabs defaultValue="try">
        <TabsList className="w-full justify-end">
          <TabsTrigger value="try">Try me</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="try">
          <div className="bg-accent p-6 rounded-lg relative overflow-hidden pb-12">
            {children}
            {badgeText && (<div className="absolute text-xs p-1 px-2 bg-indigo-700 text-white bottom-0 left-0 w-full rounded-bl-lg">
                {badgeText}
              </div>)}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <ReactMarkdown className="prose dark:prose-invert">
            {markdownCode}
          </ReactMarkdown>
        </TabsContent>
      </Tabs>

      {image && (<div className="border rounded-lg overflow-hidden">
          <Image src={image} alt="Alt text" width={2683} height={2654}/>
        </div>)}
      <div className="border rounded-lg p-3">
        <Collapsible className="group">
          <CollapsibleTrigger className="text-lg font-medium w-full ">
            <div className="w-full items-center flex justify-between">
              <div>Props</div>
              <Icon icon="chevron-right" className="ml-auto group-[aria-expanded=false]:hidden group-aria-expanded:hidden"/>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ReactMarkdown className="prose dark:prose-invert">
              {markdown}
            </ReactMarkdown>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>);
};
export var ComponentPreview = function (_a) {
    return (<>
      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <ReactMarkdown className="prose dark:prose-invert">
          {markdown}
        </ReactMarkdown>
      </div>
      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <ReactMarkdown className="prose dark:prose-invert w-full">
          {installationMd}
        </ReactMarkdown>
      </div>

      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <ComponentCard title="Nav Link" description={navlinkDescriptionMd} markdown={appNavLinkMd} markdownCode={appNavLinkCodeMd} badgeText="Click the link to see the active state" image="https://lh3.googleusercontent.com/u/2/drive-viewer/AKGpihZ9N2qQuLZpJ8pBVfhuTmBpZeWZ4QONr4DCXgjLLclHhHzRSB235YaimzTnu-w2OHcOaDlBAIz1vTYFV_GCFYahfQq4_7fRb5M=w3049-h2654-rw-v1">
          <div className="grid gap-3">
            <div className="flex gap-4 items-center p-3 bg-background rounded-lg">
              <h2 className="text-lg font-bold">MyApp</h2>
              <div className="flex gap-3 items-center">
                <AppNavLink href="/demo">Dasboard</AppNavLink>
                <AppNavLink href="/other-demo">Click me</AppNavLink>
              </div>
            </div>

            <div>
              <AppNavLink href="/demo" as="button">
                Link as button
              </AppNavLink>
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Nav Button" description={buttonDescriptionMd} markdown={appButtonMd} markdownCode={appButtonCodeMd} image="https://lh3.googleusercontent.com/u/2/drive-viewer/AKGpihZHb8q2fcy43tSoJaX1DWyTxOymjOrSUBTmBLp71PqCmM7_CqE-9raphuPYRuLAoGZzk_2OWeahnopd_PO9Jlf6mCbdiF8KkA=w3049-h2654-rw-v1">
          <div className="flex gap-2">
            <AppButton label="Home" icon="home"/>
            <AppButton label="Delete" loading icon="trash-2" variant={"destructive"}/>
          </div>
        </ComponentCard>
      </div>

      <div className="z-10 p-6 rounded-lg flex flex-col gap-4 bg-background w-full max-w-xl items-center justify-between font-mono text-sm lg:flex">
        <ReactMarkdown className="prose dark:prose-invert">
          {configFileMd}
        </ReactMarkdown>
        <div className="mt-4 flex w-full justify-end">
          <AppNavLink customHref={"https://www.npmjs.com/package/app-components"} target="_blank" as="button" className="bg-[#cb0000]" icon="external-link">
            Npm
          </AppNavLink>
        </div>
      </div>
    </>);
};
