/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#0B1220',
        'midnight-2': '#0F172A',
        'midnight-3': '#1E293B',
        blue: { DEFAULT: '#2563EB', 50: '#EFF6FF', 100: '#DBEAFE', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8' },
        cyan: { DEFAULT: '#06B6D4', 400: '#22D3EE', 500: '#06B6D4' },
        graphite: '#1E293B',
        silver: '#E5E7EB',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      borderRadius: { card: '20px', modal: '24px', btn: '14px', input: '12px' },
      boxShadow: {
        soft: '0 4px 32px rgba(0,0,0,0.08)',
        card: '0 2px 16px rgba(0,0,0,0.06)',
        glow: '0 0 20px rgba(37,99,235,0.15)',
      },
    },
  },
  plugins: [],
}
