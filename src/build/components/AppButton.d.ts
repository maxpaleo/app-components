import React from "react";
import { LucideIconNames } from "lucide-icon-component/build/lucide-icon-config";
import { UserAccountTypes } from "@/app-config";
import { ButtonProps } from "./shadcn/button";
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
export type AppButtonProps = AppButtonType & ({
    children: React.ReactNode;
    label?: string;
} | {
    label?: string;
    children?: React.ReactNode;
});
/**
 * Appbutton
 * A shadcn button with with additional essential props.
 * - `loading` to quickly set the button to a loading state with a spinner and disables the button.
 * - `icon` autocompletes hundreds of icons from the [shadcn-icons](https://www.shadcn.com/icons.html) library.
 * - `label` to quickly set the button label. (You can also use regular children).
 * - ... All other shadcn button props.
 *
 * ---
 * Example:
 * ```tsx
 * <AppButton
  label="Test"
  loading
  icon="alarm-clock"
  variant="destructive"
/>
 * ```
 */
export declare const AppButton: React.FC<AppButtonProps>;
