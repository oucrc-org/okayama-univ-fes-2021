<template>
  <div class="text-center mt-12 md:pl-3">
    <div class="alert">
      <div class="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#0071C5"
          class="flex-shrink-0 w-6 h-6 mx-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <label>
          <h4>プレゼント応募は、<b>11月22日（月）23:59</b> に終了します。</h4>
        </label>
      </div>
    </div>

    <div class="text-center mt-12">
      <div>
        <RoundedButton text="応募する →" class="border-blue-200 bg-blue-200 text-white cursor-not-allowed" />
      </div>
    </div>
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
