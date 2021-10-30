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
 * 今日の日時から、最新のURL、生配信か否か、放送時間を取得する。
 * isLiveは常に真偽を返し、それ以外は未定義の場合がある
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

  let isLive = false
  let url, title, who, timeFrame, nextVideoDateString: string | undefined

  // 次に動画が変わる時間
  if (datesAfterTodaySorted.length > 0) {
    nextVideoDateString = dayjs(datesAfterTodaySorted[0]).format('MM月DD日 (ddd) HH:mm')
  }

  if (latestVideoDateKey) {
    const latest = dateYouTubeUrl[latestVideoDateKey]
    url = latest.url
    isLive = latest.isLive ?? false
    title = latest.title
    who = latest.who
    timeFrame = latest.timeFrame
  }
  return { url, isLive, title, who, timeFrame, nextVideoDateString }
}

export default getTodayVideoUrl
