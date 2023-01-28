<template>
  <h1>¿Quién es este pokemon?</h1>
  <div class="pokemon-container">

    <img v-if="!showPokemon" class="ocultar-pokemon" v-bind:src="obtenerImgPorId" alt="No se puede renderizar">
    <img v-if="true" v-bind:src="obtenerImgPorId" alt="No se puede renderizar">
  </div>
</template>

<script>
export default {
  props: {
    showPokemon:  {
      type: Boolean,
      requered: true,
      default: false,
    },
    idPokemon: {
      type: Number,
      requered: false,
      default: 0,
    },
  },
  data() {
    return {
     
    };
  },

  computed: {
    obtenerImgPorId() {
      return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.idPokemon +
        ".svg"
      );
    },
    mostrar() {
      if (this.showPokemon = false) {
        return "ocultar-pokemon"
      } else {
        return " "
      }
    },
  },
};
</script>

<style>
.ocultar-pokemon {
  filter: brightness(0);
  position: absolute;
}



img {
 
  height: 200px;  
  -webkit-user-drag: none;
}
</style>