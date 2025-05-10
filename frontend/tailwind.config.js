/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "screen-3xl": "1920px"
      },
      colors: {
        'light-gray': '#EAE7DC',
        'light-brown': '#D8C3A5',
        'dark-gray': '#8E8D8A',
        'light-orange': '#E98074',
        'dark-orange': '#E85A4F',
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

