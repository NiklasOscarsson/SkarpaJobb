import Vuex from 'vuex'

import mutate from './mutations.ts'
import action from './actions.ts'
import getter from './getters.ts'


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