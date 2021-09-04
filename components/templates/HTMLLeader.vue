<template>
  <div class="html-leader">
    <span :class="$style['html-leader']" v-html="body" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

<style module>
.html-leader img {
  @apply block mx-auto my-5 w-full
}
.html-leader h1 {
  @apply text-2xl
}
.html-leader h2 {
  @apply text-xl
}
.html-leader h3 {
  @apply text-lg
}
.html-leader h4 {
  @apply text-base
}
.html-leader h5 {
  @apply text-sm
}
.html-leader h6 {
  @apply text-xs
}
.html-leader p {
}
.html-leader code {
  @apply overflow-scroll my-8 px-6 py-4 rounded-2xl
}
.html-leader p code {
  @apply mx-1 my-0 px-2 py-1 rounded text-base
}
.html-leader blockquote {
  @apply p-2 mb-4 border-l-8 rounded pl-4
}
.html-leader blockquote > p {
  @apply mb-0
}
.html-leader ol {
  @apply list-decimal p-2 px-6
}
.html-leader ul {
  @apply list-disc p-2 px-6
}
.html-leader a {
  line-break: anywhere;
  @apply text-blue-600
}
.html-leader iframe {
  @apply block m-auto w-full
}
</style>
