/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        cyan: {
          DEFAULT: '#00ffff',
          glow: '#00f0f0',
          400: '#00ffff',
        },
        orange: {
          DEFAULT: '#ff6f00',     // Vibrant amber-orange
          glow: '#ff8c33',
          400: '#ff9e00',
          500: '#ff6f00',
        },
        dark: '#0a0e1a',
        glass: 'rgba(5, 15, 35, 0.6)',
        'glass-light': 'rgba(5, 15, 35, 0.4)',
      },
      keyframes: {
        gradientFlow: {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '200%' },
        },
      },
      animation: {
        gradientFlow: 'gradientFlow 8s ease infinite',
      },
      dropShadow: {
        'cyan-strong': '0 0 20px #00ffff',
        'cyan-glow-light': '0 0 15px #00f0f0',
        'cyan-glow-medium': '0 0 30px #00f0f0',
        'cyan-glow-strong': '0 0 40px #00ffff',
        'orange-glow': '0 0 30px #ff8c33',
        'orange-strong': '0 0 40px #ff6f00',
      },
      textShadow: {
        DEFAULT: '0 0 10px rgba(0,0,0,0.7)',
        'cyan-light': '0 0 10px rgba(0,255,255,0.3)',
        'cyan-medium': '0 0 15px rgba(0,0,0,0.8)',
        'cyan-strong': '0 0 40px rgba(0,255,255,0.6)',
        'cyan-title': '0 0 30px rgba(0,255,255,0.4)',
        'cyan-heading': '0 0 30px #00f0f0',
        'cyan-subheading': '0 0 20px #00f0f0',
        'orange-glow': '0 0 30px #ff8c33',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow': { textShadow: theme('textShadow.DEFAULT') },
        '.text-shadow-cyan-light': { textShadow: theme('textShadow.cyan-light') },
        '.text-shadow-cyan-medium': { textShadow: theme('textShadow.cyan-medium') },
        '.text-shadow-cyan-strong': { textShadow: theme('textShadow.cyan-strong') },
        '.text-shadow-cyan-title': { textShadow: theme('textShadow.cyan-title') },
        '.text-shadow-cyan-heading': { textShadow: theme('textShadow.cyan-heading') },
        '.text-shadow-cyan-subheading': { textShadow: theme('textShadow.cyan-subheading') },
        '.text-shadow-orange-glow': { textShadow: theme('textShadow.orange-glow') },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
