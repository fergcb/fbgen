import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    signin (state, payload) {
      state.user = payload.user
    },
    signout (state) {
      state.user = null
    },
  },
})
