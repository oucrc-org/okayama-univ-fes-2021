<template>
  <div class="container mx-auto px-3 py-8">
    <Header title="応募フォーム" colors="bg-themeColor test-white" />
    <form class="flex flex-col gap-y-6 py-8" action="" method="post">
      <Textinput id="name" label="名前" placeholder="例:岡大太郎" />
      <Textinput id="address" label="住所" placeholder="例:岡山市北区〇〇" />

      <SubmitButton label="応募" />
    </form>
  </div>
</template>

<script lang="ts">
import Header from '~/components/layouts/Header.vue'
import SubmitButton from '~/components/templates/form/SubmitButton.vue'
import Textinput from '~/components/templates/form/Textinput.vue'
export default {
  components: { Textinput, SubmitButton, Header }
}
</script>

<style></style>
