<template>
  <div class="form-control">
    <label class="label" :for="id">{{ label }}</label>
    <select :id="id" class="select select-bordered w-full">
      <option disabled selected>
        選択してください
      </option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        :disabled="stampNumber < option.required_stamps"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import { PropType } from 'vue'
import { IOption } from '~/assets/js/type/form/IOption'

export default {
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    stampNumber: {
      type: Number,
      default: 0
    }
  }
}
</script>
