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
        <!-- TODO: コンポーネント作る -->
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="応募ページ" colors="border-themeColor text-themeColor">
        <p class="mb-8">
          最終日以降、貯めたスタンプ数に応じて景品に応募することができます。
        </p>
        <div class="col-span-2 md:col-span-1 text-center md:text-left md:pl-3">
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
import HTMLLeader from '~/components/templates/html/HTMLLeader.vue'

const url = process.env.BACKEND_API_URL

export default Vue.extend({
  components: {
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
      return { question: res.data.data }
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
      }
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
