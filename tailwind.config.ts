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
        background: 'var(--background, #F8F3EA)',
        foreground: 'var(--foreground, #252525)',
        surface: {
          DEFAULT: 'var(--surface, #EFE5D5)',
          foreground: 'var(--surface-foreground, #252525)',
          raised: 'var(--surface-raised, #FFFFFF)',
        },
        primary: {
          DEFAULT: 'var(--primary, #6B1F2A)',
          foreground: 'var(--primary-foreground, #FFFFFF)',
          hover: 'var(--primary-hover, #541720)',
          light: '#F5E8EA',
        },
        secondary: {
          DEFAULT: 'var(--secondary, #B08D57)',
          foreground: 'var(--secondary-foreground, #252525)',
          hover: 'var(--secondary-hover, #957544)',
          light: '#FAF5EC',
        },
        muted: {
          DEFAULT: 'var(--muted, #EFE5D5)',
          foreground: 'var(--muted-foreground, #6F6A63)',
        },
        border: 'var(--border, #DED5C8)',
        accent: {
          DEFAULT: 'var(--accent, #9E3D24)',
          foreground: 'var(--accent-foreground, #FFFFFF)',
        },
        destructive: {
          DEFAULT: 'var(--destructive, #9E2A2B)',
          foreground: 'var(--destructive-foreground, #FFFFFF)',
        },
        success: {
          DEFAULT: 'var(--success, #2D6A4F)',
          foreground: 'var(--success-foreground, #FFFFFF)',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'var(--font-playfair)', 'serif'],
        sans: ['var(--font-jakarta)', 'Inter', 'sans-serif'],
      },
      screens: {
        'mobile-compact': '360px',
        'mobile-std': '390px',
        'mobile-lg': '430px',
      },
    },
  },
  plugins: [],
};

export default config;
