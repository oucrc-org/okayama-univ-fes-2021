<template>
  <div class="container max-w-screen-lg mt-10 mx-auto">
    <div class="px-2">
      <div class="relative overflow-hidden" style="padding-bottom: 56.25%">
        <iframe
          class="absolute h-full w-full"
          :src="watchToEmbed(src)"
          :title="title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import watchToEmbed from '~/assets/js/url/watch-to-embed'

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
  },
  methods: {
    watchToEmbed
  }
}
</script>
