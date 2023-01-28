<template>
  <div v-if="mostrar">
    <h1 v-if="!pokemonCorrecto">Espere por favor......</h1>
    <div v-else>

      <PokemonImg :showPokemon="mostrarPokemon" :idPokemon=pokemonCorrecto.id></PokemonImg>
      <!--$event representa al objeto enviado en la segunda posicion del evento hijo ValidarRespuesta-->
      <PokemonOpts :pokemons="pokemonArr" @seleccionadoPokemon="validarRespuesta($event)"></PokemonOpts>
    </div>
  </div>

  <div v-if="mostrarMensaje">
    <div v-if="RCorrecto">
      <h1>Respuesta Correcta</h1>
      <button @click="reiniciar">Reiniciar Juego</button>


    </div>

    <div v-if="!RCorrecto">
      <h1>Respuesta Incorrecta</h1>
      <button @click="reiniciar">Reiniciar Juego</button>


    </div>

  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOpts from "../components/PokemonOpts.vue";
import obtenerPokemonsFachada from '../js/obtenerPokemons.js'
export default {

  components: {
    PokemonImg,
    PokemonOpts,
  },

  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      mostrarPokemon: false,
      mostrarMensaje: false,
      RCorrecto: false,

      mostrar:true
    }
  },
  //En los metodos del ciclo de vida no ahce falta ponerle el await
  mounted() {
    this.cargaPokemonInicial()

  },

  methods: {
    async cargaPokemonInicial() {
      console.log('mount')
      const vec = await obtenerPokemonsFachada()
      console.log('desde pagina principal')
      console.log(vec)
      this.pokemonArr = vec

      const numero = Math.floor(Math.random() * 4)
      console.log(numero)

      this.pokemonCorrecto = this.pokemonArr[numero]

    },

    validarRespuesta(pokSeleccionadoHijo) {
      console.log("Prueba evento")
      console.log(pokSeleccionadoHijo)
      this.mostrarPokemon = true

      const idSeleccionado = pokSeleccionadoHijo.idPoke


      if (idSeleccionado == this.pokemonCorrecto.id) {
          this.mostrarMensaje=true
          this.RCorrecto = true
          this.mostrarPokemon =true

          console.log("Correcto")
      }else{
        this.mostrarMensaje=true
        this.RCorrecto =false
        this.mostrar=false
      }
    },
    reiniciar() {
      this.mostrarPokemon = false
      this.cargaPokemonInicial()
      this.mostrarMensaje=false
      this.mostrar=true
      console.log("Incorrecto")
    }




  },

};
</script>

<style>

</style>