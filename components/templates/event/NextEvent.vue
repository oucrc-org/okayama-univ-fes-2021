<template>
  <div v-if="time && name" class="hero bg-base-200 pb-4 pt-10 sm:py-10">
    <div class="max-w-screen-lg px-2 sm:px-0">
      <LinkTo to="/live" class="flex-col hero-content lg:flex-row-reverse">
        <picture>
          <source v-if="webp" :srcset="webp" type="image/webp">
          <img
            v-if="jpg"
            :src="jpg"
            class="shadow-xl sm:max-w-lg lg:ml-8"
            :alt="name + 'の画像'"
          >
        </picture>
        <div>
          <h1 class="mb-6 mt-6 lg:mt-0 text-3xl lg:text-5xl font-bold">
            次のイベント
          </h1>
          <p class="mb-2 font-bold text-2xl lg:text-3xl text-accentColor">
            {{ time }}
          </p>
          <p class="mb-5 text-lg lg:text-xl text-gray-700">
            {{ name }}
          </p>
          <LinkTo
            to="/live"
            class="border-3 border-themeColor bg-themeColor inline-block font-medium text-center text-white text-lg mt-4 tracking-wider rounded-full w-56 py-3 transform transition duration-300 hover:scale-105"
          >
            見に行く →
          </LinkTo>
        </div>
      </LinkTo>
    </div>
  </div>
</template>

<script>
import getNextEvent from '~/assets/js/event/get-next-event'
export default {
  data () {
    const { time, name, jpg, webp } = getNextEvent()
    return {
      time,
      name,
      webp,
      jpg
    }
  }
}
</script>

<style>

</style>
