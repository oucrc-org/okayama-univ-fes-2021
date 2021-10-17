<template>
  <div>
    <LinkTo
      :to="to"
      class="inline-block font-medium rounded-xl text-white text-lg tracking-wider px-5 py-3 w-60"
      :class="{active: $nuxt.$route.path === to }"
    >
      {{ title }}
    </LinkTo>
  </div>
</template>

<script lang="ts">
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
export default {
  components: { LinkTo },
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
