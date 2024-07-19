import React from "react";
import { LinkProps } from "next/link";
import { LucideIconNames } from "lucide-icon-component/build/lucide-icon-config";
import { AppNavPaths } from "@/app-config";
import { ButtonProps } from "./shadcn/button";
type AppNavLinkProps = Omit<LinkProps, "href"> & Pick<ButtonProps, "variant"> & {
    children?: React.ReactNode;
    className?: string;
    href?: AppNavPaths;
    customHref?: LinkProps["href"];
    as?: "link" | "button";
    icon?: LucideIconNames;
    target?: string;
};
/**
 * AppNavLink
 * The NextJs Link component, but with an additional essential props.
 * The link automatically shows as active when the current path is part of the href path.
 * - `href`: This will autocomplete all your app paths, which you can set in the app-config.ts file.
 * - `as` prop which can be set to `button` to wrap the link in a shadcn button.
 * - `customHref`: This repaces the standard \`href\` prop, which is useful if you want to use a custom url for the link. You can also just use the Next  \`Link\` in this case.
 * ---
 * Example:
 * ```tsx
 * <AppNavLink href="/demo">Dasboard</AppNavLink> // Regular link, will autocomplete your hrefs.
 * <AppNavLink href="/demo" as="button">Dashboard</AppNavLink> // Button link, will autocomplete your hrefs.
 * <AppNavLink href="/demo" customHref="/custom-url">Custom Url</AppNavLink> // Link with custom href, will not autocomplete your hrefs.
 * ```
 */
export declare const AppNavLink: React.FC<AppNavLinkProps>;
export {};
