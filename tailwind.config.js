/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "Lime-Green": "hsl(163, 72%, 41%)",
        "Bright-Red": "hsl(356, 69%, 56%)",
        "Facebook": "hsl(208, 92%, 53%)",
        "Twitter": "hsl(203, 89%, 53%)",
        "Instagram": "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        "YouTube": "hsl(348, 97%, 39%)",

        // Dark theme
        "Very-Dark-Blue-BG": "hsl(230, 17%, 14%)",
        "Very-Dark-Blue-Top-BG-Pattern": "hsl(232, 19%, 15%)",
        "Dark-Desaturated-Blue-Card-BG": "hsl(228, 28%, 20%)",
        "Desaturated-Blue-Text": "hsl(228, 34%, 66%)",
        "White-Text": "hsl(0, 0%, 100%)",
        "Toggle-Dark": "linear_gradient_hsl(210,78%,56%)_to_hsl(146,68%,55%)",

        // Light theme
        "White-BG": "hsl(0, 0%, 100%)",
        "Very-Pale-Blue-Top-BG-Pattern": "hsl(225, 100%, 98%)",
        "Light-Grayish-Blue-Card-BG": "hsl(227, 47%, 96%)",
        "Dark-Grayish-Blue-Text": "hsl(228, 12%, 44%)",
        "Very-Dark-Blue-Text": "hsl(230, 17%, 14%)",
        "Toggle-Light": "hsl(230, 22%, 74%)",
      },
    },
  },
  plugins: [],
};
