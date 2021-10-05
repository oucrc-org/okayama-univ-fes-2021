<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
      <Header title="スタンプラリー" colors="bg-themeColor text-white" />

      <VerticalTitle text="CAMPAIGN" colors="text-gray-200" class="-z-10" />

      <div class="px-6 py-6">
        <StampRallyGrid :items="items" />
      </div>
      <div>
        <Headline title="スタンプ取得について" colors="border-themeColor text-themeColor" />
        <!-- TODO: 説明追加 -->
        <p>説明準備中</p>
        <StampRallyTimeTable />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Headline from '~/components/templates/Headline.vue'
import VerticalTitle from '@/components/VerticalTitle.vue'
import StampRallyGrid from '@/components/stamp-rally/Grid.vue'
import StampRallyTimeTable from '@/components/stamp-rally/TimeTable.vue'

import { IStampRallyItem } from '~/assets/js/type/IStampRally'
export default Vue.extend({
  components: {
    Header,
    Headline,
    VerticalTitle,
    StampRallyGrid,
    StampRallyTimeTable
  },
  data () {
    // idはkeyになるのでユニークにしてください
    const items: IStampRallyItem[] = [
      {
        id: 'nintend-switch',
        name: 'Nintendo Switch',
        presentCount: 2,
        stampCount: 10,
        cover: {
          url: 'https://images.microcms-assets.io/assets/7734751c51674cb2966df9edbbd3b15b/31f8c1358ce644cd96b24b41250848a8/%E3%83%A1%E3%82%A4%E3%83%B3.jpg',
          height: 556,
          width: 1280
        }
      },
      {
        id: 'ps5',
        name: 'PS5',
        presentCount: 1,
        stampCount: 30,
        cover: {
          url: 'https://images.microcms-assets.io/assets/7734751c51674cb2966df9edbbd3b15b/31f8c1358ce644cd96b24b41250848a8/%E3%83%A1%E3%82%A4%E3%83%B3.jpg',
          height: 556,
          width: 1280
        }
      }
    ]
    return {
      items
    }
  }
})
</script>

<style>

</style>
