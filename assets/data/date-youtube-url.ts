/**
 * 「開始時間: URL」
 * 日付と表示する動画の定義。文字列変数でキーを指定するためRecord型にしています。
 * スクリプトでソートするので並び替える必要はありません。
 * 「YYYY-MM-DD HH:mm:ss」形式で日付を書いてください。
 * dayjsが文字列をパースするため、厳密なISO形式にする必要はありません。
 */
const dateYouTubeUrl: Record<string, string> = {
  // 適当に岡大の動画を入れています
  '2021-10-28': 'https://www.youtube.com/watch?v=RfIo2QOz78I',
  // こんな感じで時間帯ごとに切り替えられます
  '2021-10-28 12:00': 'https://www.youtube.com/watch?v=5gMKcvKoz0Q',
  '2021-10-28 13:30': 'https://www.youtube.com/watch?v=SYSX0GHoBEI',
  '2021-10-28 15:10': 'https://www.youtube.com/watch?v=6dK7YwaEsVM',

  // もちろん日替わりも可能です
  '2021-11-1': 'https://www.youtube.com/watch?v=cg7skAIS7Uk',
  '2021-11-2': 'https://www.youtube.com/watch?v=cg7skAIS7Uk'
}

export default dateYouTubeUrl
