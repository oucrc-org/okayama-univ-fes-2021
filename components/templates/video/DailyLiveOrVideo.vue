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

    <div class="mt-6 text-left flex-col lg:flex-row-reverse">
      <div>
        <div class="alert alert-error mt-8">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <label>現在配信に問題が発生しています。詳しくは学祭実行委員会の公式Twitterをご確認ください</label>
          </div>
        </div>
        <h1 v-if="title" class="mb-5 text-4xl font-bold" :class="isLive ? 'text-red-500' : 'text-themeColor'">
          {{ title }}
        </h1>
        <p v-if="who" class="mb-2 text-gray-700 lg:text-lg">
          出演: <b class="ml-2">{{ who }}</b>
        </p>
        <p v-if="timeFrame" class="mb-5 text-gray-700 lg:text-lg">
          放送時間: <b class="ml-2">{{ timeFrame }}</b>
        </p>
        <div v-if="nextVideoDateString" class="mb-5 text-gray-700 lg:text-lg">
          次の放送: <b class="ml-2">{{ nextVideoDateString }}に公開!</b>
        </div>
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
    const {
      url,
      isLive,
      title,
      who,
      timeFrame,
      nextVideoDateString
    } = getTodayVideoUrl()
    return {
      url,
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
