<template>
  <div>
    <img class="h-screen w-screen object-cover" src="@/assets/img/dev/hero.jpg" alt="岡山大学祭">
    <div v-if="isStreaming" class="container max-w-screen-xl mt-20 mx-auto relative">
      <Header title="ライブ配信" colors="bg-red-500 text-white" :icon-path="require('@/assets/img/header/streaming.png')" />
      <VerticalTitle text="STREAMING" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-10 mx-auto">
        <div class="px-5">
          <div class="relative overflow-hidden" style="padding-bottom: 56.25%">
            <iframe
              class="absolute h-full w-full"
              src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0"
              title="学祭2021 パフォーマンス"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <client-only>
            <OperationStageSchedule />
          </client-only>
        </div>
      </div>
    </div>

    <div v-else class="container max-w-screen-xl mt-20 mx-auto relative">
      <Header title="今年の学祭について" colors="bg-themeColor text-white" />
      <VerticalTitle text="ABOUT" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-14 mx-auto">
        <div class="w-4/5 tracking-widest leading-6 px-4">
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </div>
      </div>
    </div>

    <canvas class="waveCanvas mt-4" />
    <div class="bg-themeColor">
      <div class="container max-w-screen-xl mx-auto relative">
        <Header title="現在のピックアップ" colors="bg-white text-themeColor" />
        <VerticalTitle text="PICKUP" colors="text-themeLight" />
        <CenterTitle text="写真部 学祭展覧会" colors="border-white text-white" />
        <div class="bg-white text-center mt-16 mx-auto h-48 sm:h-96 w-4/5 sm:w-2/3 rounded-3xl relative z-10">
          画像
        </div>
        <div class="text-center pb-3 mt-12">
          <a href="#" class="border-b-2 pb-2 sm:text-lg text-white">
            その他の団体企画はこちら >
          </a>
        </div>
      </div>
    </div>
    <canvas class="waveCanvas transform rotate-180" />

    <div class="container max-w-screen-xl pt-6 mx-auto relative">
      <Header title="スタンプラリー企画" colors="bg-themeColor text-white" />
      <VerticalTitle text="CAMPAIGN" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-4 sm:mt-14 mx-auto px-10">
        <StampRallyTimeTable />
        <div class="grid grid-cols-2 gap-4 sm:mt-20">
          <div class="col-span-2 md:col-span-1 text-center md:text-right mt-7 sm:mt-0 md:pr-3">
            <LinkTo
              to="stamp-rally"
              class="border-3 border-themeColor inline-block font-medium text-center text-themeColor text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
            >
              スタンプラリーとは？
            </LinkTo>
          </div>
          <div class="col-span-2 md:col-span-1 text-center md:text-left md:pl-3">
            <!-- TODO: ログインリンクに変更 -->
            <LinkTo
              to="#"
              class="border-3 border-themeColor bg-themeColor inline-block font-medium text-center text-white text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
            >
              参加する →
            </LinkTo>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-themeColor mt-20 pb-14">
      <div class="container max-w-screen-xl pt-16 mx-auto relative">
        <Header title="イベント参加団体" colors="bg-white text-themeColor" />
        <VerticalTitle class="mt-16" text="CLUBS" colors="text-themeLight" />
        <client-only placeholder="Client Only">
          <slick :options="slickOptions" class="slick mt-14">
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/1.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/2.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/3.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/4.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/5.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/6.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/7.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/8.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/9.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/10.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/11.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/12.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/13.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/14.jpg" alt=""></a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/15.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/16.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/17.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/18.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/19.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/20.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/21.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/22.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/23.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/24.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/25.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/26.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/27.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="#"><img src="@/assets/img/slide-icons/28.jpg" alt=""></a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/29.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/30.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/31.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/32.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/33.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/34.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/35.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/36.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/37.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/38.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/39.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/40.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/41.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="#"><img src="@/assets/img/slide-icons/42.jpg" alt=""></a>
            </div>
          </slick>
        </client-only>
        <div class="text-center pb-3 mt-12">
          <a href="#" class="border-b-2 pb-2 sm:text-lg text-white">
            団体の紹介ページはこちら >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StampRallyTimeTable from '@/components/pages/stamp-rally/TimeTable.vue'
import CenterTitle from '~/components/templates/header/CenterTitle.vue'
import Header from '~/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import OperationStageSchedule from '~/components/pages/schedule/OperationStageSchedule.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'

export default Vue.extend({
  components: {
    LinkTo,
    OperationStageSchedule,
    CenterTitle,
    Header,
    VerticalTitle,
    StampRallyTimeTable
  },
  data () {
    return {
      isStreaming: true,
      slickOptions: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        draggable: false,
        speed: 6900,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        touchMove: false,
        cssEase: 'linear',
        slidesToShow: 8,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      }
    }
  },
  mounted () {
    init()
  },
  beforeDestroy () {
    stop()
  }
})
</script>

<style>
.swiper-pagination {
  @apply mt-4 text-center static w-full
}

/*noinspection CssUnusedSymbol*/
.swiper-pagination-bullet {
  @apply mx-1.5
}
</style>
