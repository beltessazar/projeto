<template>
    <div>
        
        <div>
            <atv1 v-if="atividade=='atv1'"></atv1>
            <atv2 v-if="atividade=='atv2'"></atv2>
            {{atividade}}
            <b-button id="b-button" @click="proximaAtividade()" >Avançar</b-button>       
    </div>
    </div>
    </template>
    <script>
    
    import atv1 from  "@/components/desafios_nivel_1/Atv-1.vue";
    import atv2 from  "@/components/desafios_nivel_1/Atv-2.vue";


    export default{
        name: 'Principal',
            components: {
      atv1,atv2
            },
            
            data(){
                return{
                    atividade : "",
                    x : 1,
                }
            },
            methods:{
                
                proximaAtividade(){
                    this.atividade = "atv"+this.x;
                    this.x = this.x+1;
                },                
            },          
   
    }
    

    </script>
    <style>
  
    </style>