"use client";
import React from "react";
import Link, { LinkProps } from "next/link";
import { useParams, usePathname } from "next/navigation";
import SR from "./AppScreenReaders";
import { AppButton } from "./AppButton";
import { LucideIconNames } from "lucide-icon-component/build/lucide-icon-config";
import Icon from "lucide-icon-component";
import { AppNavPaths } from "@/app-config";
import { ButtonProps } from "./shadcn/button";

type AppNavLinkProps = Omit<LinkProps, "href"> &
  Pick<ButtonProps, "variant"> & {
    children?: React.ReactNode;
    className?: string;
    href?: AppNavPaths;
    customHref?: LinkProps["href"];
    as?: "link" | "button";
    icon?: LucideIconNames;
    target?: string;
  };

export const AppNavLink: React.FC<AppNavLinkProps> = ({
  className,
  href,
  children,
  customHref,
  as = "link",
  icon,
  variant,
  ...rest
}) => {
  const pathname = usePathname();
  const params = useParams();

  const pathnameWithoutParams = () => {
    // Convert params object to an array of its values
    const paramValues = Object.values(params);

    // Remove param values from the pathname
    let cleanedPathname = pathname;
    paramValues.forEach((param) => {
      cleanedPathname = cleanedPathname.replace(`/${param}`, "");
    });

    return cleanedPathname;
  };

  /**
   * This checks if the current path is part of the href path.
   * The navlink will be active if the current path is equal to or part of the href path.
   * This is useful to show active AppNavLinks with nested routes.
   *
   * FOr example, data sources in the dashboard: /dashboard/data/k2rd1a8w since k2rd1a8w is a path paramter, it will match /dashboard/data as well.
   */
  const cleanPath = pathnameWithoutParams();
  const isPartOfPath = cleanPath === href || pathname === href;
  const setHref = (href || customHref) as URL;

  const ButtonElement = ({ children }: { children: React.ReactNode }) => {
    return (
      <AppButton variant={variant} className={className} icon={icon}>
        {children}
      </AppButton>
    );
  };

  const NavLink = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <SR.Link
          label={`Navigate to page: ${setHref}`}
          href={String(setHref)}
        />
        {as === "link" && icon && <Icon icon={icon} />}
        <Link
          href={setHref}
          className={`hover:opacity/100 font-medium transition-colors ${
            as === "link" ? (isPartOfPath ? "opacity/100" : "opacity-65") : ""
          }`}
          {...rest}
        >
          {children}
        </Link>
      </>
    );
  };

  return as === "link" ? (
    <NavLink>{children}</NavLink>
  ) : (
    <NavLink>
      <ButtonElement>{children}</ButtonElement>
    </NavLink>
  );
};
