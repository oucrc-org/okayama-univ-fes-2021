<template>
  <div>
    <p>
      {{ user.displayName }}さん
    </p>
    <button @click="logout">
      ログアウト
    </button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  name: 'MyPage',
  middleware: 'authenticated',
  computed: {
    user () {
      return this.$store.state.user.user ?? {}
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$store.commit('user/setUser', null)
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style scoped>

</style>
