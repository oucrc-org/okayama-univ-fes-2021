<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
      <VerticalTitle text="PRESENTATION" colors="text-gray-200" class="-z-10" />

      <Header title="団体企画" colors="bg-themeColor text-white" />
      <Warning />

      <div class="grid md:grid-cols-2 gap-4 mx-4">
        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="#">
            <img
              src="@/assets/img/dev/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </LinkTo>
        </div>

        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="#">
            <img
              src="@/assets/img/dev/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </LinkTo>
        </div>

        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="#">
            <img
              src="@/assets/img/dev/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </LinkTo>
        </div>

        <!-- ここからMicroCMS -->
        <div v-for="presen in presentations.contents" :key="presen.id">
          <CenterTitle :text="presen.title" class="border-themeColor text-themeColor" />
          <LinkTo :to="`/presentation/${presen.id}`">
            <img
              :src="typeof presen.cover === 'undefined' ? alternativeCoverImage : presen.cover.url"
              :alt="`${presen.club.name}部の企画カバー画像`"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
            >
          </LinkTo>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import CenterTitle from '~/components/templates/header/CenterTitle.vue'
import Header from '@/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import Warning from '~/components/pages/Warning.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
import IResponse from '~/assets/js/type/request/IResponse'
import IPresentation from '~/assets/js/type/presentation/IPresentation'

interface IResponsePresentations extends IResponse {
  data: {
    contents: IPresentation[],
    totalCount: number
  }
}

const url = `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1`
const apiKey = process.env.API_KEY

export default Vue.extend({
  components: {
    LinkTo,
    CenterTitle,
    Header,
    VerticalTitle,
    Warning
  },
  asyncData ({ app }: Context): Promise<{ presentations: { contents: IPresentation[] } }> {
    return app.$axios.get(`${url}/presentations`, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey
      },
      params: {
        limit: 100,
        fields: 'id,title,club,cover'
      }
    }).then((res: IResponsePresentations) => {
      return { presentations: res.data }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
      return { presentations: { contents: [] } }
    })
  },
  data (): { presentations: { contents: IPresentation[] } } {
    return {
      presentations: {
        contents: []
      }
    }
  },
  computed: {
    alternativeCoverImage (): string {
      return require('~/assets/img/cover_alternative.png')
    }
  }
})
</script>

<style>

</style>
