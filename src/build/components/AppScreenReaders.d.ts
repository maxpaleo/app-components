import React from "react";
type SRInputLabelProps = {
    blockId: string;
    label: string;
};
type SRButtonProps = {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
type SRLinkProps = {
    href: string;
    label: string;
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
declare const SR: {
    InputLabel: React.FC<SRInputLabelProps>;
    Button: React.FC<SRButtonProps>;
    Link: React.FC<SRLinkProps>;
};
export default SR;
