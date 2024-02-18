import type { Config } from 'tailwindcss'
const webpackConfig = require('./webpack.config.js');

const {fontFamily} = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors:{
        dark : "#1b1b1b", 
        light:"#f5f5f5",
        primary:"#2f6fcf",
        primaryDark : "#58E6D9",
        gradient: {
          start: "#ffffff", // Start color
          end: "#b9cff0",   // End color
        },

      }, 
      animation:{
        'spin-slow':'spin 8s linear infinite'
      }
    },
    screens: {
      '2xl': {max: '1535px'},

      'xl': {max: '1279px'},


      'lg': {max: '1023px'},


      'md': {max: '767px'},


      'sm': {max: '639px'},

      'xs': {max: '479px'},


    },
  },
  plugins: [],
  webpackConfig,
}
export default config
