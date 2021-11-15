<template>
  <div class="text-center mt-12 md:pl-3">
    <!--suppress HtmlUnknownTarget -->
    <a href="/quiz/form">
      <RoundedButton text="応募する →" class="border-themeColor bg-themeColor text-white" />
    </a>
  </div>
</template>

<script type="ts">
import Vue from 'vue'
import RoundedButton from '~/components/templates/parts/RoundedButton.vue'

export default Vue.extend({
  name: 'ApplyButton',
  components: {
    RoundedButton
  }
})
</script>
