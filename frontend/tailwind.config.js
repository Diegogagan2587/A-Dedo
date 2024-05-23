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
        sans: [ 'Roboto Flex', 'sans-serif']
      },
      colors: {
        customGreen: '#00A66A',
      },
      backgroundImage: {
        'nav-curve': `url(./src/assets/nav-background.svg)`
      }
    },
  },
  plugins: [],
}

