<template>
  <div class="text-center mt-12 md:pl-3">
    <RoundedButton text="応募する →" :disabled="true" class="border-blue-300 bg-blue-300 text-white" />
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
