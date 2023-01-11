<template>
  <input id="resultado" type="text" />
  <table class="calculadora">
    <tr>
      <td><Tecla valor="1" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="2" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="3" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="+" :reset="false" :calc="false"></Tecla></td>
    </tr>
    <tr>
      <td><Tecla valor="4" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="5" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="6" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="-" :reset="false" :calc="false"></Tecla></td>
    </tr>
    <tr>
      <td><Tecla valor="7" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="8" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="9" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="x" :reset="false" :calc="false"></Tecla></td>
    </tr>
    <tr>
      <td><Tecla valor="0" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="/" :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="." :reset="false" :calc="false"></Tecla></td>
      <td><Tecla valor="=" :reset="false" :calc="true"></Tecla></td>
    </tr>
    <tr>
      <td><Tecla valor="C" :reset="true" :calc="false"></Tecla></td>
    </tr>
  </table>
</template>

<script>
import Tecla from "./components/Tecla.vue";
export default {
  name: "App",
  components: {
    Tecla,
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

body {
  text-align: center;
}

.calculadora {
  margin: 15px auto;
}

#resultado {
  width: 400px;
  height: 50px;
}
</style>
