<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
      <VerticalTitle text="PRESENTATION" colors="text-gray-200" class="-z-10" />

      <Header title="団体企画" colors="bg-themeColor text-white" />
      <div class="p-8 text-red-600">
        ※本学の公認団体については、活動前後の継続的な検温や、アルコール消毒、定期的な換気等、感染症対策を講じた上で活動を行っております。
        また、動画や写真にはコロナ禍以前に活動していた時のものを含みます。
      </div>

      <div class="grid md:grid-cols-2 gap-4 mx-4">
        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <NuxtLink to="#">
            <img
              src="@/assets/img/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </NuxtLink>
        </div>

        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <NuxtLink to="#">
            <img
              src="@/assets/img/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </NuxtLink>
        </div>

        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <NuxtLink to="#">
            <img
              src="@/assets/img/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CenterTitle from '@/components/CenterTitle.vue'
import Header from '@/components/Header.vue'
import VerticalTitle from '@/components/VerticalTitle.vue'

export default Vue.extend({
  components: {
    CenterTitle,
    Header,
    VerticalTitle
  }
})
</script>

<style>

</style>
