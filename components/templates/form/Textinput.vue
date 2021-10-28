<template>
  <div class="form-control">
    <label class="label" :for="id">{{ label }}</label
    ><input class="input input-bordered" :id="id" :name="id" type="text" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Textinput',
  props: {
    id: {
      type: String,
      required: true,
      default: 'ID'
    },
    label: {
      type: String,
      required: true,
      default: 'ラベル'
    },
    placeholder: {
      type: String,
      required: true,
      default: '入力してください。'
    }
  }
}
</script>

<style></style>
