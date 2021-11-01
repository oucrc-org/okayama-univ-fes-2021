<template>
  <div class="flex items-center">
    <div class="avatar">
      <div class="my-5 rounded-full w-24 h-24">
        <img :src="src" :alt="alt">
      </div>
    </div>
    <div class="ml-8 text-base font-medium">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
