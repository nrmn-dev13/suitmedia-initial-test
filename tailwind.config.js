/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'blue': '#003459',
      'dark-blue': '#242B33',
      'gray': '#667479',
      'soft-gray': '#99A2A5',
      'yellow': '#FCEED5',
      'secondary-yellow': '#F7DBA7',
      'dark-yellow': '#FFB775',
    },
  },
  plugins: [],
}