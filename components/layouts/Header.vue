<template>
  <h2 class="font-semibold w-3/4 pl-6 py-4 text-xl text-white tracking-widest rounded-r-xl" :class="colors">
    {{ title }}
    <img v-if="iconPath" class="inline-block h-4 float-right mr-6 mt-1.5" :src="iconPath" alt="Live">
  </h2>
</template>

<script>
export default {
  name: 'Header',
  props: {
    iconPath: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    colors: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
