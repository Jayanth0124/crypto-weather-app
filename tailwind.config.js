/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files inside src
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure new App Router structure is included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#1E40AF",
        background: "#111827",
        textPrimary: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
