import dayjs from 'dayjs'
// バンドルサイズ最小化のため他と同じプラグインを使う
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import 'dayjs/locale/ja'
import dateNextEvent from '~/assets/data/date-next-event' // import locale

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
const getNextEvent = () => {
  // 日時だけを配列にする
  const dates = Object.keys(dateNextEvent)

  // 今日の日付インスタンス
  const today = dayjs()

  // 次の日付だけを絞り込む
  const datesAfterToday = dates.filter((dateString) => {
    const dateToCompare = dayjs(dateString)
    return !today.isSameOrAfter(dateToCompare)
  })

  // 次のイベントの日付の配列を並び替える
  const sorted = sortDateStrings(datesAfterToday)

  // 先に定義しないと描画で未定義エラーになる
  let time, name, webp, jpg: string | undefined
  const latest = dateNextEvent[sorted[0]]

  if (latest) {
    time = latest.time
    name = latest.name
    // ここで合成してrequireしないとパスを解決できない
    webp = require(`@/assets/img/static/home/${latest.webp}`)
    jpg = require(`@/assets/img/static/home/${latest.jpg}`)
  }
  return {
    time,
    name,
    webp,
    jpg
  }
}

export default getNextEvent
