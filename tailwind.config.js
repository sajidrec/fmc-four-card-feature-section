/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "custom-Red": "hsl(0, 78%, 62%)",
        "custom-Cyan": "hsl(180, 62%, 55%)",
        "custom-Orange": "hsl(34, 97%, 64%)",
        "custom-Blue": "hsl(212, 86%, 64%)",
        "custom-Very-Dark-Blue": "hsl(234, 12%, 34%)",
        "custom-Grayish-Blue": " hsl(229, 6%, 66%)",
        "custom-Very-Light-Gray": "hsl(0, 0%, 98%)"
      },
      fontFamily: {
        "custom-poppins": ["Poppins", "sans-serif"]
      },
      fontWeight: {
        "custom-thin": "200",
        "custom-normal": "400",
        "custom-bold": "600"
      },
      screens: {
        "desktop": "481px",
      }
    },
  },
  plugins: [],
}

