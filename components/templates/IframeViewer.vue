<template>
  <div class="container max-w-screen-lg mt-10 mx-auto">
    <div class="px-5">
      <div class="relative overflow-hidden" style="padding-bottom: 56.25%">
        <iframe
          class="absolute h-full w-full"
          :src="src"
          :title="title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <client-only>
        <light-timeline :items="items" class="text-center" />
      </client-only>
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
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
