/**
 * 「開始時間: URL」
 * 日付と表示する動画の定義。文字列変数でキーを指定するためRecord型にしています。
 * スクリプトでソートするので並び替える必要はありません。
 * 「YYYY-MM-DD HH:mm:ss」形式で日付を書いてください。
 * dayjsが文字列をパースするため、厳密なISO形式にする必要はありません。
 */
const dateSurveyUrl: Record<string, string> = {
  '2021-10-30 00:00': 'https://forms.gle/BprtZhN6GWFo42L57',
  '2021-11-8 09:00': 'https://forms.gle/bJKr4Ube3YVJkvRW8',
  '2021-11-16 00:00': 'https://forms.gle/A4sp8cAFXwKkWFxx5',
  '2021-11-18 00:00': 'https://forms.gle/DvEy927YYvKypoxC6'
}

export default dateSurveyUrl
