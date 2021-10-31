<template>
  <div class="container max-w-screen-xl mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header title="学長メッセージ" colors="bg-themeColor text-white" />
      <VerticalTitle text="PRESIDENT" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="学長からのメッセージ">
      <IframeViewer src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0" title="学長からのメッセージ" />
      <AccountViewer :src="src" role="国立大学法人岡山大学長" name="槇野 博史" />
      <div class="p-1">
        <p class="tracking-wide leading-loose text-sm my-1">
          皆さん、こんにちは。岡山大学・学長の槇野博史です。この度は、令和3年度オンライン岡山大学祭をご覧いただき、誠にありがとうございます。<br>
          今年度も、昨年度に引き続き、新型コロナウイルス感染症の感染拡大防止の観点から、例年のように来場者を迎えて大学祭を実施することは見送ることとなり、昨年度同様にオンラインでの大学祭の開催となりました。今年度は、大学祭実行委員会と校友会が一丸となって共同で企画していますので、昨年度以上に皆様に楽しんでいただけることと思います。<br>
          実は私と私の妻は岡山大学の卒業生で子供たちを連れて学園祭を楽しんだのを懐かしく思い出しております。<br>

          今回のオンライン大学祭では、参加する80以上の団体が、それぞれに趣向をこらして、動画や作品をWEB上で発表する形となっています。また昨年度にはなかった試みとして、プロの芸人の方によるお笑いライブや、各団体のステージでのパフォーマンスを生配信で行う予定です。どちらも岡山大学らしさを存分に盛り込みつつ皆様に楽しんでいただけるよう、学生が主体となって工夫を凝らし、自ら取り組んでまいりましたので、ぜひ一人でも多くの方にご覧いただければと思います。<br>

          コロナ禍で、今年度も正課外活動の制限が続いたり、学外での試合や大会が中止になったりと、各団体の中には、活動の成果を発表する機会まで奪われたところが少なくありません。そうした中、オンライン大学祭をご覧いただく皆様に、各団体のパフォーマンスを見ていただいたり、活動内容を知っていただいたりできることは、とてもありがたい機会であり、日々の練習の成果を発揮するために、各団体も準備を進めてまいりました。<br>
          岡山大学らしいバラエティーに富んださまざまな団体が、皆様に楽しんでいただける動画や作品、パフォーマンスを披露しますので、是非一つ一つの企画を存分にお楽しみください。また、普段、なかなか本学に足を運ぶ機会のない離れた地域の皆様にも、この機会に岡山大学や本学の学生の雰囲気を少しでも感じていただければ幸いです。<br>

          最後になりますが、オンライン大学祭に向けて、本日まで準備に携わってきた学生諸君に敬意を表すとともに、ご支援いただいた関係者すべての皆様に深く感謝いたします。<br>
        </p>
      </div>
    </BodyWithHeader>

    <BodyWithHeader title="岡山大学について">
      <IframeViewer src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU?controls=0" title="岡山大学について" />
      <div class="p-1">
        <p class="tracking-wide leading-loose text-sm my-6 mx-5">
          岡山大学は、11学部8研究科を有し、岡山市中心部の緑豊かな広大なキャンパスで、約2万人の学生、留学生が学んでいます。２０２１年４月には、工学部と環境理工学部が統合して、新生工学部に生まれ変わりました。また、本学は、SDGsを推進しており、学内のみならず地域社会と一体になった取り組みも進めています。正課外活動を行う団体は、文化系の校友会が35団体、体育系の校友会が49団体、医療系地区等の校友会が42団体あるほか、同好会（サークル）も54団体あり、幅広い活動を行っています。詳細はこちらの公式HPをご覧ください
          <a href="https://www.okayama-u.ac.jp/tp/profile/index.html" class="text-indigo-500 underline">https://www.okayama-u.ac.jp/tp/profile/index.html</a>
        </p>
      </div>
    </BodyWithHeader>
    <client-only placeholder="Client Only">
      <div class="grid grid-cols-2 gap-4 mx-4 my-8">
        <picture v-for="i in 10" :key="`school-image-${i}`">
          <source :srcset="require(`@/assets/img/static/school/president${i}.webp`)" type="image/webp">
          <img :src="require(`@/assets/img/static/school/president${i}.jpg`)" alt="" class="rounded-2xl object-cover w-full h-24 sm:h-48 md:h-60 lg:h-72">
        </picture>
      </div>
    </client-only>
    <BodyWithHeader title="岡山大学国際同窓会について">
      <IframeViewer src="https://www.youtube.com/watch?v=2hI8JS6oVjA" title="国際同窓会作成動画" />
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
      src: President
    }
  }
}
</script>
