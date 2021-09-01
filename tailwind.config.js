module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        3: '3px'
      },
      colors: {
        themeColor: '#0071C5',
        themeLight: '#1D8CDE',
        accentColor: '#F68014'
      },
      spacing: {
        30: '7.5rem'
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
