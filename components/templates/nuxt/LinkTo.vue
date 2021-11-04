<template>
  <a :href="to" :target="isBlank? '_blank':false">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    isBlank: {
      type: Boolean,
      default: false
    }
  }
}
</script>
