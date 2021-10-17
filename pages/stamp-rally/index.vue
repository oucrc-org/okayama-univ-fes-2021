<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
      <Header title="スタンプラリー" colors="bg-themeColor text-white" />

      <VerticalTitle text="CAMPAIGN" colors="text-gray-200" class="-z-10" />
      <BodyWithHeader title="スタンプラリー企画について" colors="border-themeColor text-themeColor" />
      <!-- TODO: 説明追加 -->
      <p class="px-4">
        説明準備中
      </p>

      <BodyWithHeader title="豪華賞品" colors="border-themeColor text-themeColor">
        <StampRallyGrid :items="items" />
      </BodyWithHeader>

      <BodyWithHeader title="スタンプ取得について" colors="border-themeColor text-themeColor">
        <!-- TODO: 説明追加 -->
        <p>説明準備中</p>
        <StampRallyTimeTable />
      </BodyWithHeader>
      <BodyWithHeader title="参加資格" colors="border-themeColor text-themeColor">
        <!-- TODO: 説明追加 -->
        <p class="mb-8">
          説明準備中
        </p>

        <div class="col-span-2 md:col-span-1 text-center md:text-left md:pl-3">
          <!-- TODO: ログインリンクに変更 -->
          <LinkTo
            to="#"
            class="border-3 border-themeColor bg-themeColor inline-block font-medium text-center text-white text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
          >
            参加する →
          </LinkTo>
        </div>
      </BodyWithHeader>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/layouts/Header.vue'
import StampRallyGrid from '~/components/pages/stamp-rally/Grid.vue'
import StampRallyTimeTable from '~/components/pages/stamp-rally/TimeTable.vue'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import items from '~/assets/data/stamp-rally-item'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'

export default Vue.extend({
  components: {
    LinkTo,
    Header,
    BodyWithHeader,
    VerticalTitle,
    StampRallyGrid,
    StampRallyTimeTable
  },
  data () {
    return {
      items
    }
  }
})
</script>

<style>

</style>
