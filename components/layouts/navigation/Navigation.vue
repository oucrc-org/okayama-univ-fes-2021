<template>
  <div>
    <div
      class="fixed right-0 top-0 bg-themeColor h-full w-full sm:w-96 px-5 pt-12 z-40 transition-all duration-500"
      :class="{ 'transform translate-x-full': !isOpen }"
    >
      <NavigateColumn to="/" title="ホーム" @click.native="isOpen = !isOpen" />

      <NavigateColumn to="/president-message" title="学長のメッセージ" @click.native="isOpen = !isOpen" />

      <NavigateColumn to="/operation-message" title="運営団体のメッセージ" @click.native="isOpen = !isOpen" />

      <NavigateColumn to="/live" title="ライブ配信" @click.native="isOpen = !isOpen" />

      <NavigateColumn to="/presentation" title="団体企画" @click.native="isOpen = !isOpen" />

      <NavigateColumn to="/clubs" title="部活動・サークル紹介" @click.native="isOpen = !isOpen" />

      <NavigateColumn to="/stamp-rally" title="スタンプラリー" @click.native="isOpen = !isOpen" />

      <div class="absolute bottom-5 bg-white h-10 w-52 rounded-full">
        <span class="inline-block font-medium text-xs text-themeColor tracking-wider mt-3 ml-5">SHARE</span>
        <div class="absolute inline-block right-5 top-1.5">
          <a :href="'https://twitter.com/intent/tweet?url=' + shareUrl + '&hashtags=岡山大学祭2021'" target="_blank" class="mr-2">
            <img class="inline-block h-6" src="@/assets/img/nav/nav_twitter.png" alt="Twitter">
          </a>
          <a :href="'http://www.facebook.com/share.php?u=' + shareUrl" target="_blank" class="mr-2">
            <img class="inline-block h-6" src="@/assets/img/nav/nav_facebook.png" alt="Facebook">
          </a>
          <a :href="'http://line.me/R/msg/text/?' + shareUrl" target="_blank">
            <img class="inline-block h-6" src="@/assets/img/nav/nav_line.png" alt="LINE">
          </a>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 origin-bottom-right transform rotate-90 -translate-x-30 -translate-y-4" style="width: 100vh">
        <p class="font-bold text-right text-themeLight text-6xl tracking-wider pt-12">
          岡山大学祭 2021
        </p>
        <p class="font-bold text-right text-themeLight text-3xl tracking-wider pt-1">
          〜笑顔満祭岡大祭〜
        </p>
      </div>
    </div>

    <div
      class="fixed cursor-pointer rounded-l-full drop-shadow top-3 right-0 h-12 w-20 z-50"
      :class="isOpen ? 'bg-white' : 'bg-themeColor'"
      @click="isOpen = !isOpen"
    >
      <span class="line navigation-bar top-4" :class="{ 'navigation-bar_transform_1': isOpen }" />
      <span class="line navigation-bar top-6" :class="{ 'navigation-bar_transform_2': isOpen }" />
      <span class="line navigation-bar top-8" :class="{ 'navigation-bar_transform_3': isOpen }" />
    </div>
  </div>
</template>

<script>
import NavigateColumn from './NavigateColumn'
export default {
  name: 'Navigation',
  components: { NavigateColumn },
  data () {
    return {
      shareUrl: 'https://oufes2021.com' + $nuxt.$route.path,
      isOpen: false
    }
  }
}
</script>

<style scoped>
.navigation-bar {
  @apply absolute bg-white left-6 h-0.5 w-5 transition duration-300 ease-in-out;
}

.navigation-bar_transform_1 {
  @apply bg-gray-500 transform translate-y-2 rotate-45;
}

.navigation-bar_transform_2 {
  @apply hidden;
}

.navigation-bar_transform_3 {
  @apply bg-gray-500 transform -translate-y-2 -rotate-45;
}

.active {
  @apply bg-white text-themeColor;
}
</style>
