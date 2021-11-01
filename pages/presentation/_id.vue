<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative">
    <VerticalTitle text="PERFORMANCE" colors="text-gray-200 -z-10" />
    <!-- ヘッダー -->

    <Header :title="presentation.club.name" colors="bg-themeColor text-white" />

    <!-- 活動紹介映像 -->
    <BodyWithHeader v-if="presentation.videoUrl != null" title="パフォーマンス動画">
      <div class="relative overflow-hidden" style="padding-bottom: 56.25%">
        <iframe
          class="absolute h-full w-full"
          :src="watchToEmbed(presentation.videoUrl)"
          :title="presentation.title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </BodyWithHeader>
    <div v-if="presentation.videoTitle" class="px-6 mt-5 text-xl font-bold">
      {{ presentation.videoTitle }}
    </div>
    <!-- メッセージ -->
    <BodyWithHeader v-if="presentation.messageHtml != null" title="メッセージ">
      <HTMLLeader :body="presentation.messageHtml" class="px-6" />
    </BodyWithHeader>
    <!-- 団体へリンクする -->
    <div class="text-center my-6 px-3">
      <RoundButton v-if="presentation.club" :to="`/clubs/${presentation.club.id}`">
        {{ presentation.club.name }}のページへ
      </RoundButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import HTMLLeader from '~/components/templates/html/HTMLLeader.vue'
import Presentation from '~/assets/js/type/presentation/Presentation'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import IResponse from '~/assets/js/type/request/IResponse'
import IPresentation from '~/assets/js/type/presentation/IPresentation'
import watchToEmbed from '~/assets/js/url/watch-to-embed'
import RoundButton from '~/components/templates/parts/RoundButton.vue'

interface IResponsePresentation extends IResponse {
  data: IPresentation
}

const url = `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1`
const apiKey = process.env.API_KEY

export default {
  components: {
    BodyWithHeader,
    HTMLLeader,
    Header,
    VerticalTitle,
    RoundButton
  },
  asyncData ({ app, params, error }: Context): Promise<{ presentation: IPresentation }> {
    return app.$axios.get(`${url}/presentations/${params.id}`, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey
      }
    }).then((res: IResponsePresentation) => {
      return { presentation: res.data }
    }).catch(() => {
      error({
        statusCode: 404,
        message: 'お探しの企画が見つかりませんでした。'
      })
      return { presentation: new Presentation() }
    })
  },
  data (): { presentation: IPresentation } {
    return {
      presentation: new Presentation()
    }
  },
  methods: { watchToEmbed }
}
</script>

<style module>
.introduction_presentation_movie {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
}

.introduction_presentation_movie iframe {
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
