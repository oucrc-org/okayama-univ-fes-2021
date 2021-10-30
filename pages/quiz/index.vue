<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
    <Header title="今日のクイズ" colors="bg-themeColor text-white" />

    <VerticalTitle text="QUIZ" colors="text-gray-200" class="-z-10" />

    <section>
      <div class="tracking-widest leading-6 px-4">
        <p class="mt-8 mb-4 text-yellow-400 text-lg font-bold">
          Question
        </p>
        <p class="mb-4 text-xl font-bold">
          {{ question.quiz }}
        </p>
        <div class="mb-4 flex flex-col gap-y-3">
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
              <img :src="id === selectedAnswerId ? radioTrue : radioFalse" alt="">
              <span class="block ml-2">{{ contents }}</span>
            </label>
          </div>
        </div>
        <div class="mb-4">
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
        <div>
          <RoundedButton
            text="答え合わせ →"
            class="border-themeColor bg-themeColor text-white cursor-pointer"
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
      <BodyWithHeader title="注意事項" colors="border-themeColor text-themeColor">
        <p>
          クイズへは正解するまで何回でも挑戦いただけます。
        </p>
      </BodyWithHeader>
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
          <!-- TODO: 応募リンクに変更 -->
          <LinkTo to="#">
            <RoundedButton text="応募する →" class="border-themeColor bg-themeColor text-white" />
          </LinkTo>
        </div>
      </BodyWithHeader>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import LinkTo from '@/components/templates/nuxt/LinkTo.vue'
import Header from '@/components/layouts/Header.vue'
import VerticalTitle from '@/components/layouts/VerticalTitle.vue'
import BodyWithHeader from '@/components/templates/header/BodyWithHeader.vue'
import RoundedButton from '@/components/templates/parts/RoundedButton.vue'

const url = process.env.BACKEND_API_URL

export default Vue.extend({
  components: {
    LinkTo,
    Header,
    VerticalTitle,
    BodyWithHeader,
    RoundedButton
  },
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
      radioTrue: require('@/assets/img/static/form/radio-true.svg'),
      radioFalse: require('@/assets/img/static/form/radio-false.svg'),
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
