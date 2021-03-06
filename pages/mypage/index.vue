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
          {{ stampCount }}個
        </span>
      </p>

      <!--<p class="mt-3">-->
      <!--  今日のスタンプ:-->
      <!--  <span v-if="isAnsweredTodayQuestion" class="badge inline-block bg-themeColor border-themeColor">-->
      <!--    取得済み-->
      <!--  </span>-->
      <!--  <span v-else class="badge inline-block bg-gray-400 border-gray-400">-->
      <!--    未取得-->
      <!--  </span>-->
      <!--</p>-->

      <!--<div v-if="!isAnsweredTodayQuestion" class="text-center mt-12">-->
      <!--  <LinkTo to="/quiz">-->
      <!--    <RoundedButton text="今日のクイズに回答 →" class="border-themeColor bg-themeColor text-white" />-->
      <!--  </LinkTo>-->
      <!--</div>-->
    </BodyWithHeader>

    <section>
      <BodyWithHeader title="応募ページ" colors="border-themeColor text-themeColor">
        <ApplyButton />
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="スタンプ達成状況" colors="border-themeColor text-themeColor">
        <StampStatus :stamps="stamps" />
      </BodyWithHeader>
    </section>

    <section>
      <BodyWithHeader title="豪華景品" colors="border-themeColor text-themeColor">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StampRallyPrize
            v-for="item in prizes"
            :key="item.id"
            :item="item"
            :disabled="item.required_stamps > stampCount"
          />
        </div>
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
import IStamp from '~/assets/js/type/stamp/IStamp'
import StampRallyPrize from '@/components/pages/stamp-rally/Prize.vue'
import ApplyButton from '@/components/templates/parts/ApplyButton.vue'
import ApplyNotes from '@/components/pages/ApplyNotes.vue'

interface IResponseUser extends IResponse {
  data: {
    success: boolean,
    stamps: IStamp[],
    // eslint-disable-next-line camelcase
    answer_today_question: boolean
  }
}

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
    }).then((res: IResponseUser) => {
      return app.$axios.get(`${url}/presents`).then((r: IResponsePrize) => {
        return {
          stamps: res.data.stamps,
          prizes: r.data.data,
          isAnsweredTodayQuestion: res.data.answer_today_question,
          stampCount: res.data.stamps.map(s => Number(s.has_stamp)).reduce((a, b) => a + b)
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
      stamps: [] as IStamp[],
      prizes: [] as IPrize[],
      isAnsweredTodayQuestion: false,
      stampCount: 0
    }
  },
  head () {
    return {
      title: 'マイページ'
    }
  }
}
</script>

<style scoped>

</style>
