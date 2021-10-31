import IPrize from '~/assets/js/type/IPrize'

// idはv-forのkeyになるのでユニークにしてください
const stampRallyItems: IPrize[] = [
  {
    id: 'nintendo-switch',
    name: 'Nintendo Switch',
    presentCount: 2,
    stampCount: 10,
    cover: {
      url: 'https://images.microcms-assets.io/assets/7734751c51674cb2966df9edbbd3b15b/31f8c1358ce644cd96b24b41250848a8/%E3%83%A1%E3%82%A4%E3%83%B3.jpg',
      height: 556,
      width: 1280
    }
  },
  {
    id: 'ps5',
    name: 'PS5',
    presentCount: 1,
    stampCount: 30,
    cover: {
      url: 'https://images.microcms-assets.io/assets/7734751c51674cb2966df9edbbd3b15b/31f8c1358ce644cd96b24b41250848a8/%E3%83%A1%E3%82%A4%E3%83%B3.jpg',
      height: 556,
      width: 1280
    }
  }
]

export default stampRallyItems
