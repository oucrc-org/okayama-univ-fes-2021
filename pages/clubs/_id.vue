<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <div>
      <Header :title="club.name" colors="bg-themeColor text-white" />
      <img :src="club.cover.url" alt="">
    </div>
    <!--  -->
    <Headline title="何をしている部活なの？" colors="border-themeColor text-themeColor" />
    <div>
      <HTMLLeader :body="club.body" />
    </div>
    <!-- -->
    <Headline title="活動紹介映像" colors="border-themeColor text-themeColor" />
    <div>
      <iframe :src="watchToEmbed(club.youtubeUrl)" />
    </div>
    <!-- -->
    <Headline title="公式SNS" colors="border-themeColor text-themeColor" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import HTMLLeader from '~/components/templates/HTMLLeader.vue'
import Headline from '~/components/templates/Headline.vue'
import watchToEmbed from '~/assets/js/url/watch-to-embed'
import Club from '~/assets/js/type/club/club'

export default {
  components: { Headline, HTMLLeader, Header },
  async asyncData (context: Context) {
    const { app, params } = context
    const response = await app.$microcms.get({
      endpoint: `clubs/${params.id}`
    })
    return {
      club: new Club(response)
    }
  },
  data () {
    return {
      club: {
        type: Club,
        default: Club
      }
    }
  },
  methods: {
    watchToEmbed
  }
}
</script>

<style>

</style>
