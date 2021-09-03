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
      <div v-if="club.twitter_url != null">
        <a :href="club.twitter_url">
          <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" src="@/assets/img/twitter.png" alt="Twitter">
        </a>
      </div>
      <div v-if="club.facebook_url != null">
        <a :href="club.facebook_url">
          <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" src="@/assets/img/facebook.png" alt="Facebook">
        </a>
      </div>
      <div v-if="club.instagram_url != null">
        <a :href="club.instagram_url">
          <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" src="@/assets/img/instagram.png" alt="LINE">
        </a>
      </div>
      <div v-if="club.line_url != null">
        <a :href="club.line_url">
          <img class="inline-block text-gray-700 tracking-widest h-6 mr-5" src="@/assets/img/line.png" alt="LINE">
        </a>
      </div>
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
      // @ts-ignore
      const club = this.club
      return !(
        club.twitter_url == null &&
        club.facebook_url == null &&
        club.instagram_url == null &&
        club.line_url == null
      )
    },
    coverUrl () : String {
      // @ts-ignore
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
