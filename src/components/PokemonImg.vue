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
    showPokemon: Boolean,
    idPokemon: {
      type: Number,
      requered: false,
      default: 1,
    },
  },
  data() {
    return {
      showPokemon: this.showPokemon,
      idPokemon: this.idPokemon,
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

.pokemon-container {
  height: 250px;
  
}

img {
 
  height: 200px;
  
  -webkit-user-drag: none;
}
</style>