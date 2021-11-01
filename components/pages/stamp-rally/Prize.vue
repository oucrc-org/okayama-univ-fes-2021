<template>
  <div class="relative flex flex-col gap-y-2">
    <picture>
      <source :srcset="`${item.image_path}.webp`" type="image/webp">
      <img :src="`${item.image_path}.jpg`" :alt="item.name" class="object-cover rounded-lg bg-gray-500 h-40">
    </picture>

    <div class="text-xl font-bold w-10/12 sm:w-auto">
      {{ item.name }}
    </div>
    <div class="text-gray-700">
      抽選{{ item.stock }}名
    </div>
    <div class="absolute top-4 left-44 rounded-sm text-white text-xs bg-themeColor px-3 py-2">
      スタンプ{{ item.required_stamps }}コ
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
