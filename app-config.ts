import {
  Button as ShadButton,
  ButtonProps as ShadButtonProps,
} from "@/components/ui/button";

export const Button = ShadButton;
export type ButtonProps = ShadButtonProps;

export type UserAccountTypes = "admin" | "super-admin" | "viewer" | "editor";

export type AppNavPaths =
  // Demo paths
  | "/demo"
  | "/other-demo"
  //Public paths
  | "/"
  | "/about"
  | "/policies/privacy-policy"
  | "/policies/terms-of-service"
  // Auth paths
  | "/auth/sign-in"
  | "/auth/sign-up"
  | "/password-reset"
  // Dashboard paths
  | "/dashboard"
  | "/dashboard/settings"
  // User profile paths
  | "/me/profile"
  | "/me/settings"
  | "/me/security";
// Other paths
