<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div v-for="item in items" :key="item.id" class="relative flex flex-col gap-y-2">
      <img v-if="item.cover" class="object-cover rounded-xl bg-gray-500" :src="item.cover.url" :width="item.cover.width" :height="item.cover.height">
      <div class="text-xl font-bold">
        {{ item.name }}
      </div>
      <div class="text-gray-700">
        抽選{{ item.presentCount }}様
      </div>
      <div class="absolute top-2 right-2 rounded-full text-white text-xs bg-themeColor p-1">
        スタンプ{{ item.stampCount }}コ
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
// TODO:モックデータの分離
import { IStampRallyItem } from '~/assets/js/type/IStampRally'

export default Vue.extend({
  name: 'StampRallyGrid',
  props: {
    items: {
      type: Array as PropType<IStampRallyItem[]>,
      required: true
    }
  }
})
</script>
