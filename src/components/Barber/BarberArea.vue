<template>
  <div class="div">
    <div class="menu">
      <div class="logo d-flex align-items-center ">
        <img src="@/assets/images/barbershoplogo.png" class="logo"/>
        <span> BarberDev </span>
      </div>
      <div class="user-login d-flex align-items-center pr-5">
        <span>netolemes12@hotmail.com </span>
        <font-awesome-icon class=" icon-login" icon="user-circle" />
        <font-awesome-icon class="mr-3 icon-exit" icon="sign-out-alt" @click="Exit" />
      </div>
    </div>
    <Button
      icon="pi pi-arrow-right"
      @click="visibleLeft = true"
      class="p-mr-2"
    />
    <Sidebar :visible="visibleLeft" :baseZIndex="1000">
      <i class="pi pi-times close-x" @click="CloseAside"></i>
          <ul class="menu-wrapper m-0 p-2">
            <li class="menu-li px-1 pt-4" @click="Render('Home')">
              <font-awesome-icon class="mr-3 icons" icon="home" @click="Render('Home')"/>
              <a>Inicio</a>
            </li>
            <li class="menu-li px-1" @click="Render('NewUser')">
              <font-awesome-icon class="mr-3 icons" icon="user-edit" @click="Render('NewUser')"/>
              <a>Adicionar usuário</a>
            </li>
            <li class="menu-li px-1" @click="Render('List')">
              <font-awesome-icon class="mr-3 icons" icon="user-clock" @click="Render('List')"/>
              <a>Funcionários</a>
            </li>
            <li class="menu-li px-1" @click="Render('Mark')">
              <font-awesome-icon class="mr-3 icons" icon="clock" @click="Render('Mark')" />
              <a>Marcar horário</a>
            </li>
          </ul>
    </Sidebar>
    <div class="container">
      <div class="row">
        <div class="col-md-12 renderComponent">
          <component :is="$store.state.renderComponent" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Home from "./Home/Home.vue";
import Calendar from "./Calendar/Calendar.vue";
import NewUser from "./NewUser/NewUser.vue";
import Mark from "@/components/Forms/FormClient.vue";
import List from "./List/List.vue";
import { mapMutations} from 'vuex'
export default {
  components: { Home, Calendar, NewUser, Mark, List },
  data() {
    return {
      visibleLeft: false,
    }
  },
    methods: {
    ...mapMutations(['showBarbeiro']),
    CloseAside(){
    this.visibleLeft = false;
    },
    Exit() {
      this.$router.push("/");
    },
    Render(item) {
      this.showBarbeiro(item)
      this.visibleLeft = false;
    },
  },
};
</script>

<style  scoped>
.icons{
  font-size: 25px;
  cursor: pointer;
  color:black;
  font-weight: 900;
}
.logo span{
  padding-left: 14px;
  color: #ffff;
font-size: 22px;
}
.user-login span{
color: #ffff;
font-size: 18px;
padding-right: 14px;
}
.user-login .icon-login{
  font-size: 35px;
  cursor: pointer;
  color: #ffff;
}
.user-login .icon-exit{
  font-size: 40px;
  color: #ffff;
  padding-left: 14px;
  cursor: pointer;
}
.menu{
  width: 100%;
  background: black;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  z-index: 9;
}
.menu .logo{
  max-width: 65px;
}
ul li{
    list-style-type: none;
    padding-top: 44px;
}
ul li a {
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
}
ul li a:hover{
  font-size: 22px;
   
}
ul li:hover{
  text-decoration: underline;
}
.close-x{
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
}
.renderComponent{
  margin-top: 89px;
}
</style>
