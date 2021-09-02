<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <div>
      <Header :title="club.name" colors="bg-themeColor text-white" />
      <img :src="coverUrl" alt="">
    </div>
    <!--  -->
    <Headline title="何をしている部活なの？" colors="border-themeColor text-themeColor" />
    <div>
      <HTMLLeader :body="club.body" />
    </div>
    <!-- -->
    <Headline title="活動紹介映像" colors="border-themeColor text-themeColor" />
    <div>
      <iframe :src="watchToEmbed(club.youtube_url)" />
    </div>
    <!-- -->
    <div v-if="hasSNSUrl">
      <Headline title="公式SNS" colors="border-themeColor text-themeColor" />
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import HTMLLeader from '~/components/templates/HTMLLeader.vue'
import Headline from '~/components/templates/Headline.vue'
import watchToEmbed from '~/assets/js/url/watch-to-embed'
import { ClubData } from '~/assets/js/type/club/club-data'
import Club from '~/assets/js/type/club/club'

export default {
  components: { Headline, HTMLLeader, Header },
  async asyncData (context: Context) {
    const { app, params } = context
    const response: ClubData = await app.$microcms.get({
      endpoint: `clubs/${params.id}`
    })
    return {
      club: response
    }
  },
  data (): {
    club: ClubData
    } {
    return {
      club: new Club()
    }
  },
  computed: {
    hasSNSUrl () : boolean {
      return !(
        this.club.twitter_url == null &&
        this.club.facebook_url == null &&
        this.club.instagram_url == null &&
        this.club.line_url == null
      )
    },
    coverUrl () {
      return this.club.cover ? this.club.cover.url : null
    }
  },
  methods: {
    watchToEmbed
  }
}
</script>

<style>

</style>
