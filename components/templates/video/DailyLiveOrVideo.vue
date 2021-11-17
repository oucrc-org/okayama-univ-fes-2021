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
        :src="embed"
        title="学祭2021 パフォーマンス"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <div class="mt-6 text-left flex-col lg:flex-row-reverse">
      <div>
        <h1 v-if="title" class="mb-5 text-4xl font-bold mt-20" :class="isLive ? 'text-red-500' : 'text-themeColor'">
          {{ title }}
        </h1>
        <p v-if="who" class="mb-2 text-gray-700 lg:text-lg">
          出演: <b class="ml-2">{{ who }}</b>
        </p>
        <p v-if="timeFrame" class="mb-5 text-gray-700 lg:text-lg">
          放送時間: <b class="ml-2">{{ timeFrame }}</b>
        </p>
        <!--<div v-if="nextVideoDateString" class="mb-5 text-gray-700 lg:text-lg">-->
        <!--  次の放送: <b class="ml-2">{{ nextVideoDateString }}に公開!</b>-->
        <!--</div>-->
      </div>
    </div>

    <div class="alert mb-4 mt-8">
      <div class="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#2196f3"
          class="flex-shrink-0 w-6 h-6 mx-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <label>
          タイムスケジュールは変更されることがあります。再読み込みで最新のタイムスケジュールがご覧いただけます。
        </label>
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
import OperationStageSchedule from '~/components/pages/schedule/OperationStageSchedule2.vue'

export default {
  components: {
    Header,
    OperationStageSchedule,
    RoundButton
  },
  data () {
    const {
      url,
      embed,
      isLive,
      title,
      who,
      timeFrame,
      nextVideoDateString
    } = getTodayVideoUrl()
    return {
      url,
      embed,
      isLive,
      title,
      who,
      timeFrame,
      nextVideoDateString
    }
  },
  methods: {
    watchToEmbed
  }
}
</script>

<style>
</style>
