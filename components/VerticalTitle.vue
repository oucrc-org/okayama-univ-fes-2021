<template>
  <div class="absolute right-2 top-8 h-0 w-0 transform rotate-90 z-0" :class="colors">
    <span class="font-black text-7xl tracking-wider">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'VerticalTitle',
  props: {
    text: {
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
