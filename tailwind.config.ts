// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "rgb(var(--background) / <alpha-value>)",
//         foreground: "rgb(var(--foreground) / <alpha-value>)",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
// tailwind.config.ts
export default {
  darkMode: "class", // Important!
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
