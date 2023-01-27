<template>

  <h1 v-if="!pokemonCorrecto">Espere por favor......</h1>
  <div v-if="pokemonCorrecto">
   
    <PokemonImg :showPokemon="mostrarPokemon" :idPokemon=pokemonCorrecto.id></PokemonImg>
    <PokemonOpts :pokemons="pokemonArr"></PokemonOpts>
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
      mostrarPokemon:false
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

    }
  },

};
</script>

<style>

</style>