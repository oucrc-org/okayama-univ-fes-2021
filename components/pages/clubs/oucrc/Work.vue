<template>
  <div class="p-6 flex justify-start flex-col gap-y-6 bg-white rounded-xl shadow-xl">
    <div>
      <div class="flex flex-wrap mb-3">
        <h3 class="inline text-2xl font-bold border-b-4" :style="{'border-color':color ||'#0071C5'}">
          {{ work.title }}
        </h3>
      </div>
      <div v-if="work.creator" class="text-gray-900">
        {{ work.creator }}作
      </div>
    </div>
    <div v-if="work.youtube_video_url">
      <IframeViewer :src="work.youtube_video_url" />
    </div>
    <div class="w-full grid gap-3 grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div v-if="work.cover">
        <WorkImage :image="work.cover" />
      </div>
      <div v-if="work.image1">
        <WorkImage :image="work.image1" />
      </div>
      <div v-if="work.image2">
        <WorkImage :image="work.image2" />
      </div>
      <div v-if="work.image3">
        <WorkImage :image="work.image3" />
      </div>
    </div>

    <div :class="$style['oucrc_work_html']">
      <!-- リッチテキスト -->
      <HTMLLeader :body="addClassToIframe(work.body_html)" />
    </div>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import WorkImage from './WorkImage.vue'
import IWork from '~/assets/js/type/oucrc/IWork'
import IWorkCategory from '~/assets/js/type/oucrc/IWorkCategory'
import IframeViewer from '~/components/templates/html/IframeViewer.vue'
import HTMLLeader from '~/components/templates/html/HTMLLeader.vue'

export default Vue.extend({
  name: 'OucrcWork',
  components: {
    IframeViewer,
    WorkImage,
    HTMLLeader
  },
  props: {
    work: {
      type: Object as PropType<IWork>,
      required: true
    },
    color: {
      type: String as PropType<IWorkCategory['color']>,
      required: false,
      default: '#0071C5'
    }
  },
  mounted () {
    const youtubeIframes = $('iframe[data-youtube]')
    /**
     * YouTube埋め込みを16:9にリサイズする
     * なんでjQueryかというと、embedlyというサービスで埋め込みをしているせいで
     * iframeが入れ子になっており、よくあるposition: relativeと擬似要素の
     * paddingつけるやつが使えないからです。
     * リサイズには対応してません
     */
    youtubeIframes.each(function () {
      const $this = $(this)
      const width = $this.width()
      $this.css({ height: (width ?? 100) * 0.5625 })
    })
  },
  methods: {
    addClassToIframe (str :string): string {
      // 他の埋め込みに影響しないようにこうする
      // CSSではtitle属性の内容で選択できないので、仕方なくHTMLを書き換える
      // data属性はCSSで使える
      return str.replaceAll(/title="YouTube(.+?)"/g, 'data-youtube')
        .replaceAll(/title="SoundCloud(.+?)"/g, 'data-soundcloud')
    }
  }
})
</script>

<style module>
/* MicroCMSのYouTube埋め込み */
.oucrc_work_html iframe[data-youtube] {

}

/* MicroCMSのサンクラ埋め込み */
.oucrc_work_html iframe[data-soundcloud] {
  float: left;
  max-width: calc(944px/3);
  max-height: 300px;
  margin: 0 auto;
  padding: 0.5rem;
}

/* MicroCMSの埋め込みがpを挟んでくるため
float:leftの障害になる
文字が書かれている場合を想定して高さを無くす */
.oucrc_work_html iframe[data-soundcloud] + p {
  height: 0px;
}

/* スマホでは */
@media screen and (max-width: 768px) {
  .oucrc_work_html iframe[data-soundcloud='true'] {
    max-width: 100%;
  }
}
</style>
