<template>
<div id="content">
  <h1>Typeskill</h1>
  <h2>Practice your typing skills</h2>
  <b>Please keep in mind that this is still in development!</b>

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
b {
  text-decoration: underline;
}
#app {
  font-family: Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  margin-top: 60px;
}

body {
  color: #f1f1f1;
  background-color: rgb(5, 9, 15);
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
