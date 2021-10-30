<template>
  <div class="form-control">
    <label class="label" :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      class="input input-bordered"
      :class="readonly ? 'bg-gray-200 cursor-not-allowed' : ''"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :readonly="readonly"
      required
      @input="onChange($event.target.value)"
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
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style></style>
