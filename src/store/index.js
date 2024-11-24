import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0,
  },

  mutations: {
    incrementar(state){
      return state.contador++;
    },
    disminuir(state){
      return state.contador--;
    },
  }, 
  
})
