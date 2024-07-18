export const installationMd = `
## Installation

\`\`\`
npm install @maxpauwels/app-components
\`\`\`

`;

export const markdown = `
## App Components

This is a collection of dead simple essential components that will save you time and boilerplate code.

These are just wrappers around the [Shadcn](https://www.shadcn.com/) components, so you can use them as you would use the originals, but with the additional App features.

### What does it do? 
The components include a couple of essential features that you normally end up having to write over and over again, as well as some essential typesafety for your app.

If you haven't used these essential features in your core components, you'll ask yourself why soon enough.
`;

export const appButtonMd = `
- \`loading\`: A boolean value that when set to true, displays a loading spinner and disables the button.
- \`icon\`: A autocomplete icon string from the [shadcn-icons](https://www.shadcn.com/icons.html) library. Saves you tons of time from having to wrap buttons in divs with icons and having to lookup the icon name.
- \`label\`: A string value for the button lable which slightly reduces the lines of code. You can stil use the component with children, but I find myself using the label prop more often.
- ... All other shadcn button props.
`;

export const appButtonCodeMd = `
\`\`\`
<AppButton
  label="Test"
  loading
  icon="alarm-clock"
  variant="destructive"
/>
\`\`\`
`;

export const appNavLinkMd = `
- \`href\`: This will autocomplete all your app paths, which you can set in the app-config.ts file. This is a minor feature, but is incredibly time saving and will prevent tons of broken links.
- \`customHref\`: This repaces the standard \`href\` prop, which is useful if you want to use a custom url for the link. You can also just use the Next  \`Link\` in this case.
- \`as\`: Quickly wrap the link in a shadcn button by settin as to button. The default is link.
- ... All other NextJs Link props.
`;

export const appNavLinkCodeMd = `
\`\`\`
<AppNavLink href="/demo">Dasboard</AppNavLink>
\`\`\`

`;

export const navlinkDescriptionMd = `
The NextJs Link component, but with an additional essential props.
- The href autocompletes all your app paths.
- The \`as\` prop which can be set to \`button\` to wrap the link in a shadcn button. 
- The link automatically shows as active when the current path is part of the href path.
`;

export const buttonDescriptionMd = `
The shadcn button but with additional essential props.
- \`loading\` to quickly set the button to a loading state with a spinner and disables the button.
- \`icon\` autocompletes hundreds of icons from the [shadcn-icons](https://www.shadcn.com/icons.html) library. 
- \`label\` to quickly set the button label. (You can also use regular children).
- ... All other shadcn button props.

#### Additional props
You'll need to set the role type in the app-config.ts file.
- \`roleRestrictions\` An array of user roles that the button will only display for.
- \`userRole\` set the current user's role from your state.
`;

export const configFileMd = `
## Config file

The config file is used to set the app variables. It's an extra step, but ends up saving  tons of time because it will autocomplete all your href's, allow you to control user roles, etc.

- \`UserAccountTypes\`: An array of user roles that the button will only display for.
- \`AppNavPaths\`: An array of all your app paths.



### Example
Update this with your own data. You can also assign existing types if you have them.
\`\`\`
export type UserAccountTypes = 
| "admin" 
| "super-admin" 
| "viewer" 
| "editor";

export type AppNavPaths =
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
\`\`\`
The \`app-config.ts\` should be in the root of your project. You can change the \`AppNavPaths\` with your own App paths. If you don't use user roles, you can set the \`UserAccountTypes\` to an empty string.
`;
