<template>
  <!-- daisyUIのCSSで動いているためtabindexが必要 -->
  <!-- 詳細: https://daisyui.com/components/collapse -->
  <div tabindex="0" class="collapse collapse-plus">
    <div
      class="collapse-title items-center font-semibold tracking-widest text-gray-600 p-4 max-w-screen-lg mx-auto relative"
    >
      {{ label }}
    </div>

    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SlideDown',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* daisyUIの縦幅を調整 */
.collapse-title {
  min-height: auto;
}

.collapse:focus:not(.collapse-close) .collapse-content {
  padding: 0px;
  padding-bottom: 0px;
}

/* daisyUIのプラスマークを大きくする */
.collapse-plus .collapse-title:after {
  font-size: 1.5rem;
  background: #0171C5;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  top: 1rem;
  right: 1rem;
  line-height: 1.5rem;
  padding-left: 0.35rem;
  color: white;
  font-weight: normal;
}
</style>
