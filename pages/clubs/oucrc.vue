<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative">
      <VerticalTitle text="OUCRC" colors="text-gray-200" class="-z-10" />

      <div class="flex justify-center py-8">
        <picture class="px-3 max-w-md">
          <source type="image/webp" :srcset="require('@/assets/img/static/oucrc-label.webp')">
          <img src="@/assets/img/static/oucrc-label.png" alt="岡山大学電子計算機研究会">
        </picture>
      </div>

      <div
        v-for="worksWithCategory in worksByCategory"
        :key="`works-by-category-${worksWithCategory.category.id}`"
      >
        <CenterTitle :text="worksWithCategory.category.name" colors="border-themeColor text-themeColor" />
        <div class="grid grid-cols-1 gap-4 mx-4 my-8">
          <div v-for="work in worksWithCategory.works" :key="work.id">
            <Work :work="work" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import CenterTitle from '~/components/templates/header/CenterTitle.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import Work from '~/components/pages/clubs/oucrc/Work.vue'

export default Vue.extend({
  components: {
    CenterTitle,
    VerticalTitle,
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
        name: 'default',
        ordering_key: Number.MAX_SAFE_INTEGER
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
