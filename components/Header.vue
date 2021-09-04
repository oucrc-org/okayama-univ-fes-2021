<template>
  <h2 class="font-semibold w-3/4 pl-6 py-4 text-xl text-white tracking-widest rounded-r-xl" :class="colors">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: 'Header',
  props: {
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
