<template>
  <div class="text-center py-6">
    <button :disabled="disabled" class="btn btn-lg btn-info" type="submit">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SubmitButton',
  props: {
    label: {
      type: String,
      required: true,
      default: 'ラベル'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style></style>
