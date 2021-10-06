<template>
  <img class="rounded-xl bg-gray-500" :src="image.url" :width="image.width" :height="image.height">
</template>
<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import { IWork } from '~/assets/js/type/IWork'
export default Vue.extend({
  name: 'OucrcWorkImage',
  props: {
    image: {
      type: Object as PropType<IWork['cover']>,
      required: true
    }
  }
})
</script>
