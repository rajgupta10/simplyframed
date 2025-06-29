/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        pastel: {
          pink: '#fbb6ce',
          purple: '#c084fc',
          lavender: '#a78bfa',
          peach: '#fed7aa',
          mint: '#a7f3d0',
          cream: '#fef7f0',
          sage: '#d1fae5',
          blush: '#fce7f3',
          sky: '#e0f2fe',
          coral: '#fed7d7',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      backgroundImage: {
        'organic-gradient': 'linear-gradient(135deg, #fef7f0 0%, #f7fafc 25%, #edf2f7 50%, #e6fffa 75%, #fef5e7 100%)',
        'pastel-gradient': 'linear-gradient(135deg, #fbb6ce 0%, #c084fc 25%, #a78bfa 50%, #fb7185 75%, #fbbf24 100%)',
      }
    },
  },
  plugins: [],
};