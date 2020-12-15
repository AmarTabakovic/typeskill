<template>
<div id="content">
  <h1>Typeskill</h1>
  <h2>Practice your typing skills</h2>

  <Game/>
</div>
</template>

<script>
//import GameWrapper from "./components/GameWrapper.vue"
import Game from "./components/Game.vue"

export default {
  name: 'App',
  components: {
    //GameWrapper
    Game
  }
}
</script>

<style>
#app {
  font-family: Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
