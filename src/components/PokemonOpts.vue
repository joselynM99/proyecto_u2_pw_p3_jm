<template >
  <div class="options-container">
      <ul>
        <!--Evento emit (emite un evento al padre), recibe los argumentos: nombre del evento, dato que se va a enviar  -->
          <li v-for="poke in pokemons" :key="poke.id" @click="$emit('seleccionadoPokemon', {idPoke:poke.id, inventado:20, nombre:poke.nombre})">{{ poke.nombre }}</li>
      </ul>
  </div>
</template>
<script>
export default {
  props: {
      pokemons: {
          type: Array,
          required: true
      }
  }, 
  methods: {
    imprimir(){
      console.log('Gracias')
    }
  },
}
</script>
<style >
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 250px;
  margin-top: 10px;
  cursor: pointer;
}

.options-container {
  justify-content: center;
  display: flex;
}
</style>