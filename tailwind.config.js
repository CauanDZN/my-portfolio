/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-time-line':
          'linear-gradient(180deg, transparent 0%, rgb(99,102,241,.8) 100%)',
      },
      colors: {
        gray: {
          50: '#e6e6e6',
          100: '#cccccc',
          200: '#b3b3b3',
          300: '#999999',
          400: '#808080',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#262626',
          900: '#1f1f1f',
          950: '#0C0C0C',
        },
      },
      screens: {
        mobile: '380px',
        tablet: '780px',
        desktop: '1024px',
      },
      lineHeight: {
        lg: '120px',
      },
      fontSize: {
        xxl: '96px',
      },
      keyframes: {
        ripple: {
          '0%': {
            boxShadow: '0 0 0 0 #fff4, 0 0 0 0 #fff4',
          },
          '80%': {
            boxShadow: '0 0 0 30px #fff0, 0 0 0 60px #fff0',
          },
          '100%': {
            boxShadow: '0 0 0 0 #fff0, 0 0 0 0 #fff0',
          },
        },
        reveal: {
          '0%': {
            transform: 'translate(0,100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0,0)',
            opacity: '1',
          },
        },
        infiniteScroll: {
          '14.28%': {
            transform: 'translate(-100%)',
          },
          '14.29%': {
            transform: 'translate(600%)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        float: 'float 5s infinite',
        ripple: 'ripple 3s infinite',
        reveal: 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        infiniteScroll: 'infiniteScroll 40s linear infinite',
      },
    },
  },
  plugins: [],
}
