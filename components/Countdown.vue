<template>
  <div v-if="enableCountDown" class="fixed top-0 left-0 z-50 w-screen h-screen bg-white flex flex-col gap-6 justify-center items-center">
    <div class="font-bold text-xl">
      学祭2021 サイトオープンまで
    </div>
    <client-only><FlipCountdown :deadline="openDateString" :labels="{days:'日', hours:'時間', minutes:'分', seconds:'秒'}" /></client-only>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
import dayjs from 'dayjs'
// 以降の処理を日本時間基準に切り替える
dayjs.extend(require('dayjs/plugin/timezone'))
dayjs.extend(require('dayjs/plugin/utc'))
dayjs.tz.setDefault('Asia/Tokyo')
const openDateEnv = process.env.OPEN_DATE
const isEnvValid = dayjs(openDateEnv).isValid()
let openDateInput = '2021-11-07 00:00:00'
// dayjsが環境変数を解釈できない場合、ハードコーディングされた日時を使う
if (isEnvValid) {
  openDateInput = process.env.OPEN_DATE
}

export default {
  name: 'Countdown',
  components: { FlipCountdown },

  data () {
    const openDate = dayjs(openDateInput)

    // オープンまでのmsはマイナスになるが、以下の演算がわかりにくいためプラスにする
    const milliSecondsUntilOpen = dayjs().diff(openDate, false) * -1

    // カウトダウンタイマーのために文字列化する必要がある
    // 詳細: https://github.com/philipjkim/vue2-flip-countdown
    const openDateString = openDate.format('YYYY-MM-DD HH:mm:ss')
    return {
      openDateString,
      milliSecondsUntilOpen,
      enableCountDown: milliSecondsUntilOpen > 0
    }
  },
  mounted () {
    this.warnAboutEnv()
    this.closeCountDown()
  },
  methods: {
    closeCountDown () {
      // 差分を利用して、オープンの瞬間にカウントダウンを非表示にする
      // 重要: アロー関数はthisの参照先が変わるので使わないこと
      setTimeout(function () {
        this.enableCountDown = false
      }, this.milliSecondsUntilOpen)
    },
    warnAboutEnv () {
      if (isEnvValid) {
        console.debug('オープン日時を環境変数から設定しました')
      } else {
        openDateEnv ? console.debug(`環境変数はYYYY-MM-DD HH:mm:ssで設定してください: ${openDateEnv}`) : console.debug('環境変数が設定されていません')
      }
      console.debug(`オープン日時: ${this.openDateString}`)
    }
  }
}
</script>
