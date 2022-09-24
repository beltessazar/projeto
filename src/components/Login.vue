<template>
    <div>
      <h2> PROJETO TCC</h2>
      <h2>GAMIFICAÇAO</h2>
      <h1>Login</h1>
      <div id="formulario">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Digite seu email aqui"
          required
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Digite seu nome"
          required
        ></b-form-input>
      </b-form-group> -->

      <b-form @submit.stop.prevent>
        <label for="text-password">Senha</label>
        <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
      </b-form>
      <!-- <b-form @submit.stop.prevent>
        <label for="text-password">Repita sua senha</label>
        <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
      </b-form> -->
      <br>
      <b-button type="submit" variant="primary">Entrar</b-button><br><br>
      <a href="">Cadastrar-se</a> <br><br>
<br>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
    </div>
</template>
<script>
 export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style>
@font-face {
    font-family: 'fonte-um';src: url('../fonts/wwDigital.ttf')/*Para navegadores Internet Explorer*/;font-weight: normal;font-style: normal;
    }
@font-face {
    font-family: 'fonte';src: url('../fonts/wwDigital.ttf') /*Para os demais navegadores*/;font-weight: normal;font-style: normal;
    }
h1, h2{
    font-family: 'fonte';
}
#formulario{
  width: 40%; 
  margin-left: 30%; 
}
</style>