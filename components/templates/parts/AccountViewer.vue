<template>
  <div>
    <div class="flex my-5">
      <img
        class="rounded-full h-22 w-22 lg:h-24 lg:w-24 ml-2 my-5 lg:m-5"
        :src="src"
        alt="表示に失敗しました"
      >
      <div class="lg:mx-4 my-5">
        <div class="text-gray-500 mx-3 my-2 lg:my-3">
          {{ role }}
        </div>
        <div class="text-2xl mx-3 my-2 lg:my-3">
          {{ name }}
        </div>
      </div>
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
    role: {
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
