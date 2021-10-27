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
        accentColor: '#F68014',
        hashTagColor: '#00A1C5',
        hashTagAccentColor: '#FFD099'
      },
      spacing: {
        30: '7.5rem'
      },
      zIndex: {
        '-10': '-10'
      }
    },
    fontFamily: {
      'yu-mincho': ['游明朝体', 'Yu Mincho', 'YuMincho', 'ヒラギノ明朝 Pro', 'Hiragino Mincho Pro', 'Noto Serif JP', 'MS P明朝', 'MS PMincho', 'serif'],
      'ms-mincho': ['MS 明朝', 'MS Mincho', 'Noto Serif JP', 'serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ]
}
