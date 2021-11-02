<template>
  <div class="form-control">
    <label class="label" :for="id">{{ label }}</label>
    <div
      v-for="option in options"
      :id="id"
      :key="option.id"
      class="my-2 flex flex-row items-center"
    >
      <input
        :id="option.id"
        type="radio"
        class="radio border-themeColor checked:bg-themeColor"
        name="present_id"
        :value="option.id"
        :disabled="stampNumber < option.required_stamps"
        :checked="value === option.id"
        required
        @change="onChange(option.id.toString())"
      >
      <label
        :for="option.id"
        class="cursor-pointer label-text ml-2"
        :class="{'text-gray-400': stampNumber < option.required_stamps}"
      >
        <span>{{ option.name }}</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import { PropType } from 'vue'
import IOption from '~/assets/js/type/form/IOption'

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
    },
    value: {
      type: String,
      default: ''
    },
    onChange: {
      type: Function,
      default: () => {
      }
    }
  }
}
</script>
