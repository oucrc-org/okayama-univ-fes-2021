<template>
  <div
    class="py-8 w-screen flex flex-col justify-center items-center"
    v-if="!isLoading"
  >
    <a
      id="button-login-google"
      class="cursor-pointer inline-block mx-auto"
      v-if="!isLoading"
      @click="signInWithGoogleRedirect"
    >
      <img
        src="@/assets/img/button_login_google.png"
        width="206px"
        height="55px"
      />
    </a>
  </div>
</template>

<script>
import firebase, { googleProvider } from "~/plugins/firebase";

export default {
  name: "Login",
  middleware: "skipLogin",
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    this.isLoading = false;
  },
  methods: {
    signInWithGoogleRedirect() {
      firebase.auth().signInWithRedirect(googleProvider);
      this.isLoading = true;
    }
  }
};
</script>

<style scoped></style>
