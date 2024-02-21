/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
      },
      colors: {
        'primary': '#E6EFFE',
        'primary-200': '#74A2ED',
        'primary-300': '#F1F7FD',
        'primary-600': '#1539E7',
        'primary-700': '#1D46F3',
        'grayDefoult': '#6B7280',
        'gray-10': '#F9FAFB',
        'gray-40': '#E5E7EB',
        'gray-60': '#667085',
        'gray-90': '#1D2939',
        'gray-1000': '#6B7280',
        'yello': '#FFBA12',
        'cyan': '#F2F7FE'
      },
      maxWidth: {
        '8xl': '1440px',
      }
    },
  },
  plugins: [],
}

