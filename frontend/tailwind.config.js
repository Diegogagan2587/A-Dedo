/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Comfortaa', 'sans-serif'],
        "roboto-flex": [ 'Roboto Flex', 'sans-serif'],
        "baloo": ['"Baloo Thambi 2"', 'sans-serif']
      },
      colors: {
        customGreen: '#00A66A',
        textColor: "#263238"
      },
      backgroundImage: {
        'nav-curve': `url(./src/assets/nav-background.svg)`
      }
    },
  },
  plugins: [],
}

