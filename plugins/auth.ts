import firebase from '~/plugins/firebase'

export default ({
  app,
  redirect,
  store
}: { app: any, redirect: any, store: any }) => {
  app.router.afterEach((to: any) => {
    firebase.auth().onAuthStateChanged((user) => {
      store.commit('user/setUser', user)

      if (user && to.name === 'login') {
        redirect('/mypage')
      }
    })
  })
}
