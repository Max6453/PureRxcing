/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./PureRxcing/*.{html,js,css}"],
  theme: {
    colors: {
      'text': '#f2ff00',
      'background': '#202020',
      'primary': '#f2ff00',
      'secondary': '#000000',
      'accent': '#ffffff',
     },
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 2s ease-out',
      }
    },
  plugins: [require('flowbite/plugin')],
}
}