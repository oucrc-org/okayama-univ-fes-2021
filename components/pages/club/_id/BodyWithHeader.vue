<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <Headline :title="title" colors="border-themeColor text-themeColor" />
    <div class="container max-w-screen-lg mt-10 mx-auto">
      <div class="tracking-widest leading-6 px-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '~/components/templates/Headline'

export default {
  components: { Headline },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
