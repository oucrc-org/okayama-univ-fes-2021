<template>
  <div>
    <div class="container max-w-screen-lg mt-24 mx-auto relative md:pr-28">
      <VerticalTitle text="CLUBS" colors="text-gray-200" class="-z-10" />

      <Header title="部活動・サークル紹介" colors="bg-themeColor text-white" />
      <Warning />

      <div
        v-for="clubsWithDepartment in clubsByParentDepartment"
        :key="`clubs-by-department-${clubsWithDepartment.department.id}`"
      >
        <CenterTitle :text="clubsWithDepartment.department.name" colors="border-themeColor text-themeColor" />
        <div class="grid grid-cols-2 gap-4 mx-4 my-8">
          <LinkTo v-for="club in clubsWithDepartment.clubs" :key="`club-${club.id}`" :to="`/clubs/${club.id}`">
            <picture>
              <source :srcset="iImageToUrl(club.cover, 432, 70, true, alternativeCoverImage)" type="image/webp">
              <img
                :src="iImageToUrl(club.cover, 432, 70, false, alternativeCoverImage)"
                :alt="`${club.name}のカバー画像`"
                class="rounded-lg lg:rounded-2xl object-cover w-full h-22 sm:h-44 md:h-56 lg:h-64"
              >
            </picture>
            <div class="m-2 lg:text-lg xl:text-xl">
              {{ club.name }}
            </div>
          </LinkTo>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import CenterTitle from '~/components/templates/header/CenterTitle.vue'
import Header from '~/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import Warning from '~/components/pages/Warning.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
import IResponse from '~/assets/js/type/request/IResponse'
import IClub from '~/assets/js/type/club/IClub'
import IDepartment from '~/assets/js/type/club/IDepartment'
import iImageToUrl from '~/assets/js/url/iImageToUrl'

interface IResponseClubs extends IResponse {
  data: {
    contents: IClub[],
    totalCount: number
  }
}

const url = `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1`
const apiKey = process.env.API_KEY

export default Vue.extend({
  components: {
    LinkTo,
    CenterTitle,
    Header,
    VerticalTitle,
    Warning
  },
  asyncData ({ app }: Context): Promise<{ clubs: { contents: IClub[] } }> {
    return app.$axios.get(`${url}/clubs`, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey
      },
      params: {
        limit: 1000,
        fields: 'id,name,parent_department,cover'
      }
    }).then((res: IResponseClubs) => {
      return { clubs: res.data }
    }).catch(() => {
      return { clubs: { contents: [] } }
    })
  },
  data (): { clubs: { contents: IClub[] } } {
    return {
      clubs: {
        contents: []
      }
    }
  },
  head () {
    return {
      title: '部活動・サークル紹介'
    }
  },
  computed: {
    clubsByParentDepartment (): Array<{ department: IDepartment, clubs: IClub[] }> {
      const resultUnordered: { [departmentId: string]: { department: IDepartment, clubs: IClub[] } } = {}
      const defaultDepartment: IDepartment = {
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
      return require('~/assets/img/cover_alternative.jpg')
    }
  },
  methods: {
    iImageToUrl
  }
})
</script>

<style>

</style>
