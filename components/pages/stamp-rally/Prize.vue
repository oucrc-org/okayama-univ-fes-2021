<template>
  <div class="relative flex flex-col gap-y-2">
    <img
      v-if="item.cover"
      :src="item.cover.url"
      :alt="item.name"
      class="object-cover rounded-xl bg-gray-500 h-48"
    >
    <div class="text-xl font-bold">
      {{ item.name }}
    </div>
    <div class="text-gray-700">
      抽選{{ item.presentCount }}名
    </div>
    <div class="absolute top-2 right-2 rounded-full text-white text-xs bg-themeColor p-1">
      スタンプ{{ item.stampCount }}コ
    </div>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import IPrize from '~/assets/js/type/IPrize'

export default Vue.extend({
  name: 'StampRallyPresent',
  props: {
    item: {
      type: Object as PropType<IPrize>,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>
