<template>
  <div>
    <div class="card shadow-2xl lg:card-side">
      <div class="card-body inline-block">
        <div v-for="stamp in stamps" :key="stamp.id">
          <StampColumn
            :src="stamp.has_stamp ? stamp.image_path : require('@/assets/img/icon/grey-icon.jpg')"
            :alt="stamp.name"
            :name="stamp.has_stamp ? stamp.name : '????'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StampColumn from '~/components/templates/stamp/StampColumn.vue'

export default {
  components: { StampColumn },
  props: {
    stamps: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  }
}
</script>
