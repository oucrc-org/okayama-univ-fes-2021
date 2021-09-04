<template>
  <div class="text-2xl p-3 border-b-4 mt-16 pb-3 w-4/5 sm:w-2/3 relative z-10" :class="colors">
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
