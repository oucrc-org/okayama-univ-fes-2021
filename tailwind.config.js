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
        shodouBack: '#1a1a1a',
        hashTagColor: '#00A1C5',
        hashTagAccentColor: '#FFD099'
      },
      fontFamily: {
        hina: ['Hina Mincho', 'san-serif']
      },
      spacing: {
        22: '5rem',
        30: '7.5rem',
        140: '35rem',
        160: '40rem',
        200: '50rem'
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
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked']
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: false
  }
}
