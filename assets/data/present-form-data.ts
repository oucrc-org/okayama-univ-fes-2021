const presentFormData = new Promise((resolve) => {
  resolve({
    success: true,
    data: [
      {
        id: 1,
        name: 'Nintendo Switch',
        image_path: '',
        required_stamps: 6,
        stock: 1
      },
      {
        id: 2,
        name: '電子書籍リーダー',
        image_path: '',
        required_stamps: 5,
        stock: 1
      },
      {
        id: 3,
        name: 'ワイヤレスイヤフォン',
        image_path: '',
        required_stamps: 5,
        stock: 1
      }
    ]
  })
}).then((res: any) => {
  return {
    presents: res.data,
    stampNumber: 5
  }
})

export default presentFormData
