<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
    <Header title="マイページ" colors="bg-themeColor text-white" />
    <VerticalTitle text="MYPAGE" colors="text-gray-200" class="-z-10" />

    <no-ssr>
      <BodyWithHeader title="ユーザ情報" colors="border-themeColor text-themeColor">
        <div class="flex flex-row gap-x-4">
          <img
            :src="$store.state.auth.user.picture"
            :alt="$store.state.auth.user.name"
            class="w-16 md:w-24 rounded-full"
          >
          <div class="justify-center flex flex-col">
            <span class="text-gray-500 text-xs truncate">{{ $store.state.auth.user.email }}</span>
            <span class="text-xl">{{ $store.state.auth.user.name }}</span>
          </div>
        </div>
      </BodyWithHeader>
    </no-ssr>

    <span class="text-xl">AccessToken: {{ $auth.getToken('google') }}</span>

    <BodyWithHeader title="スタンプ達成状況" colors="border-themeColor text-themeColor">
      <div class="grid md:grid-cols-2 gap-4">
        <!-- TODO: スタンプのアイコンと説明を設定（直で書くと鬱陶しいので適当なファイルにまとめてimport）
                   取得状況は例によって vuex でよいでしょう -->
        <div
          v-for="i in Array(5).map((_, $i) => $i)"
          :key="`stamp-${i}`"
          class="flex flex-row gap-x-4 p-6 bg-white rounded-xl shadow-xl"
        >
          <img
            src="~/assets/img/static/stamps/example.jpg"
            alt="スタンプ画像"
            class="w-16 h-16 md:w-24 md:h-24 bg-cover rounded-full"
          >
          <div class="justify-center flex flex-col">
            <span class="md:text-lg">あいうえおかきくけこさしすせそ</span>
          </div>
        </div>
      </div>
    </BodyWithHeader>

    <BodyWithHeader title="プレゼント応募" colors="border-themeColor text-themeColor">
      <StampRallyGrid :items="stampRallyItems" />

      <div class="mt-8 col-span-2 md:col-span-1 text-center md:text-left md:pl-3">
        <!-- TODO: 応募リンクに変更 -->
        <LinkTo
          to="#"
          class="border-3 border-themeColor bg-themeColor inline-block font-medium text-center text-white text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
        >
          応募する →
        </LinkTo>
      </div>
    </BodyWithHeader>
  </div>
</template>

<script lang="ts">
import Header from '~/components/layouts/Header.vue'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import StampRallyGrid from '~/components/pages/stamp-rally/Prize.vue'
import stampRallyItems from '~/assets/data/stamp-rally-item'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'

export default {
  name: 'MyPage',
  components: {
    Header,
    BodyWithHeader,
    LinkTo,
    VerticalTitle,
    StampRallyGrid
  },
  middleware: 'auth',
  data () {
    return {
      stampRallyItems
    }
  }
}
</script>

<style scoped>

</style>
