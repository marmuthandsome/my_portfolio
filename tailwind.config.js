/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#272254',
        accent: '#2558a5',
        light: '#c9e5e0',
        secondary: '#ccadd3',
      },
      opacity: {
        '98': '0.98',
      },
    },
  },
  plugins: [],
}
