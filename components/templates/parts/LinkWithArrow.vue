<template>
  <div>
    <LinkTo
      :to="to"
      class="flex justify-between text-base p-3"
      :class="{active: $nuxt.$route.path === to }"
    >
      <b>{{ title }}</b>
      <i><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg></i>
    </LinkTo>
  </div>
</template>

<script lang="ts">
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
export default {
  name: 'LinkWithArror',
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
