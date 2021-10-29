<template>
  <!-- #96: 本来は:focusで開閉するが、:focusが外れてしまいリンクが機能しなくなる -->
  <!-- そのため、JSでclassを付けている。daisyUIのスタイルはtransitionのために必要 -->
  <!-- これにより、:focusが外れても閉じない -->
  <div :class="[{'collapse-open': isOpen},'collapse collapse-plus']">
    <div
      class="collapse-title items-center font-semibold tracking-widest text-gray-600 p-4 max-w-screen-lg mx-auto relative"
      @click="toggle"
    >
      {{ label }}
    </div>

    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SlideDown',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
})
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
