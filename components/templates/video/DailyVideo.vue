<template>
  <div>
    <div v-if="url" class="relative overflow-hidden" style="padding-bottom: 56.25%">
      <iframe
        class="absolute h-full w-full"
        :src="watchToEmbed(url)"
        title="学祭2021 パフォーマンス"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div v-else>
      開始までしばらくお待ちください。
    </div>
    <div class="text-center font-bold py-4">
      <div v-if="nextVideoDateString">
        次の動画は{{ nextVideoDateString }}に公開!
      </div>
      <div v-else>
        これで最後の動画です!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import getTodayVideoUrl from '~/assets/js/video/get-today-video-url'
import watchToEmbed from '~/assets/js/url/watch-to-embed'

export default {
  name: 'DailyVideo',
  data () {
    const { url, nextVideoDateString } = getTodayVideoUrl()
    return { url, nextVideoDateString }
  },
  methods: {
    watchToEmbed
  }
}
</script>

<style>
</style>
