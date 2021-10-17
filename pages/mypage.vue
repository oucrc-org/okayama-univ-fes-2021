<template>
  <div>
    <h1>ログインしました</h1>
    <P>こんにちは、{{ $store.state.auth.user.name }}さん</P>
    <P>accessToken: {{ $auth.getToken('google') }}</P>
    <P>refreshToken: {{ $auth.getRefreshToken('google') }}</P>
    <button @click="logout">
      ログアウト
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  middleware: 'auth',
  data: () => ({
    token: ''
  }),
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>

</style>
