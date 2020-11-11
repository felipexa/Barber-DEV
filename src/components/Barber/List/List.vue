<template>
  <div class="list-barber">
      <h2 class="pb-4 list_title text-uppercase">Lista de barbeiros cadastrados no sistema </h2>
    <table class="table table-dark ">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">CPF</th>
          <th scope="col">E-mail</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listaUsers" :key='item'>
          <th scope="row">{{item.id}}</th>
          <td>{{item.nome}}</td>
          <td>{{item.cpf}}</td>
          <td>{{item.email}}</td>
          <td style="cursor:pointer">AGENDA</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    axios
      .get("http://localhost:4000/rest/barbeiro/consultar")
      .then(response => {
        this.listaUsers = response.data;
        console.log(response)
      });
  },
  data() {
    return {
      listaUsers: [],
    };
  },
};
</script>

<style>
.list-barber{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: -80px;
    flex-direction: column;
}
h2{
  font-weight: 900;
}
.table-dark {
    color: #fff;
    background-color: black;
}
</style>