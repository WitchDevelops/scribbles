# About
It's like Google docs, but nicer. Build from a tutorial by JSM

## Dependencies
- JSM editor - word editor - https://www.npmjs.com/package/jsm-editor
- Clerk - user authenthication and management - https://clerk.com/

## Helpful resources
### Customizing Clerk auth
https://clerk-docs-1swzi0cqq.clerkpreview.com/components/customization/appearance

It's pretty easy, you gotta install
`npm install @clerk/themes`
and add the `appearance` prop to the `<ClerkProvider>` component:
```jsx
import { dark } from '@clerk/themes';
import { ClerkProvider, SignIn } from '@clerk/nextjs';
import type { AppProps } from "next/app";
 
function MyApp({ pageProps }: AppProps) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <Component {...pageProps}>
    </ClerkProvider>
  )
}
 
export default MyApp;
```