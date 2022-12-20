/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      padding: {
        '8%': '8%'
      },
      colors: {
        fabLightBlue: '#8ECAE6',
        fabBrightBlue: '#2183BC',
        fabDarkBlue: '#023047',
        fabYellow: '#FFB703',
        fabOrange: '#FB8500',
      }
    },
  },
  plugins: [],
}


