<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative">
    <div class="my-5">
      <Header title="ライブ配信" colors="bg-red-500 text-white" :icon-path="stream_src" />
      <VerticalTitle text="LIVE" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="プロライブ">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/gwjxlonn43o"
        title="プロライブ"
      />
      <client-only>
        <div class="my-5">
          <ProConcertSchedule />
        </div>
      </client-only>
      <div class="text-center mt-6">
        <LinkTo to="https://www.youtube-nocookie.com/embed/gwjxlonn43o" :is-blank="true">
          <RoundedButton text="YouTubeで見る →" class="border-red-500 bg-red-500 text-white" />
        </LinkTo>
      </div>
    </BodyWithHeader>

    <BodyWithHeader title="校友会団体ステージ企画">
      <!-- TODO: 動画を差し替える -->
      <!-- <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU"
        title="校友会団体ステージ企画"
      /> -->
      <div class="alert mb-8 mt-6">
        <div class="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0071C5" class="w-6 h-6 mx-2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <label>こちらの放送は、<span class="text-accentColor">11月16日（火）18:00〜</span> 開始します</label>
        </div>
      </div>
      <client-only>
        <div class="my-5">
          <OperationStageSchedule1 />
        </div>
      </client-only>
      <!--      <div class="text-center mt-6">-->
      <!--        <LinkTo to="https://www.youtube-nocookie.com/embed/gwjxlonn43o" :is-blank="true">-->
      <!--          <RoundedButton text="YouTubeで見る →" class="border-red-500 bg-red-500 text-white" />-->
      <!--        </LinkTo>-->
      <!--      </div>-->

      <div class="h-16" />

      <!-- TODO: 動画を差し替える -->
      <!-- <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU"
        title="校友会団体ステージ企画"
      /> -->
      <div class="alert mb-8 mt-6">
        <div class="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0071C5" class="w-6 h-6 mx-2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <label>こちらの放送は、<span class="text-accentColor">11月17日（水）18:00〜</span> 開始します</label>
        </div>
      </div>
      <client-only>
        <div class="my-5">
          <OperationStageSchedule2 />
        </div>
      </client-only>
      <!--      <div class="text-center mt-6">-->
      <!--        <LinkTo to="https://www.youtube-nocookie.com/embed/gwjxlonn43o?controls=0" :is-blank="true">-->
      <!--          <RoundedButton text="YouTubeで見る →" class="border-red-500 bg-red-500 text-white" />-->
      <!--        </LinkTo>-->
      <!--      </div>-->
    </BodyWithHeader>
  </div>
</template>

<script>
import BodyWithHeader from '../../components/templates/header/BodyWithHeader'
import VerticalTitle from '../../components/layouts/VerticalTitle'
import Header from '../../components/layouts/Header'
import IframeViewer from '../../components/templates/html/IframeViewer'
import OperationStageSchedule1 from '../../components/pages/schedule/OperationStageSchedule1'
import OperationStageSchedule2 from '../../components/pages/schedule/OperationStageSchedule2'
import ProConcertSchedule from '../../components/pages/schedule/ProConcertSchedule'
import Stream from '../../assets/img/header/streaming.png'
import LinkTo from '@/components/templates/nuxt/LinkTo'
import RoundedButton from '@/components/templates/parts/RoundedButton'

export default {
  components: {
    ProConcertSchedule,
    OperationStageSchedule1,
    OperationStageSchedule2,
    IframeViewer,
    BodyWithHeader,
    Header,
    VerticalTitle,
    RoundedButton,
    LinkTo
  },
  data () {
    return {
      stream_src: Stream
    }
  }
}
</script>
