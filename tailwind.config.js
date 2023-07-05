/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': '1rem',
      'lg': '2rem',
      'lg2': '2.5rem',
      'xl': "3rem",
      '2xl': "5rem"
    },
    backgroundImage: {
      'about': "url('/src/assets/bgabout.svg')",
      'about-2': "url('/src/assets/bg-about.svg')",
      'footer': "url('/src/assets/bg-footer.svg')"
    },
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1200px',
      xl: '1900px'
    },
    extend: {},
    // boxShadow: {
    //   zero: '0px 0px 13px #212121'
    // }
  },
  plugins: [],
}

