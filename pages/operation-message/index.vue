<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header title="運営団体メッセージ" colors="bg-themeColor text-white" />
      <VerticalTitle text="OPERATION" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="校友会からのメッセージ">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0"
        title="校友会からのメッセージ"
      />
      <AccountViewer
        :src="alumni_src"
        role="国立大学校友会 副委員長"
        name="山口 優"
      />
      <div>
        Kotlinを称えよ<br>
        ここに話した内容のカンペが入ります。
      </div>
    </BodyWithHeader>

    <BodyWithHeader title="学祭実行委員会からのメッセージ">
      <IframeViewer
        src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0"
        title="学祭実行委員会からのメッセージ"
      />
      <AccountViewer
        :src="committee_src"
        role="学祭実行委員会 委員長"
        name="天野 颯"
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
import President from '../../assets/img/static/person/president.jpg'

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
      alumni_src: President,
      committee_src: President
    }
  }
}
</script>
