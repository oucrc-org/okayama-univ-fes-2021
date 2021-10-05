<template>
  <div>
    <NuxtLink
      :to="to"
      class="inline-block font-medium rounded-xl text-white text-lg tracking-wider px-5 py-3 w-60"
      :class="{active: $nuxt.$route.path === to }"
    >
      {{ title }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.active {
  @apply bg-white text-themeColor
}
</style>
