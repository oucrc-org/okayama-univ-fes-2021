<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative">
    <div class="my-5">
      <Header title="ライブ配信" colors="bg-red-500 text-white" :icon-path="stream_src" />
      <VerticalTitle text="LIVE" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="プロコンサート">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0"
        title="プロコンサート"
      />
      <client-only>
        <div class="my-5">
          <ProConcertSchedule />
        </div>
      </client-only>
    </BodyWithHeader>

    <BodyWithHeader title="校友会団体ステージ企画">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0"
        title="校友会団体ステージ企画"
      />
      <client-only>
        <div class="my-5">
          <OperationStageSchedule1 />
        </div>
      </client-only>

      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0"
        title="校友会団体ステージ企画"
      />
      <client-only>
        <div class="my-5">
          <OperationStageSchedule2 />
        </div>
      </client-only>
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

export default {
  components: {
    ProConcertSchedule,
    OperationStageSchedule1,
    OperationStageSchedule2,
    IframeViewer,
    BodyWithHeader,
    Header,
    VerticalTitle
  },
  data () {
    return {
      stream_src: Stream
    }
  }
}
</script>
