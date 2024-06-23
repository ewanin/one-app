/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        blackish: '#121212',
        whitish: '#f9f9f9',
        blueish: '#5AC1FF',
      },
      screens: {
        '3xl': '2000px'
      },
    },
    fontFamily: {
      neoOne: ["OneNeo", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    }
  },
  plugins: [],
};
