<template>
  <div>
    <div class="container max-w-screen-lg mt-24 mx-auto relative md:pr-28 leading-relaxed">
      <Header title="スタンプラリー" colors="bg-themeColor text-white" />

      <VerticalTitle text="CAMPAIGN" colors="text-gray-200" class="-z-10" />
      <BodyWithHeader title="スタンプラリー企画について" colors="border-themeColor text-themeColor">
        <p class="text-accentColor font-bold text-xl mb-3">
          11月8日（月）〜11月15日（月）
        </p>
        <p>
          8日間毎日出されるクイズに答えて、スタンプを集めましょう。
          クイズ内容は特設サイト（本サイト）のコンテンツ内から出題されます！
          集めたスタンプでNintendo Switchなど豪華景品獲得のチャンス！
          何度でも回答し直せます。ぜひスタンプを集めてみてくださいね。
        </p>
      </BodyWithHeader>

      <BodyWithHeader title="豪華景品" colors="border-themeColor text-themeColor">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StampRallyPrize v-for="item in prizes" :key="item.id" :item="item" />
        </div>
      </BodyWithHeader>

      <BodyWithHeader title="注意事項" colors="border-themeColor text-themeColor">
        <ApplyNotes />

        <div class="text-center">
          <LinkTo to="/quiz">
            <RoundedButton text="参加する →" class="border-themeColor bg-themeColor text-white" />
          </LinkTo>
        </div>
      </BodyWithHeader>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import StampRallyPrize from '~/components/pages/stamp-rally/Prize.vue'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
import RoundedButton from '~/components/templates/parts/RoundedButton.vue'
import IResponse from '~/assets/js/type/request/IResponse'
import IPrize from '~/assets/js/type/IPrize'
import ApplyNotes from '@/components/pages/ApplyNotes.vue'

interface IResponsePrize extends IResponse {
  data: {
    success: boolean,
    data: IPrize[]
  }
}

const url = process.env.BACKEND_API_URL

export default Vue.extend({
  components: {
    LinkTo,
    Header,
    BodyWithHeader,
    VerticalTitle,
    StampRallyPrize,
    RoundedButton,
    ApplyNotes
  },
  asyncData ({
    app,
    error
  }: Context) {
    return app.$axios.get(`${url}/presents`).then((res: IResponsePrize) => {
      return { prizes: res.data.data }
    }).catch((err) => {
      error({
        statusCode: err.statusCode,
        message: err.message
      })
    })
  },
  data (): { prizes: IPrize[] } {
    return {
      prizes: []
    }
  },
  head () {
    return {
      title: 'スタンプラリー'
    }
  }
})
</script>

<style>

</style>
