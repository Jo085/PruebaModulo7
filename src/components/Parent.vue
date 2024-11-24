<script>
import Child  from '../components/Child.vue'
export default{
name:'Parent',
    data(){
        return{
            textoRecibido: "",
        }
    },
    components:{
        Child
    },

    methods:{
        recibirTexto(textoEnviado){            
            this.textoRecibido = textoEnviado;
        }
    },
};
</script>

<template>
    <div class="parent">  
      <h2> Padre</h2>    
      <h3>Texto recibido : <span>{{ textoRecibido }} </span></h3>
      <Child @enviarTexto="recibirTexto"/>
    </div>
</template>

<style scoped>
span{
    color: #42B983;
}
</style>