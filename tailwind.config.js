/** Rebuild CSS after editing HTML:
 *  npx tailwindcss@3 -i ./src/input.css -o ./css/tailwind.css --minify */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',
        'primary-hover': '#1C3269',
        dark: '#111827',
        'dark-bg': '#1F2937',
        'gray-text': '#6B7280',
        'light-border': '#E5E7EB',
      },
    },
  },
}
