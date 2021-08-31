<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <div>
      <Header :title="club.name" colors="bg-themeColor text-white" />
      <img :src="club.cover.url" alt="">
    </div>
    <h1>Hello</h1>
    <div>
      <HTMLLeader :body="club.body" />
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Header from '~/components/templates/Header.vue'
import HTMLLeader from '~/components/templates/HTMLLeader.vue'

export default {
  components: { HTMLLeader, Header },
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
      club: {
        name: '',
        cover: '',
        body: ''
      }
    }
  }
}
</script>

<style>

</style>
