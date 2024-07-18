import { ButtonProps as ShadButtonProps } from "@/components/ui/button";
export declare const Button: import("react").ForwardRefExoticComponent<ShadButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export type ButtonProps = ShadButtonProps;
export type UserAccountTypes = "admin" | "super-admin" | "viewer" | "editor";
export type AppNavPaths = "/demo" | "/other-demo" | "/" | "/about" | "/policies/privacy-policy" | "/policies/terms-of-service" | "/auth/sign-in" | "/auth/sign-up" | "/password-reset" | "/dashboard" | "/dashboard/settings" | "/me/profile" | "/me/settings" | "/me/security";
