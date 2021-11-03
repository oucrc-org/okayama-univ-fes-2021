<template>
  <div>
    <div class="container max-w-screen-lg mt-24 mx-auto relative md:pr-28">
      <VerticalTitle text="PRESENTATION" colors="text-gray-200" class="-z-10" />

      <Header title="団体企画" colors="bg-themeColor text-white" />
      <Warning />

      <div class="grid md:grid-cols-2 gap-4 mx-4">
        <div>
          <CenterTitle text="美術部 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="/presentation/art_club">
            <img
              src="@/assets/img/presentations/art_club.jpg"
              class="shadow-xl transition-shadow hover:shadow-2xl rounded-2xl object-cover mt-8 w-full"
              alt="美術部 学祭展"
            >
          </LinkTo>
        </div>

        <div>
          <CenterTitle text="電算研 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="/clubs/oucrc">
            <img
              src="@/assets/img/presentations/oucrc.jpg"
              class="shadow-xl transition-shadow hover:shadow-2xl rounded-2xl object-cover mt-8 w-full"
              alt="電算研 学祭展"
            >
          </LinkTo>
        </div>

        <div>
          <CenterTitle text="コロナ対策応援団" class="border-themeColor text-themeColor" />
          <LinkTo to="/presentation/win_covid">
            <img
              src="@/assets/img/presentations/win_covid.jpg"
              class="shadow-xl transition-shadow hover:shadow-2xl rounded-2xl object-cover mt-8 w-full"
              alt="コロナ対策応援団"
            >
          </LinkTo>
        </div>

        <div>
          <CenterTitle text="書道部 学祭展覧会（提出待ち）" class="border-themeColor text-themeColor" />
          <!-- TODO: 書道部のページ追加とリンク -->
          <p class="text-red-600">書道部データ 11/6以降</p>
          <!--<LinkTo to="#">-->
          <!--<img-->
          <!--  src="@/assets/img/dev/hero.jpg"-->
          <!--  class="shadow-xl transition-shadow hover:shadow-2xl rounded-2xl object-cover mt-8 w-full"-->
          <!--  alt="書道部 学祭展"-->
          <!--&gt;-->
          <!--</LinkTo>-->
        </div>

        <!-- ここからMicroCMS -->
        <div v-for="presen in presentations.contents" :key="presen.id">
          <CenterTitle :text="presen.title" class="border-themeColor text-themeColor w-5/6 sm:w-11/12" />
          <LinkTo :to="`/presentation/${presen.id}`">
            <img
              :src="typeof presen.cover === 'undefined' ? alternativeCoverImage : presen.cover.url"
              :alt="`${presen.club.name}部`"
              class="shadow-xl transition-shadow hover:shadow-2xl rounded-2xl object-cover mt-8 w-full"
            >
          </LinkTo>
        </div>

        <p class="text-red-600">放送文化部さんからいただいた動画が入ります（11/5以降）</p>
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
      return require('~/assets/img/cover_alternative.jpg')
    }
  }
})
</script>

<style>

</style>
