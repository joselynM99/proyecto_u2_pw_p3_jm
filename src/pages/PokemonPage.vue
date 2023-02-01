<template>
  <div v-if="mostrar">
    <h1 v-if="!pokemonCorrecto">Espere por favor......</h1>

    <div v-else>
      <div id="p">
        <h4 class="c">Pokemon número: {{ numPoke }}</h4>
        <h4 class="c">Intentos: {{ intentos }}</h4>
        <h4 class="c">Puntaje: {{ puntaje }}</h4>
      </div>

      <PokemonImg
        :showPokemon="mostrarPokemon"
        :idPokemon="pokemonCorrecto.id"
      ></PokemonImg>
      <!--$event representa al objeto enviado en la segunda posicion del evento hijo ValidarRespuesta-->
      <PokemonOpts
        :pokemons="pokemonArr"
        @seleccionadoPokemon="jugar($event)"
      ></PokemonOpts>
    </div>
  </div>

  <div v-if="mostrarMensaje">
    <div v-if="RCorrecto">
      <h1>Respuesta Correcta</h1>
    </div>

    <div v-if="!RCorrecto">
      <h1>Respuesta Incorrecta</h1>
    </div>
  </div>

  <div v-if="felicitaciones">
    <h1>¡¡Felicidades!!</h1>
    <h1>Ganaste con: {{ puntaje }}</h1>
    <button @click="juegoNuevo">Nuevo Juego</button>
  </div>

  <div v-if="perdiste">
    <h1>Perdiste con: {{ puntaje }}</h1>
    <h1>No alcanzaste los 10 puntos</h1>
    <button @click="juegoNuevo">Nuevo Juego</button>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOpts from "../components/PokemonOpts.vue";
import obtenerPokemonsFachada from "../js/obtenerPokemons.js";
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
      mostrar: true,
      felicitaciones: false,
      perdiste: false,
      intentos: 2,
      puntaje: 0,
      numPoke: 1,
    };
  },
  //En los metodos del ciclo de vida no ahce falta ponerle el await
  mounted() {
    this.cargaPokemonInicial();
  },

  methods: {
    async cargaPokemonInicial() {
      const vec = await obtenerPokemonsFachada();
      this.pokemonArr = vec;
      const numero = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[numero];
    },

    jugar(pokSeleccionadoHijo) {
      if (this.puntaje >= 10) {
        this.mostrarPokemon = false;
        this.mostrarMensaje = false;
        this.RCorrecto = false;
        this.mostrar = false;
        this.felicitaciones = true;
      } else if (this.puntaje < 10 && this.numPoke == 3 && this.intentos == 1) {
        this.mostrarPokemon = false;
        this.mostrarMensaje = false;
        this.RCorrecto = false;
        this.perdiste = true;
        this.mostrar = false;
      } else {
        this.validarRespuesta(pokSeleccionadoHijo);
      }
    },

    validarRespuesta(pokSeleccionadoHijo) {
      const idSeleccionado = pokSeleccionadoHijo.idPoke;

      if (this.intentos == 2 && idSeleccionado == this.pokemonCorrecto.id) {
        this.mostrarMensaje = true;
        this.RCorrecto = true;
        this.mostrarPokemon = true;
        this.puntaje = this.puntaje + parseInt(5);

        if (this.puntaje < 10) {
          setTimeout(() => {
            this.mostrarPokemon = false;
            this.cargaPokemonInicial();
            this.mostrarMensaje = false;
            this.mostrar = true;
            this.intentos = 2;
            this.numPoke++;
          }, 3000);
        } else {
          this.mostrarPokemon = false;
          this.mostrarMensaje = false;
          this.RCorrecto = false;
          this.mostrar = false;
          this.felicitaciones = true;
        }
      } else if (
        this.intentos == 1 &&
        idSeleccionado == this.pokemonCorrecto.id
      ) {
        this.mostrarMensaje = true;
        this.RCorrecto = true;
        this.mostrarPokemon = true;
        this.puntaje = this.puntaje + parseInt(2);
        if (this.puntaje < 10) {
          setTimeout(() => {
            this.mostrarPokemon = false;
            this.cargaPokemonInicial();
            this.mostrarMensaje = false;
            this.mostrar = true;
            this.intentos = 2;
            this.numPoke++;
          }, 3000);
        } else {
          this.mostrarPokemon = false;
          this.mostrarMensaje = false;
          this.RCorrecto = false;
          this.mostrar = false;
          this.felicitaciones = true;
        }
      } else if (
        this.intentos == 2 &&
        idSeleccionado != this.pokemonCorrecto.id
      ) {
        this.mostrarMensaje = true;
        this.RCorrecto = false;
        this.mostrarPokemon = false;
        console.log("Pokemon incorrecto 2 in");
        this.intentos--;
      } else if (
        this.intentos == 1 &&
        idSeleccionado != this.pokemonCorrecto.id
      ) {
        console.log("Pokemon incorrecto 1 in");
        this.intentos--;
        this.reiniciar();
      }
    },
    reiniciar() {
      this.mostrarPokemon = false;
      this.cargaPokemonInicial();
      this.mostrarMensaje = false;
      this.mostrar = true;
      this.intentos = 2;
      this.numPoke++;
    },

    juegoNuevo() {
      this.mostrarPokemon = false;
      this.cargaPokemonInicial();
      this.mostrarMensaje = false;
      this.mostrar = true;
      this.intentos = 2;
      this.puntaje = 0;
      this.numPoke = 1;
      this.felicitaciones = false;
      this.perdiste = false;
    },
  },
};
</script>

<style>
#p {
  display: flex;
}

.c {
  margin-left: 20px;
}
</style>