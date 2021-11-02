<template>
  <div class="container max-w-lg mx-auto px-3 py-8">
    <VerticalTitle text="DONE" colors="text-gray-200" class="-z-10" />
    <Header title="応募完了" colors="bg-themeColor text-white" />
    <div class="flex flex-col gap-y-16 my-5">
      <div class="mx-auto">
        <img src="~/assets/img/static/done.png" width="170" />
      </div>
      <div class="text-themeColor text-center text-2xl font-bold">
        応募が完了しました！
      </div>
      <p class="text-center my-15">
        ご応募ありがとうございます。内容に誤りがあった場合や、応募する景品を変更したい場合は、再度応募することで上書きすることができます。
      </p>
    </div>
    <div class="text-center">
      <a href="/">
        <p class="mt-20 mb-5">
          <RoundedButton text="トップに戻る →" class="border-themeColor text-white bg-themeColor cursor-pointer" />
        </p>
      </a>
      <a href="/quiz/form">
        <p>
          <RoundedButton text="修正する" class="border-themeColor bg-white text-themeColor cursor-pointer" />
        </p>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '~/components/layouts/Header.vue'
import VerticalTitle from '~/components/layouts/VerticalTitle.vue'
import RoundedButton from '~/components/templates/parts/RoundedButton.vue'

export default {
  name: 'Thankyou',
  components: {
    Header,
    VerticalTitle,
    RoundedButton
  }
}
</script>

<style></style>
