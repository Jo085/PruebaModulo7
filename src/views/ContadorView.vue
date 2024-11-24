<script>
import { mapState } from 'vuex';
export default{
  name:'ContadorView',

  computed:{
     ...mapState(['contador']),     
     },
  
  methods:{
    botonIncrementar() {
      this.$store.commit('incrementar') // Commit ejecuta la mutación
    },

    botonDisminuir() {
      this.$store.commit('disminuir') // Commit ejecuta la mutación
    }
  },      
};
</script>

<template>
  <div class="ejercicio1">
    <h1>Ejercicio 1 - Manejo del estado con Vuex</h1>
    <h3>Contador: <span class="valorContador"> {{contador}} </span></h3>
    <div>
      <button class="btnIncrementar" @click="botonIncrementar">+1</button>
      <button class="btnDisminuir" @click="botonDisminuir">-1</button>
    </div>
  </div>
</template>

<style scoped>
.valorContador{
    color: #42B983;
}

button{
    width: 7rem;
    height: 2rem;        
    border-color: white;
    margin: 5px;
    border-radius: 10px;
}

.btnIncrementar{
  background-color: rebeccapurple;
  color: yellow;
}
.btnDisminuir{
  background-color: yellow;
  color:rebeccapurple;
}
</style>