/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'small-mobile':{
        'max':'576px'
      },
      'desktop': {
        'max':'1200px'
      },
    },
  },
  plugins: [],
}

