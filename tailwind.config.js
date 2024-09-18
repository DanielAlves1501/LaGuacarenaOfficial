/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F10",
        secondary: "#DC5F25",
        darkGray: "#131313",
        white: "#FFF",
      },
      fontSize: {
        heroTitle: "72px",
        heroTitleSm: "52px",
        title: "32px",
        titleSm: "26px",
        subtitle: "18px",
        subtitleSm: "18px",
        body: "16px",
        bodySm: "16px",
        small: "14px",
        quote: "24px",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", '"Open Sans"'],
        inter: ["var(--font-inter)", '"Open Sans"'],
      },
      backgroundImage: {
        "hero-image": "url(/images/heroBg.webp)",
      },
      screens: {
        xs: "520px",
      },
    },
  },
  plugins: [],
};
