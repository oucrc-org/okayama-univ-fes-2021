<template>
  <div>
    {{ club }}
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  async asyncData (context: Context) {
    const { app, params } = context
    const response = await app.$microcms.get({
      endpoint: `clubs/${params.id}`
    })
    return {
      club: response
    }
  },
  data () {
    return {
      club: []
    }
  }
}
</script>

<style>

</style>
