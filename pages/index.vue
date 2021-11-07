<!--suppress HtmlUnknownTarget -->
<template>
  <div>
    <div id="splash">
      <div id="splash_logo">
        <video src="@/assets/video/logo.mp4" class="w-40 lg:w-60" muted autoplay playsinline />
      </div>
    </div>

    <div class="relative overflow-hidden">
      <!-- ▼ ヒーローエリア背景 -->
      <picture>
        <source :srcset="require('@/assets/img/static/home/background.webp')" type="image/webp">
        <img
          id="hero_background"
          class="relative top-0 w-screen object-cover object-left landing-background"
          src="@/assets/img/static/home/background.jpg"
          alt="ヒーローエリア"
        >
      </picture>
      <!-- ▲ ヒーローエリア背景 -->

      <!-- ▼ ヒーローエリア -->
      <div class="absolute top-0 left-0 right-0 h-64 lg:h-80">
        <picture>
          <source :srcset="require('@/assets/img/static/home/drop.webp')" type="image/webp">
          <img
            class="fuwafuwa absolute bottom-0 left-0 right-0 w-screen max-w-lg lg:max-w-screen-lg mx-auto object-cover"
            src="@/assets/img/static/home/drop.png"
            alt="タイトル背景"
          >
        </picture>
      </div>
      <div id="tweet-area" class="absolute top-20 sm:top-16 left-0 right-0 text-center">
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
        <div class="mt-20 sm:mt-24 lg:mt-36 px-4 sm:max-w-lg lg:max-w-screen-lg mx-auto">
          <div class="mb-6 lg:mb-14 px-8 sm:px-12 text-center">
            <img
              src="@/assets/img/static/home/twitter_title.png"
              class="inline-block w-full max-w-xs lg:max-w-sm"
              alt="Twitterで応援メッセージ募集中"
            >
          </div>

          <div class="grid lg:grid-cols-2 gap-4">
            <!-- こちらには1~3番目の投稿を表示-->
            <div v-for="(tweet, index) in tweets.slice(0, 3)" :key="tweet.tweet_url">
              <a :href="tweet.tweet_url" target="_blank">
                <div
                  :id="'tweet' + index"
                  class="transform scale-0 grid grid-cols-5 gap-4 h-full w-full bg-white rounded-xl shadow-lg mx-auto mb-3 px-4 pb-2 pt-3 relative"
                >
                  <div>
                    <img
                      class="rounded-full w-full"
                      style="max-width: 70px"
                      :src="tweet.avatar_url"
                      :alt="tweet.display_name"
                    >
                  </div>
                  <div class="col-span-4">
                    <p class="text-sm text-left tracking-wider leading-5 mb-8">
                      {{ tweet.comment.replace(new RegExp('https://t\.co/.*$'), '') }}
                    </p>
                    <p class="text-xs lg:text-sm text-hashTagColor font-semibold absolute bottom-3 right-4">
                      #岡山大学祭2021
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <!-- こちらには4~6番目の投稿を表示、モバイルでは非表示になる-->
            <div v-for="(tweet, index) in tweets.slice(3, 6)" :key="tweet.tweet_url">
              <a :href="tweet.tweet_url" target="_blank">
                <div
                  :id="'tweet' + (index + 3)"
                  class="hidden transform scale-0 lg:grid grid-cols-5 gap-4 h-full w-full bg-white rounded-xl shadow-lg mx-auto mb-3 px-4 pb-2 pt-3"
                >
                  <div>
                    <img
                      class="rounded-full w-full"
                      style="max-width: 70px"
                      :src="tweet.avatar_url"
                      :alt="tweet.display_name"
                    >
                  </div>
                  <div class="col-span-4">
                    <p class="text-sm text-left tracking-wider leading-5 mb-8">
                      {{ tweet.comment.replace(new RegExp('https://t\.co/.*$'), '') }}
                    </p>
                    <p class="text-xs lg:text-sm text-hashTagColor font-semibold absolute bottom-3 right-4">
                      #岡山大学祭2021
                    </p>
                  </div>
                </div>
              </a>
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
      <picture>
        <source :srcset="require('@/assets/img/static/home/about_background.webp')" type="image/webp">
        <img
          id="about_background"
          class="w-screen object-cover object-left"
          src="@/assets/img/static/home/about_background.jpg"
          alt="ヒーローエリア"
        >
      </picture>

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
            class="absolute top-20 md:top-24 left-28 md:left-52 opacity-100 w-6 md:w-12"
            alt="CROSS"
          >
          <p
            id="title1"
            class="opacity-0 transform -translate-x-6 absolute top-12 md:top-16 text-gray-800 font-medium text-3xl md:text-5xl"
          >
            校友会
          </p>
          <p
            id="title2"
            class="opacity-0 transform translate-x-6 absolute top-28 md:top-32 text-gray-800 font-medium text-3xl md:text-5xl ml-16 md:ml-44"
          >
            学祭実行委員会
          </p>
          <p
            id="message"
            class="opacity-0 transform translate-y-6 mt-36 md:mt-48 md:w-10/12 md:text-lg tracking-wider leading-7 md:leading-10"
          >
            今年度の岡山大学祭は、校友会と大学祭実行委員会が一丸となって企画・運営を行いました。<br>
            <br>
            前年のように特設WEBサイトに映像や部活紹介といったコンテンツを掲載するだけではなく、11月7日にはプロの芸人の方のプロコンサート、11月16・17日には岡山大学校友会の公認クラブ・サークルのパフォーマンスの生配信をステージ企画として行います。
            また特設サイトにおいても、スタンプラリー企画やコンテンツを充実させ、皆様に楽しんでいただけるようにパワーアップしております。<br>
            <br>
            岡山大学生が準備したコンテンツをふんだんに披露していきますので、是非この1週間お楽しみいただければと思います。<br>
            （特設WEBサイトは11月30日まで閲覧可能です）
          </p>
        </div>
      </div>
    </div>
    <!-- ▲ 今年の学祭について -->

    <NextEvent />

    <div class="mx-auto max-w-screen-lg mt-12 px-5">
      <div class="alert alert-info">
        <div class="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <label>プロコンのご視聴ありがとうございました！岡大生へのフィードバックのため、アンケートにご協力ください！</label>
        </div>
        <div class="flex-none">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_BhFm-OHc5bQPONfTCsFp4oQ__JhZoTiOuPa6V3cPLAKfcQ/viewform?usp=send_form"
            class="btn btn-sm bg-themeColor border-themeColor hover:bg-themeLight hover:border-themeLight"
            target="_blank"
          >回答</a>
        </div>
      </div>
    </div>

    <!-- ▼ バーナー -->
    <div class="grid md:grid-cols-2 gap-6 max-w-screen-lg mt-12 mx-auto px-8">
      <a href="/president-message">
        <picture>
          <source :srcset="require('@/assets/img/static/home/burner_message.webp')" type="image/webp">
          <img src="@/assets/img/static/home/burner_message.jpg" alt="学長からのメッセージ">
        </picture>
      </a>
      <a href="/schedule" target="_blank">
        <picture>
          <source :srcset="require('@/assets/img/static/home/burner_timeline.webp')" type="image/webp">
          <img src="@/assets/img/static/home/burner_timeline.jpg" alt="学祭スケジュールはこちら">
        </picture>
      </a>
      <a href="/presentation/win_covid">
        <picture>
          <source :srcset="require('@/assets/img/static/home/burner_win_covid.webp')" type="image/webp">
          <img src="@/assets/img/static/home/burner_win_covid.jpg" alt="岡山大学コロナ対策応援団">
        </picture>
      </a>
      <SurveyBanner />
    </div>
    <!-- ▲ バーナー -->

    <!-- ▼ スタンプラリー -->
    <canvas class="waveCanvas mt-4" />
    <div class="bg-themeColor">
      <div class="container max-w-screen-lg mx-auto relative">
        <Header title="スタンプラリー" colors="bg-white text-themeColor" />
        <VerticalTitle text="CAMPAIGN" colors="text-themeLight" />
        <div class="relative mt-10 px-6 z-10">
          <p class="text-white text-3xl md:text-4xl tracking-widest font-bold leading-10">
            Nintendo Switchなど豪華賞品があたる！
          </p>
          <p class="text-white tracking-widest mt-4">
            学祭の1週間毎日クイズに答えて、スタンプを集めて応募しよう！
          </p>
          <picture>
            <source :srcset="require('~/assets/img/static/home/presents.webp')" type="image/webp">
            <img
              src="~/assets/img/static/home/presents.jpg"
              alt="景品一覧"
              class="mt-8 md:mt-16 rounded-3xl mx-auto w-full sm:w-2/3"
            >
          </picture>
          <div class="grid grid-cols-2 gap-4 mt-10 sm:mt-20">
            <div class="col-span-2 md:col-span-1 text-center md:text-right mt-7 sm:mt-0 md:pr-3">
              <LinkTo
                to="stamp-rally"
                class="border-3 border-white inline-block font-medium text-center text-white text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
              >
                スタンプラリーとは？
              </LinkTo>
            </div>
            <div class="col-span-2 md:col-span-1 text-center md:text-left md:pl-3">
              <LinkTo
                to="/quiz"
                class="border-3 border-white bg-white inline-block font-medium text-center text-themeColor text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
              >
                参加する →
              </LinkTo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <canvas class="waveCanvas transform rotate-180" />
    <!-- ▲ スタンプラリー -->

    <!-- ▼ 動画とライブ配信 -->
    <div class="container max-w-screen-lg mt-20 mx-auto relative">
      <VerticalTitle text="STREAMING" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-10 mx-auto">
        <div class="px-5">
          <DailyLiveOrVideo />
        </div>
      </div>
    </div>

    <!-- ▲ ライブ配信 -->

    <div class="bg-themeColor mt-20 pb-14">
      <div class="container max-w-screen-lg pt-16 mx-auto relative">
        <Header title="イベント参加団体" colors="bg-white text-themeColor" />
        <VerticalTitle class="mt-16" text="CLUBS" colors="text-themeLight" />
        <client-only placeholder="Client Only">
          <slick :options="slickOptions" class="slick mt-14">
            <div class="px-1">
              <a href="/clubs/cp246hi9g">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/1.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/1.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/cp246hi9g">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/2.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/2.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/719ljqzku9xm">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/3.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/3.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/asl0m5odm4fc">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/4.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/4.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/awjifkqobol">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/5.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/5.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/gwl5jcnfoa">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/6.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/6.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/4k4j3v2eg9">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/7.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/7.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/bmsqwq10p">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/8.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/8.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/gq9rv7wuy48">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/9.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/9.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/keoh4k4t4pko">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/10.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/10.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/tquq5zwppe2o">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/11.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/11.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/aozgzc0s1">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/12.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/12.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/b0d6wjplos">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/13.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/13.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/4yuel4aeoiea">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/14.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/14.jpg" alt="">
                </picture>
              </a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/pw4geylws2er">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/15.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/15.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/wz9qlzhwi">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/16.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/16.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/x4oqbtwu94z4">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/17.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/17.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/4224zsobb7lh">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/18.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/18.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/l5ws7wb6aoqb">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/19.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/19.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/5607x5nc5">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/20.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/20.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/oucrc">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/21.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/21.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/b7akq2gfspdr">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/22.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/22.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/qspzpcuww">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/23.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/23.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/kvdqhqbz8">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/24.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/24.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/gon27nwq23u">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/25.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/25.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/j14980hruox">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/26.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/26.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/ab6ae9e7uzbj">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/27.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/27.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1 transform translate-x-1/2">
              <a href="/clubs/n1vaij61z">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/28.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/28.jpg" alt="">
                </picture>
              </a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div class="px-1">
              <a href="/clubs/n3n0bcmf51p">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/29.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/29.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/a2pgikkhm">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/30.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/30.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/q9wbygjcuba">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/31.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/31.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/0n6zoq5dco">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/32.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/32.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/wv7g67bjd">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/33.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/33.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/tzuqpt3d6">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/34.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/34.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/dkzjn1x902">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/35.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/35.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/ts9j0cognn">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/36.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/36.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/ttk4fob5yl">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/37.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/37.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/f2xayutfj">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/38.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/38.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/7etcembuo41">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/39.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/39.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/yohkqihj95">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/40.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/40.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/a37hxz4gbif">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/41.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/41.jpg" alt="">
                </picture>
              </a>
            </div>
            <div class="px-1">
              <a href="/clubs/y26rn57fl">
                <picture>
                  <source :srcset="require('@/assets/img/slide-icons/42.webp')" type="image/webp">
                  <img src="@/assets/img/slide-icons/42.jpg" alt="">
                </picture>
              </a>
            </div>
          </slick>
        </client-only>
        <div class="text-center pb-3 mt-12">
          <a href="/clubs" class="border-b-2 pb-2 sm:text-lg text-white">
            団体の紹介ページはこちら >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
import SurveyBanner from '~/components/templates/survey/SurveyBanner.vue'
import DailyLiveOrVideo from '~/components/templates/video/DailyLiveOrVideo.vue'
import IResponse from '~/assets/js/type/request/IResponse'
import ITweet from '~/assets/js/type/ITweet'
import NextEvent from '~/components/templates/event/NextEvent.vue'

interface IResponseTweets extends IResponse {
  data: {
    success: boolean,
    data: ITweet[]
  }
}

const url = process.env.BACKEND_API_URL

export default Vue.extend({
  components: {
    LinkTo,
    Header,
    VerticalTitle,
    DailyLiveOrVideo,
    SurveyBanner,
    NextEvent
  },
  asyncData ({ app }: Context): Promise<{ tweets: ITweet[] }> {
    return app.$axios.get(`${url}/twitter`, { timeout: 10000 }).then((res: IResponseTweets) => {
      return { tweets: res.data.data }
    }).catch(() => {
      return { tweets: [] }
    })
  },
  data () {
    return {
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
        slidesToScroll: 1.5,
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
      },
      tweets: [] as ITweet[]
    }
  },
  mounted () {
    init()
    $('#about_background').height($('#about_container').height() as number + 260)
    $('#hero_background').height($('#tweet-area').height() as number + 160)
    this.checkIE()
    this.displayLoading()
    this.scrollFadeIn()
  },
  beforeDestroy () {
    stop()
  },
  methods: {
    checkIE () {
      const userAgent = window.navigator.userAgent.toUpperCase()
      if (userAgent.includes('MSIE') || userAgent.includes('TRIDENT')) {
        // eslint-disable-next-line no-console
        console.log('岡山大学祭2021をご覧いただきありがとうございます。\nえ、IEで正常にデザインが表示されてませんか？\nこの画面を見ているあなたならお気づきではないですか...\nそう、Chromeをインストールするのです（天の声）\n\nhttps://www.google.com/intl/ja_jp/chrome/')
      }
    },
    displayLoading () {
      $('#splash').css('display', 'block')
      setTimeout(() => {
        $('#splash_logo').fadeIn(1000, () => {
          setTimeout(() => {
            $('#splash_logo').fadeOut(1000)
          }, 1000)
          setTimeout(() => {
            $('#splash').fadeOut(1000)
          }, 1700)
        })
      }, 3000)
    },
    scrollFadeIn () {
      const message = (this as any).$scrollmagic
        .scene({
          triggerElement: '#message',
          triggerHook: 0.5,
          reverse: false
        })
        .setTween('#message', {
          css: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        });

      (this as any).$scrollmagic.addScene(message)

      const title1 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#title1',
          triggerHook: 0.5,
          offset: -200,
          reverse: false
        })
        .setTween('#title1', {
          css: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        });

      (this as any).$scrollmagic.addScene(title1)

      const title2 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#title2',
          triggerHook: 0.5,
          offset: -200,
          reverse: false
        })
        .setTween('#title2', {
          css: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        });

      (this as any).$scrollmagic.addScene(title2)

      // eslint-disable-next-line camelcase
      const next_title = (this as any).$scrollmagic
        .scene({
          triggerElement: '#next_title',
          offset: -400,
          reverse: false
        })
        .setTween('#next_title span', {
          css: {
            transform: 'translate(0, 0)'
          }
        });

      (this as any).$scrollmagic.addScene(next_title)

      const tweet0 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#tweet0',
          offset: -200,
          reverse: false
        })
        .setTween('#tweet0', {
          css: {
            'animation-name': 'zoomInAnime',
            'animation-duration': '0.8s',
            'animation-fill-mode': 'forwards'
          }
        });

      (this as any).$scrollmagic.addScene(tweet0)

      const tweet1 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#tweet1',
          offset: -200,
          reverse: false
        })
        .setTween('#tweet1', {
          css: {
            'animation-name': 'zoomInAnime',
            'animation-duration': '0.8s',
            'animation-fill-mode': 'forwards'
          }
        });

      (this as any).$scrollmagic.addScene(tweet1)

      const tweet2 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#tweet2',
          offset: -200,
          reverse: false
        })
        .setTween('#tweet2', {
          css: {
            'animation-name': 'zoomInAnime',
            'animation-duration': '0.8s',
            'animation-fill-mode': 'forwards'
          }
        });

      (this as any).$scrollmagic.addScene(tweet2)

      const tweet3 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#tweet3',
          offset: -200,
          reverse: false
        })
        .setTween('#tweet3', {
          css: {
            'animation-name': 'zoomInAnime',
            'animation-duration': '0.8s',
            'animation-fill-mode': 'forwards'
          }
        });

      (this as any).$scrollmagic.addScene(tweet3)

      const tweet4 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#tweet4',
          offset: -200,
          reverse: false
        })
        .setTween('#tweet4', {
          css: {
            'animation-name': 'zoomInAnime',
            'animation-duration': '0.8s',
            'animation-fill-mode': 'forwards'
          }
        });

      (this as any).$scrollmagic.addScene(tweet4)

      const tweet5 = (this as any).$scrollmagic
        .scene({
          triggerElement: '#tweet5',
          offset: -200,
          reverse: false
        })
        .setTween('#tweet5', {
          css: {
            'animation-name': 'zoomInAnime',
            'animation-duration': '0.8s',
            'animation-fill-mode': 'forwards'
          }
        });

      (this as any).$scrollmagic.addScene(tweet5)
    }
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

/*noinspection CssUnusedSymbol*/
.swiper-pagination {
  @apply mt-4 text-center static w-full
}

/*noinspection CssUnusedSymbol*/
.swiper-pagination-bullet {
  @apply mx-1.5
}

/*========= ローディング スクリーン ===============*/

#splash {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: white;
  text-align: center;
  display: none;
}

#splash_logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*========= アニメーション ===============*/

.fuwafuwa {
  animation: fuwafuwa 3s infinite ease-in-out .8s alternate;
  transition: 1.5s ease-in-out;
}

@keyframes fuwafuwa {
  0% {
    transform: translate(0, 0) rotate(-7deg) scale(1.1);
  }
  50% {
    transform: translate(0, 7px) rotate(0deg) scale(1.1);
  }
  100% {
    transform: translate(0, 0) rotate(7deg) scale(1.1);
  }
}

@keyframes zoomInAnime {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
</style>
