/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s infinite"
      },
      colors: {
        orange: {
          DEFAULT: '#FF8D50',
          light: '#FFA871',
          dark: '#E6733C',
        },
        blue: {
          DEFAULT: '#3B79E4',
          light: '#ECF2FD',
        },
        purple: {
          DEFAULT: '#A36ACA'
        },
        lake: {
          DEFAULT: '#4C8591'
        },
        pink: {
          DEFAULT: '#FF507C',
          light: '#FFF5F8'
        },
        green: {
          DEFAULT: '#3BC376',
          light: "#F0FBF4"
        }
      }
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar'),],
  daisyui: {
    themes: ["light"],
  },
}

