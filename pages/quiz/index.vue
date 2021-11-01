<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative md:pr-28">
    <Header title="今日のクイズ" colors="bg-themeColor text-white" />

    <VerticalTitle text="QUIZ" colors="text-gray-200" class="-z-10" />

    <section>
      <div class="tracking-widest leading-6 px-4">
        <p class="mt-8 mb-4 text-yellow-400 text-lg font-bold">
          Question
        </p>
        <!-- brやuタグのためにHTMLLeaderを使用 -->
        <p class="mb-4 text-xl font-bold">
          <HTMLLeader :body="question.quiz" />
        </p>
        <div class="mb-4 mt-12 flex flex-col gap-y-3">
          <div
            v-for="{id, contents} in question.answers"
            :key="`answer-${id}`"
            class="bg-white rounded-xl shadow-xl border-2"
            :class="selectedAnswerId === id ? 'border-blue-400' : 'border-gray-100'"
          >
            <label class="cursor-pointer flex flex-row items-center px-2">
              <input
                :id="`option-${id}`"
                v-model="selectedAnswerId"
                type="radio"
                name="answer"
                :value="id"
                class="hidden"
                @change="selectedAnswerContent = contents"
              >
              <picture>
                <source :srcset="id === selectedAnswerId ? svgRadioTrue : svgRadioFalse" type="image/svg+xml">
                <source :srcset="id === selectedAnswerId ? webpRadioTrue : webpRadioFalse" type="image/webp">
                <img :src="id === selectedAnswerId ? pngRadioTrue : pngRadioFalse" alt="">
              </picture>
              <span class="block ml-2">{{ contents }}</span>
            </label>
          </div>
        </div>
        <div class="mb-4 mt-16 text-center">
          <a href="#hint-modal">
            <RoundedButton text="ヒント" class="border-themeColor bg-white text-themeColor cursor-pointer" />
          </a>
          <div id="hint-modal" class="modal">
            <div class="modal-box">
              <p>{{ question.hint }}</p>
              <div class="modal-action">
                <a href="#" class="btn">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <RoundedButton
            text="答え合わせ →"
            class="text-white cursor-pointer"
            :class="(selectedAnswerId < 0) ? 'bg-blue-300 border-blue-300 cursor-not-allowed': 'bg-themeColor border-themeColor'"
            @click.native="showIsCorrect"
          />
          <div id="wa-modal" class="modal">
            <div class="modal-box">
              <p>{{ selectedAnswerContent }} ではありません！</p>
              <div class="modal-action">
                <a href="#" class="btn">閉じる</a>
              </div>
            </div>
          </div>
          <div id="stamp-modal" class="modal">
            <div class="modal-box">
              <p>スタンプを獲得しました！</p>
              <div class="modal-action">
                <!--suppress HtmlUnknownTarget -->
                <a href="/mypage" class="btn">確認する</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <BodyWithHeader title="スタンプ達成状況" colors="border-themeColor text-themeColor">
        <StampStatus :stamps="stamps" />
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="応募ページ" colors="border-themeColor text-themeColor">
        <div class="alert">
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0071C5"
              class="flex-shrink-0 w-6 h-6 mx-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <label>
              <h4>プレゼント応募は、<b>11月18日</b>（学祭終了後）より開始します。</h4>
            </label>
          </div>
        </div>

        <div class="text-center mt-12 md:pl-3">
          <RoundedButton text="応募する →" disabled="true" class="border-blue-300 bg-blue-300 text-white" />
        </div>
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="注意事項" colors="border-themeColor text-themeColor">
        <p class="mb-3">
          ・スタンプラリーへの参加は岡山大学生のみならず、一般の方もご参加いただけます。
        </p>
        <p class="mb-3">
          ・景品応募期間は、スタンプラリー終了後の <u>11/18（木）0:00〜 11/24（水）23:59</u> までとさせていただきます。
        </p>
        <p class="mb-3">
          ・当選権利はご当選者本人に限り、他人に譲渡することはできません。またオークションへの出品なども固くお断りします。
        </p>
        <p class="mb-3">
          ・プレゼント送付前にアカウント連携を解除された場合は当選が無効となります。
        </p>
        <p class="mb-3">
          ・応募できる商品は、スタンプ数に関わらず <u>お一人につき1商品</u> とさせていただきます。
        </p>
        <p class="mb-3">
          ・必要スタンプ数に対して<u>所有スタンプ数が多いほど、当選確率が上昇</u>します。<br>（例: スタンプ5個の景品をスタンプ8個所有した状態で応募すると、当選確率は8/5倍）
        </p>
        <p class="mb-3">
          ・応募者がいなかった景品に関しましては、スタンプを8つ全て集めた参加者で2次抽選を行うことがあります。
        </p>
        <p class="mb-3">
          ・応募はお一人につき1回までです。別アカウントからの複数応募が判明した場合、無効とさせていただく場合があります。
        </p>
        <p class="mb-3">
          ・当選は発送をもってかえさせていただきます。商品の発送は、2022年1月中を予定しています。
        </p>
        <p class="mb-3">
          ・本キャンペーンは、やむを得ない事情により中止または内容が変更となる場合がございますので、あらかじめご了承ください。
        </p>
      </BodyWithHeader>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import Header from '@/components/layouts/Header.vue'
import VerticalTitle from '@/components/layouts/VerticalTitle.vue'
import BodyWithHeader from '@/components/templates/header/BodyWithHeader.vue'
import RoundedButton from '@/components/templates/parts/RoundedButton.vue'
import HTMLLeader from '@/components/templates/html/HTMLLeader.vue'
import StampStatus from '@/components/templates/stamp/StampStatus.vue'

const url = process.env.BACKEND_API_URL

export default Vue.extend({
  components: {
    StampStatus,
    Header,
    VerticalTitle,
    BodyWithHeader,
    RoundedButton,
    HTMLLeader
  },
  middleware: 'auth',
  asyncData ({ app }: Context) {
    // noinspection TypeScriptUnresolvedFunction
    return app.$axios.get(`${url}/question`, {
      headers: {
        'Access-Token': app.$auth.getToken('google').replace('Bearer ', ''),
        'Access-Control-Allow-Origin': `${url}/*`
      }
    }).then((res) => {
      console.log(res.data)
      return app.$axios.get(`${url}/user`, {
        headers: {
          'Access-Token': app.$auth.getToken('google').replace('Bearer ', ''),
          'Access-Control-Allow-Origin': `${url}/*`
        }
      }).then((r) => {
        return {
          question: res.data.data,
          stamps: r.data.stamps
        }
      })
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
      alert('問題の取得に失敗しました')
    })
  },
  data () {
    return {
      svgRadioTrue: require('@/assets/img/static/form/radio-true.svg'),
      svgRadioFalse: require('@/assets/img/static/form/radio-false.svg'),
      webpRadioTrue: require('@/assets/img/static/form/radio-true.webp'),
      webpRadioFalse: require('@/assets/img/static/form/radio-false.webp'),
      pngRadioTrue: require('@/assets/img/static/form/radio-true.png'),
      pngRadioFalse: require('@/assets/img/static/form/radio-false.png'),
      selectedAnswerId: -(1 << 30), // とりあえず絶対に選択肢のIDにならない値
      selectedAnswerContent: '',
      question: {
        id: 17,
        quiz: '',
        hint: '',
        answers: []
      },
      stamps: []
    }
  },
  methods: {
    async checkAnswer (): Promise<boolean> {
      interface IResponseAnswer {
        data: {
          success: boolean,
          // eslint-disable-next-line camelcase
          is_correct: boolean
        },
        status: number,
        statusText: string
      }

      return await this.$axios.post(`${url}/answer`, {
        question_id: this.question.id,
        answer_id: this.selectedAnswerId
      }, {
        headers: {
          'Access-Token': (this as any).$auth.getToken('google').replace('Bearer ', ''),
          'Access-Control-Allow-Origin': `${url}/*`
        }
      }).then((res: IResponseAnswer) => {
        return res.data.is_correct
      })
    },
    showIsCorrect () {
      if (this.selectedAnswerId < 0) {
        return
      }
      this.checkAnswer().then((isCorrect) => {
        location.href = isCorrect ? '#stamp-modal' : '#wa-modal'
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
        alert('クイズの回答が送信できませんでした')
      })
    }
  }
})
</script>

<style scoped>

</style>
