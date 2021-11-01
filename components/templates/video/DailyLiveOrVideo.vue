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

    <div class="flex flex-col gap-y-4 font-bold py-8">
      <div v-if="title">
        タイトル: {{ title }}
      </div>
      <div v-if="who">
        出演: {{ who }}
      </div>
      <div v-if="timeFrame">
        放送時間: {{ timeFrame }}
      </div>
      <div v-if="nextVideoDateString">
        次の放送: {{ nextVideoDateString }}に公開!
      </div>
    </div>
    <div v-if="isLive">
      <client-only>
        <OperationStageSchedule class="max-w-screen-md mx-auto" />
      </client-only>
    </div>
    <!-- TODO: ボタンデザイン -->
    <div class="text-center mt-8">
      <RoundButton v-if="isLive" :href="url" target="_blank" colors="bg-red-500">
        YouTubeでみる →
      </RoundButton>
      <RoundButton v-else href="https://www.youtube.com/channel/UCxznqY3mWr_EEQ-FDXA0IEA/videos" target="_blank">
        過去の動画を見る →
      </RoundButton>
    </div>
  </div>
</template>

<script lang="ts">
import RoundButton from '../parts/RoundButton.vue'
import getTodayVideoUrl from '~/assets/js/video/get-today-video-url'
import watchToEmbed from '~/assets/js/url/watch-to-embed'
import Header from '~/components/layouts/Header.vue'
import OperationStageSchedule from '~/components/pages/schedule/OperationStageSchedule1.vue'

export default {
  components: {
    Header,
    OperationStageSchedule,
    RoundButton
  },
  data () {
    const { url, isLive, title, who, timeFrame, nextVideoDateString } = getTodayVideoUrl()
    return { url, isLive, title, who, timeFrame, nextVideoDateString }
  },
  methods: {
    watchToEmbed
  }
}
</script>

<style>
</style>
