<template>
  <h1>Pregunta</h1>
  <img v-bind:src="img" v-if=img alt="No se puede visualizar" />
  <div class="fondo-oscuro"></div>
  <div class="container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar con un signo de interrogación (?)</p>
    <div>
      <h2>{{ question }}</h2>
      <h1>{{respuesta}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pregunta",

  data() {
    return {
      question:null,
      respuesta:null,
      img:null,
    };
  },
  /*wath: observadores de las propiedades reactivas, deben tener el mismo nombre, obtiene el valor actual y antiguo*/
  watch: {
    question(value, oldValue) {
      console.log(oldValue);
      console.log(value);
      if (!value.includes("?")) return;
      console.log("Vamos a consumir el API");
      //Consumo del API (Conjunto de especificaciones, politicas, que permiten comunicar dos o más componentes de software)
      this.consumirAPI()
    },
  },

  methods: {
    //Método asíncrono
    async consumirAPI() {
      this.respuesta='Pensando.'
      const {answer, forced, image}= await fetch("https://yesno.wtf/api").then((result) =>
        result.json()
      );

      this.respuesta='Pensando...'
      console.log(forced);
      console.log(image)
      console.log(answer)
      this.respuesta=answer
      this.img=image
      this.respuesta='Pensando..'
  
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
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 150px;
}
.container {
  position: relative;
  z-index: 99; /*indice identificador*/
}
</style>