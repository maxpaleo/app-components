## App Components
This is a collection of dead simple essential components that will save you time and boilerplate code.

These are just wrappers around the [Shadcn](https://www.shadcn.com/) components, so you can use them as you would use the originals, but with the additional App features.

## Installation
```bash
npm i @maxpauwels/app-components
```

### What does it do? 
The components include a couple of essential features that you normally end up having to write over and over again, as well as some essential typesafety for your app.

If you haven't used these essential features in your core components, you'll ask yourself why soon enough.


### Components

#### AppButton
The shadcn button but with additional essential props.
- \`loading\` to quickly set the button to a loading state with a spinner and disables the button.
- \`icon\` autocompletes hundreds of icons from the [shadcn-icons](https://www.shadcn.com/icons.html) library. 
- \`label\` to quickly set the button label. (You can also use regular children).
- ... All other shadcn button props.
  
```tsx 
<AppButton
  label="Test"
  loading
  icon="alarm-clock"
  variant="destructive"
/>
```

#### AppNavLink
The NextJs Link but with additional essential props.
The link automatically shows as active when the current path is part of the href path.
- \`href\`: This will autocomplete all your app paths, which you can set in the app-config.ts file.
- \`as\` prop which can be set to \`button\` to wrap the link in a shadcn button.
- \`customHref\`: This repaces the standard \`href\` prop, which is useful if you want to use a custom url for the link. You can also just use the Next  \`Link\` in this case.
- ... All other shadcn button props.

```tsx 
<AppNavLink href="/demo">Dasboard</AppNavLink> // Regular link, will autocomplete your hrefs.
<AppNavLink href="/demo" as="button">Dashboard</AppNavLink> // Button link, will autocomplete your hrefs.
<AppNavLink href="/demo" customHref="/custom-url">Custom Url</AppNavLink> // Link with custom href, will not autocomplete your hrefs.
```

### Config file
The config file is used to set the app variables. It's an extra step, but ends up saving  tons of time because it will autocomplete all your href's, allow you to control user roles, etc.

- \`UserAccountTypes\`: An array of user roles that the button will only display for.
- \`AppNavPaths\`: An array of all your app paths.

```tsx
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
```
The \`app-config.ts\` should be in the root of your project. You can change the \`AppNavPaths\` with your own App paths. If you don't use user roles, you can set the \`UserAccountTypes\` to an empty string.