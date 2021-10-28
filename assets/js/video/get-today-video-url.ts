import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import 'dayjs/locale/ja'
import dateYouTubeUrl from '~/assets/data/date-youtube-url' // import locale

// 地域を設定。ja-jpではなくjaを使うこと https://github.com/iamkun/dayjs/tree/dev/src/locale
dayjs.locale('ja')

// 日付を比較するプラグインを有効か
dayjs.extend(isSameOrAfter)

function sortDateStrings (dates: string[]) {
  return dates.sort((a, b) => {
    // dayjsの差分を使って並び替える
    return dayjs(a).diff(dayjs(b))
  })
}

/**
 * 複数の動画URLに紐づいた日時と今日の日時を比較し、適切な動画URLを取得する
 */
const getTodayVideoUrl = () => {
  // 日時だけを配列にする
  const dates = Object.keys(dateYouTubeUrl)

  // 今日の日付インスタンス
  const today = dayjs()
  const datesByTodaySorted: string[] = []
  const datesAfterTodaySorted: string[] = []

  dates.forEach((dateString) => {
    const dateToCompare = dayjs(dateString)
    if (today.isSameOrAfter(dateToCompare)) {
      datesByTodaySorted.push(dateString)
    } else {
      datesAfterTodaySorted.push(dateString)
    }
  })

  // 最新の日時
  const latestVideoDateKey = sortDateStrings(datesByTodaySorted).pop()

  // 次に動画が変わる時間
  let nextVideoDateString = null
  if (datesAfterTodaySorted.length > 0) {
    nextVideoDateString = dayjs(datesAfterTodaySorted[0]).format('MM月DD日 HH:mm')
  }

  return {
    url: latestVideoDateKey ? dateYouTubeUrl[latestVideoDateKey] : null,
    nextVideoDateString
  }
}

export default getTodayVideoUrl
