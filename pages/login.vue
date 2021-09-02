<template>
  <div v-if="!isLoading">
    <button v-if="!isLoading" @click="signInWithGoogleRedirect">
      ログイン
    </button>
  </div>
</template>

<script>
import firebase, { googleProvider } from '~/plugins/firebase'

export default {
  name: 'Login',
  middleware: 'skipLogin',
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.isLoading = false
  },
  methods: {
    signInWithGoogleRedirect () {
      firebase.auth().signInWithRedirect(googleProvider)
      this.isLoading = true
    }
  }
}
</script>

<style scoped>

</style>
