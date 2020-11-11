<template>
  <section class="home">
    <Header/>
    <Body/>
    <Footer/>
  </section>
</template>
<script>
import Header from "@/components/template/Header.vue";
import Body from "@/components/template/Body.vue";
import Footer from "@/components/template/Footer.vue";
export default {
    components: { Header, Body, Footer}
};
</script>