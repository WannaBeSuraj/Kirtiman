import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC', // JSW blue
          dark: '#004C99',
          light: '#3385D6',
        },
        secondary: {
          DEFAULT: '#1E3A8A', // Deep blue
          dark: '#1E293B',
          light: '#3B82F6',
        },
        accent: {
          DEFAULT: '#60A5FA', // Light blue accent
          dark: '#2563EB',
          light: '#93C5FD',
        },
        neutral: {
          cream: '#FAFAFA', // Off-white
          warm: '#FFFFFF', // Pure white
          beige: '#F5F5F5', // Light gray
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
