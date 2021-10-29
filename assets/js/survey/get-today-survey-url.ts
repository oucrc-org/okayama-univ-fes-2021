import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import 'dayjs/locale/ja'
import dateSurveyUrl from '~/assets/data/date-survey-url' // import locale

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
 * 複数のフォームURLと今日の日時を比較し、適切な動画URLを取得する
 */
const getTodaySurveyUrl = () => {
  // 日時だけを配列にする
  const dates = Object.keys(dateSurveyUrl)

  // 今日の日付インスタンス
  const today = dayjs()
  const datesByTodaySorted = dates.filter((dateString) => {
    const dateToCompare = dayjs(dateString)
    return today.isSameOrAfter(dateToCompare)
  })

  // 最新の日時
  const latestSurveyDateKey = sortDateStrings(datesByTodaySorted).pop()

  return {
    url: latestSurveyDateKey ? dateSurveyUrl[latestSurveyDateKey] : null
  }
}

export default getTodaySurveyUrl
