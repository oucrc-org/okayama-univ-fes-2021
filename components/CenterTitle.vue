<template>
  <div class="text-center text-3xl border-b-4 mt-16 mx-auto pb-3 w-4/5 sm:w-2/3 relative z-10" :class="colors">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'CenterTitle',
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
