<template>
  <div class="flex items-center">
    <div class="avatar">
      <div class="my-3 lg:ml-4 rounded-full w-20 h-20">
        <img :src="src" :alt="alt">
      </div>
    </div>
    <div class="ml-6 lg:ml-10 text-lg font-medium">
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
