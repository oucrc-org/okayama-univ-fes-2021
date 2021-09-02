const state = () => ({
  user: null
})

const getters = {
  uid (state: any) {
    if (state.user && state.user.uid) {
      return state.user.uid
    } else {
      return null
    }
  },

  user (state: any) {
    return state.user
  },

  isAuthenticated (state: any) {
    return !!state.user && !!state.user.uid
  }
}

const mutations = {
  setUser (state: any, user: any) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
