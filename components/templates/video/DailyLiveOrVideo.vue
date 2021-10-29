<template>
  <div>
    <div class="text-white mb-6">
      <Header
        v-if="isLive"
        title="ライブ配信"
        colors="bg-red-500"
        :icon-path="require('@/assets/img/header/streaming.png')"
      />
      <Header
        v-else
        title="本日の動画"
        colors="bg-themeColor"
      />
    </div>
    <div v-if="url" class="relative overflow-hidden" style="padding-bottom: 56.25%">
      <iframe
        class="absolute h-full w-full"
        :src="watchToEmbed(url)"
        title="学祭2021 パフォーマンス"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div v-if="isLive">
      <client-only>
        <OperationStageSchedule class="max-w-screen-md mx-auto" />
      </client-only>
    </div>
    <div v-else class="text-center font-bold py-4">
      <div v-if="nextVideoDateString">
        次の動画は{{ nextVideoDateString }}に公開!
      </div>
      <div v-else>
        これで最後の動画です!
      </div>
    </div>

    <!-- TODO: ボタンデザイン -->
    <a href="https://www.youtube.com/channel/UCxznqY3mWr_EEQ-FDXA0IEA/videos" target="_blank">過去の動画を見る</a>
  </div>
</template>

<script lang="ts">
import getTodayVideoUrl from '~/assets/js/video/get-today-video-url'
import watchToEmbed from '~/assets/js/url/watch-to-embed'
import Header from '~/components/layouts/Header.vue'
import OperationStageSchedule from '~/components/pages/schedule/OperationStageSchedule.vue'

export default {
  components: { Header, OperationStageSchedule },
  data () {
    const { url, isLive, timeFrame, nextVideoDateString } = getTodayVideoUrl()
    return { url, isLive, timeFrame, nextVideoDateString }
  },
  methods: {
    watchToEmbed
  }
}
</script>

<style>
</style>
