<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer id="footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/layouts/Footer.vue'
import Navigation from '~/components/layouts/navigation/Navigation.vue'

export default Vue.extend({
  components: {
    Navigation,
    Footer
  }
})
</script>

<style scoped>
#footer {
  @apply bg-white mt-0 mb-0 pt-8 pb-20;
}
</style>
