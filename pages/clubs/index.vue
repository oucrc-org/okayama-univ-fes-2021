<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
      <VerticalTitle text="CLUBS" colors="text-gray-200" class="-z-10" />

      <Header title="部活動・サークル紹介" colors="bg-themeColor text-white" />
      <Warning>あああああ</Warning>

      <div
        v-for="clubsWithDepartment in clubsByParentDepartment"
        :key="`clubs-by-department-${clubsWithDepartment.department.id}`"
      >
        <CenterTitle :text="clubsWithDepartment.department.name" colors="border-themeColor text-themeColor" />
        <div class="grid grid-cols-2 gap-4 mx-4 my-8">
          <NuxtLink v-for="club in clubsWithDepartment.clubs" :key="`club-${club.id}`" :to="`/clubs/${club.id}`">
            <img
              :src="typeof club.cover === 'undefined' ? alternativeCoverImage : club.cover.url"
              :alt="`${club.name}部のカバー画像`"
              class="rounded-2xl object-cover w-full h-24 sm:h-48 md:h-60 lg:h-72"
            >
            <div class="m-2 lg:text-lg xl:text-xl">
              {{ club.name }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import CenterTitle from '@/components/CenterTitle.vue'
import Header from '@/components/Header.vue'
import VerticalTitle from '@/components/VerticalTitle.vue'
import Warning from '@/components/templates/Warning.vue'

export default Vue.extend({
  components: {
    CenterTitle,
    Header,
    VerticalTitle,
    Warning
  },
  async asyncData ({ app }: Context): Promise<{ clubs: { contents: oufes.IClub[] } }> {
    const response = await app.$microcms.get({
      endpoint: 'clubs',
      queries: {
        limit: 1000,
        fields: 'id,name,parent_department,cover'
      }
    })
    return {
      clubs: response
    }
  },
  data (): { clubs: { contents: oufes.IClub[] } } {
    return {
      clubs: {
        contents: []
      }
    }
  },
  computed: {
    clubsByParentDepartment (): Array<{ department: oufes.IDepartment, clubs: oufes.IClub[] }> {
      const resultUnordered: { [departmentId: string]: { department: oufes.IDepartment, clubs: oufes.IClub[] } } = {}
      const defaultDepartment: oufes.IDepartment = {
        id: 'default',
        name: 'default',
        ordering_key: Number.MAX_SAFE_INTEGER
      }
      for (const club of this.clubs.contents) {
        club.parent_department ??= defaultDepartment
        resultUnordered[club.parent_department.id] ??= {
          department: club.parent_department,
          clubs: []
        }
        resultUnordered[club.parent_department.id].clubs.push(club)
      }
      return Object.values(resultUnordered).sort((a, b) => a.department.ordering_key - b.department.ordering_key)
    },
    alternativeCoverImage (): string {
      return require('~/assets/img/cover_alternative.png')
    }
  }
})
</script>

<style>

</style>
