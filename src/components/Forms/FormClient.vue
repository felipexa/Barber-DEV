<template>
  <div class="container px-lg-5 px-2">
    <Panel class="py-5 px-4">
      <template #header>
        <h2 class="text-center">Marcar Horário</h2>
      </template>
      <form id="app" class="form-group" @submit.prevent="postNow">
        <div class="form-group">
          <h3>Insira o seu nome</h3>
          <InputText
            v-model="name"
            type="text"
            placeholder="Nome"
            id="name"
            name="name"
            required
          />
        </div>
        <div class="form-group">
          <h3>Insira o seu e-mail</h3>
          <InputText
            v-model="email"
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <h3>Insira o seu telefone</h3>
          <InputMask
            mask="(99) 99999-9999"
            v-model="telefone"
            placeholder="(DD) XXXX-XXXX"
            id="telefone"
            name="telefone"
            required
          />
        </div>
        <div class="form-group calendar">
          <h3>Selecione a data</h3>
          <Calendar
            id="time24"
            v-model="date"
            :showTime="true"
            :showIcon="true"
            showSeconds="true"
            required
          />
        </div>
        <div class="form-group">
          <h3>Selecione o seu barbeiro</h3>
          <Dropdown
            v-model="barbeiro"
            :options="barbeiroId"
            optionLabel="nome"
            placeholder="Selecione um barbeiro"
            required
          />
        </div>
        <div class="form-group">
          <Button type="submit" class="px-5">Marcar</Button>
        </div>
      </form>
    </Panel>
    <Dialog
      header="Hórario marcado com sucesso"
      :visible.sync="display"
      :style="{ width: '40vw' }"
    >
      <p class="p-m-0">
        Seu hórario está marcado para o dia {{ returnDate }}, com o barbeiro {{ barbeiro.nome }} as {{ returnHour}}
      </p>
      <template #footer>
        <Button label="FECHAR" icon="pi pi-check" @click="display = false" autofocus />
      </template>
    </Dialog>
  </div>
</template>

<script>
import moment from 'moment'
import axios from "axios";
export default {
  data() {
    return {
      barbeiroId: null,
      display: false,
      name: "",
      email: "",
      telefone: "",
      barbeiro: "",
      date: "Insira data e hórario do corte",
    };
  },
  watch: {
    display(value) {
      if (!value) {
        this.name = "";
        this.email = "";
        this.telefone = "";
        this.barbeiro = "";
        this.date = "Insira data e hórario do corte";
      }
    },
  },
  computed: {
    returnDate(){
      return moment(this.date).format('DD/MM/YYYY');
    },
    returnHour(){
      return moment(this.date).format('HH:mm');
    },
  },
  mounted() {
    axios
      .get("http://localhost:4000/rest/barbeiro/consultar")
      .then((response) => {
        console.log(response);
        this.barbeiroId = response.data;
      });
  },
  methods: {
    postNow() {
      console.log(this.barbeiro);
      axios
        .post("http://localhost:4000/rest/horario/inserir", {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
          nome: this.name,
          email: this.email,
          telefone: this.telefone,
          barbeiroId: this.barbeiro.id,
          data: this.date,
        })
        .then(() => {
          this.display = true;
        })
        .catch(() => {
          console.log("Erro");
        });
    },
  },
};
</script>

<style>
.calendar .p-button.p-button-icon-only {
  width: 2.357rem;
  padding: 0.8rem 0;
  margin-top: 0;
  position: relative;
}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>