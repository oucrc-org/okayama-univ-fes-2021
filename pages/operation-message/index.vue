<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header title="運営団体メッセージ" colors="bg-themeColor text-white" />
      <VerticalTitle text="OPERATION" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="校友会からのメッセージ">
      <IframeViewer src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0&cc_load_policy=1" title="校友会からのメッセージ" />
      <AccountViewer :src="alumni_src" role="国立大学校友会 総務委員長" name="山口 優" />
      <p class="text-red-600">放送文化部さんからいただいた動画が入ります（11/5以降）</p>
      <div class="p-1">
        <p class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-1">
          皆さんこんにちは。オンライン大学祭校友会総務委員長の山口優と申します。<br>
          この度は、令和3年度岡山大学祭をご覧いただきありがとうございます。
          今年度の岡山大学祭は、岡山大学の校友会と大学祭実行委員会の共同での開催となりました。<br>
          校友会というのは岡山大学の部活動やサークル等を含む学生自治組織で、私は普段はその中の校友会クラブ、いわゆる部活動を束ねる総務委員会の委員長を務めております。<br>

          新型コロナウイルスは多くの不自由をもたらしました。
          昨年度に引き続き我々校友会クラブも練習の制限や例年行っているイベントの中止、大会へ参加できないなど多くの影響を受けてきました。<br>
          しかし、岡山大学の校友会クラブはその程度のことで活動を止めることはありません。
          今までの歴史を受け継ぎ、そのときにできる活動を精一杯行ってきました。
          こうしたコロナ禍だからこそ、岡山大学生の溢れる想いやエネルギーを存分に感じていただければと思います。<br>

          今年度は、前年度のように特設Webサイトに映像や部活紹介といったコンテンツを掲載するだけではなく、11月7日にはプロの芸人さんのプロコンサート、11月16・17日には岡山大学校友会の部活動、サークルのパフォーマンスをステージ企画として生配信を行います。<br>
          また特設サイトの方も、スタンプラリー企画やコンテンツを充実させ、皆様に楽しんでいただけるようにパワーアップしております。<br>
          またこうしたWebサイトの制作は電子計算機研究会、ステージの配信の準備や司会は放送文化部や演劇部など、岡山大学校友会クラブが一丸となり、学生が主体となって創り上げてきました。
          そういった点でも皆様には岡山大学の魅力を存分にお届けできるのではないかと思います。<br>

          校友会と大学祭実行委員会が一つとなって、また学内外の多くの方々のご協力のもと創り上げてきたオンライン大学祭を、皆様に楽しんでいただければこれ以上のことはありません。
          最後になりましたが今回の開催にあたりご支援・ご協力いただいた多くの方々へ重ねてお礼申し上げます。<br>
          以上、令和3年度岡山大学オンライン大学祭校友会総務委員長挨拶でした。<br>
        </p>
      </div>
    </BodyWithHeader>

    <BodyWithHeader title="学祭実行委員会からのメッセージ">
      <IframeViewer src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0&cc_load_policy=1" title="学祭実行委員会からのメッセージ" />
      <AccountViewer :src="committee_src" role="学祭実行委員会 委員長" name="天野 颯" />
      <p class="text-red-600">放送文化部さんからいただいた動画が入ります（11/5以降）</p>
      <div class="p-1">
        <p class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-1">
          皆さんこんにちは。大学祭実行委員会委員長の天野颯と申します。<br>
          この度は、令和3年度岡山大学祭をご覧いただきありがとうございます。今年度の大学祭は感染拡大防止のため、昨年度と同様オンラインでの開催となりました。<br>
          例年のように大学祭が対面で行うことができていれば、各団体が出店するバザー店舗や、普段の練習の成果を発揮する団体企画でのパフォーマンスなど様々な企画を計画していました。
          例年通りの大学祭が行えないことは実行委員会としてもとても悔しい思いです。<br>
          しかし、対面での大学祭が行えない中で、より良い大学祭を作り上げるべく、校友会と協力して今年の大学祭を作り上げることとなりました。<br>

          新型コロナウイルスが蔓延し、多くの方の行動が制限される形になったと思います。そこで我々が何かできることはないかと考えた結果、例年チケットを販売して行っているプロコンサートを人気芸人の方によるプロライブという形にし、誰でも無料で視聴することができるようにしました。<br>
          特設HPでは部活・サークル紹介も行われます。岡山大学にはどんなサークルがあるの
          か、どんな活動をしているのかを知るいい機会になると思いますので、是非お気軽にご覧下さい。<br>
          また、コロナ禍で活動の成果を直接披露することのできなくなった岡山大学生のためにもぜひオンライン大学祭をご覧いただき、アンケートなどに感想をお寄せいただく形で応援をいただけるとありがたいです。<br>
          コロナ禍で自粛を余儀なくされた方も多いと思いますので、さまざまな企画が盛りだくさんの今回のオンライン大学祭を少しでも楽しんでいただけたら幸いです。<br>

          校友会と大学祭実行委員が協力してオンライン大学祭を行うことは初の試みですが、皆様に楽しんでいただけるような大学祭を作り上げます。<br>
          どこでも、誰でも、いつでも見ることのできる岡山大学祭をどうぞお楽しみください。<br>
          以上、令和3年度岡山大学オンライン大学祭実行委員会委員長挨拶でした。<br>
        </p>
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
import Committee from '../../assets/img/static/person/committee.jpg'
import Alumni from '../../assets/img/static/person/alumni.jpg'

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
      alumni_src: Alumni,
      committee_src: Committee
    }
  }
}
</script>
