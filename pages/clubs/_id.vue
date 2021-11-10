<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative overflow-hidden">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header :title="club.name" colors="bg-themeColor text-white" />
      <VerticalTitle text="ABOUT" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-14 mx-auto">
        <div class="w-4/5 tracking-widest leading-6 px-4">
          <picture v-if="club.cover">
            <source :srcset="iImageToUrl(club.cover, 788, 75, true)" type="image/webp">
            <img class="rounded-xl" :src="iImageToUrl(club.cover, 788, 75)" alt="団体画像">
          </picture>
        </div>
      </div>
    </div>

    <!-- 何している部活なの？ -->
    <HTMLLeader :body="addClassToIframe(club.body)" class="px-6" />

    <!-- 活動紹介映像 -->
    <BodyWithHeader v-if="club.youtube_url != null" title="活動紹介映像">
      <div :class="$style['introduction_club_movie']">
        <IframeViewer :src="club.youtube_url" />
      </div>
    </BodyWithHeader>

    <!-- 公式SNS -->
    <div v-if="hasSNSUrl">
      <BodyWithHeader title="公式SNS">
        <div class="px-6">
          <div class="grid grid-cols-4">
            <!-- Twitter -->
            <div v-if="club.twitter_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.twitter_url">
                <img
                  class="inline-block text-gray-700 tracking-widest h-6"
                  src="@/assets/img/icon/twitter.png"
                  alt="Twitter"
                >
              </a>
            </div>

            <!-- Facebook -->
            <div v-if="club.facebook_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.facebook_url">
                <img
                  class="inline-block text-gray-700 tracking-widest h-6"
                  src="@/assets/img/icon/facebook.png"
                  alt="Facebook"
                >
              </a>
            </div>

            <!-- Instagram -->
            <div v-if="club.instagram_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.instagram_url">
                <img
                  class="inline-block text-gray-700 tracking-widest h-6"
                  src="@/assets/img/icon/instagram.png"
                  alt="LINE"
                >
              </a>
            </div>

            <!-- LINE -->
            <div v-if="club.line_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.line_url">
                <img
                  class="inline-block text-gray-700 tracking-widest h-6"
                  src="@/assets/img/icon/line.png"
                  alt="LINE"
                >
              </a>
            </div>
          </div>
        </div>
      </BodyWithHeader>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import HTMLLeader from '~/components/templates/html/HTMLLeader.vue'
import Club from '~/assets/js/type/club/Club'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import IframeViewer from '~/components/templates/html/IframeViewer.vue'
import IResponse from '~/assets/js/type/request/IResponse'
import IClub from '~/assets/js/type/club/IClub'
import iImageToUrl from '~/assets/js/url/iImageToUrl'

interface IResponseClub extends IResponse {
  data: IClub
}

const url = `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1`
const apiKey = process.env.API_KEY

export default {
  components: {
    IframeViewer,
    BodyWithHeader,
    HTMLLeader,
    Header,
    VerticalTitle
  },
  asyncData ({
    app,
    params,
    error
  }: Context): Promise<{ club: IClub }> {
    return app.$axios.get(`${url}/clubs/${params.id}`, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey
      }
    }).then((res: IResponseClub) => {
      return { club: res.data }
    }).catch(() => {
      error({
        statusCode: 404,
        message: 'お探しの部活動・サークルが見つかりませんでした。'
      })
      return { club: new Club() }
    })
  },
  data (): { club: IClub } {
    return {
      club: new Club()
    }
  },
  head () {
    return {
      title: (this as any).club.name
    }
  },
  computed: {
    hasSNSUrl (): boolean {
      // @ts-ignore
      const club = this.club
      return !(
        club.twitter_url == null &&
        club.facebook_url == null &&
        club.instagram_url == null &&
        club.line_url == null
      )
    }
  },
  mounted () {
    const youtubeIframes = $('iframe[data-youtube]')
    /**
     * YouTube埋め込みを16:9にリサイズする
     * なんでjQueryかというと、embedlyというサービスで埋め込みをしているせいで
     * iframeが入れ子になっており、よくあるposition: relativeと擬似要素の
     * paddingつけるやつが使えないからです。
     * リサイズには対応してません
     */
    youtubeIframes.each(function () {
      const $this = $(this)
      const width = $this.width()
      $this.css({ height: (width ?? 100) * 0.5625 })
    })
  },
  methods: {
    iImageToUrl,
    addClassToIframe (str: string): string {
      return str.replaceAll(/title="YouTube(.+?)"/g, 'data-youtube')
        .replaceAll(/title="SoundCloud(.+?)"/g, 'data-soundcloud')
    }
  }
}
</script>

<style module>
.introduction_club_movie {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
}

.introduction_club_movie iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h1 {
  @apply border-themeColor text-themeColor text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative -left-6 z-10
}

h2, h3, h4, h5 {
  @apply mb-4 mt-8
}

</style>
