<template>
  <div class="w-full p-3 flex flex-col md:flex-row justify-between items-center text-3xl tracking-widest">
    <h2 class="font-semibold text-white">
      {{ title }}
    </h2>
    <span class="font-black text-gray-300">{{ titleEnglish }}</span>
  </div>
</template>

<script>
export default {
  name: 'OucrcHeader',
  props: {
    title: {
      type: String,
      default: null
    },
    titleEnglish: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
