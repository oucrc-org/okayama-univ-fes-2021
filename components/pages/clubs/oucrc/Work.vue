<template>
  <div>
    <a class="cursor-pointer flex flex-col gap-y-3 p-3 shadow-xl rounded-xl" @click="showModal = true">
      <img v-if="work.cover" class="object-cover rounded-xl bg-gray-500" :src="work.cover.url" :width="work.cover.width" :height="work.cover.height">
      <div class="text-xl font-bold">
        {{ work.title }}
      </div>
      <div v-if="work.creator" class="text-gray-700">
        {{ work.creator }}作
      </div>
    </a>
    <div v-if="showModal" @close="showModal = false">
      <!-- 半透明なオーバーレイを全面表示する。クリックで閉じる -->
      <div class="oucrc-works-overlay fixed top-0 left-0 z-50 w-screen h-screen bg-screen flex justify-center items-center" @click="showModal = false">
        <!-- スマホのために高さは画面と揃え、中身はスクロールさせる -->
        <div class="max-h-screen overflow-y-scroll md:max-w-lg p-6 flex flex-col gap-y-6 bg-white rounded-xl shadow-xl">
          <img v-if="work.cover" class="object-cover rounded-xl bg-gray-500" :src="work.cover.url" :width="work.cover.width" :height="work.cover.height">
          <div class="text-xl font-bold">
            {{ work.title }}
          </div>
          <div v-if="work.creator" class="text-gray-700">
            {{ work.creator }}作
          </div>
          <div>{{ work.body }}</div>
          <a class="curcor-pointer mx-auto block p-3 rounded-lg bg-themeColor text-white font-bold" @click="showModal = false">
            閉じる
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import { IWork } from '~/assets/js/type/IWork'

export default Vue.extend({
  name: 'OucrcWork',
  props: {
    work: {
      type: Object as PropType<IWork>,
      required: true
    }
  },
  data () {
    return {
      showModal: false
    }
  }
})
</script>
<style scoped>
.oucrc-works-overlay{
  background-color: rgba(0,0,0,0.3);
}
</style>
