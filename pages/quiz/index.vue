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
          <div v-for="{id, contents} in question.answers" :key="`answer-${id}`" class="bg-white rounded-xl shadow-xl border-2" :class="selectedAnswer === id ? 'border-blue-400' : 'border-gray-100'">
            <label class="cursor-pointer flex flex-row items-center px-2">
              <input
                :id="`option-${id}`"
                v-model="selectedAnswer"
                type="radio"
                name="answer"
                :value="id"
                class="hidden"
              >
              <img :src="id === selectedAnswer ? radioTrue : radioFalse" alt="">
              <span class="block ml-2">{{ contents }}</span>
            </label>
          </div>
        </div>
        <div class="mb-4">
          <!-- TODO: 「団体一覧から探してみよう」などとモーダルを出す daisyUI -->
          <RoundedButton text="ヒント" class="border-themeColor bg-white text-themeColor cursor-pointer" />
        </div>
        <div>
          <RoundedButton text="答え合わせ →" class="border-themeColor bg-themeColor text-white cursor-pointer" @click="showIsCorrect" />
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

<script lang='ts'>
import Vue from 'vue'
import LinkTo from '@/components/templates/nuxt/LinkTo.vue'
import Header from '@/components/layouts/Header.vue'
import VerticalTitle from '@/components/layouts/VerticalTitle.vue'
import BodyWithHeader from '@/components/templates/header/BodyWithHeader.vue'
import RoundedButton from '@/components/templates/parts/RoundedButton.vue'

export default Vue.extend({
  components: {
    LinkTo,
    Header,
    VerticalTitle,
    BodyWithHeader,
    RoundedButton
  },
  async asyncData () {
    // TODO: APIから問題とスタンプのデータを取得
  },
  data () {
    return {
      radioTrue: require('@/assets/img/static/form/radio-true.svg'),
      radioFalse: require('@/assets/img/static/form/radio-false.svg'),
      selectedAnswer: -(1 << 30), // とりあえず絶対に選択肢のIDにならない値
      // TODO: 形式はAPI側に合わせる
      // 以下モック用仮データ
      question: {
        id: 17,
        quiz: '電子計算機研究会の部員数は何人でしょう？',
        hint: 'ヒントヒントヒントヒントヒントヒントヒントヒントヒントヒントヒントヒントヒント',
        answers: [
          {
            id: 1,
            contents: '解答1'
          },
          {
            id: 2,
            contents: '解答2'
          },
          {
            id: 3,
            contents: '解答3'
          },
          {
            id: 4,
            contents: '解答4'
          }
        ]
      }
    }
  },
  methods: {
    checkAnswer () {
      // TODO: サーバーサイドで処理
      return Math.random() > 0.5
    },
    showIsCorrect () {
      this.checkAnswer()
    }
  }
})
</script>

<style scoped>

</style>
