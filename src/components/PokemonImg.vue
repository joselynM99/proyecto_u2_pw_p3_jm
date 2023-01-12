<template>
  <h1>¿Quién es este pokemon?</h1>
  <div class="pokemon-container">
    <img
      v-if="true"
      class="ocultar-pokemon"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
    />
    <img
      v-if="true"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      idPokemon: 1,
      mostrarPokemon: true,
    };
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