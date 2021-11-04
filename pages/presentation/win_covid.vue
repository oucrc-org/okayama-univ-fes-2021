<template>
  <div>
    <div
      class="hero landing-background"
    >
      <div class="hero-overlay bg-opacity-60 h-screen" />
      <div class="text-center hero-content text-neutral-content">
        <div>
          <h1 class="mb-5 text-5xl lg:text-7xl font-bold leading-snug">
            岡山大学コロナ対策応援団
          </h1>
          <p class="mb-2 lg:text-lg">
            みなさんに守っていただきたいコロナ対策や、岡山大学での普段のコロナ対策を紹介していきます。
          </p>
        </div>
      </div>
    </div>

    <div class="container max-w-screen-lg mx-auto relative">
      <div class="tracking-widest px-4">
        <section>
          <BodyWithHeader title="岡山大学コロナ対策応援団">
            <div class="p-1">
              <p class="tracking-wide leading-6 lg:leading-14 lg:text-lg mx-auto my-1">
                岡山大学応援団総部應援團による“岡山大学コロナ対策応援団”が、コロナ禍の岡山大学生へのエールとともに、新型コロナウイルス感染症対策での日常的な４つのマナーを動画で紹介！
              </p>
              <a href="https://www.okayama-u.ac.jp/tp/profile/aboutcoronavirus.html" target="_blank" class="alert mt-6">
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
                  <label class="cursor-pointer text-sm lg:text-base">
                    <h4>
                      新型コロナウイルス感染症への対応について（岡山大学ホームページ）
                    </h4>
                    <p class="text-sm text-base-content text-opacity-60 hidden lg:block">
                      https://www.okayama-u.ac.jp/tp/profile/aboutcoronavirus.html
                    </p>
                  </label>
                </div>
              </a>
            </div>

            <IframeViewer
              src="https://www.youtube-nocookie.com/embed/t4F5Q17Hksg"
              title="コロナ禍での飲食マナー 岡山大学コロナ対策応援団"
              class="mt-12"
            />
          </BodyWithHeader>

          <BodyWithHeader title="第二弾 押忍!!「コロナ禍での公衆衛生マナー」を紹介！">
            <IframeViewer
              src="https://www.youtube-nocookie.com/embed/qiBzDQFn65I"
              title="コロナ禍での公衆衛生マナー 岡山大学コロナ対策応援団"
              class="mt-12"
            />
          </BodyWithHeader>

          <BodyWithHeader title="第三弾 押忍!!「校友会クラブ 普段のコロナ対策1」を紹介！">
            <IframeViewer
              src="https://www.youtube-nocookie.com/embed/cg7skAIS7Uk"
              title="津島キャンパス校友会クラブ 普段のコロナ対策1"
              class="mt-12"
            />
          </BodyWithHeader>

          <BodyWithHeader title="第四弾 押忍!!「校友会クラブ 普段のコロナ対策2」を紹介！">
            <IframeViewer
              src="https://www.youtube-nocookie.com/embed/wNSN3fPGHsI"
              title="津島キャンパス校友会クラブ 普段のコロナ対策2"
              class="mt-12"
            />
          </BodyWithHeader>

          <BodyWithHeader title="参考">
            岡山大学応援団総部應援團（
            <a
              class="text-themeColor"
              href="http://seikagai.ccsv.okayama-u.ac.jp/data/92/club_top_dtl"
              target="_blank"
            >HP</a>・
            <a class="text-themeColor" href="https://twitter.com/okadaiouendan" target="_blank">Twitter</a>・
            <a
              class="text-themeColor"
              href="https://www.facebook.com/%E5%B2%A1%E5%B1%B1%E5%A4%A7%E5%AD%A6%E5%BF%9C%E6%8F%B4%E5%9B%A3%E7%B7%8F%E9%83%A8%E6%87%89%E6%8F%B4%E5%9C%98-497681846971004"
              target="_blank"
            >Facebook</a> ）
          </BodyWithHeader>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import IframeViewer from '@/components/templates/html/IframeViewer'
import BodyWithHeader from '@/components/templates/header/BodyWithHeader'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    IframeViewer,
    BodyWithHeader
  }
}
</script>

<style scoped>
.landing-background {
  background-image: url("~@/assets/img/presentations/win_covid_landing.jpg")
}
</style>
