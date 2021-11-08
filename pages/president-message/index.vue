<template>
  <div class="container max-w-screen-lg mt-16 lg:mt-24 mx-auto relative">
    <!-- ヘッダー -->
    <div class="my-5">
      <Header title="学長メッセージ" colors="bg-themeColor text-white" />
      <VerticalTitle text="PRESIDENT" colors="text-gray-200" />
    </div>

    <BodyWithHeader title="学長からのメッセージ">
      <IframeViewer src="https://www.youtube-nocookie.com/embed/SddRkcKH0NE" title="学長からのメッセージ" />
      <AccountViewer :src="src" role="国立大学法人岡山大学長" name="槇野 博史" />
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
          皆さん、こんにちは。岡山大学・学長の槇野博史です。<br>
          <span
            class="text-themeColor"
          >Hello, everyone. I am Hirofumi Makino, President of Okayama University.</span><br>
          この度は、令和 3 年度オンライン岡山大学祭をご覧いただき、誠にありがとうございます。<br>
          <span
            class="text-themeColor"
          >Thank you very much for visiting the 2021 Online Okayama University Festival.</span><br>
          今年度も、昨年度に引き続き、新型コロナウイルス感染症の感染拡大防止の観点から、<br>
          <span class="text-themeColor">This year, as in the previous year, from the viewpoint of preventing the spread of the new
            coronavirus infection,</span><br>
          例年のように来場者を迎えて大学祭を実施することは見送ることとなり、昨年度同様にオンラインでの大学祭の開催となりました。<br>
          <span class="text-themeColor">we have decided not to hold the festival with visitors as in the past, but to hold the festival online
            as in the previous year.</span><br>
          今年度は、大学祭実行委員会と校友会が一丸となって共同で企画していますので、昨年度以上に皆様に楽しんでいただけることと思います。<br>
          <span class="text-themeColor">This year, the University Festival Executive Committee and the Alumni Association are working
            together to plan the festival, so I am sure that everyone will enjoy it even more than last year.</span><br>
          今回のオンライン大学祭では、参加する80以上もの団体が、それぞれに趣向をこらして、動画や作品を WEB 上で発表する形となっています。<br>
          <span class="text-themeColor">In this year's Online University Festival, more than 80 groups will present their videos and works on
            the web, each with its own unique style.</span><br>
          また昨年度なかった試みとして、プロの芸人 の方によるお笑いライブや、各団体のステージで
          のパフォーマンスを生配信で行う予定です。<br>
          <span class="text-themeColor">We are also planning to have live comedy performances by professional comedians and live
            streaming of each group's performance on stage, which we did not have last year.</span><br>
          どちらも岡山大学らしさを存分に盛り込みつつ皆様に楽しんでいただけるよう、学生が主体となって工夫を凝らし、自ら取り組んでまいりましたので、<br>
          <span class="text-themeColor">Students have taken the initiative in devising ways to make them enjoyable for everyone while
            fully incorporating the characteristics of Okayama University.</span><br>
          ぜひ一人でも多くの方にご覧いただければと思います。<br>
          <span
            class="text-themeColor"
          >We hope that as many people as possible will be able to see our activities.</span><br>
          コロナ禍で、今年度も正課外活動の制限が続いたり、学外での試合や大会が中止になったりと、各団体の中には、活動の成果を発表する機会まで奪われたところが少なくありません。<br>
          <span class="text-themeColor">Due to this pandemic situation, many groups were deprived of opportunities to present the results
            of their activities this year, as restrictions on extracurricular activities continued and off-campus
            games and competitions were cancelled.</span><br>
          そうした中、オンライン大学祭をご覧いただく皆様に、各団体のパフォーマンスを見ていただいたり、活動内容を知っていただいたりできることは、とてもありがたい機会であり、
          日々の練習の成果を発揮するために、各団体も準備を進めてまいりました。<br>
          <span class="text-themeColor">In such a situation, we are very grateful for the opportunity to show you the performances of
            each group and to let you know what they are doing at the Online University Festival.</span><br>
          岡山大学らしいバラエティーに富んださまざまな団体が、皆様に楽しんでいただける動画や作品、パフォーマンスを披露しますので、<br>
          <span class="text-themeColor">Each group has been preparing to show the results of their daily practice. A wide variety of
            groups, typical of Okayama University, will be presenting videos, artworks, and performances
            for everyone to enjoy,</span><br>
          是非一つ一つの企画を存分にお楽しみください。<br>
          <span class="text-themeColor">so please enjoy each project to the fullest.</span><br>
          また、普段、なかなか本学に足を運ぶ機会のない離れた地域の皆様にも、この機会に岡山大学や本学の学生の雰囲気を少しでも感じていただければ幸いです。<br>
          <span class="text-themeColor">We also hope that people in remote areas who don't usually have a chance to visit our university
            will take this opportunity to feel the atmosphere of Okayama University and its students.</span><br>
          最後になりますが、オンライン大学祭に向けて、本日まで準備に携わってきた学生諸君に敬意を表すとともに、ご支援いただいた関係者すべての皆様に深く感謝致します。<br>
          <span class="text-themeColor">Finally, I would like to express my respect to the students who have been involved in the
            preparations for the Online University Festival, and my deepest gratitude to everyone involved
            for their support.</span>
        </p>
        <p v-else class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-1">
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
      <IframeViewer src="https://www.youtube-nocookie.com/embed/pYrRwGE8LJU" title="岡山大学について" />
      <div class="p-1">
        <p class="tracking-wide leading-6 lg:leading-10 text-sm lg:text-lg max-w-screen-md mx-auto my-10">
          岡山大学は、1０学部8研究科を有し、岡山市中心部の緑豊かな広大なキャンパスで、約１万３千人の学生、留学生が学んでいます。
          ２０２１年４月には、工学部と環境理工学部が統合して、新生工学部に生まれ変わりました。<br>
          また、本学は、SDGsを推進しており、「人類社会の持続的進化のための新たなパラダイム構築」を目的に掲げ、アジアで初めてユネスコチェアの認定を受けました。
          さらに、イギリスの高等教育専門誌「Times Higher Education」による「THE大学インパクトランキング2021」では、
          エントリーした5つのゴール（SDG3 すべての人に健康と福祉を、SDG9 産業と技術革新の基盤をつくろう、SDG11 住み続けられるまちづくりを、
          SDG16 平和と公正をすべての人に、SDG17 パートナーシップで目標を達成しよう）のすべてでランクインし、
          総合ランキングでは、国内6大学（広島大学、北海道大学、京都大学、東北大学、東京大学、筑波大学）と並んで、
          世界トップ200位内（101-200位）、国内同列１位にランクされています。
          正課外活動を行う団体は、文化系の校友会が35団体、体育系の校友会が49団体、医療系地 区等の校友会が41団体あるほか、
          同好会（サークル）も54団体あり、幅広い活動を行っています。<br><br>
          ▼参考▼<br>
          岡山大学について
          <a
            href="https://www.okayama-u.ac.jp/tp/profile/index.html"
            target="_blank"
            class="text-indigo-500 underline ml-3"
          >
            https://www.okayama-u.ac.jp/tp/profile/index.html</a><br>
          岡山大学×SDGｓ
          <a href="https://sdgs.okayama-u.ac.jp/" target="_blank" class="text-indigo-500 underline ml-3">https://sdgs.okayama-u.ac.jp/</a>
        </p>
      </div>
    </BodyWithHeader>
    <client-only placeholder="Client Only">
      <div class="grid grid-cols-2 gap-4 mx-4 my-8">
        <picture v-for="i in 10" :key="`school-image-${i}`">
          <source :srcset="require(`@/assets/img/static/school/president${i}.webp`)" type="image/webp">
          <img
            :src="require(`@/assets/img/static/school/president${i}.jpg`)"
            alt=""
            class="rounded-lg lg:rounded-2xl object-cover w-full h-24 sm:h-48 md:h-60 lg:h-72"
          >
        </picture>
      </div>
    </client-only>
    <BodyWithHeader title="岡山大学国際同窓会について">
      <IframeViewer src="https://www.youtube.com/watch?v=7XaalJR2ZAc" title="国際同窓会作成動画" />
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
      src: President,
      english: false
    }
  },
  head () {
    return {
      title: '学長のメッセージ'
    }
  }
}
</script>
