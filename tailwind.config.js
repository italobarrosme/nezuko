/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,,scss}'],
  theme: {
    container: {
      maxWidth: '300%'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        brand: {
          dark: '#0D0D0D',
          light: '#fffef3',
          primary: '#004b8f',
          secondary: '#1068b9',
          soft: '#2D3035',
          accent: '#c92524'
        },
        transparent: 'transparent'
      }
    }
  },
  plugins: []
}
