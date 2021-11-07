<template>
  <div>
    <div class="container  max-w-screen-lg mx-auto py-8">
      <Header :title="error.statusCode + ' エラー'" colors="bg-themeColor text-white" />
      <div class="flex flex-col gap-y-6 my-12">
        <div class="mx-auto">
          <img v-if="error.statusCode === 404" src="@/assets/img/error/error_icon_1.png" class="w-60" alt="エラー" />
          <img v-else src="@/assets/img/error/error_icon_2.png" class="w-60" alt="エラー" />
        </div>
        <p v-if="error.statusCode === 404" class="text-themeColor text-2xl text-center font-bold mt-8">
          お探しのページが<br class="md:hidden">見つかりませんでした
        </p>
        <p v-else class="text-themeColor text-2xl text-center font-bold mt-8">
          エラーが発生しました
        </p>
        <p class="text-center px-10">
          エラーが頻発する場合は
          <a
            href="https://twitter.com/messages/compose?recipient_id=551682037"
            class="border-b"
            target="_blank"
          >こちら</a>
          までご連絡ください。
        </p>
      </div>

      <div class="text-center">
        <LinkTo to="/">
          <RoundedButton text="トップに戻る" class="border-themeColor bg-themeColor text-white" />
        </LinkTo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '~/components/layouts/Header.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
import RoundedButton from '~/components/templates/parts/RoundedButton.vue'

export default {
  components: {
    Header,
    LinkTo,
    RoundedButton
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style></style>
