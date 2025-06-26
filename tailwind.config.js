/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#000000',
        accent: '#B8860B',
        surface: '#1A1A1A',
        gold: {
          50: '#FFFEF7',
          100: '#FFFBEA',
          200: '#FFF3C4',
          300: '#FFEC8B',
          400: '#FFE066',
          500: '#FFD700',
          600: '#E6C200',
          700: '#B8860B',
          800: '#8B6914',
          900: '#5E4A0F'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'pulse-gold': 'pulseGold 2s infinite',
        'glow': 'glow 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(100%)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(255, 215, 0, 0)' }
        },
        glow: {
          'from': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
          'to': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}