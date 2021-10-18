<template>
  <div>
    <img :src="source" :alt="title" class="max-h-screen">
    <dl class="text-center">
      <dt class="font-ms-mincho text-12pt">
        {{ title }}
      </dt>
      <dd class="font-ms-mincho text-12pt">
        {{ artist }}
      </dd>
      <dd class="font-ms-mincho text-10pt">
        {{ medium }}
      </dd>
      <dd v-if="this.$slots.default" class="font-ms-mincho text-10pt border-t-2 border-black pt-1">
        <slot />
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    medium: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.text-12pt {
  font-size: 1rem;
}

.text-10pt {
  font-size: 0.8333rem;
}
</style>
