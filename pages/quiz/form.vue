<template>
  <div class="container mx-auto px-3 py-8">
    <Header title="応募フォーム" colors="bg-themeColor test-white" />
    <form class="flex flex-col gap-y-6 py-8" action="" method="post">
      <TextInput id="name" label="名前" name="name" placeholder="例:岡大太郎" />

      <TextInput id="address" label="住所" name="address" placeholder="例:岡山市北区〇〇" />

      <SelectInput id="presents" label="応募するプレゼント" :options="presents" />

      <SubmitButton label="応募" />
    </form>
  </div>
</template>

<script lang="ts">
import Header from '~/components/layouts/Header.vue'
import SubmitButton from '~/components/templates/form/SubmitButton.vue'
import TextInput from '~/components/templates/form/TextInput.vue'
import SelectInput from '~/components/templates/form/SelectInput.vue'

export default {
  components: { SelectInput, TextInput, SubmitButton, Header },
  asyncData () {
    return new Promise((resolve) => {
      resolve({
        success: true,
        data: [
          {
            id: 1,
            name: 'Nintendo Switch',
            image_path: '',
            required_stamps: 6,
            stock: 1
          },
          {
            id: 2,
            name: '電子書籍リーダー',
            image_path: '',
            required_stamps: 5,
            stock: 1
          },
          {
            id: 3,
            name: 'ワイヤレスイヤフォン',
            image_path: '',
            required_stamps: 5,
            stock: 1
          }
        ]
      })
    }).then((res) => {
      console.log(res.data)
      return {
        presents: res.data
      }
    })
  },
  data () {
    return {
      presents: []
    }
  }
}
</script>

<style></style>
