/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#E2F5CF",
        "dark-green": "#288037",
        "green": "#97DB51",
        "red-orange": "#FBB785"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

