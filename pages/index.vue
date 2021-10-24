<template>
  <div>
    <div class="relative overflow-hidden">
      <!-- ▼ ヒーローエリア背景 -->
      <img
        class="relative top-0 w-screen object-cover object-left landing-background"
        src="@/assets/img/static/home/background.jpg"
        alt="ヒーローエリア"
      >
      <!-- ▲ ヒーローエリア背景 -->

      <!-- ▼ ヒーローエリア -->
      <div class="absolute top-0 left-0 right-0 h-64 lg:h-80">
        <img
          class="absolute bottom-0 left-0 right-0 w-screen max-w-lg lg:max-w-screen-lg mx-auto object-cover transform scale-110"
          src="@/assets/img/static/home/drop.png"
          alt="タイトル背景"
        >
      </div>
      <div class="absolute top-20 sm:top-16 left-0 right-0 text-center">
        <!--== ▼ タイトル ==-->
        <div>
          <h1 class="text-white text-4xl lg:text-6xl font-bold tracking-widest">
            笑顔満祭 岡大祭
          </h1>
          <p class="text-center mt-3 lg:mt-6">
            <span class="border-b-2 border-white text-white text-lg lg:text-2xl tracking-widest pb-2">
              〜心機一転しちゃいな祭〜
            </span>
          </p>
          <p class="text-center text-hashTagAccentColor lg:text-xl tracking-widest font-bold mt-8 lg:mt-16">
            #岡山大学祭2021
          </p>
        </div>
        <!--== ▲ タイトル ==-->

        <!--== ▼ Twitterで応援メッセージ募集中 ==-->
        <div class="mt-20 sm:mt-24 lg:mt-36 px-4 sm:max-w-md lg:max-w-screen-md mx-auto">
          <div class="mb-6 lg:mb-14 px-8 sm:px-12 text-center">
            <img
              src="@/assets/img/static/home/twitter_title.png"
              class="inline-block w-full max-w-xs lg:max-w-sm"
              alt="Twitterで応援メッセージ募集中"
            >
          </div>

          <div
            v-for="i in 3"
            :key="i"
            class="grid lg:grid-cols-2 gap-4"
          >
            <!--TODO: こちらには1~3番目の投稿を表示-->
            <div
              class="grid grid-cols-5 gap-4 bg-white rounded-xl shadow-lg mx-auto mb-3 px-4 pb-2 pt-3 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div>
                <img
                  class="rounded-full"
                  style="max-width: 60px"
                  src="https://images.microcms-assets.io/assets/9db8326938b34b1381d6805cc5e10b04/0ed6da5cd6ec446c8de89ec6f5b9c99c/l.jpg?fm=webp"
                  alt="ふぉ"
                >
              </div>
              <div class="col-span-4">
                <p class="text-xs lg:text-sm text-left tracking-wider leading-5">
                  ああああああああああああああああああああああああああああああああああああああああ
                </p>
                <p class="text-xs lg:text-sm text-hashTagColor text-right font-semibold mt-3">
                  #岡山大学祭2021
                </p>
              </div>
            </div>

            <!--TODO: こちらには4~6番目の投稿を表示、モバイルでは非表示になる-->
            <div
              class="hidden lg:grid grid-cols-5 gap-4 bg-white rounded-xl shadow-lg mx-auto mb-3 px-4 pb-2 pt-3 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div>
                <img
                  class="rounded-full"
                  style="max-width: 60px"
                  src="https://images.microcms-assets.io/assets/9db8326938b34b1381d6805cc5e10b04/0ed6da5cd6ec446c8de89ec6f5b9c99c/l.jpg?fm=webp"
                  alt="ふぉ"
                >
              </div>
              <div class="col-span-4">
                <p class="text-xs lg:text-sm text-left tracking-wider leading-5">
                  ああああああああああああああああああああああああああああああああああああああああ
                </p>
                <p class="text-xs lg:text-sm text-hashTagColor text-right font-semibold mt-3">
                  #岡山大学祭2021
                </p>
              </div>
            </div>
          </div>

          <div class="block text-center mt-8 lg:mt-20">
            <a href="https://twitter.com/intent/tweet?hashtags=岡山大学祭2021" target="_blank">
              <img
                src="@/assets/img/static/home/twitter_support.png"
                class="h-12 lg:h-16 inline-block transition duration-300 ease-in-out transform hover:scale-105"
                alt="応援する"
              >
            </a>
          </div>
        </div>
        <!--== ▲ Twitterで応援メッセージ募集中 ==-->
      </div>
    </div>
    <!-- ▲ ヒーローエリア -->

    <!-- ▼ 今年の学祭について -->
    <div class="relative">
      <img
        id="about_background"
        class="w-screen object-cover object-left"
        src="@/assets/img/static/home/about_background.jpg"
        alt="ヒーローエリア"
      >

      <div class="absolute top-14 left-0 right-0 max-w-screen-lg mx-auto w-full">
        <Header
          title="今年の学祭について"
          colors="bg-themeColor text-white"
        />
        <VerticalTitle text="ABOUT" colors="text-white" />
        <div
          id="about_container"
          class="bg-white float-right mt-12 w-11/12 md:w-10/12 px-8 md:px-20 py-12 relative"
          style="background: #FFFFFFCC"
        >
          <img
            src="@/assets/img/static/home/cross.png"
            class="absolute top-16 md:top-20 left-24 md:left-48 opacity-100 w-14 md:w-20"
            alt="CROSS"
          >
          <p class="absolute top-12 md:top-16 text-gray-800 font-medium text-3xl md:text-5xl">
            校友会
          </p>
          <p class="absolute top-28 md:top-32 text-gray-800 font-medium text-3xl md:text-5xl ml-16 md:ml-44">
            学祭実行委員会
          </p>
          <p class="mt-36 md:mt-48 md:w-10/12 text-lg tracking-wider leading-10">
            今年度の岡山大学祭は、校友会と大学祭実行委員会が一丸となって企画・運営を行いました。<br>
            <br>
            前年のように特設WEBサイトに映像や部活紹介といったコンテンツを掲載するだけではなく、11月7日にはプロの芸人の方のプロコンサート、11月16・17日には岡山大学校友会の公認クラブ・サークルのパフォーマンスの生配信をステージ企画として行います。
            また特設サイトにおいても、スタンプラリー企画やコンテンツを充実させ、皆様に楽しんでいただけるようにパワーアップしております。<br>
            <br>
            岡山大学生が準備したコンテンツをふんだんに披露していきますので、是非この1週間お楽しみいただければと思います。
          </p>
        </div>
      </div>
    </div>
    <!-- ▲ 今年の学祭について -->

    <div v-if="isStreaming" class="container max-w-screen-xl mt-20 mx-auto relative">
      <Header
        title="ライブ配信"
        colors="bg-red-500 text-white"
        :icon-path="require('@/assets/img/header/streaming.png')"
      />
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
              <a href="/clubs/cp246hi9g"><img src="@/assets/img/slide-icons/1.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/cp246hi9g"><img src="@/assets/img/slide-icons/2.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/719ljqzku9xm"><img src="@/assets/img/slide-icons/3.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/asl0m5odm4fc"><img src="@/assets/img/slide-icons/4.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/awjifkqobol"><img src="@/assets/img/slide-icons/5.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/gwl5jcnfoa"><img src="@/assets/img/slide-icons/6.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/4k4j3v2eg9"><img src="@/assets/img/slide-icons/7.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/bmsqwq10p"><img src="@/assets/img/slide-icons/8.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/gq9rv7wuy48"><img src="@/assets/img/slide-icons/9.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/keoh4k4t4pko"><img src="@/assets/img/slide-icons/10.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/tquq5zwppe2o"><img src="@/assets/img/slide-icons/11.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/aozgzc0s1"><img src="@/assets/img/slide-icons/12.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/b0d6wjplos"><img src="@/assets/img/slide-icons/13.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/4yuel4aeoiea"><img src="@/assets/img/slide-icons/14.jpg" alt=""></a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/pw4geylws2er"><img src="@/assets/img/slide-icons/15.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/wz9qlzhwi"><img src="@/assets/img/slide-icons/16.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/x4oqbtwu94z4"><img src="@/assets/img/slide-icons/17.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/4224zsobb7lh"><img src="@/assets/img/slide-icons/18.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/l5ws7wb6aoqb"><img src="@/assets/img/slide-icons/19.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/5607x5nc5"><img src="@/assets/img/slide-icons/20.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/oucrc"><img src="@/assets/img/slide-icons/21.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/b7akq2gfspdr"><img src="@/assets/img/slide-icons/22.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/qspzpcuww"><img src="@/assets/img/slide-icons/23.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/kvdqhqbz8"><img src="@/assets/img/slide-icons/24.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/gon27nwq23u"><img src="@/assets/img/slide-icons/25.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/j14980hruox"><img src="@/assets/img/slide-icons/26.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/ab6ae9e7uzbj"><img src="@/assets/img/slide-icons/27.jpg" alt=""></a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/n1vaij61z"><img src="@/assets/img/slide-icons/28.jpg" alt=""></a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div class="px-1">
              <a href="/clubs/n3n0bcmf51p"><img src="@/assets/img/slide-icons/29.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/a2pgikkhm"><img src="@/assets/img/slide-icons/30.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/q9wbygjcuba"><img src="@/assets/img/slide-icons/31.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/0n6zoq5dco"><img src="@/assets/img/slide-icons/32.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/wv7g67bjd"><img src="@/assets/img/slide-icons/33.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/tzuqpt3d6"><img src="@/assets/img/slide-icons/34.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/dkzjn1x902"><img src="@/assets/img/slide-icons/35.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/ts9j0cognn"><img src="@/assets/img/slide-icons/36.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/ttk4fob5yl"><img src="@/assets/img/slide-icons/37.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/f2xayutfj"><img src="@/assets/img/slide-icons/38.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/7etcembuo41"><img src="@/assets/img/slide-icons/39.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/yohkqihj95"><img src="@/assets/img/slide-icons/40.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/a37hxz4gbif"><img src="@/assets/img/slide-icons/41.jpg" alt=""></a>
            </div>
            <div class="px-1">
              <a href="/clubs/y26rn57fl"><img src="@/assets/img/slide-icons/42.jpg" alt=""></a>
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
    $('#about_background').height($('#about_container').height() as number + 260)
  },
  beforeDestroy () {
    stop()
  }
})
</script>

<style>
.landing-background {
  height: 900px;
}

@media (min-width: 1024px) {
  .landing-background {
    height: 1200px;
  }
}

.swiper-pagination {
  @apply mt-4 text-center static w-full
}

/*noinspection CssUnusedSymbol*/
.swiper-pagination-bullet {
  @apply mx-1.5
}
</style>
