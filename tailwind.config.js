/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./src/**/*.{html,js,ts,tsx}", 'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "lemonade"],
  },
  plugins: [daisyui],
}

