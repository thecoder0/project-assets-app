/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#646cff',
          'custom-hover-blue': '#535bf2',
          'custom-bg-dark': '#242424',
          'custom-bg-light': '#f9f9f9',
          'custom-text-light': 'rgba(60, 255, 255, 0.87)',
          'custom-text-dark': '#213547',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        },
        transitionDuration: {
            '250': '250ms',
        }
      },
    },
    plugins: [],
  }