interface EventData {
  // 開始時間
  time?: string,

  // イベント名。自動補完の利便化のため"t"itleにはしない
  name?: string,

  // 画像のフォルダはコンポーネントで補完
  // webp画像名
  webp?: string,

  // jpg画像名
  jpg?: string
}

/**
 * 「表示を終わる時間: イベントデータ」
 * 画像パスが重複してる理由は、「時間がなくて画像変換ができなかった」「ここだけ変えたい」と言った需要に応えるた目です
 *
 * @see https://github.com/oucrc-org/okayama-univ-fes-2021/blob/main/assets/data/date-youtube-url.ts
 */
const dateNextEvent: Record<string, EventData> = {
  '2021-11-8 19:00': { time: '11/7（日）16:00 〜', name: 'プロライブ（ハナコ、四千頭身、ぼる塾', webp: 'burner_next_event_procon.webp', jpg: 'burner_next_event_procon.jpg' },
  '2021-11-16 21:00': { time: '11/16（火）18:00〜', name: '校友会ステージ企画（1日目)', webp: 'burner_next_event_stage.webp', jpg: 'burner_next_event_stage.jpg' },
  '2021-11-17 21:00': { time: '11/17（水）18:00〜', name: '校友会ステージ企画（2日目）', webp: 'burner_next_event_stage.webp', jpg: 'burner_next_event_stage.jpg' }
}

export default dateNextEvent
