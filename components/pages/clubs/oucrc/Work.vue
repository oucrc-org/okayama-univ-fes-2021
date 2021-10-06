<template>
  <div class="p-6 flex justify-start flex-col gap-y-6 bg-white rounded-xl shadow-xl">
    <client-only placeholder="Client Only">
      <swiper class="flex items-center w-full overflow-hidden" :options="swiperOption">
        <swiper-slide v-if="work.youtube_video_url" style="width: 300px;">
          <IframeViewer :src="work.youtube_video_url" />
        </swiper-slide>
        <swiper-slide v-if="work.cover">
          <WorkImage :image="work.cover" />
        </swiper-slide>
        <swiper-slide v-if="work.image1">
          <WorkImage :image="work.image1" />
        </swiper-slide>
        <swiper-slide v-if="work.image2">
          <WorkImage :image="work.image2" />
        </swiper-slide>
        <swiper-slide v-if="work.image3">
          <WorkImage :image="work.image3" />
        </swiper-slide>
      </swiper>
    </client-only>
    <!-- 追加画像がないならPCで隠す -->
    <div slot="pagination" :class="`swiper-pagination-${work.id} h-4 flex py-4 gap-3 items-center justify-center ${hasAdditionalImage ? '' : 'md:hidden'}`" />
    <div>
      <div class="text-xl font-bold">
        {{ work.title }}
      </div>
      <div v-if="work.creator" class="text-gray-700">
        {{ work.creator }}作
      </div>
      <div>{{ work.body }}</div>
    </div>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import WorkImage from './WorkImage.vue'
import { IWork } from '~/assets/js/type/IWork'
import IframeViewer from '~/components/templates/html/IframeViewer.vue'
export default Vue.extend({
  name: 'OucrcWork',
  components: {
    IframeViewer,
    WorkImage
  },
  props: {
    work: {
      type: Object as PropType<IWork>,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        breakpoints: {
          768: {
            allowTouchMove: false,
            pagination: false,
            slidesPerView: 2,
            spaceBetween: 60
          }
        },
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination-' + this.work.id,
          clickable: true
        }
      }
    }
  },
  computed: {
    hasAdditionalImage (): boolean {
      return !(
        this.work.image1 == null
      )
    }
  }
})
</script>
