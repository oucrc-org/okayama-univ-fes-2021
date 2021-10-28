<template>
  <div class="container mx-auto px-3 py-8">
    <Header title="応募フォーム" colors="bg-themeColor test-white" />
    <form
      class="flex flex-col gap-y-6 py-8"
      action="https://fb48-101-141-95-93.ngrok.io/api/present-form"
      method="post"
    >
      <!--suppress JSUnresolvedVariable -->
      <input type="hidden" name="google_id" :value="$auth.getToken('google')">

      <TextInput id="name" label="名前" name="name" placeholder="例:岡大太郎" />

      <TextInput id="address" label="住所" name="address" placeholder="例:岡山市北区〇〇" />

      <SelectInput id="presents" label="応募するプレゼント" :options="presents" :stamp-number="stampNumber" />

      <SubmitButton label="応募" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import SubmitButton from '~/components/templates/form/SubmitButton.vue'
import TextInput from '~/components/templates/form/TextInput.vue'
import SelectInput from '~/components/templates/form/RadioInput.vue'
import presentFormData from "~/assets/data/present-form-data";

const baseUrl = 'https://35cc-101-141-95-93.ngrok.io'

export default Vue.extend({
  components: { SelectInput, TextInput, SubmitButton, Header },
  asyncData (context: Context) {
    // debug
    return presentFormData

    const { app } = context
    return app.$axios.get(
      `${baseUrl}/api/presents`,
      {
        headers: {
          'Access-Token': app.$auth.getToken('google').replace('Bearer ', '')
        }
      }
    ).then((presents) => {
      return app.$axios.get(
        `${baseUrl}/api/user`,
        {
          headers: {
            'Access-Token': app.$auth.getToken('google').replace('Bearer ', '')
          }
        }
      ).then((user) => {
        return {
          presents: presents.data.data,
          stampNumber: user.data.stamps.length
        }
      })
    })
  },
  data () {
    return {
      presents: [],
      stampNumber: 0
    }
  }
})
</script>

<style></style>
