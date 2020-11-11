<template>
  <div class="view-router">
    <component :is="componentForms" />
  </div>
</template>
<script>
import FormBarber from "@/components/Forms/FormBarber.vue";
import FormClient from "@/components/Forms/FormClient.vue";
export default {
  components: { FormBarber, FormClient },
  computed: {
      componentForms() {
         return this.$store.state.showForm;
      }
  },
};
</script>
<style scoped>
</style>