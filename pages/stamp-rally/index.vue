<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28 leading-relaxed">
      <Header title="スタンプラリー" colors="bg-themeColor text-white" />

      <VerticalTitle text="CAMPAIGN" colors="text-gray-200" class="-z-10" />
      <BodyWithHeader title="スタンプラリー企画について" colors="border-themeColor text-themeColor">
        <p>
          8日間毎日出されるクイズに答えて、スタンプを集めましょう。
          クイズ内容は特設サイト（本サイト）のコンテンツ内から出題されます！
          集めたスタンプでNintendo Switchなど豪華景品獲得のチャンス！
          何度でも回答し直せます。ぜひスタンプを集めてみてくださいね。
        </p>
      </BodyWithHeader>

      <BodyWithHeader title="豪華景品" colors="border-themeColor text-themeColor">
        <StampRallyGrid :items="items" />
      </BodyWithHeader>

      <BodyWithHeader title="注意事項" colors="border-themeColor text-themeColor">
        <ul class="mb-8 pl-4 list-disc list-outside">
          <li>スタンプラリーへの参加は岡山大学生のみならず、一般の方もご参加いただけます。</li>
          <li>参加にはGoogleアカウントが必要です。</li>
          <li>プレゼント送付前にアカウント連携を解除された場合は当選が無効となります。</li>
          <li>当選権利はご当選者本人に限り、他人に譲渡することはできません。またオークションへの出品なども固くお断りします。</li>
          <li>応募はお一人につき1回までです。別アカウントからの複数応募が判明した場合無効とさせていただく場合があります。</li>
          <li>本キャンペーンは、やむを得ない事情により中止または内容が変更となる場合がございますので、あらかじめご了承ください。</li>
          <li>当選は発送をもって代えさせていただきます。</li>
          <li>景品に応募できるのは11/17以降となります。</li>
          <li>8日間すべてのスタンプを集めた場合、二次抽選の権利を得ます。当選者数に応募者数が満たなかった場合に追加で抽選に参加できます。</li>
        </ul>

        <div class="col-span-2 md:col-span-1 text-center md:text-left md:pl-3">
          <LinkTo to="/quiz">
            <RoundedButton text="参加する →" class="border-themeColor bg-themeColor text-white" />
          </LinkTo>
        </div>
      </BodyWithHeader>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/layouts/Header.vue'
import StampRallyGrid from '~/components/pages/stamp-rally/Grid.vue'
import BodyWithHeader from '~/components/templates/header/BodyWithHeader.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import items from '~/assets/data/stamp-rally-item'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
import RoundedButton from '~/components/templates/parts/RoundedButton.vue'

export default Vue.extend({
  components: {
    LinkTo,
    Header,
    BodyWithHeader,
    VerticalTitle,
    StampRallyGrid,
    RoundedButton
  },
  data () {
    return {
      items
    }
  }
})
</script>

<style>

</style>
