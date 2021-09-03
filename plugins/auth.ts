import firebaseApp from 'firebase'
import firebase from '~/plugins/firebase'
import FieldValue = firebaseApp.firestore.FieldValue

export default ({
  app,
  redirect,
  store
}: { app: any, redirect: any, store: any }) => {
  app.router.afterEach((to: any) => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const data = await firebase.firestore().collection('users').doc(user.uid).get()
        if (data.exists) {
          await firebase.firestore().collection('users').doc(user.uid).update({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            emailVerified: user.emailVerified,
            updatedAt: FieldValue.serverTimestamp()
          })
        } else {
          await firebase.firestore().collection('users').doc(user.uid).set({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            emailVerified: user.emailVerified,
            createdAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp()
          })
        }

        store.commit('user/setUser', user)

        if (to.name === 'login') {
          redirect('/mypage')
        }
      }
    })
  })
}
