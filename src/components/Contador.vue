<template>
  <h1>Mi primer componente!!!</h1>
  <h2>{{ valorTitulo }}</h2>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <!-- <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p> -->
  <div>
    <button v-on:click="decrementar">-1</button>
    <button v-on:click="incrementar">+1</button>
  </div>
</template>

<script>
export default {
  //Option API-> todo se declara por ociones como el name, etc
  //1. Forma básica
  //props: ["titulo", "inicio"],

  /*2. Forma correcta
  props:{
    titulo:String,
    inicio:Number
  },*/

  //3. Forma avazada
  props: {
    titulo:String,
    inicio:{
      type:Number,
      requered:false,
      default:67, 
      validator(value){
        return value>0
      }
    }
  },
  name: "Patito",
  data() {
    return {
      numero: this.inicio,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Se calcula el cuadrado");
      return this.numero * this.numero;
    },
    incrementar() {
      var cadena = "Joselyn";
      cadena = cadena + "Moncayo";
      //this.numero++;
      this.numero = this.numero + 1;
    },
    decrementar() {
      //this.numero--;
      this.numero = this.numero - 1;
    },
  },
  // propiedades computadas utilizan memeoria caché, siempre deben rtornar un valor
  computed: {
    obtenerCuadradoComputado() {
      console.log("Se calcula el cuadrado computado");
      return this.numero * this.numero;
    },
    valorTitulo() {
      return this.titulo || "Valor por defecto...";
    },
  },
};
</script>

<style>
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  margin: 0px 5px;
  cursor: pointer;
  padding: 5px 20px;
}
button:hover {
  background-color: #368056;
}
</style>