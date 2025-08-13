/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3573FC",     // My main color
        secondary: "#39F74F",   // Secondary
        danger: "#FF0000",      // Example danger color
        dark: "#1C1C1C",        // Black
        light: "#FFFFFF"        // White
      },
    },
  },
  plugins: [],
}
