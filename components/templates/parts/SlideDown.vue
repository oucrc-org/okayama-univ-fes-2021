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
  top: 0.75rem;
  right: 0.7rem;
  line-height: 1.5rem;
  padding-left: 0.35rem;
  color: white;
  font-weight: normal;
}
</style>
