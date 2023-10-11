<p align="center">
  <a href="" rel="noopener">
 <img width=90px height=90px src="./public/logo.png" alt="Scout logo"></a>
</p>

<h3 align="center">NEXTJS Boilerplate</h3>

## 📝 Table of Contents

- [What does have?](#doeshave)
- [Structured](#structured)
- [Getting Started](#getting_started)

## 📦 What does the project have? <a name="doeshave">

- The project uses Next.js version 13.5.23 and the App Router.
- For tests [Vitest](https://vitest.dev/guide/) are implemented using @testing-library
- For storage, [zustend](https://next-auth.js.org/) is used, with the "loading" component as an example of usage.
- For Auth [Nextauth](https://next-auth.js.org/), provider google like example
- Prettier eslint and lintstaged for organization code

- Husky has also been implemented for:
  Commitlint
  Pre-commit with lint-staged and Prettier
  Pre-push running lint-staged tests and build
  Vitest tests are implemented using @testing-library.

- The next-config includes PWA configurations.
- Image permissions are set up, for example, for Google authentication.

- [usehook-ts](https://usehooks-ts.com/) is also installed.
- For visual designer using [tailwind](https://tailwindcss.com/docs/width)

## 🚧 How is the project structured? <a name = "structured"></a>

- "app/layout": Default layout that calls providers, global components like navbar
- "app/loading": Default loading
- "app/not-found": 404
- "app/page": Homepage
- "app/dashboard: Example protected route
- "modules": Folder where the project modules are structured, categorized by flow or business rule in the modules there is also the service call to external api using nextjs SSR, there is an authentication module as an example using nextauth.
- "shared/components": Folder where more complex components with their hooks and functions are structured
- "shared/pieces": Isolated components aimed at composing more complex components
- "shared/hooks": Folder where hooks used in multiple modules or routes are stored
- "shared/constants": Folder for global constants
- "providers": Folder referencing project providers to be called in the layout
- "styles": Stores the tailwind reference and the globals file for global CSS
- "utils": Folder for support functions, comes with some example functions, includes the "cn" function for tailwind class merging
- "middleware": Next.js file for routing and auxiliary functions, comes with an example
- "public": In the 'public' folder, there are some default images for the system and a 'manifest.json' file for PWA attributes.

#### 🖌️ Tailwind config has been implemented with this preset:

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
          dark: '#030826',
          light: '#fffef3',
          primary: '#F27141',
          secondary: '#F28B30',
          soft: '#F28D77',
          accent: '#F24C27',
        },
        transparent: 'transparent',
      },
      backgroundImage: {
        'effect-granula': "url('/effectgranula.png')",
      },
      minHeight: {
        'screen-nav': 'calc(100vh - 5rem)',
      },
    },
  },
}
```

## 🔦 Instructions for installing the boilerplate.

```
npx create-next-app@latest -e https://github.com/italobarrosme/nezuko
```

Run

```
npm run dev
```

.env

```
NODE_ENV=production
API_URL='',
JWT_SECRET='',
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET='
NEXTAUTH_SECRET=''
```

<sup>Date of the last version - 10-10-2023</sup>
