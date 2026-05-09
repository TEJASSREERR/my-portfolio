/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        dark: "#0f0f0f",
        card: "#1a1a2e",
      },
    },
  },
  plugins: [],
}