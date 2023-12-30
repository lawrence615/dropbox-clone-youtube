This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is a simple clone of Dropbox that shows how to upload, rename and delete files. Built by following Sonny Sangha's [tutorial](https://www.youtube.com/watch?v=FdEY-ZnEikg) (Let’s build Dropbox 2.0 with NEXT.JS 14! (React, Clerk, Shadcn, Firebase, Drag/Drop, CRUD, TS)). Files and file details are stored in [Firebase](https://firebase.google.com/), and [clerk](https://clerk.com/) is used for authentication. For both services, you will need to create accounts.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The simplest method to deploy your Next.js application is through the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), developed by the creators of Next.js.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

To view the deployed app, click [here](https://dropbox-clone-youtube-six.vercel.app/).



## Libraries
[react-dropzone](https://react-dropzone.js.org/)
```bash
npm install --save react-dropzone
```
[clerk](https://clerk.com/)
```bash
npm install @clerk/nextjs
```
[shadcn/ui](https://ui.shadcn.com/)
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add table
npm install @tanstack/react-table
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
```
[next-themes](https://www.npmjs.com/package/next-themes)
```bash
npm install next-themes
```
[firebase](https://firebase.google.com/)
```bash
npm install firebase
```
[react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks)
```bash
npm i react-firebase-hooks
```
[pretty-bytes](https://www.npmjs.com/package/pretty-bytes)
```bash
npm i pretty-bytes
```
[react-file-icon](https://www.npmjs.com/package/react-file-icon)
```bash
npm i react-file-icon
npm i --save-dev @types/react-file-icon
```
[zustand](https://github.com/pmndrs/zustand) - State management library
```bash
npm install zustand 
```
[react-hot-toast](https://react-hot-toast.com/)
```bash 
npm install react-hot-toast
```

## Environment configuration
Start by generating a .env.local file within the project's root directory. Subsequently, navigate to your Clerk account and add a new application. In the left-hand menu, of the newly created app, access the API Keys section under Developers. Locate and note down the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY. Paste these keys into the .env.local file.
