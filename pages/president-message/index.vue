<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header title="学長メッセージ" colors="bg-themeColor text-white" />
      <VerticalTitle text="PRESIDENT" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="学長からのメッセージ">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0"
        title="学長からのメッセージ"
      />
      <div>
        Kotlinを称えよ<br>
        ここに話した内容のカンペが入ります。
      </div>
    </BodyWithHeader>
  </div>
</template>

<script>
import BodyWithHeader from '../../components/pages/club/_id/BodyWithHeader'
import VerticalTitle from '../../components/VerticalTitle'
import Header from '../../components/Header'
import IframeViewer from '../../components/templates/IframeViewer'

export default {
  components: {
    IframeViewer,
    BodyWithHeader,
    Header,
    VerticalTitle
  }
}
</script>
