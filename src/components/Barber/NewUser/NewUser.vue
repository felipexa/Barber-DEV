<template>
  <div class="container">
    <Panel class="py-5 px-4">
      <template #header>
        <h2 class="text-center">Adicionar barbeiro</h2>
      </template>
      <form id="app" class="form-group" @submit.prevent="postNow">
        <div class="form-group">
          <h3>Insira o seu nome</h3>
          <InputText
            v-model="name"
            type="text"
            placeholder="Nome"
            v-model.trim="name"
            id="name"
            name="name"
            required
          />
        </div>
        <div class="form-group ml-3">
          <h3>Insira o seu e-mail</h3>
          <InputText
            v-model="email"
            type="email"
            placeholder="E-mail"
            v-model.trim="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <h3>Insira o seu CPF</h3>
          <InputText
            v-model="cpf"
            type="text"
            placeholder="CPF"
            v-model.trim="cpf"
            id="cpf"
            name="cpf"
            required
          />
        </div>
        <div class="form-group ml-3">
          <h3>Insira uma senha</h3>
          <Password
            v-model="password"
            type="password"
            placeholder="Senha"
            v-model.trim="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div class="form-group mt-4 d-flex">
          <Button type="submit" class="px-5 mb-4">Cadastrar </Button>
        </div>
      </form>
    </Panel>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    console.log("oi");
    this.$toast.add({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted",
      life: 3000,
    });
  },
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      cpf: "",
      password: "",
      showModal: false,
    };
  },
  methods: {
    voltar() {
      console.log("erro");
    },
    postNow() {
      axios
        .post("http://localhost:4000/rest/barbeiro/inserir", {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
          nome: this.name,
          email: this.email,
          cpf: this.cpf,
          senha: this.password,
        })
        .then(() => {
          this.name = null;
          this.email = null;
          this.cpf = null;
          this.password = null;
          this.$toast.add({
            severity: "success",
            summary: "Success Message",
            detail: "Order submitted",
            life: 3000,
          });
        })
        .catch(() => {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "Message Content",
            life: 3000,
          });
        });
    },
  },
};
</script>

<style scoped>
#fromCliente h2 {
  font-size: 50px;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
  padding: 20px 0;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap row;
}
</style>