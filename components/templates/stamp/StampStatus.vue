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
import PropType from 'vue'
import StampColumn from '~/components/templates/stamp/StampColumn.vue'
import IStamp from '~/assets/js/type/stamp/IStamp'

export default {
  components: { StampColumn },
  props: {
    stamps: {
      type: Array as PropType<IStamp[]>,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  }
}
</script>
