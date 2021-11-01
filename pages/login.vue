<template>
  <div class="container max-w-screen-lg mt-8 mx-auto">
    <VerticalTitle text="LOGIN" colors="text-gray-200" class="-z-10" />
    <Header title="ログイン" colors="bg-themeColor text-white" />
    <div class="flex flex-col gap-y-16">
      <div>
        <Headline title="注意事項" colors="border-themeColor text-themeColor" />
        <ul class="list-disc flex flex-col gap-y-3 ml-4 px-4">
          <li>スタンプラリーへの参加は岡山大学生のみならず、一般の方もご参加いただけます。</li>
          <li>プレゼント送付前にアカウント連携を解除された場合は参加資格が無効となります。</li>
          <li>応募はお一人につき1回までです。別アカウントからの複数応募が判明した場合、無効とさせていただく場合があります。</li>
          <li>本キャンペーンは、やむを得ない事情により中止または内容が変更となる場合がございますので、あらかじめご了承ください。</li>
        </ul>
      </div>

      <div class="flex flex-col gap-y-8 items-center text-center">
        <button id="button-login-google" @click="googleAuthenticate" />
        <LinkToPrivacyPolicy />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Headline from '@/components/links/Headline.vue'
import LinkToPrivacyPolicy from '@/components/links/LinkToPrivacyPolicy.vue'
import VerticalTitle from '@/components/layouts/VerticalTitle.vue'

export default {
  name: 'Login',
  components: {
    Headline,
    Header,
    LinkToPrivacyPolicy,
    VerticalTitle
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    googleAuthenticate () {
      if (!this.isLoading && process.client) {
        this.$auth.loginWith('google')
      }
      this.isLoading = true
    }
  }
}
</script>

<style scoped>
#button-login-google {
  background-image: url(@/assets/img/static/button_login_google_without_shadow.png);
  width: 194px;
  height: 43px;
  background-size: 194px 43px;
  @apply shadow-md transition-shadow duration-300 rounded-sm;
}

#button-login-google:hover {
  @apply shadow-lg;
}
</style>
