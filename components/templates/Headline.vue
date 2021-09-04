<template>
  <div class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10" :class="colors">
    {{ title }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    colors: {
      type: String,
      default: null
    }
  }
}
</script>
