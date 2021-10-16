module.exports = {
  purge: [
    "docs/*.html", "docs/*.js"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'phone': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    }
  },
  variants: {
    button: ['responsive', 'hover', 'active'],
    extend: {},
  },
  plugins: [],
}
