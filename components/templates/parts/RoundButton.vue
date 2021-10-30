<template>
  <a v-if="href" :href="href" :target="target" :class="[defaultClass, colors]"><slot /></a>
  <LinkTo
    v-else
    :to="to"
    :class="[defaultClass, colors]"
  >
    <slot />
  </LinkTo>
</template>

<script>
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
export default {
  components: { LinkTo },
  props: {
    to: {
      type: String,
      required: false,
      default: '#'
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    colors: {
      type: String,
      required: false,
      default: 'bg-themeColor'
    },
    target: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      defaultClass: ['border-3 border-white inline-block font-medium text-center text-white text-lg tracking-wider rounded-full py-3 px-8 transform transition duration-300 hover:scale-105']
    }
  }
}
</script>

<style>

</style>
