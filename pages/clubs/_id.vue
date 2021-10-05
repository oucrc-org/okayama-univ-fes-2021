<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header :title="club.name" colors="bg-themeColor text-white" />
      <VerticalTitle text="ABOUT" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-14 mx-auto">
        <div class="w-4/5 tracking-widest leading-6 px-4">
          <img class="rounded-xl" :src="coverUrl" alt="団体画像">
        </div>
      </div>
    </div>

    <!-- 何している部活なの？ -->
    <HTMLLeader :body="club.body" class="px-6" />

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
import { ClubData } from '~/assets/js/type/club/club-data'
import Club from '~/assets/js/type/club/club'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import IframeViewer from '~/components/templates/html/IframeViewer.vue'

export default {
  components: {
    IframeViewer,
    BodyWithHeader,
    HTMLLeader,
    Header,
    VerticalTitle
  },
  async asyncData (context: Context) {
    const {
      app,
      params,
      error
    } = context
    const response: ClubData = await app.$microcms.get({
      endpoint: `clubs/${params.id}`
    }).catch(() => {
      error({
        statusCode: 404,
        message: 'お探しの部活動・サークルが見つかりませんでした。'
      })
    })
    return {
      club: response
    }
  },
  data (): {
    club: ClubData
    } {
    return {
      club: new Club()
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
    },
    coverUrl (): String {
      // @ts-ignore
      return this.club.cover ? this.club.cover.url : null
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
