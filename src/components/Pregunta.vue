<template>
  <h1>Pregunta</h1>
  <img src="https://via.placeholder.com/250" alt="No se puede visualizar" />
  <div class="fondo-oscuro"></div>
  <div class="container">
    <input type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar con un signo de interrogación</p>
    <div>
      <h2>Voy a pasar de año?</h2>
      <h1>SI, NO, ......</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pregunta",
};
</script>

<style>
img {
  height: 100vh;
  width: 100vw;
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p{
    color: red;
    font-size: 20px;
    margin-top: 0px;
}
h1, h2{
    color: red;

}
h2{
    margin-top: 150px;
}
</style>