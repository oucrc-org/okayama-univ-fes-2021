<template>
  <div v-if="!isLoading" class="py-8 w-screen flex flex-col justify-center items-center">
    <button@click="signInWithGoogleRedirect" v-if="!isLoading" id="button-login-google" class="mx-auto" />
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
#button-login-google {
  background-image: url(@/assets/img/button_login_google_without_shadow.png);
  width: 194px;
  height: 43px;
  background-size: 194px 43px;
  @apply shadow-md transition-shadow duration-300 rounded-sm;
}

#button-login-google:hover {
  @apply shadow-lg;
}
</style>
