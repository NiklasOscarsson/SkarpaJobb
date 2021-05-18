import Vuex from 'vuex'

import mutate from './mutations.js'
import action from './actions.js'
import getter from './getters.js'


const store = new Vuex.Store({
  state(){
    return {
      elever: 1,
      lärare: 1,
      företag: 1,

      user:{}

    }
  },
  mutations: mutate,
  actions: action,
  getters: getter
})

export default store