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
          <div v-for="{id, contents} in question.answers" :key="`answer-${id}`" class="bg-white rounded-xl shadow-xl border-2" :class="selectedAnswerId === id ? 'border-blue-400' : 'border-gray-100'">
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
          <!-- TODO: 「団体一覧から探してみよう」などとモーダルを出す daisyUI -->
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
          <RoundedButton text="答え合わせ →" class="border-themeColor bg-themeColor text-white cursor-pointer" @click.native="showIsCorrect" />
          <div id="wa-modal" class="modal">
            <div class="modal-box">
              <p>{{ selectedAnswerContent }} ではありません！</p>
              <div class="modal-action">
                <a href="#" class="btn">閉じる</a>
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
      selectedAnswerId: -(1 << 30), // とりあえず絶対に選択肢のIDにならない値
      selectedAnswerContent: '',
      // TODO: 形式はAPI側に合わせる
      // 以下モック用仮データ
      question: {
        id: 17,
        quiz: '電子計算機研究会の部員数は何人でしょう？',
        hint: 'ヒントヒントヒントヒントヒントヒントヒントヒントヒントヒントヒントヒントヒント',
        answers: [
          {
            id: 1,
            contents: '5人'
          },
          {
            id: 2,
            contents: '10人'
          },
          {
            id: 3,
            contents: '15人'
          },
          {
            id: 4,
            contents: '60人'
          }
        ]
      }
    }
  },
  methods: {
    checkAnswer () {
      // TODO: サーバーサイドで処理
      return this.selectedAnswerId === 4
    },
    showIsCorrect () {
      if (this.checkAnswer()) {
        console.log('correct')
      } else {
        location.href = '#wa-modal'
      }
    }
  }
})
</script>

<style scoped>

</style>
