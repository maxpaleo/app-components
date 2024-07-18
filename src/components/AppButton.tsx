import React from "react";
import SR from "./AppScreenReaders";
import Icon from "lucide-icon-component";
import { LucideIconNames } from "lucide-icon-component/build/lucide-icon-config";
import { UserAccountTypes } from "@/app-config";
import { Button, ButtonProps } from "@/components/ui/button";

export type AppButtonType = ButtonProps & {
  icon?: LucideIconNames;
  loading?: boolean;
  screenReaderText?: string;
  userRole?: UserAccountTypes;
  /**
   * Add role restrictions to only display when the user has the correct role.
   * If this isn't provided, the button will be displayed for all users.
   *
   * @example
   * roleRestrictions={['admin', 'super-admin']}
   * => This will only display for users with the role 'admin' or 'super-admin'
   */
  roleRestrictions?: UserAccountTypes[];
};

export type AppButtonProps = AppButtonType &
  (
    | { children: React.ReactNode; label?: string }
    | { label?: string; children?: React.ReactNode }
  );

export const AppButton: React.FC<AppButtonProps> = ({
  icon,
  loading = false,
  size,
  children,
  disabled,
  label,
  screenReaderText,
  roleRestrictions,
  userRole,
  asChild,
  ...rest
}) => {
  const selectedIcon = icon;
  const textSize = size === "sm" ? "text-xs" : "";
  const iconSize = size === "sm" ? 14 : 16;

  const screenReaderTextValue = screenReaderText || label || "Clickable button";

  if (roleRestrictions) {
    const userAccount = roleRestrictions.find((role) => role === userRole);
    if (!userAccount) {
      return null;
    }
  }

  const { onClick } = rest;

  return (
    <>
      <SR.Button label={screenReaderTextValue} onClick={onClick!} />

      <Button
        size={size}
        disabled={disabled || loading}
        asChild={asChild}
        {...rest}
      >
        <div className="flex gap-2 items-center">
          {selectedIcon && (
            <Icon size={iconSize} className="" icon={selectedIcon} />
          )}
          {label && <span className={textSize}> {label}</span>}
          <>{children}</>
          {loading && <Icon className="animate-spin" icon="loader-2" />}
        </div>
      </Button>
    </>
  );
};
