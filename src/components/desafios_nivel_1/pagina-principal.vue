<template>
    <div>
        
        <div>
            <h1>Video Explicativo</h1>
            <Num v-show="showUm===true">Atividade Um </Num>
            <Ndois v-show="showDois===true"></Ndois>
            <Ntres v-show="showTres===true"></Ntres>
            <b-button id="b-button" @click="mostrarAtv1()">Iniciar</b-button>
            {{atv="Daniel"}}
            
    </div>
    </div>
    </template>
    <script>
    
    import Num from  "@/components/desafios_nivel_1/Num.vue";
    import Ndois from  "@/components/desafios_nivel_1/Ndois.vue";
    import Ntres from  "@/components/Ntres.vue";

    export default{
        name: 'Principal',
            components: {
                Num,Ndois,Ntres
            },
            
            data(){
                return{
                    showUm : false,
                    showDois : false,
                    showTres : false,
                }
            },
            methods:{
                
                mostrarAtv1(){
                    this.showUm = true;
                },
                mostrarAtv2(){
                    
                    this.showUm = false;
                    this.showDois = true;
                },
                mostrarAtv3(){
                    this.showUm = false;
                    this.showDois = false;
                    this.showTres = true;
                },
            },          
   
    }
    

    </script>
    <style>
  
    </style>