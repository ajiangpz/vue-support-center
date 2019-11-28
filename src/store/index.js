import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null
  },
  mutations: {
    SET_USER(state,playload){
      state.user=playload.username
    }
  },
  actions: {
  },
  modules: {
  }
})
