<template>
  <div
    class="border-3 inline-block font-medium text-center text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
    :class="{'cursor-not-allowed': disabled}"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
