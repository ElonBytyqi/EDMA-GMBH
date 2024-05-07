/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"],
  
  theme: {
   
    extend: {
          fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ],
        apple: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],

      },
      screens: {
        'lo': '430px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin')
   
  ]
}

