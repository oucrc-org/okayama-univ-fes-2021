<template>
  <!-- daisyUIのCSSで動いているためtabindexが必要 -->
  <!-- 詳細: https://daisyui.com/components/collapse -->
  <div tabindex="0" class="collapse collapse-plus">
    <div class="collapse-title p-3 items-center font-bold">
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
    label: { type: String, required: true }
  }
}
</script>

<style>
/* daisyUIの縦幅を調整 */
.collapse-title {
  min-height: auto;
}
.collapse-content {
  padding: 0px;
}
/* daisyUIのプラスマークを大きくする */
.collapse-title::after {
  font-weight: normal;
  line-height: 1rem;
  font-size: 2rem;
}
</style>
