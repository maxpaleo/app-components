import React from "react";
import { LucideIconNames } from "lucide-icon-component/build/lucide-icon-config";
import { UserAccountTypes } from "@/app-config";
import { ButtonProps } from "@/components/ui/button";
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
export declare const AppButton: React.FC<AppButtonProps>;
