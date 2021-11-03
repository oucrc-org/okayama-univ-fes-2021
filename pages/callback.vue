<template>
  <div class="container  max-w-screen-lg mx-auto px-3 py-8">
    <VerticalTitle text="CALLBACK" colors="text-gray-200" class="-z-10" />
    <Header title="読み込み中" colors="bg-themeColor text-white" />
    <div class="flex flex-col gap-y-16 my-16">
      <div class="mx-auto">
        <img src="../assets/img/static/redirecting.png" width="90" />
      </div>
      <p class=" text-themeColor text-2xl text-center font-bold">
        少々お待ちください
      </p>
      <p class="text-center my-15">
        Google認証の応答を待っています。数分経っても画面が遷移しない場合は、再読み込みしてください。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '~/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'

export default {
  name: 'Callback',
  components: { Header, VerticalTitle }
}
</script>

<style></style>
