<template>
  <div class="mb-8 mt-20">
    <div v-if="!$nuxt.$route.path.match('/clubs/*')">
      <h2 class="text-center text-3xl text-gray-800 font-medium tracking-wider">
        SHARE ON
      </h2>
      <div class="text-center w-full mt-14">
        <a href="#" class="text-lg border border-gray-300 inline-block rounded-full py-5 w-5/6 sm:w-96">
          <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" src="@/assets/img/icon/twitter.png" alt="Twitter">
          Twitter で シェア
        </a>
      </div>
      <div class="text-center w-full mt-5">
        <a href="#" class="text-lg border border-gray-300 inline-block rounded-full py-5 w-5/6 sm:w-96">
          <img
            class="inline-block text-gray-700 tracking-widest h-6 mr-5"
            src="@/assets/img/icon/facebook.png"
            alt="Facebook"
          >
          Facebook で シェア
        </a>
      </div>
      <div class="text-center w-full mt-5">
        <a href="#" class="text-lg border border-gray-300 inline-block rounded-full py-5 w-5/6 sm:w-96">
          <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" src="@/assets/img/icon/line.png" alt="LINE">
          LINE で シェア
        </a>
      </div>
    </div>

    <hr class="mt-16 mx-auto w-11/12">

    <p class="text-center mt-6 text-gray-400 tracking-widest text-sm">
      (c) 2021 岡山大学校友会
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    hiddenShare: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
