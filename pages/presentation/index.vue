<template>
  <div>
    <div class="container max-w-screen-xl mt-24 mx-auto relative md:pr-28">
      <VerticalTitle text="PRESENTATION" colors="text-gray-200" class="-z-10" />

      <Header title="団体企画" colors="bg-themeColor text-white" />
      <Warning />

      <div class="grid md:grid-cols-2 gap-4 mx-4">
        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="#">
            <img
              src="@/assets/img/dev/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </LinkTo>
        </div>

        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="#">
            <img
              src="@/assets/img/dev/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </LinkTo>
        </div>

        <div>
          <CenterTitle text="写真部 学祭展覧会" class="border-themeColor text-themeColor" />
          <LinkTo to="#">
            <img
              src="@/assets/img/dev/hero.jpg"
              class="rounded-2xl object-cover mt-8 w-full h-44 sm:h-96 md:h-60 lg:h-72"
              alt="写真部 学祭展"
            >
          </LinkTo>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CenterTitle from '~/components/templates/header/CenterTitle.vue'
import Header from '@/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import Warning from '~/components/pages/Warning.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'

export default Vue.extend({
  components: {
    LinkTo,
    CenterTitle,
    Header,
    VerticalTitle,
    Warning
  }
})
</script>

<style>

</style>
