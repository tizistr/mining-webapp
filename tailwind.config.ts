import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scans app/ folder for Tailwind classes
    './components/**/*.{js,ts,jsx,tsx}', // Scans components/ folder (for Sidebar)
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px', // Enables backdrop-blur-sm for the milky see-through effect
      },
    },
  },
  plugins: [],
};

export default config;
