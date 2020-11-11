<template>
  <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img
            src="@/assets/images/barbershoplogo.png"
            class="pt-4"
            style="cursor:pointer"
            @click="renderForms('')"
          />
        </div>
        <div class="col-md-12 cd text-center">
          <button class="btn-primary" @click="start = !start" v-if="start">Acessar</button>
          <div class="items d-flex" v-if="!start">
            <div class="item">
              <h2 id="cliente">Sou Cliente</h2>
              <img
                src="@/assets/images/cliente.svg"
                class="barber-to mt-3"
                 @click="renderForms('FormClient')"
              />
            </div>
            <div class="item">
              <h2 id="barbeiro">Sou Barbeiro</h2>
              <img src="@/assets/images/barbeiro.png" class="mt-3" @click="renderForms('FormBarber')"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  methods:{
    ...mapMutations(['renderForm']),
    renderForms(value){
    this.renderForm(value)
    },
  }
};
</script>

<style scoped>
.item img:hover {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.barber-to {
  border-radius: 50%;
  background-color: #fff;
  border: 12px solid black;
  padding: 2rem;
  cursor: pointer;
}
#header {
  background: url("../../assets/images/fundo.jpg") no-repeat;
  background-size: cover;
}
#header .cd {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  flex-direction: column;
}
#header .cd button {
  width: 290px;
  height: 80px;
  font-weight: 900;
  font-size: 22px;
  cursor: pointer;
  outline: none !important;
  background-color: black;
  border: 6px solid #fff;
  text-transform: uppercase;
  border-radius: 5px;
  margin-top: -20vw;
  border-radius: 16px;
}
#header .cd button:hover {
  width: 290px;
  height: 80px;
  font-weight: 900;
  font-size: 22px;
  cursor: pointer;
  outline: none !important;
  background-color: #fff;
  border: 7px solid black;
  color: black;
  text-transform: uppercase;
  border-radius: 5px;
  margin-top: -20vw;
  border-radius: 16px;
}

#header .cd .item {
  flex-direction: row;
}
#header .cd .item img {
  width: 200px;
  margin: 0 100px;
  cursor: pointer;
}
#header .cd .item {
  padding: 2rem;
}
#header .cd .item h2 {
  color: #fff;
  font-weight: bold;
  background: black;
  padding: 1rem;
  border-radius: 16px;
  border: 9px solid #fff;
}
</style>