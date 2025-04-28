import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#241a19",
      },
    },
  },
  plugins: [],
};

export default config;
