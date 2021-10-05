<template>
  <div>
    <div id="header">
      <dark-theme-switcher></dark-theme-switcher>
    </div>
    <div id="content">
      <h1><a href="/">Typeskill</a></h1>
      <!--<h2>Minimalistic typing practice site</h2>-->

      <Game />
    </div>
    <div id="footer">
      <p id="disclaimer">2021 Amar Tabakovic</p>
    </div>
  </div>
</template>

<script>
//import GameWrapper from "./components/GameWrapper.vue"
import Game from "./components/Game.vue";
import DarkThemeSwitcher from "./components/DarkThemeSwitcher.vue";

export default {
  name: "App",
  components: {
    Game,
    DarkThemeSwitcher,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import "./css/variables.css";

b {
  text-decoration: underline;
}
#app {
  font-family: Inter, "Courier Prime", Courier, Monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  margin: 60px 40px;
}

body {
  color: var(--color-font);
  background-color: var(--color-background);
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#header {
  text-align: right;
}

#footer {
  text-align: center;
  margin-left: -40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: var(--color-background);
}

#disclaimer {
  font-size: 9pt;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
