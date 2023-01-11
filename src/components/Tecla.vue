<template>
  <button class="teclas" v-on:click="accion(valor, calc, reset)">
    {{ valor }}
  </button>
</template>

<script>
export default {
  name: "Tecla",
  props: {
    valor: String,
    calc: Boolean,
    reset: Boolean,
  },

  data() {
    return {
      valor: this.valor,
      calc: this.calc,
      reset: this.reset,
    };
  },

  methods: {
    presionar(n) {
      var resultado = document.getElementById("resultado").value;
      if (resultado != "0" || isNaN(n))
        document.getElementById("resultado").value = resultado + n;
      else document.getElementById("resultado").value = n;
    },
    calcular() {
      var resultado = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = resultado;
    },
    resetear() {
      document.getElementById("resultado").value = 0;
    },

    accion(val, c, res) {
      if (c == true) {
        this.calcular();
        console.log("cal");
      } else if (res == true) {
        this.resetear();
        console.log("res");
      } else {
        this.presionar(val);
        console.log("pres");
      }
    },
  },
};
</script>

<style>
.teclas {
  width: 70px;
  height: 70px;
}
</style>