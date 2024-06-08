module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,,scss}',
    // './node_modules/@coqueirodigital/react-components/dist/**/*.{js,ts,jsx,tsx}',
  ],
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
        primary: {
          regular: 'var(--color-primary-regular)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          regular: 'var(--color-secondary-regular)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        neutral: {
          black: 'var(--color-neutral-black)',
          white: 'var(--color-neutral-white)',
          light: 'var(--color-neutral-light)',
          lightest: 'var(--color-neutral-lightest)',
          dark: 'var(--color-neutral-dark)',
        },
        feedback: {
          error: 'var(--color-feedback-error)',
          warning: 'var(--color-feedback-warning)',
          success: 'var(--color-feedback-success)',
          info: 'var(--color-feedback-info)',
        },
        transparent: 'transparent',
      },
      backgroundImage: {
        'effect-granula': "url('/effectgranula.png')",
      },
      minHeight: {
        'screen-nav': 'calc(100vh - 7rem)',
      },
    },
  },
}
