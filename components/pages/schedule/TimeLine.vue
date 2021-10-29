<template>
  <div>
    <section
      id="scroll-box"
      class="relative top-0 section pp-scrollable bg-themeColor hide-scroll-bar overflow-x-hidden"
    >
      <div class="max-w-3xl mx-auto">
        <div class="text-white pt-8 px-6">
          <p class="text-secondaryColor font-bold tracking-widest pr-4 md:pr-0">
            2021年
            岡山大学祭テーマ
          </p>
          <p class="text-4xl tracking-extraWidest mt-2 pr-4 md:pr-0">
            笑顔満祭岡大祭
          </p>
          <p class="text-base tracking-widest mt-3 pr-4 md:pr-0">
            〜心機一転しちゃいな祭〜
          </p>
        </div>
        <ul class="timeline">
          <li class="fadein">
            <dl>
              <dt class="text-themeColor font-medium">
                11/7（土）
              </dt>
              <h2 class="text-themeColor text-2xl tracking-widest font-bold mt-1">
                プロコンサート
              </h2>
              <dd class="text-sm text-gray-500 mt-3 font-medium tracking-widest leading-8">
                今年度のプロコンサートは お笑い芸人3組をお呼びするプロライブとなっております。現在テレビで引っ張りだこの
                <b class="font-semibold">ハナコ、四千頭身、ぼる塾</b>の方々にネタを披露していただきます。
                <b class="font-semibold">誰でも無料で視聴</b> することができ、普通のテレビ番組では見ることのできないような
                <b class="font-semibold">岡山大学ならではの内容</b> も企画しています。貴重な機会だと思いますので、ぜひともご覧ください！
              </dd>
            </dl>
            <span class="border-line" />
          </li>
          <li class="fadein">
            <dl>
              <dt class="text-themeColor font-medium">
                11/8〜15
              </dt>
              <h2 class="text-themeColor text-2xl tracking-widest font-bold mt-1">
                カウントダウン企画
              </h2>
              <dd class="text-sm text-gray-500 mt-3 font-medium tracking-widest leading-8">
                プロコンサートからステージ企画の間の約1週間も皆様に楽しんでいただけるようにカウントダウン企画を開催します。毎日岡山で活躍中の
                <b class="font-semibold">アナウンサーの方の企画紹介動画</b> を投稿するほか、特設サイトでは <b class="font-semibold">カウントダウンスタンプラリー</b>
                を開催します。毎日出題されるクイズに正解すると
                <b class="font-semibold">豪華景品をプレゼント！</b>ぜひご参加ください！
              </dd>
            </dl>
            <span class="border-line" />
          </li>
          <li class="fadein">
            <dl>
              <dt class="text-themeColor font-medium">
                11/16, 17（火・水）
              </dt>
              <h2 class="text-themeColor text-2xl tracking-widest font-bold mt-1">
                校友会団体企画
              </h2>
              <dd class="text-sm text-gray-500 mt-3 font-medium tracking-widest leading-8">
                二日間に渡って行われるステージ企画では、<b class="font-semibold">岡山大学の部活やサークルによるパフォーマンス</b>
                を行います。合唱や演奏といったものだけではなくチアリーダーの演技や武道系クラブの演舞など幅広いパフォーマンスを披露します。
                こうしたコロナ禍だからこそ岡大生の溢れる想いやエネルギーを存分に感じていただければと思います！パフォーマンスの様子は
                <b class="font-semibold">18:00〜21:00</b> に <b class="font-semibold">岡山大学校友会公式YouTubeで生配信予定</b>
                です。ぜひご自宅でお楽しみください。
              </dd>
            </dl>
            <span class="border-line" />
          </li>
        </ul>

        <div class="px-4">
          <a
            href="https://twitter.com/gakusai_2021_"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-5 md:px-10 py-10 text-white text-2xl relative font-extralight"
          >
            Twitter
            <img
              class="absolute right-4 md:right-8 top-9 inline-block w-10"
              src="@/assets/img/static/circle_arrow.png"
              alt="開く"
            >
          </a>

          <hr class="bg-white">

          <a
            href="https://www.instagram.com/gakusai_2021_"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-5 md:px-10 py-10 text-white text-2xl relative font-extralight"
          >
            Instagram
            <img
              class="absolute right-4 md:right-8 top-9 inline-block w-10"
              src="@/assets/img/static/circle_arrow.png"
              alt="開く"
            >
          </a>

          <hr class="bg-white">

          <a
            href="https://kmtk-256893.wixsite.com/gakusaitouzitu2021"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-5 md:px-10 py-10 text-white text-2xl relative font-extralight"
          >
            <span class="font-japanese">学祭実行委員会</span> HP
            <img
              class="absolute right-4 md:right-8 top-9 inline-block w-10"
              src="@/assets/img/static/circle_arrow.png"
              alt="開く"
            >
          </a>

          <hr class="bg-white">
        </div>
        <p class="md:text-lg text-white text-center font-japanese font-light mb-10 mt-12 sm:my-28">
          皆様のご来場お待ちしております
        </p>
        <p class="text-xs text-white text-center font-japanese font-extralight font-thin mb-3 md:mb-5 mt-20">
          (c) 岡山大学校友会 x 学祭実行委員会
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  mounted () {
    $(window).on('load', () => {
      require('pagepiling.js')
      require('pagepiling.js/dist/jquery.pagepiling.css')
      $('#pagepiling').pagepiling({
        navigation: null,
        scrollingSpeed: 900
      })
    })

    function ScrollTimelineAnime () {
      $('.timeline li').each(function () {
        const elemPos = $(this).offset().top
        const scroll = $(window).scrollTop()
        const windowHeight = $(window).height()
        const startPoint = 250
        if (scroll >= elemPos - windowHeight - startPoint) {
          const H = $(this).outerHeight(true)
          let percent = (scroll + startPoint - elemPos) / (H / 2) * 100

          if (percent > 100) {
            percent = 100
          }

          $(this).children('.border-line').css({
            height: percent + '%'
          })
        }
      })
    }

    function fadeInByScroll (onLeave) {
      $(onLeave ? '.fadein-slide' : '.fadein').each(function () {
        const targetElement = $(this).offset().top
        const scroll = $(window).scrollTop()
        const windowHeight = $(window).height()
        if (scroll > targetElement - windowHeight + 200) {
          $(this).css('opacity', '1')
          $(this).css('transform', 'translateY(0)')
        }
      })
    }

    $('#scroll-box').on('scroll', () => {
      ScrollTimelineAnime()// 線が伸びる関数を呼ぶ
      fadeInByScroll(false)
    })
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
.fadein {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s;
}

.fadein-slide {
  opacity: 0;
  transform: translateX(20px);
  transition: all 2s;
}

.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

/*タイムライン全体の設定*/
.timeline {
  background: #FFFFFF;
  width: 92%;
  margin: 36px 0 100px;
  padding: 70px 26px 30px 30px;
}

.timeline li {
  /*線の起点とするためrelativeを設定*/
  position: relative;
  list-style: none;
  padding: 0 0 20px 0;
}

.timeline dl {
  margin: 0 0 20px 3em;
  position: relative;
  top: -22px;
}

.timeline dd strong {
  display: block;
  padding: 10px 0;
}

/*絶対配置で線を設定*/
.border-line {
  /*線の位置*/
  position: absolute;
  left: 0.4em;
  top: 0;
  width: 2px; /*線の太さ*/
  height: 0; /*はじめは高さを0に*/
  background: #66BEFF;
}

/*タイムラインの見出し横の丸の位置と形状*/
.timeline li::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  background: #0071C5;
  border-radius: 50%;
}
</style>
