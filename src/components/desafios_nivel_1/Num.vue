<template>
<div id="app">
  <h1>Variáveis</h1>
    <h2>Na programação, uma variável é um objeto (uma posição, frequentemente localizada na memória) 
    capaz de reter                 e representar um valor ou expressão</h2>
    <h3>Exemplos: </h3>
    <h3>x = 1</h3>
    <h3>y = "João"</h3>
    <h3>z = x</h3>
    <h3>Nestes exemplos a variavél 'x' guardao número '1', a variavél 'y' a palavra 'joão' e a variável 'z' o valor de 'x
    ' que no caso é '1'.</h3>
    <b-button variant="outline-primary">Próximo ></b-button>
      <Principal myName="Danielm">{{myName}}</Principal>
</div>
</template>
<script>
import Principal from  "@/components/desafios_nivel_1/pagina-principal.vue";
export default {
    name: 'Num',  
    components: {
   Principal
            }, 
}
</script>
<style>

</style>