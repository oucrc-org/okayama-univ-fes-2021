<template>
  <div class="container  max-w-screen-lg mx-auto px-3 py-8">
    <VerticalTitle text="STAMP RALLY" colors="text-gray-200" class="-z-10" />
    <Header title="スタンプラリー" colors="bg-themeColor text-white" />
    <div class="flex flex-col gap-y-16 my-16">
      <div class="mx-auto">
        <img src="@/assets/img/static/stamp_rally.png" class="w-80" />
      </div>
      <p class=" text-themeColor text-2xl text-center font-bold">
        11/8（月）から開始します
      </p>
      <p class="text-center my-15">
        Nintendo Switch などが当たるスタンプラリーが、11/8（月）から8日間毎日行われます。<br>お楽しみに！
      </p>
      <div class="text-center">
        <a href="/">
          <p class="mb-5">
            <RoundedButton text="トップに戻る →" class="border-themeColor text-white bg-themeColor cursor-pointer" />
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '~/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import RoundedButton from '~/components/templates/parts/RoundedButton.vue'

export default {
  name: 'Callback',
  components: {
    Header,
    VerticalTitle,
    RoundedButton
  }
}
</script>

<style></style>
