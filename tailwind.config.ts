import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  //TODO: add purge to remove unnecessairly code in prod
  // purge: ["./app/**/* .{js,jsx,ts,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "irga-sand": "#F3F0EB",
        "irga-green": "#B1FA63",
        "irga-orange": "#FE7733",
        "irga-purple": "#B2A1FF",
        "irga-dark": "#3d3d3d",
        "irga-black": "#232323",
        "irga-light": "#F6F5F0",
        "irga-button-border-green": "#B1FA63",
        "irga-text-light-grey": "#908F8C",
      },
      fontFamily: {
        custom: ["SpaceGrotesk"],
        libre: ["LibreBaskerville"],
        urbanist: ["Urbanist"],
        questrial: ["Questrial"],
      },
    },
  },
  plugins: [],
};
export default config;
