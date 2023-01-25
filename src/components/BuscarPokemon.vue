<template>
  <img
    v-bind:src="pokemonImagen"
    v-if="pokemonImagen"
    alt="No se puede visualizar"
  />
  <div class="fondo-oscuro">
    <div class="container">
      <div>
        <input
          type="text"
          v-model="pokemonNombre"
          placeholder="Ingrese el nombre del pokemon"
        />
        <button v-on:click="buscarPokemon(pokemonNombre)">Buscar</button>
      </div>
      <div>
        <h2>ID: </h2>
        <h3>{{ pokemonID }}</h3>
      </div>
      <div>
        <h2>Nombre:</h2>
        <h3>{{ pokemonNombre }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonNombre: "",
      pokemonID: null,
      pokemonImagen: null,
    };
  },

  methods: {
    async consumirAPI(id) {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(
        (r) => r.json()
      );
      return data;
    },

    async buscarPokemon(nombre) {
      for (let i = 1; i <= 600; i++) {
        const { name, id } = await this.consumirAPI(i);
        if (name == nombre) {
          this.pokemonID = id;
          await this.obtenerPokemonImg(id);
        }
      }
    },

    async obtenerPokemonImg(id) {
      const imagen =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        id +
        ".svg";
      this.pokemonImagen = imagen;
    },
  },
};
</script>

<style>
img,
.fondo-oscuro {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0px;
  top: 0px;
}
.fondo-oscuro {
  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  display: grid;
  position: absolute;
  top: 50%;
  left: 40%;
  margin: auto 15px;
}

input {
  width: 250px;
}

h2{
    color: red;
}
h3{
    color: white;;
}
</style>