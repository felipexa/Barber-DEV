<template>
 <div class="container px-lg-5 px-2">
    <Panel class="py-5 px-4">
     <template #header>
        <h2 class="text-center">Acesso ao sistema</h2>
      </template>
    <form class="py-3 px-3" @submit.prevent="login">
      <div class="form-group text-center">
        <h3 class="mr-3">E-mail -</h3>
        <InputText type="text" placeholder="E-mail" v-model="email" required/>
      </div>
      <div class="form-group text-center">
         <h3 class="mr-3">Senha -</h3>
        <InputText type="password" placeholder="Senha" v-model="password" required/>
      </div>
      <div class="form-group text-center mt-4">
        <Button type="submit" class="px-5">Entrar</Button>
      </div>
    </form>
  </Panel>
 </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function () {
      let username = this.email
      let password = this.password
      this.$store.dispatch('login', { username, password })
      .then(() => {
        this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000})
        this.$router.push('/barberArea')
      })
      .catch(() => {
        this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
      })
    },
   
  },
};
</script>

<style scoped>
.form-group{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>