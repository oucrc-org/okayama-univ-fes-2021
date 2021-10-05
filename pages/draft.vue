<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header :title="club.name" colors="bg-themeColor text-white" />
      <VerticalTitle text="ABOUT" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-14 mx-auto">
        <div class="w-4/5 tracking-widest leading-6 px-4">
          <img class="rounded-xl" :src="coverUrl" alt="団体画像">
        </div>
      </div>
    </div>

    <!-- 何している部活なの？ -->
    <HTMLLeader :body="club.body" class="px-6" />

    <!-- 活動紹介映像 -->
    <!--    <BodyWithHeader title="活動紹介映像">-->
    <!--      <div :class="$style['introduction_club_movie']">-->
    <!--        <iframe :src="watchToEmbed(club.youtube_url)" allowfullscreen />-->
    <!--      </div>-->
    <!--    </BodyWithHeader>-->

    <!-- 公式SNS -->
    <div v-if="hasSNSUrl">
      <BodyWithHeader title="公式SNS">
        <div class="px-6">
          <div class="grid grid-cols-4">
            <!-- Twitter -->
            <div v-if="club.twitter_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.twitter_url">
                <img
                  class="inline-block text-gray-700 tracking-widest h-6"
                  src="~/assets/img/icon/twitter.png"
                  alt="Twitter"
                >
              </a>
            </div>

            <!-- Facebook -->
            <div v-if="club.facebook_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.facebook_url">
                <img
                  class="inline-block text-gray-700 tracking-widest h-6"
                  src="~/assets/img/icon/facebook.png"
                  alt="Facebook"
                >
              </a>
            </div>

            <!-- Instagram -->
            <div v-if="club.instagram_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.instagram_url">
                <img class="inline-block text-gray-700 tracking-widest h-6" src="~/assets/img/icon/instagram.png" alt="LINE">
              </a>
            </div>

            <!-- LINE -->
            <div v-if="club.line_url != null" class="mx-auto border-solid border-2 p-4 rounded-full">
              <a :href="club.line_url">
                <img class="inline-block text-gray-700 tracking-widest h-6" src="~/assets/img/icon/line.png" alt="LINE">
              </a>
            </div>
          </div>
        </div>
      </BodyWithHeader>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/layouts/Header.vue'
import HTMLLeader from '~/components/templates/html/HTMLLeader.vue'
import watchToEmbed from '~/assets/js/url/watch-to-embed'
import Club from '~/assets/js/type/club/club'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'

export default Vue.extend({
  components: {
    BodyWithHeader,
    HTMLLeader,
    Header,
    VerticalTitle
  },
  data () {
    return {
      club: new Club()
    }
  },
  computed: {
    hasSNSUrl (): boolean {
      // @ts-ignore
      const club = this.club
      return !(
        club.twitter_url == null &&
        club.facebook_url == null &&
        club.instagram_url == null &&
        club.line_url == null
      )
    },
    coverUrl (): String {
      // @ts-ignore
      return this.club.cover ? this.club.cover.url : null
    }
  },
  async created () {
    const query = this.$route.query
    if (!query.id) {
      return
    }
    const uri = !query.draftKey ? `https://oufes2021.microcms.io/api/v1/clubs/${query.id}` : `https://oufes2021.microcms.io/api/v1/clubs/${query.id}?draftKey=${query.draftKey}`
    const { data }: { data: Club } = await this.$axios.get(
      uri,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    this.club = data
  },
  methods: {
    watchToEmbed
  }
})
</script>

<style module>
/*.introduction_club_movie {*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 0;*/
/*  padding-top: 75%;*/
/*}*/

/*.introduction_club_movie iframe {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/

h1 {
  @apply border-themeColor text-themeColor text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative -left-6 z-10
}

h2, h3, h4, h5 {
  @apply mb-4 mt-8
}

</style>
