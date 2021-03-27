<template>
<div id="content">
  <h1><a href="/">Typeskill</a></h1>
  <h2>Minimalistic typing practice site</h2>
  

  <Game/>
</div>
</template>

<script>
//import GameWrapper from "./components/GameWrapper.vue"
import Game from "./components/Game.vue"

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');

b {
  text-decoration: underline;
}
#app {
  font-family: 'Courier Prime', Courier, Monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  margin-top: 60px;
}

body {
  color: black;
  background-color: rgb(245, 216, 155);
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}


</style>
