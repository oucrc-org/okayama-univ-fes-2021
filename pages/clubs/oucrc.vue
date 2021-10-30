<template>
  <div class="relative">
    <div class="flex sm:justify-center pt-5 pb-4">
      <picture class="px-3" style="width:300px;">
        <source type="image/webp" :srcset="require('@/assets/img/static/oucrc-label.webp')">
        <img src="@/assets/img/static/oucrc-label.png" alt="岡山大学電子計算機研究会">
      </picture>
    </div>

    <div
      v-for="worksWithCategory in worksByCategory"
      :key="`works-by-category-${worksWithCategory.category.id}`"
    >
      <div class="py-8" :style="{'background-color': worksWithCategory.category.color || '#0071C5'}">
        <div class="container max-w-screen-xl mx-auto relative">
          <OucrcHeader :title="worksWithCategory.category.name" :title-english="worksWithCategory.category.name_english" />
          <div class="grid grid-cols-1 gap-4 mx-4 my-8">
            <div v-for="work in worksWithCategory.works" :key="work.id">
              <Work :work="work" :color="worksWithCategory.category.color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import OucrcHeader from '~/components/pages/clubs/oucrc/OucrcHeader.vue'
import Work from '~/components/pages/clubs/oucrc/Work.vue'

export default Vue.extend({
  components: {
    OucrcHeader,
    Work
  },
  async asyncData ({ app }: Context): Promise<{ works: { contents: oufes.IWork[] } }> {
    const response = await app.$microcms.get({
      endpoint: 'oucrc_works',
      queries: {
        limit: 1000,
        fields: 'id,title,category,cover,youtube_video_url,image1,image2,image3,body_html,creator'
      }
    })
    return {
      works: response
    }
  },
  data (): { works: { contents: oufes.IWork[] } } {
    return {
      works: {
        contents: []
      }
    }
  },
  computed: {
    worksByCategory (): Array<{ category: oufes.IWorkCategory, works: oufes.IWork[] }> {
      const resultUnordered: { [categoryId: string]: {category: oufes.IWorkCategory, works: oufes.IWork[] } } = {}
      const defaultCategory: oufes.IWorkCategory = {
        id: 'default',
        name: 'カテゴリなし',
        name_english: 'NO CATEGORY',
        ordering_key: Number.MAX_SAFE_INTEGER,
        color: '#0071C5'
      }
      for (const work of this.works.contents) {
        work.category ??= defaultCategory
        resultUnordered[work.category.id] ??= {
          category: work.category,
          works: []
        }
        resultUnordered[work.category.id].works.push(work)
      }
      return Object.values(resultUnordered).sort((a, b) => a.category.ordering_key - b.category.ordering_key)
    },
    alternativeCoverImage (): string {
      return require('~/assets/img/cover_alternative.png')
    }
  }
})
</script>

<style>

</style>
