<template>
  <div>
    <div class="bg-themeColor fixed cursor-pointer rounded-l-full drop-shadow top-3 right-0 h-12 w-20 z-50" @click="isOpen = !isOpen">
      <span class="line line_01 navbar top-4" :class="{'navbar_transform_1': isOpen}" />
      <span class="line line_02 navbar top-6" :class="{'navbar_transform_2': isOpen}" />
      <span class="line line_03 navbar top-8" :class="{'navbar_transform_3': isOpen}" />
    </div>
    <img class="h-screen w-screen object-cover" src="@/assets/img/hero.jpg" alt="岡山大学祭">
    <div class="container max-w-screen-xl mt-24 mx-auto relative">
      <Header title="今年の学祭について" colors="bg-themeColor text-white" />
      <VerticalTitle text="ABOUT" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-14 mx-auto">
        <div class="w-4/5 tracking-widest leading-6 px-4">
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </div>
      </div>
    </div>

    <canvas class="waveCanvas mt-4" />
    <div class="bg-themeColor">
      <div class="container max-w-screen-xl pt-6 mx-auto relative">
        <Header title="現在のピックアップ" colors="bg-white text-themeColor" />
        <VerticalTitle text="PICKUP" colors="text-themeLight" />
        <CenterTitle text="写真部 学祭展覧会" colors="border-white text-white" />
        <div class="bg-white text-center mt-16 mx-auto h-48 sm:h-96 w-4/5 sm:w-2/3 rounded-3xl relative z-10">
          画像
        </div>
        <div class="text-center pb-3 mt-12">
          <a href="#" class="border-b-2 pb-2 sm:text-lg text-white">
            その他の団体企画はこちら
          </a>
        </div>
      </div>
    </div>
    <canvas class="waveCanvas transform rotate-180" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CenterTitle from '@/components/CenterTitle.vue'
import Header from '@/components/Header.vue'
import VerticalTitle from '@/components/VerticalTitle.vue'

export default Vue.extend({
  components: {
    CenterTitle,
    Header,
    VerticalTitle
  },
  data () {
    return {
      isOpen: false
    }
  },
  head () {
    return {
      script: [
        {
          src: 'js/waveCanvas.js'
        }
      ]
    }
  },
  mounted () {
    init()
  }
})
</script>

<style>
.navbar {
  @apply absolute bg-white left-6 h-0.5 w-5 transition duration-300 ease-in-out
}

.navbar_transform_1 {
  @apply transform translate-y-2 rotate-45
}

.navbar_transform_2 {
  @apply hidden
}

.navbar_transform_3 {
  @apply transform -translate-y-2 -rotate-45
}
</style>
