<template>
  <div>
    <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" :src="src" :alt="alt">
<!--    <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" src="@/assets/img/twitter.png" alt="Twitter">-->
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>
