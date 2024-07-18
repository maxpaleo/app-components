import React from "react";
import { LinkProps } from "next/link";
import { AppNavPaths, ButtonProps } from "@config";
import { LucideIconNames } from "lucide-icon-component/build/lucide-icon-config";
type AppNavLinkProps = Omit<LinkProps, "href"> & Pick<ButtonProps, "variant"> & {
    children?: React.ReactNode;
    className?: string;
    href?: AppNavPaths;
    customHref?: LinkProps["href"];
    as?: "link" | "button";
    icon?: LucideIconNames;
    target?: string;
};
export declare const AppNavLink: React.FC<AppNavLinkProps>;
export {};
