<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <div class="tracking-widest px-4">
      <section>
        <h1 class="text-center font-yu-mincho font-bold text-24pt leading-loose">
          美術部<br>
          オンライン美術展
        </h1>
        <p class="text-center font-yu-mincho font-bold text-18pt leading-tight">
          美術部では各部員が様々なジャンルの作品を制作しています。個性的な作品を是非お楽しみください。
        </p>
        <p class="text-center font-yu-mincho text-14pt mt-8">
          当サイト内の作品の保存、スクリーンショット、二次利用(転載・コピー・引用)及び複製はお控えください。
        </p>
      </section>

      <section class="mt-8">
        <h2 class="font-ms-mincho text-22pt">
          水彩画
        </h2>
        <p class="font-ms-mincho text-11-5pt">
          水溶性の絵の具を使用して書いた絵のことです。<br>
          淡い色合いや透明感が最大の魅力です。
        </p>
        <div class="md:grid md:grid-cols-2">
          <GalleryPicture title="葵" artist="赤瀬 幸香（工・3年）" medium="透明水彩絵の具">
            <img src="~/assets/img/clubs/art_club/1.jpg" alt="葵" class="max-h-screen mx-auto">
            <template #caption>
              髪の毛を見てほしいです。
            </template>
          </GalleryPicture>
          <GalleryPicture title="退屈" artist="赤瀬 幸香（工・3年）" medium="透明水彩絵の具">
            <img src="~/assets/img/clubs/art_club/2.jpg" alt="退屈" class="max-h-screen mx-auto">
            <template #caption>
              青、黄色系でまとめました。
            </template>
          </GalleryPicture>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="font-ms-mincho text-22pt">
          アクリル画
        </h2>
        <p class="font-ms-mincho text-11-5pt">
          アクリル樹脂の絵の具を使っています。<br>
          鮮やかな発色が特徴的です。
        </p>
        <div>
          <GalleryPicture title="金を継ぐ" artist="高田 ひかる（文・3年）" medium="キャンバスボード、アクリル絵の具">
            <img src="~/assets/img/clubs/art_club/3.jpg" alt="金を継ぐ" class="max-h-screen mx-auto">
            <template #caption>
              傷の誇り
            </template>
          </GalleryPicture>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="font-ms-mincho text-22pt">
          油絵
        </h2>
        <p class="font-ms-mincho text-11-5pt">
          つややかで透明感のある質感から重厚な雰囲気まで、表現の幅が限りなく広いところが油絵の魅力です。
        </p>
        <div>
          <GalleryPicture title="カーテンと少女" artist="富松 莉子（文・1年）" medium="油絵具">
            <img src="~/assets/img/clubs/art_club/4.jpg" alt="カーテンと少女" class="max-h-screen mx-auto">
            <template #caption>
              カーテンの前に立つ少女を描きました。<br>
              揺れやしわを表現するのが楽しかったです。
            </template>
          </GalleryPicture>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="font-ms-mincho text-22pt">
          色鉛筆画
        </h2>
        <p class="font-ms-mincho text-11-5pt">
          塗り重ねることで独特の色合いを繊細に表現することができます。
        </p>
        <div>
          <GalleryPicture title="ルリコンゴウインコ" artist="棚倉 淳郎（工・2年）" medium="色鉛筆">
            <img src="~/assets/img/clubs/art_club/5.jpg" alt="ルリコンゴウインコ" class="max-h-screen mx-auto">
            <template #caption>
              10色で描いています。
            </template>
          </GalleryPicture>
          <GalleryPicture title="オオセンチコガネ" artist="棚倉 淳郎（工・2年）" medium="色鉛筆">
            <img src="~/assets/img/clubs/art_club/6.jpg" alt="オオセンチコガネ" class="max-h-screen mx-auto">
            <template #caption>
              躍動感を意識して描きました。
            </template>
          </GalleryPicture>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="font-ms-mincho text-22pt">
          水彩色鉛筆画
        </h2>
        <p class="font-ms-mincho text-11-5pt">
          水彩色鉛筆は芯が水溶性の素材でできており、水を含ませると水彩画のような表現が可能です。
        </p>
        <div>
          <GalleryPicture title="待つ" artist="高村 侑（工・2年）" medium="ペン、水彩色鉛筆">
            <img src="~/assets/img/clubs/art_club/7.jpg" alt="待つ" class="max-h-screen mx-auto">
            <template #caption>
              電話ボックスを描きました。
            </template>
          </GalleryPicture>
          <GalleryPicture title="帰る" artist="高村 侑（工・2年）" medium="ペン、水彩色鉛筆">
            <img src="~/assets/img/clubs/art_club/8.jpg" alt="帰る" class="max-h-screen mx-auto">
            <template #caption>
              琵琶湖を描きました。
            </template>
          </GalleryPicture>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="font-ms-mincho text-22pt">
          立体作品
        </h2>
        <p class="font-ms-mincho text-11-5pt">
          折り紙や、粘土、食品サンプルなど様々な種類があります。<br>
          実際の質感をじかに感じられるところが立体作品の魅力です。
        </p>
        <div class="md:grid md:grid-cols-2">
          <GalleryPicture title="アーモンド(偽物)" artist="江尻 明日香（文・3年）" medium="樹脂粘土、アクリルガッシュ、合成樹脂塗料">
            <img src="~/assets/img/clubs/art_club/9.jpg" alt="アーモンド(偽物)" class="max-h-screen mx-auto">
          </GalleryPicture>
          <GalleryPicture title="アーモンドのキャラメリゼ(偽物)" artist="江尻 明日香（文・3年）" medium="樹脂粘土、アクリルガッシュ、合成樹脂塗料">
            <img src="~/assets/img/clubs/art_club/10.jpg" alt="アーモンドのキャラメリゼ(偽物)" class="max-h-screen mx-auto">
          </GalleryPicture>
          <GalleryPicture title="バター(偽物)" artist="江尻 明日香（文・3年）" medium="樹脂粘土、合成樹脂塗料">
            <img src="~/assets/img/clubs/art_club/11.jpg" alt="バター(偽物)" class="max-h-screen mx-auto">
          </GalleryPicture>
          <GalleryPicture title="栗の甘露煮(偽物)" artist="江尻 明日香（文・3年）" medium="樹脂粘土、レジン液、アクリルガッシュ、合成樹脂塗料">
            <img src="~/assets/img/clubs/art_club/12.jpg" alt="栗の甘露煮(偽物)" class="max-h-screen mx-auto">
          </GalleryPicture>
          <GalleryPicture title="煮物(偽物)" artist="江尻 明日香（文・3年）" medium="樹脂粘土、木粉粘土、レジン液、アクリルガッシュ">
            <img src="~/assets/img/clubs/art_club/13.jpg" alt="煮物(偽物)" class="max-h-screen mx-auto">
          </GalleryPicture>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import GalleryPicture from '@/components/pages/clubs/art_club/GalleryPicture'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    GalleryPicture
  }
}
</script>

<style scoped>
.text-24pt {
  font-size: 2rem;
}

.text-18pt {
  font-size: 1.5rem;
}

.text-14pt {
  font-size: 1.167rem;
}

.text-22pt {
  font-size: 1.833rem;
}

.text-11-5pt {
  font-size: 0.9583rem;
}
</style>
