# NEXTJS Boilerplate

## How is the project structured?

### The project uses Next.js version 13.4.8 and the App Router.

### Folders 
- "app": Next.js routing folder
- "app/layout": Default layout that calls providers, global components like navbar
- "app/loading": Default loading
- "app/not-found": 404
- "app/page": Homepage
- "modules": Folder where project modules are structured, categorized by flow or business rule, comes with an authentication module as an example
- "components": Folder where more complex components with their hooks and functions are structured
- "pieces": Isolated components aimed at composing more complex components
- "hooks": Folder where hooks used in multiple modules or routes are stored
- "constants": Folder for global constants
- "gateways": Folder for various types of gateways, comes with Axios gateway
- "providers": Folder referencing project providers to be called in the layout
- "styles": Stores the tailwind reference and the globals file for global CSS
- "utils": Folder for support functions, comes with some example functions, includes the "cn" function for tailwind class merging
- "middleware": Next.js file for routing and auxiliary functions, comes with an example

## What does the project have?

- For tests Jest are implemented using @testing-library
- For storage, [zustend](https://next-auth.js.org/) is used, with the "ListToast" component as an example of usage.
- For Auth [Nextauth](https://next-auth.js.org/), provider google like example
- For cookies using Nookies
- Prettier eslint and lintstaged for organization code
- fetch api using axios like gateway

- Husky has also been implemented for:
Commitlint
Pre-commit with lint-staged and Prettier
Pre-push running lint-staged and tests
Jest tests are implemented using @testing-library.

- The next-config includes PWA configurations.
- Image permissions are set up, for example, for Google authentication.

- [usehook-ts](https://usehooks-ts.com/) is also installed.
- For visual designer using [tailwind](https://tailwindcss.com/docs/width)
Tailwind config has been implemented with this preset:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,,scss}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code'],
    },
    extend: {
      colors: {
        brand: {
          dark: '#0D0D0D',
          light: '#fffef3',
          primary: '#004b8f',
          secondary: '#1068b9',
          soft: '#2D3035',
          accent: '#c92524',
        },
        transparent: 'transparent',
      },
    },
  },
}
```

## Instructions for installing the boilerplate.
```
npx create-next-app@latest -e https://github.com/italobarrosme/nezuko
```
Install
```
npm install
```
Run
```
npm run dev
```

### Date of the last version. 
``` 07-08-2023 ```

