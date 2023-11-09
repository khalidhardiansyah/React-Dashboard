/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        BgPrimary: '#F4F5FA',
        BrandPrimary:'#5570F1',
        BrandSecondary:'#FFCC91',
        BrandTernary:'#ABAFB1',
        BrandForthnary:'#EFF1F9'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}