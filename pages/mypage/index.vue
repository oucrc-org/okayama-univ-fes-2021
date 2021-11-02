<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative md:pr-28">
    <Header title="マイページ" colors="bg-themeColor text-white" />
    <VerticalTitle text="MYPAGE" colors="text-gray-200" class="-z-10" />

    <BodyWithHeader title="ユーザ情報" colors="border-themeColor text-themeColor">
      <div class="flex flex-row gap-x-4">
        <img
          :src="$store.state.auth.user.picture"
          :alt="$store.state.auth.user.name"
          class="w-16 md:w-24 rounded-full"
        >
        <div class="justify-center flex flex-col">
          <span class="text-gray-400 truncate">{{ $store.state.auth.user.email }}</span>
          <span class="text-2xl mt-1">{{ $store.state.auth.user.name }}</span>
        </div>
      </div>

      <p class="mt-6">
        取得スタンプ数:
        <span class="badge inline-block bg-themeColor border-themeColor">
          {{ stamps.length }}個
        </span>
      </p>

      <p class="mt-3">
        今日のスタンプ:
        <span v-if="isAnsweredTodayQuestion" class="badge inline-block bg-themeColor border-themeColor">
          取得済み
        </span>
        <span v-else class="badge inline-block bg-gray-400 border-gray-400">
          未取得
        </span>
      </p>
    </BodyWithHeader>

    <section>
      <BodyWithHeader title="スタンプ達成状況" colors="border-themeColor text-themeColor">
        <StampStatus :stamps="stamps" />
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="豪華景品" colors="border-themeColor text-themeColor">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StampRallyPrize v-for="item in prizes" :key="item.id" :item="item" />
        </div>
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="応募ページ" colors="border-themeColor text-themeColor">
        <div class="alert">
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0071C5"
              class="flex-shrink-0 w-6 h-6 mx-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <label>
              <h4>プレゼント応募は、<b>11月16日</b>（スタンプラリー終了後）より開始します。</h4>
            </label>
          </div>
        </div>

        <ApplyButton />
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="注意事項" colors="border-themeColor text-themeColor">
        <ApplyNotes />
      </BodyWithHeader>
    </section>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Header from '@/components/layouts/Header.vue'
import BodyWithHeader from '@/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '@/components/layouts/VerticalTitle.vue'
import StampStatus from '@/components/templates/stamp/StampStatus.vue'
import IResponse from '@/assets/js/type/request/IResponse'
import IPrize from '@/assets/js/type/IPrize'
import StampRallyPrize from '@/components/pages/stamp-rally/Prize.vue'
import ApplyButton from '@/components/templates/parts/ApplyButton.vue'
import ApplyNotes from '@/components/pages/ApplyNotes.vue'

interface IResponsePrize extends IResponse {
  data: {
    success: boolean,
    data: IPrize[]
  }
}

const url = process.env.BACKEND_API_URL

export default {
  name: 'MyPage',
  components: {
    Header,
    BodyWithHeader,
    VerticalTitle,
    StampStatus,
    StampRallyPrize,
    ApplyNotes,
    ApplyButton
  },
  middleware: 'auth',
  asyncData ({
    app,
    error
  }: Context) {
    // noinspection TypeScriptUnresolvedFunction
    return app.$axios.get(`${url}/user`, {
      headers: {
        'Access-Token': app.$auth.getToken('google').replace('Bearer ', ''),
        'Access-Control-Allow-Origin': `${url}/*`
      }
    }).then((res) => {
      return app.$axios.get(`${url}/presents`).then((r: IResponsePrize) => {
        return {
          stamps: res.data.stamps,
          prizes: r.data.data,
          isAnsweredTodayQuestion: res.data.answer_today_question
        }
      }).catch((err) => {
        error({
          statusCode: err.statusCode,
          message: err.message
        })
      })
    }).catch(() => {
      alert('ユーザ情報の取得に失敗しました')
    })
  },
  data () {
    return {
      stampRallyItems: [],
      stamps: [],
      prizes: [],
      isAnsweredTodayQuestion: false
    }
  }
}
</script>

<style scoped>

</style>
