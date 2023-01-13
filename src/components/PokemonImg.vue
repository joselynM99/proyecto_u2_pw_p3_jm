<template>
  <h1>¿Quién es este pokemon?</h1>
  <div class="pokemon-container">
    <img v-bind:class="mostrar" id="img" v-bind:src="obtenerImgPorId" />
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
      if (this.showPokemon=false) {
        return "ocultar-pokemon"
      }else{
        return " "
      }
    },
  },
};
</script>

<style>
.ocultar-pokemon {
  filter: brightness(0);
}
.pokemon-container {
  height: 250px;
}

img {
  position: absolute;
  height: 200px;
  left: 45%;
  -webkit-user-drag: none;
}
</style>