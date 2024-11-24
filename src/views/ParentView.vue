<script>
import Parent from '@/components/Parent.vue';
export default{
name:'ParentView',
   
    components:{
        Parent
    },
};
</script>

<template>
    <div class="ejercicio3">
      <h1>Ejercicio 3 - Comunicación entre componentes </h1>      
       <Parent/>
    </div>
</template>

<style scoped>
span{
    color: #42B983;
}
</style>