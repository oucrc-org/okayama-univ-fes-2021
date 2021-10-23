<template>
  <div class="m-4">
    <slot />
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
      <dd v-if="this.$slots.caption" class="font-ms-mincho text-10pt border-t-2 border-black pt-1">
        <slot name="caption" />
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {

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
