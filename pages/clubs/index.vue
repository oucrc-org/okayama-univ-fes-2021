<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
      <VerticalTitle text="CLUBS" colors="text-gray-200" />

      <Header title="部活動・サークル紹介" colors="bg-themeColor text-white" />
      <div class="p-8 text-red-600">
        ※本学の公認団体については、活動前後の継続的な検温や、アルコール消毒、定期的な換気等、感染症対策を講じた上で活動を行っております。また、動画や写真にはコロナ禍以前に活動していた時のものを含みます。
      </div>

      <div
        v-for="clubsWithDepartment in clubsByParentDepartment"
        :key="`clubs-by-department-${clubsWithDepartment.department.id}`"
      >
        <CenterTitle :text="clubsWithDepartment.department.name" colors="border-themeColor text-themeColor" />
        <div class="grid grid-cols-2 gap-4 mx-4 my-8">
          <div v-for="club in clubsWithDepartment.clubs" :key="`club-${club.id}`">
            <img v-if="typeof club.cover === 'undefined'" :src="alternativeCoverImage" :alt="`${club.name}部のカバー画像`">
            <img v-else :src="club.cover.url" :alt="`${club.name}部のカバー画像`">
            <div class="m-2">
              {{ club.name }}
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
import CenterTitle from '@/components/CenterTitle.vue'
import Header from '@/components/Header.vue'
import VerticalTitle from '@/components/VerticalTitle.vue'

export default Vue.extend({
  components: {
    CenterTitle,
    Header,
    VerticalTitle
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
    clubsByParentDepartment () {
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
    alternativeCoverImage () {
      return require('~/assets/img/rectangle_20.png')
    }
  }
})
</script>

<style>

</style>
