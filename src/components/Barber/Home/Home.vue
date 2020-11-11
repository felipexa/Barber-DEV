<template>
  <div class="tela-inicial">
    <div class="row ">
      <div class="col-md-6 py-5 pr-5 px-2">
        <Card>
          <template slot="title">
            <div class="d-flex align-items-center">
              <img
                alt="user header mx-3"
                src="../../../assets/images/agenda.png"
              />
              <label class="ml-2 mb-0">Agenda </label>
            </div>
          </template>
          <template slot="content">
            Tenho um maior controle da sua agenda, clique em entrar para
            verificar quais são os clientes que você irá atender hoje
          </template>
          <template slot="footer">
            <Button icon="pi pi-check" label="Entrar" @click="Render('List')"/>
          </template>
        </Card>
        <Card class="my-5">
          <template slot="title">
            <div class="d-flex align-items-center">
              <img
                alt="user header mx-3"
                src="../../../assets/images/lista.png"
              />
              <label class="ml-2 mb-0">Lista dos barbeiros </label>
            </div>
          </template>
          <template slot="content">
            Tenho um maior controle dos barbeiros que possuem acesso ao sistema,
            clique em entrar para verificar quais são eles
          </template>
          <template slot="footer">
            <Button icon="pi pi-check" label="Entrar" @click="Render('List')" />
          </template>
        </Card>
      </div>
      <div class="col-md-6 py-5 px-2 ">
        <Card>
          <template slot="title">
            <div class="d-flex align-items-center">
              <img
                alt="user header mx-3"
                src="../../../assets/images/cadastro.png"
              />
              <label class="ml-2 mb-0">Adicionar novo usuário </label>
            </div>
          </template>
          <template slot="content">
            Tenho um maior controle da sua agenda, clique em entrar para
            verificar quais são os clientes que você irá 
          </template>
          <template slot="footer">
            <Button icon="pi pi-check" label="Entrar"  @click="Render('NewUser')" />
          </template>
        </Card>
        <Card class="my-5">
          <template slot="title">
            <div class="d-flex align-items-center">
              <img alt="user header mx-3" src="../../../assets/images/agendar.svg" />
              <label class="ml-2 mb-0">Marcar horário </label>
            </div>
          </template>
          <template slot="content">
            Tenho um maior controle dos barbeiros que possuem acesso ao sistema,
            clique em entrar para verificar quais são eles
          </template>
          <template slot="footer">
            <Button icon="pi pi-check" label="Entrar" @click="Render('Mark')"/>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods:{
    ...mapMutations(["showBarbeiro"]),
    Render(item){
      this.showBarbeiro(item);
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 36px;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
}
img {
  width: 28px;
}
</style>