<template>
  <div class="mb-8 mt-20">
    <div class="mb-16 max-w-screen-sm mx-auto">
      <SurveyBanner />
    </div>
    <div v-if="!$nuxt.$route.path.match('/clubs/*')">
      <h2 class="text-center text-3xl text-gray-800 font-medium tracking-wider">
        SHARE ON
      </h2>
      <div class="text-center w-full mt-14">
        <a
          :href="'https://twitter.com/intent/tweet?url=' + shareUrl + '&hashtags=岡山大学祭2021'"
          target="_blank"
          class="text-lg border border-gray-300 inline-block rounded-full py-5 w-5/6 sm:w-96"
        >
          <img
            class="inline-block text-gray-700 tracking-widest h-6 mr-5"
            src="@/assets/img/icon/twitter.png"
            alt="Twitter"
          >
          Twitter で シェア
        </a>
      </div>
      <div class="text-center w-full mt-5">
        <a
          :href="'https://www.facebook.com/share.php?u=' + shareUrl"
          target="_blank"
          class="text-lg border border-gray-300 inline-block rounded-full py-5 w-5/6 sm:w-96"
        >
          <img
            class="inline-block text-gray-700 tracking-widest h-6 mr-5"
            src="@/assets/img/icon/facebook.png"
            alt="Facebook"
          >
          Facebook で シェア
        </a>
      </div>
      <div class="text-center w-full mt-5">
        <a
          :href="'https://line.me/R/msg/text/?' + shareUrl"
          target="_blank"
          class="text-lg border border-gray-300 inline-block rounded-full py-5 w-5/6 sm:w-96"
        >
          <img
            class="inline-block text-gray-700 tracking-widest h-6 mr-5"
            src="@/assets/img/icon/line.png"
            alt="LINE"
          >
          LINE で シェア
        </a>
      </div>
    </div>

    <nav class="mx-auto w-full mt-16 flex flex-col border-t border-b border-gray-300 divide-y divide-gray-300">
      <LinkWithArrow to="/" title="ホーム" />
      <SlideDown label="代表者メッセージ">
        <LinkWithArrow to="/president-message" title="学長のメッセージ" />
        <LinkWithArrow to="/operation-message" title="運営団体のメッセージ" />
      </SlideDown>
      <LinkWithArrow to="/live" title="ライブ配信" />
      <LinkWithArrow to="/presentation" title="団体企画" />
      <LinkWithArrow to="/clubs" title="部活動・サークル紹介" />
      <SlideDown label="スタンプラリー">
        <LinkWithArrow to="/stamp-rally" title="スタンプラリーとは?" />
        <LinkWithArrow to="/mypage" title="マイページ" />
        <LinkWithArrow to="/quiz" title="参加する" />
      </SlideDown>
    </nav>

    <footer class="text-gray-400 tracking-widest text-sm">
      <div class="flex justify-center items-center pt-8 pb-4">
        <div class="w-6 h-6 mr-3">
          <img src="@/assets/img/slide-icons/21.jpg" alt="電子計算機研究会">
        </div>
        <a target="_blank" href="https://oucrc.net/">
          制作: 岡山大学電子計算機研究会
        </a>
      </div>

      <p class="mt-2 text-center">
        <a href="/sitePolicy" class="text-gray-400 text-xs font-bold">
          サイトポリシー
        </a>
      </p>

      <p class="mt-2 text-center">
        <a href="/privacyPolicy" class="text-gray-400 text-xs font-bold">
          プライバシーポリシー
        </a>
      </p>

      <p class="text-center mt-10">
        (c) 2021 岡山大学校友会 x 学祭実行委員会
      </p>
    </footer>
  </div>
</template>

<script>
import LinkWithArrow from '../templates/parts/LinkWithArrow.vue'
import SlideDown from '../templates/parts/SlideDown.vue'
import SurveyBanner from '../templates/survey/SurveyBanner.vue'

export default {
  name: 'Footer',
  components: {
    SlideDown,
    LinkWithArrow,
    SurveyBanner
  },
  props: {
    hiddenShare: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      shareUrl: 'https://oufes2021.com' + $nuxt.$route.path
    }
  }
}
</script>

<style>
.collapse-plus p {
  @apply font-normal text-sm;
}
</style>
