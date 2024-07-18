import { cn } from "@/lib/utils";
import React from "react";

type SRInputLabelProps = {
  blockId: string;
  label: string;
};

const SRInputLabel: React.FC<SRInputLabelProps> = ({ blockId, label }) => {
  return (
    <label htmlFor={cn("i-", blockId)} className="sr-only">
      {label}
    </label>
  );
};

type SRButtonProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const SRButton: React.FC<SRButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="sr-only"
      aria-label={`${label} button`}
    >
      {label}
    </button>
  );
};

type SRLinkProps = {
  href: string;
  label: string;
};

const SRLink: React.FC<SRLinkProps> = ({ href, label }) => {
  return (
    <a href={href} className="sr-only">
      {label}
    </a>
  );
};

/**
 * Screen reader components
 * - These components are used to provide screen reader support for the application.
 * - The components are not meant to be visible to the user.
 * - The props passed in can be more descriptive than the ones used in the visible components. For example, a button with label "Close" can have a screen reader label "Close control center".
 *
 * ### Example
 * @example
 *
 * ```tsx
 * // Adds an invisible screen reader label to an input for accessibility.
 *  <SR.InputLabel blockId={blockId} label={params.label} />
 * ```
 */
const SR = {
  InputLabel: SRInputLabel,
  Button: SRButton,
  Link: SRLink,
};

export default SR;
