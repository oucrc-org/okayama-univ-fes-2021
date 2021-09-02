import { Context } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'

export default ({ store }: Context) => {
  createPersistedState({
    key: 'oufes-2021',
    storage: window.sessionStorage
  })(store)
}
