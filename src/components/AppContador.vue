<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Este es mi componente principal!!!</h1>
  <Contador titulo="Estudiante" v-bind:inicio="101" />
    <Contador titulo="test" :inicio="200" />
  <!--Directiva vbind interpreta como número-->
</template>

<script>
import Contador from "./components/Contador.vue";

export default {
  name: "AppContador",
  components: {
    Contador,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
