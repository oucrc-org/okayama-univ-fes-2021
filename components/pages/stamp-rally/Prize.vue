<template>
  <div class="relative flex flex-col gap-y-2">
    <div class="bg-disabled-picture rounded-lg" :data-disabled="disabled">
      <picture>
        <source :srcset="`${item.image_path}.webp`" type="image/webp">
        <img :src="`${item.image_path}.jpg`" :alt="item.name" class="object-cover rounded-lg h-40" :style="disabled ? { filter: 'opacity(0.4)' } : {}">
      </picture>
      <div v-if="disabled" class="absolute top-5 left-2 badge bg-red-500 border-red-500 ml-2 inline-block">
        <span class="px-1 inline-block">スタンプ不足</span>
      </div>
    </div>

    <div class="text-xl font-bold w-10/12 sm:w-auto" :class="disabled ? ['text-gray-400'] : []">
      {{ item.name }}
    </div>
    <div class="text-gray-700">
      抽選{{ item.stock }}名
    </div>
    <div class="bg-disabled absolute top-4 left-44 rounded-sm" :data-disabled="disabled">
      <div class="rounded-sm text-white text-xs bg-themeColor px-3 py-2">
        スタンプ{{ item.required_stamps }}コ
      </div>
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
