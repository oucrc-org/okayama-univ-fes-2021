<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative">
    <div class="my-5">
      <Header title="ライブ配信" colors="bg-red-500 text-white" :icon-path="stream_src" />
      <VerticalTitle text="LIVE" colors="text-gray-200" />
    </div>

    <!--    <BodyWithHeader title="プロライブ">-->
    <!--      <IframeViewer-->
    <!--        src="https://www.youtube-nocookie.com/embed/gwjxlonn43o"-->
    <!--        title="プロライブ"-->
    <!--      />-->
    <!--      <client-only>-->
    <!--        <div class="my-5">-->
    <!--          <ProConcertSchedule />-->
    <!--        </div>-->
    <!--      </client-only>-->
    <!--      <div class="text-center mt-6">-->
    <!--        <LinkTo to="https://www.youtube-nocookie.com/embed/gwjxlonn43o" :is-blank="true">-->
    <!--          <RoundedButton text="YouTubeで見る →" class="border-red-500 bg-red-500 text-white" />-->
    <!--        </LinkTo>-->
    <!--      </div>-->
    <!--    </BodyWithHeader>-->

    <BodyWithHeader title="校友会団体ステージ企画（1日目）">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/_M-uGrHpTPw"
        title="校友会団体ステージ企画"
      />
      <div class="alert alert-info mb-8 mt-6">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#0071C5"
            class="flex-shrink-0 w-6 h-6 mx-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <label class="mx-3">ステージ企画のご視聴ありがとうございました。来年度の学祭のため、アンケートにご協力ください！</label>
        </div>
        <div class="flex-none">
          <a
            href="https://forms.gle/DvEy927YYvKypoxC6"
            target="_blank"
            class="btn btn-sm btn-primary bg-themeColor border-themeColor hover:bg-themeLight hover:border-themeLight tracking-widest"
          >
            回答
          </a>
        </div>
      </div>
      <client-only>
        <div class="my-5">
          <OperationStageSchedule1 />
        </div>
      </client-only>
      <div class="text-center mt-6">
        <LinkTo to="https://www.youtube.com/watch?v=_M-uGrHpTPw" :is-blank="true">
          <RoundedButton text="YouTubeで見る →" class="border-red-500 bg-red-500 text-white" />
        </LinkTo>
      </div>
    </BodyWithHeader>

    <BodyWithHeader title="校友会団体ステージ企画（2日目）">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/bFreLCr5naI"
        title="校友会団体ステージ企画"
      />
      <div class="alert alert-info mb-5 mt-6">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#0071C5"
            class="flex-shrink-0 w-6 h-6 mx-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <label class="mx-3">ステージ企画のご視聴ありがとうございました。来年度の学祭のため、アンケートにご協力ください！</label>
        </div>
        <div class="flex-none">
          <a
            href="https://forms.gle/DvEy927YYvKypoxC6"
            target="_blank"
            class="btn btn-sm btn-primary bg-themeColor border-themeColor hover:bg-themeLight hover:border-themeLight tracking-widest"
          >
            回答
          </a>
        </div>
      </div>

      <client-only>
        <div class="mb-5 mt-8">
          <OperationStageSchedule2 />
        </div>
      </client-only>
      <div class="text-center mt-6">
        <LinkTo to="https://www.youtube.com/watch?v=bFreLCr5naI" :is-blank="true">
          <RoundedButton text="YouTubeで見る →" class="border-red-500 bg-red-500 text-white" />
        </LinkTo>
      </div>
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
import Stream from '../../assets/img/header/streaming.png'
import LinkTo from '@/components/templates/nuxt/LinkTo'
import RoundedButton from '@/components/templates/parts/RoundedButton'

export default {
  components: {
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
  },
  head () {
    return {
      title: 'ライブ配信'
    }
  }
}
</script>
