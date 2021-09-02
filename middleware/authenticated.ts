export default ({
  store,
  redirect
}: { store: any, redirect: any }) => {
  if (!store.getters['user/isAuthenticated']) {
    return redirect('/login')
  }
}
