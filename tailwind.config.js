import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      pw: '0.94rem',
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      '2xl': "1.5rem",
      '3xl': "1.875rem",
      '4xl': "2.25rem",
      '5xl': "3rem",
      '6xl': "3.75rem",
      '7xl': "4.5rem",
      '8xl': "6rem",
      '9xl': "8rem",
    },
  },
  presets: [createPreset()],
};
