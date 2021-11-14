<template>
  <div class="container max-w-lg mx-auto px-3 py-8">
    <Header title="応募フォーム" colors="bg-themeColor test-white" />
    <!-- 送信イベントはボタン側に移動させました -->
    <div v-if="stampNumber > 0">
      <form
        class="flex flex-col gap-y-6 py-8"
        @submit.prevent="submitForm"
      >
        <div class="grid grid-cols-2 gap-3">
          <TextInput
            name="family_name"
            autocomplete="family-name"
            label="姓 *"
            placeholder=""
            maxlength="80"
            :value="family_name"
            :on-change="(value) => family_name = value"
          />
          <TextInput
            name="given_name"
            autocomplete="given-name"
            label="名 *"
            placeholder=""
            maxlength="80"
            :value="given_name"
            :on-change="(value) => given_name = value"
          />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <TextInput
            name="family_name_kana"
            autocomplete="family-name-kana"
            label="セイ *"
            placeholder=""
            maxlength="80"
            :value="family_name_kana"
            :on-change="(value) => family_name_kana = value"
          />
          <TextInput
            name="given_name_kana"
            autocomplete="given-name-kana"
            label="メイ *"
            placeholder=""
            maxlength="80"
            :value="given_name_kana"
            :on-change="(value) => given_name_kana = value"
          />
        </div>

        <TextInput
          name=""
          type="email"
          label="Googleのメールアドレス *"
          :value="$store.state.auth.user.email"
          :readonly="true"
        />
        <TextInput
          name="secondary_email"
          type="email"
          autocomplete="email"
          label="予備のメールアドレス *"
          placeholder="例: XXXX@yahoo.co.jp"
          maxlength="80"
          :value="secondary_email"
          :on-change="(value) => secondary_email = value"
        />
        <TextInput
          name="tel"
          autocomplete="tel-national"
          type="tel"
          label="お電話番号 *"
          maxlength="80"
          :value="tel"
          :on-change="(value) => tel = value"
        />

        <TextInput
          name="postal_code"
          autocomplete="postal-code"
          label="郵便番号 *"
          placeholder="例: 7008530"
          maxlength="80"
          :value="postal_code"
          :on-change="(value) => postal_code = value"
        />
        <TextInput
          name="address"
          autocomplete="street-address"
          label="住所 *"
          placeholder="例: 岡山市北区〇〇"
          maxlength="80"
          :value="address"
          :on-change="(value) => address = value"
        />

        <SelectInput
          id="presents"
          label="応募するプレゼント *"
          :options="presents"
          :stamp-number="stampNumber"
          :value="present_id"
          :on-change="(value) => present_id = value"
        />

        <hr>

        <div class="form-control inline-block">
          <label class="cursor-pointer label justify-start">
            <input v-model="agreed" type="checkbox" class="checkbox mr-3">
            <span class="label-text">プライバシーポリシー・応募の際の注意点 を確認しました</span>
          </label>
        </div>

        <div class="flex gap-3 mb-3 justify-center">
          <!--suppress HtmlUnknownTarget -->
          <a href="/privacyPolicy" class="text-gray-500 text-sm font-semibold" target="_blank">プライバシーポリシー</a>
          <a href="#apply-notes" class="text-gray-500 text-sm font-semibold ml-4">応募の際の注意点</a>
        </div>

        <div>
          <div id="apply-notes" class="modal">
            <div class="modal-box">
              <ApplyNotes />
              <div class="modal-action">
                <a href="#" class="btn btn-accent">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button :disabled="!agreed" type="submit" class="w-full">
            <RoundedButton
              text="応募"
              class="text-white cursor-pointer"
              :class="!agreed ? 'bg-blue-300 border-blue-300 cursor-not-allowed': 'bg-themeColor border-themeColor'"
            />
          </button>
        </div>
      </form>
    </div>

    <div v-else class="text-center">
      <p class="mt-14 text-lg">
        スタンプ数が足りないため、応募できる景品がありません
      </p>

      <div class="mt-12">
        <LinkTo
          to="/"
          class="border-3 border-themeColor bg-themeColor inline-block font-medium text-center text-white text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
        >
          戻る
        </LinkTo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { Context } from '@nuxt/types'
import Header from '~/components/layouts/Header.vue'
import TextInput from '~/components/templates/form/TextInput.vue'
import SelectInput from '~/components/templates/form/RadioInput.vue'
import LinkTo from '~/components/templates/nuxt/LinkTo.vue'
import ApplyNotes from '~/components/pages/ApplyNotes.vue'
import IStamp from '~/assets/js/type/stamp/IStamp'
import RoundedButton from '~/components/templates/parts/RoundedButton.vue'

const baseUrl = process.env.BACKEND_API_URL

export default Vue.extend({
  components: {
    SelectInput,
    TextInput,
    Header,
    LinkTo,
    ApplyNotes,
    RoundedButton
  },
  middleware: 'auth',
  asyncData (context: Context) {
    const { app } = context
    return app.$axios.get(`${baseUrl}/presents`, {
      headers: {
        'Access-Token': app.$auth.getToken('google').replace('Bearer ', '')
      }
    }).then((presents) => {
      return app.$axios.get(
        `${baseUrl}/user`,
        {
          headers: {
            'Access-Token': app.$auth.getToken('google').replace('Bearer ', '')
          }
        }
      ).then((user) => {
        return {
          presents: presents.data.data,
          stampNumber: user.data.stamps.filter((stamp: IStamp) => stamp.has_stamp).length
        }
      })
    })
  },
  data () {
    return {
      presents: [],
      stampNumber: 0,
      agreed: false,

      family_name: '',
      given_name: '',
      family_name_kana: '',
      given_name_kana: '',
      secondary_email: '',
      tel: '',
      postal_code: '',
      address: '',
      present_id: ''
    }
  },
  head () {
    return {
      title: 'プレゼント応募'
    }
  },
  methods: {
    submitForm () {
      this.$axios.post(`${baseUrl}/present-form`,
        {
          family_name: this.family_name,
          given_name: this.given_name,
          family_name_kana: this.family_name_kana,
          given_name_kana: this.given_name_kana,
          email: this.$store.state.auth.user.email,
          secondary_email: this.secondary_email,
          tel: this.tel.replace('-', ''),
          postal_code: this.postal_code.replace('-', ''),
          address: this.address,
          present_id: this.present_id
        },
        {
          headers: {
            'Access-Token': (this as any).$auth.getToken('google').replace('Bearer ', '')
          }
        }
      ).then(() => {
        location.href = '/quiz/form/thankyou'
      }).catch(() => {
        alert('送信に失敗しました。再度ログインの上、ご応募ください。');
        (this as any).$auth.logout('google')
      })
    }
  }
})
</script>

<style></style>
