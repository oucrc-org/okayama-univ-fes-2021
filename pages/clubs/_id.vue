<template>
  <div>
    {{ club }}
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  async asyncData (context: Context) {
    const { app, params, error } = context
    const response = await app.$microcms.get({
      endpoint: `clubs/${params.id}`
    }).catch(() => {
      error({ statusCode: 404, message: 'お探しの部活動・サークルが見つかりませんでした。' })
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
