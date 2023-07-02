/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1200px',
      xl: '1900px'
    },
    extend: {},
    boxShadow: {
      zero: '0px 0px 3px #555'
    }
  },
  plugins: [],
}

