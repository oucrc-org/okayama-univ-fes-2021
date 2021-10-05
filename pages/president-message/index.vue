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
      <AccountViewer
        :src="src"
        role="国立大学法人岡山大学長"
        name="槇野博史"
      />
      <div>
        Kotlinを称えよ<br>
        ここに話した内容のカンペが入ります。
      </div>
    </BodyWithHeader>
  </div>
</template>

<script>
import BodyWithHeader from '../../components/templates/header/BodyWithHeader'
import VerticalTitle from '../../components/layouts/VerticalTitle'
import Header from '../../components/layouts/Header'
import IframeViewer from '../../components/templates/html/IframeViewer'
import AccountViewer from '../../components/templates/parts/AccountViewer'
import President from '../../assets/img/static/president.jpg'

export default {
  components: {
    IframeViewer,
    BodyWithHeader,
    Header,
    VerticalTitle,
    AccountViewer
  },
  data () {
    return {
      src: President
    }
  }
}
</script>
