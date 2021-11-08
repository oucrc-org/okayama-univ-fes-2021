<template>
  <div class="container max-w-screen-lg mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header title="運営団体メッセージ" colors="bg-themeColor text-white" />
      <VerticalTitle text="OPERATION" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="校友会からのメッセージ">
      <IframeViewer src="https://www.youtube-nocookie.com/embed/iTSoMg8GJh8" title="校友会からのメッセージ" />
      <AccountViewer :src="alumni_src" role="岡山大学校友会 総務委員長" name="山口 優" />

      <div class="text-right mb-6">
        <div class="inline-block">
          <label class="cursor-pointer label">
            <span class="label-text font-bold text-themeColor mr-4 text-lg">English</span>
            <input v-model="english" type="checkbox" class="toggle checked:bg-themeColor checked:border-themeColor">
          </label>
        </div>
      </div>

      <div class="p-1">
        <p v-if="english" class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-1">
          皆さん、こんにちは。オンライン大学祭校友会代表者の山口優と申します。<br>
          <span
            class="text-themeColor"
          >Hello everyone. My name is Yu Yamaguchi and I am the representative of the Online University Festival Alumni Association.</span><br>
          この度は、令和 3 年度岡山大学祭をご覧いただきありがとうございます。<br>
          <span
            class="text-themeColor"
          >Thank you for taking the time to view the 2021 Okayama University Festival.</span><br>
          今年度の岡山大学祭は、岡山大学の校友会と大学祭実行委員会の共同での開催となりました。<br>
          <span
            class="text-themeColor"
          >This year's Okayama University Festival is held jointly by the Okayama University Alumni Association and the University Festival Committee.</span><br>
          校友会というのは岡山大学の部活動やサークル等を含む学生自治組織で、<br>
          <span
            class="text-themeColor"
          >The Alumni Association is a student self-governing organization that includes all the clubs and circles at Okayama University,</span><br>
          私は普段はその中の校友会クラブ、いわゆる部活動を束ねる総務委員会の委員長を務めております。<br>
          <span
            class="text-themeColor"
          >And, I am usually the chairperson of the General Affairs Committee, which is responsible for organizing the Alumni Club, club activities.</span><br>
          新型コロナウイルスは多くの不自由をもたらしました。<br>
          <span
            class="text-themeColor"
          >The COVID-19 has caused a lot of inconveniences to our club.</span><br>
          昨年度に引き続き我々校友会クラブも練習の制限や例年行っているイベントの中止、大会へ参加できないなど多くの影響を受けてきました。<br>
          <span
            class="text-themeColor"
          >The alumni association have been affected by it as we were last year.</span><br>
          しかし、岡山大学の校友会クラブはその程度のことで活動を止めることはありません。<br>
          <span
            class="text-themeColor"
          >However, the Alumni association of Okayama University will never stop its activities because of this situation.</span><br>
          今までの歴史を受け継ぎ、そのときにできる活動を精一杯行ってきました。<br>
          <span
            class="text-themeColor"
          >We have inherited the history of the club and have done our best to carry out the activities that we could do at that time.</span><br>
          こうしたコロナ禍だからこそ、岡山大学生の溢れる想いやエネルギーを存分に感じていただければと思います。<br>
          <span
            class="text-themeColor"
          >Because of this pandemic situation, I hope that you will be able to feel the overflowing thoughts and energy of Okayama University students.</span><br>
          今年度は、前年度のように特設 WEB サイトに映像や部活紹介といったコンテンツを掲載するだけではなく、<br>
          <span
            class="text-themeColor"
          >This year, we will not only post contents such as videos and introductions of club activities on the special website as we did in the previous year,</span><br>
          11 月 7 日にはプロの芸人さんのプロコンサート、<br>
          <span
            class="text-themeColor"
          >but we will also have a professional concert by professional comedians on November 7,</span><br>
          11 月 16・17 日には岡山大学校友会の部活動、サークルのパフォーマンスをステージ企画として生配信を行います。<br>
          <span
            class="text-themeColor"
          >And live streaming of performances by clubs and circles of the Okayama University Alumni Association as a stage project on November 16 and 17.</span><br>
          また特設サイトの方も、スタンプラリー企画やコンテンツを充実させ、皆様に楽しんでいただけるようにパワーアップしております。<br>
          <span
            class="text-themeColor"
          >The special website will also be enhanced with a stamp rally project and more contents for everyone to enjoy.</span><br>
          またこうした Web サイトの制作は電子計算機研究会、ステージの配信の準備や司会は放送文化部や演劇部など、岡山大学校友会クラブが一丸となり、学生が主体となって創り上げてきました。<br>
          <span
            class="text-themeColor"
          >The web site was created by the Research Group of Computer Science, and the preparation and hosting of the stage broadcast was done by the Okayama University Alumni Association clubs, including the Broadcasting Club and the Drama Club.</span><br>
          そういった点でも皆様には岡山大学の魅力を存分にお届けできるのではないかと思います。<br>
          <span
            class="text-themeColor"
          >In this respect, I believe that we will be able to deliver the full appeal of Okayama University to you.</span><br>
          校友会と大学祭実行委員会が一つとなって、<br>
          <span
            class="text-themeColor"
          >The Alumni Association and the University Festival Committee have worked together as one,</span><br>
          また学内外の多くの方々のご協力のもと創り上げてきたオンライン大学祭を、<br>
          <span
            class="text-themeColor"
          >And with the cooperation of many people inside and outside the university, we have created the Online University Festival, and</span><br>
          皆様に楽しんでいただければこれ以上のことはありません。<br>
          <span
            class="text-themeColor"
          >We would like nothing more than for everyone to enjoy it.</span><br>
          最後になりましたが今回の開催にあたりご支援・ご協力いただいた多くの方々へ重ねてお礼申し上げます。<br>
          <span
            class="text-themeColor"
          >Last but not least, I would like to express my gratitude to the many people who supported and cooperated with us in organizing this event.</span><br>
          以上、令和 3 年度岡山大学オンライン大学祭 校友会代表者挨拶でした。<br>
          <span
            class="text-themeColor"
          >This was the address by the representative of the Okayama University Online University Festival Alumni Association in 2021.</span><br>
        </p>
        <p v-else class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-1">
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
      <IframeViewer src="https://www.youtube-nocookie.com/embed/NROGUZyzgKU" title="学祭実行委員会からのメッセージ" />
      <AccountViewer :src="committee_src" role="学祭実行委員会 委員長" name="天野 颯" />

      <div class="text-right mb-6">
        <div class="inline-block">
          <label class="cursor-pointer label">
            <span class="label-text font-bold text-themeColor mr-4 text-lg">English</span>
            <input v-model="english" type="checkbox" class="toggle checked:bg-themeColor checked:border-themeColor">
          </label>
        </div>
      </div>

      <div class="p-1">
        <p v-if="english" class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-1">
          皆さんこんにちは。大学祭実行委員会委員長の天野颯と申します。<br>
          <span
            class="text-themeColor"
          >Hello everyone. My name is Hayate Amano, and I am the chairperson of the University Festival Executive Committee.</span><br>
          この度は、令和 3 年度岡山大学祭をご覧いただきありがとうございます。<br>
          <span
            class="text-themeColor"
          >Thank you for visiting the Okayama University Festival 2021.</span><br>
          今年度の大学祭は感染拡大防止のため、昨年度と同様オンラインでの開催となりました。<br>
          <span
            class="text-themeColor"
          >In order to prevent the spread of infection, this year's festival will be held online, just like last year.</span><br>
          例年のように大学祭が対面で行うことができていれば、<br>
          <span
            class="text-themeColor"
          >If the festival could have been held face-to-face as in the past, we would have planned various events such as bazaar stores for each group and performances by groups to show the efforts of their daily practice.</span><br>
          各団体が出店するバザー店舗や、 普段の練習の成果を発揮する団体企画でのパフォーマンスなど様々な企画を計画していました。<br>
          例年通りの大学祭が行えないことは実行委員会としてもとても悔しい思いです。<br>
          <span
            class="text-themeColor"
          >It was very frustrating for the organizing committee to not be able to hold the festival as usual.</span><br>
          しかし、対面での大学祭が行えない中で、より良い大学祭を作り上げるべく、<br>
          <span
            class="text-themeColor"
          >However, despite the fact that we could not hold the festival face-to-face, we decided to cooperate with the Alumni Association to create a better festival this year.</span><br>
          校友会と協力して今年の大学祭を作り上げることとなりました。<br>
          新型コロナウイルスが蔓延し、多くの方の行動が制限される形になったと思います。<br>
          <span
            class="text-themeColor"
          >The spread of the COVID-19 has restricted the activities of many people.</span><br>
          そこで我々が何かできることはないかと考えた結果、例年チケットを販売して行っているプロコンサートを人気芸人の方によるプロライブという形にし、誰でも無料で視聴することができるようにしました。<br>
          <span
            class="text-themeColor"
          >As a result of thinking about what we could do, we decided to make the professional concert, which we usually sell tickets for, into a professional live performance by popular comedians, which anyone can watch for free.</span><br>
          特設 HP では部活・サークル紹介も行われます。<br>
          <span
            class="text-themeColor"
          >On the special website, there will be an introduction of club activities and circles.</span><br>
          岡山大学にはどんなサークルがあるのか、どんな活動をしているのかを知るいい機会になると思いますので、是非お気軽にご覧下さい。<br>
          <span
            class="text-themeColor"
          >It will be a good opportunity for you to find out what kind of clubs and circles we have in Okayama University and what kind of activities they are doing.</span><br>
          また、コロナ禍で活動の成果を直接披露することのできなくなった岡山大学生のためにもぜひオンライン大学祭をご覧いただき、アンケートなどに感想をお寄せいただく形で応援をいただけるとありがたいです。<br>
          <span
            class="text-themeColor"
          >Also, for the sake of Okayama University students who cannot directly show the efforts of their activities due to the pandemic, we would be grateful if you could visit the online university festival and support us by sending us your impressions through questionnaires.</span><br>
          コロナ禍で自粛を余儀なくされた方も多いと思いますので、さまざまな企画が盛りだくさんの今回のオンライン大学祭を少しでも楽しんでいただけたら幸いです。<br>
          <span
            class="text-themeColor"
          >I know that many people were forced to refrain from participating in the festival due to the COVID-19, so I hope that you will be able to enjoy this Online University Festival, which is filled with a variety of events.</span><br>
          校友会と大学祭実行委員が協力してオンライン大学祭を行うことは初の試みですが、<br>
          <span
            class="text-themeColor"
          >This is the first time that the Alumni Association and the University Festival Committee have collaborated to hold an online university festival,</span><br>
          皆様に楽しんでいただけるような大学祭を作り上げます。<br>
          <span
            class="text-themeColor"
          >but we will create a university festival that everyone will enjoy.</span><br>
          どこでも、誰でも、いつでも見ることのできる岡山大学祭をどうぞお楽しみください。<br>
          <span
            class="text-themeColor"
          >Please enjoy the Okayama University Festival, which can be viewed by anyone, anywhere, at any time.</span><br>
          以上、令和 3 年度岡山大学オンライン大学祭 実行委員会委員長挨拶でした。<br>
          <span
            class="text-themeColor"
          >This is the greeting from the Chair of the Executive Committee of Okayama University Online University Festival 2021.</span><br>
        </p>
        <p v-else class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-1">
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
      committee_src: Committee,
      english: false
    }
  },
  head () {
    return {
      title: '運営団体のメッセージ'
    }
  }
}
</script>
