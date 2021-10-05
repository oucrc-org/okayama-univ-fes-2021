<template>
  <div>
    <div class="flex my-5">
      <img
        class="rounded-full h-24 w-24 m-5"
        :src="src"
        alt="表示に失敗しました"
      >
      <div class="mx-3 my-5">
        <div class="text-gray-500 m-3">
          {{ role }}
        </div>
        <div class="text-2xl m-3">
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
