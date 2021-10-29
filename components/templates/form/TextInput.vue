<template>
  <div class="form-control">
    <label class="label" :for="id">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      class="input input-bordered"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      required
    >
  </div>
</template>

<script lang="ts">
export default {
  name: 'TextInput',
  props: {
    // idはnameを使い回す
    name: {
      type: String,
      required: true,
      default: ''
    },
    autocomplete: {
      type: String,
      required: false,
      default: 'off'
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    label: {
      type: String,
      required: true,
      default: 'ラベル'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }

  }
}
</script>

<style></style>
