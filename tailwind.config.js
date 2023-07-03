/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'lg': '2rem',
      'xl': "3rem",
      '2xl': "5rem"
    },
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1200px',
      xl: '1900px'
    },
    extend: {},
    boxShadow: {
      zero: '0px 0px 13px #212121'
    }
  },
  plugins: [],
}

