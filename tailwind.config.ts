import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    daisyui: {
      themes: [
        {
          dark: {
            background: 'red',
            primary: '#793ef9',
            'primary-focus': '#570df8',
            'primary-content': '#ffffff',
            secondary: '#f000b8',
            'secondary-focus': '#bd0091',
            'secondary-content': '#ffffff',
            accent: '#37cdbe',
            'accent-focus': '#2aa79b',
            'accent-content': '#ffffff',
            neutral: '#2a2e37',
            'neutral-focus': '#16181d',
            'neutral-content': '#ffffff',
            'base-100': '#3d4451',
            'base-200': '#2a2e37',
            'base-300': '#16181d',
            'base-content': '#ebecf0',
            info: '#66c6ff',
            success: '#87d039',
            warning: '#e2d562',
            error: '#ff6f6f',
          },
        },
      ],
    },
  },
  plugins: [require('daisyui')],
};

export default config;
