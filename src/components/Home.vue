<template>
<div>
    <h1>T C C - GAMIFICAÇÃO </h1>
    <h2>Usuário: {{usuario}}     Pontos: {{pontos}}     Nível: {{nivel}}|</h2>
    <div id="botoes">
        <b-button variant="outline-dark" v-b-modal.modal-1>Nível 1</b-button><br><br>
        <b-button variant="outline-dark" v-b-modal.modal-2>Nível 2</b-button><br><br>
        <b-button variant="outline-dark" v-b-modal.modal-6>RANKING</b-button>
    </div>
    <b-modal id="modal-1" size="xl" title="Nivel1">
        <PaginaPrincipal></PaginaPrincipal>
    </b-modal>
    <b-modal id="modal-2" title="Nivel2">
        <Atv2></Atv2>
    </b-modal>
    <b-modal id="modal-6" title="Ranking">
        <Ranking></Ranking>
    </b-modal>
</div>
</template>
<script>
import PaginaPrincipal from "@/components/desafios_nivel_1/pagina-principal.vue"
//import Num from  "@/components/desafios_nivel_1/Num.vue";
import atv2 from  "@/components/desafios_nivel_1/Atv-2.vue";
import Ranking from  "@/components/Ranking.vue";

export default{
    components: { PaginaPrincipal, Ranking, atv2 },
    data(){
                return{
                    usuario : "DANIEL",
                    pontos : 0,
                    nivel : 1,
                }
            },
}
</script>
<style>
    #botoes{
        float: inline-end       ;
    }
</style>