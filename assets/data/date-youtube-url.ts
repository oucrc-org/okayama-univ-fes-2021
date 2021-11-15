interface YouTubeData {
  url?: string,

  // nocookie
  embed?: string,

  // 生配信か否か
  isLive?: boolean,

  // タイトル
  title?: string,

  // 出演者
  who?: string,

  // 放送時間
  timeFrame?: string
}

/**
 * 「開始時間: URL」
 * 日付と表示する動画の定義。文字列変数でキーを指定するためRecord型にしています。
 * スクリプトでソートするので並び替える必要はありません。
 * 「YYYY-MM-DD HH:mm:ss」形式で日付を書いてください。
 * dayjsが文字列をパースするため、厳密なISO形式にする必要はありません。
 */
const dateYouTubeUrl: Record<string, YouTubeData> = {
  // 開始まではこの動画が出ます
  '2021-1-1': {
    url: 'https://www.youtube.com/watch?v=gwjxlonn43o',
    embed: 'https://www.youtube-nocookie.com/embed/gwjxlonn43o',
    isLive: true,
    title: 'プロライブ',
    timeFrame: '11/7 (日) 16:00〜18:00'
  },

  // 11月7日のライブ
  '2021-11-7 00:00': {
    url: 'https://www.youtube.com/watch?v=gwjxlonn43o',
    embed: 'https://www.youtube-nocookie.com/embed/gwjxlonn43o',
    isLive: true,
    title: 'プロライブ',
    timeFrame: '11/7 (日) 16:00〜18:00'
  },

  // 11月8日から15日の動画
  '2021-11-8 00:00': {
    url: 'https://www.youtube.com/watch?v=XeZdZV9L6SI',
    embed: 'https://www.youtube-nocookie.com/embed/XeZdZV9L6SI',
    title: '岡山大学祭 カウントダウン動画 8日前',
    who: '岡山スーパースター 相田翔吾'
  },
  '2021-11-9 00:00': {
    url: 'https://www.youtube.com/watch?v=f19Re0J1RRA',
    embed: 'https://www.youtube-nocookie.com/embed/f19Re0J1RRA',
    title: '岡山大学祭 カウントダウン動画 7日前',
    who: '女優・モデル 高尾美有'
  },
  '2021-11-10 00:00': {
    url: 'https://www.youtube.com/watch?v=jFzKwLmiVCY',
    embed: 'https://www.youtube-nocookie.com/embed/jFzKwLmiVCY',
    title: '岡山大学祭 カウントダウン動画 6日前',
    who: 'パーソナリティ 坂本大輔'
  },
  '2021-11-11 00:00': {
    url: 'https://www.youtube.com/watch?v=uHPR8cszmF0',
    embed: 'https://www.youtube-nocookie.com/embed/uHPR8cszmF0',
    title: '岡山大学祭 カウントダウン動画 5日前',
    who: 'パーソナリティ 安井優子'
  },
  '2021-11-12 00:00': {
    url: 'https://www.youtube.com/watch?v=-_kkAsE1tu4',
    embed: 'https://www.youtube-nocookie.com/embed/-_kkAsE1tu4',
    title: '岡山大学祭 カウントダウン動画 4日前',
    who: 'オニビジョンMC 中里優希'
  },
  '2021-11-13 00:00': {
    url: 'https://www.youtube.com/watch?v=v6-EDAA1G74',
    embed: 'https://www.youtube-nocookie.com/embed/v6-EDAA1G74',
    title: '岡山大学祭 カウントダウン動画 3日前',
    who: 'アイドルグループ eel NEOのさくらさん'
  },
  '2021-11-14 00:00': {
    url: 'https://www.youtube.com/watch?v=_A3vQq83jpg',
    embed: 'https://www.youtube-nocookie.com/embed/_A3vQq83jpg',
    title: '岡山大学祭 カウントダウン動画 2日前',
    who: 'タレント 福井柑奈'
  },
  '2021-11-15 00:00': {
    url: 'https://www.youtube.com/watch?v=MR2P5MbkMeM',
    embed: 'https://www.youtube-nocookie.com/embed/MR2P5MbkMeM',
    title: '岡山大学祭 カウントダウン動画 1日前',
    who: 'アナウンサー 淵本恭子'
  },

  // 11月16日・17日のライブ
  '2021-11-16 00:00': {
    url: 'https://www.youtube.com/watch?v=_M-uGrHpTPw',
    embed: 'https://www.youtube-nocookie.com/embed/_M-uGrHpTPw',
    isLive: true,
    title: 'ステージ企画１日目',
    who: 'チアリーダーWIZARDS・コールロータス・吟詩部・体操部・落語研究会・少林寺拳法部・ビリペル',
    timeFrame: '11/16 (火) 18:00〜21:00'
  },
  '2021-11-17 00:00': {
    url: 'https://www.youtube.com/watch?v=bFreLCr5naI',
    embed: 'https://www.youtube-nocookie.com/embed/bFreLCr5naI',
    isLive: true,
    title: 'ステージ企画２日目',
    who: '吹奏楽団・グリークラブ・ジャズ研究会・ダンス部',
    timeFrame: '11/17 (水) 18:00〜21:00'
  },

  // 重要: 18日にundefinedに切り替えないと永遠にライブが出る
  '2021-11-18 00:00': { }
}

export default dateYouTubeUrl
