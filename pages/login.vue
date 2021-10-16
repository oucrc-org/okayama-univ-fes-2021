<template>
  <div>
    <h1>ログイン画面</h1>
    <button @click="googleAuthenticate">
      Google
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    googleAuthenticate () {
      this.$auth.loginWith('google')
    }
  }
}
</script>

<style scoped>

</style>
