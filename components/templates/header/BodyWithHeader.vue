<template>
  <div class="container max-w-screen-xl mt-16 lg:mt-24 mx-auto relative">
    <div
      class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10 border-themeColor text-themeColor"
    >
      {{ title }}
    </div>
    <div class="container max-w-screen-lg mt-10 mx-auto">
      <div class="tracking-widest leading-6 px-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
