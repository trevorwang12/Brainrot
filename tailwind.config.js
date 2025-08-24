/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Typography
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },

      // Color System - Inspired by Mobalytics design
      colors: {
        // Primary palette for dark theme
        primary: {
          50: '#f8f7ff',
          100: '#f1f0fe',
          200: '#e4e1fc',
          300: '#d1ccf8',
          400: '#b8b0f2',
          500: '#9898ff',
          600: '#7c6dfa',
          700: '#6b5cf0',
          800: '#544e7a',
          900: '#3f3966',
          950: '#252046',
        },

        // Dark theme palette
        dark: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b9b9c2',
          400: '#9495a1',
          500: '#797499',
          600: '#5a5485',
          700: '#453f70',
          800: '#2a1f52',
          900: '#1a1635',
          950: '#100f2b',
        },

        // Accent colors
        accent: {
          gold: '#f2bf43',
          orange: '#fc7c00',
          green: '#16b474',
          purple: '#9898ff',
        },

        // Text hierarchy
        text: {
          primary: '#ffffff',
          secondary: '#e5e3f0',
          muted: '#a8a5b8',
        },
      },

      // Background gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2a1f52 0%, #1a1635 50%, #100f2b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f2bf43 0%, #fc7c00 100%)',
        'gradient-card': 'linear-gradient(135deg, #453f70 0%, #2a1f52 100%)',
      },

      // Enhanced shadows
      boxShadow: {
        glow: '0 0 20px rgba(152, 152, 255, 0.3)',
        card: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 12px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

