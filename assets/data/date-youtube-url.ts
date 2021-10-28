/**
 * 「開始時間: URL」
 * 日付と表示する動画の定義。文字列変数でキーを指定するためRecord型にしています。
 * スクリプトでソートするので並び替える必要はありません。
 * 「YYYY-MM-DD HH:mm:ss」形式で日付を書いてください。
 * dayjsが文字列をパースするため、厳密なISO形式にする必要はありません。
 */
const dateYouTubeUrl: Record<string, string> = {
  // 開始まではこの動画が出ます
  '2021-1-1': 'https://www.youtube.com/watch?v=RfIo2QOz78I',

  // ここにライブ配信のURLを入れます
  '2021-11-6 9:30': 'https://www.youtube.com/watch?v=5gMKcvKoz0Q',

  // ライブ終了後に出す動画
  '2021-11-6 18:00': 'https://www.youtube.com/watch?v=cg7skAIS7Uk',

  // あとは適宜変えてください
  '2021-11-7 00:00': 'https://www.youtube.com/watch?v=cg7skAIS7Uk',
  '2021-11-8 00:00': 'https://www.youtube.com/watch?v=cg7skAIS7Uk',
  '2021-11-9 00:00': 'https://www.youtube.com/watch?v=cg7skAIS7Uk',
  '2021-11-10 00:00': 'https://www.youtube.com/watch?v=cg7skAIS7Uk'
}

export default dateYouTubeUrl
