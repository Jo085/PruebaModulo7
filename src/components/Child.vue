<script>
export default{    
   name:'Child',
   data(){
        return{
            textoEnviado: "",
        }
    },

    methods:{
        enviartexto(){
            this.$emit('enviarTexto', this.textoEnviado);
            this.textoEnviado = "";
        }
    },    
};
</script>

<template>
    <div class="child">
        <h2>Hijo</h2>       
            <input  type="text" v-model="textoEnviado" name="inputHijo" placeholder="Enviar texto al padre">
            <button  @click="enviartexto">Enviar</button>        
    </div>    
</template>

<style scoped>
.child{     
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input{
  width: 10rem;
  height: 1.5rem;  
}

button{
    width: 7rem;
    height: 1.7rem;
    margin-top: 1rem;
    background-color: #42B983;
    color: white;
    border-radius: 10px;
}
</style>