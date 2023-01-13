<template>
  <PokemonImg :showPokemon=true :idPokemon="556"></PokemonImg>
  <PokemonOpts></PokemonOpts>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOpts from "../components/PokemonOpts.vue";

export default {
    
  components: {
   PokemonImg,
   PokemonOpts,
  },
};
</script>

<style>
</style>