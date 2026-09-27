import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10111A",
        brand: "#D51B8A",
        electric: "#16A8D8"
      }
    }
  },
  plugins: []
};

export default config;
