<template>
  <div id="textWrapper">
    <span
      class="textToType"
      unselectable="on"
      onselectstart="return false;"
      onmousedown="return false;"
      v-bind:key="s"
      v-for="(s, index) in textToType"
      v-bind:class="{
        default: s == textToType[positionLetter - 1],
        typed: s == typedArray[index],
        error:
          s != typedArray[index] &&
          typedArray[positionLetter - 1] != textToType[positionLetter - 1],
      }"
      >{{ s }}</span
    >
  </div>
  <input id="input" autocomplete="off" type="text" />
  <h3 v-if="finished != true" id="wpm">{{ speed }} WPM</h3>
  <h3 v-else id="wpm">Your final WPM: {{ speed }}</h3>
  <h3 v-if="finished != true">{{ accuracy }}% accuracy</h3>
  <h3 v-else>Your final accuracy: {{ accuracy }}%</h3>
  <a id="retry-button" v-if="finished == true" href="">Try a new text</a>
</template>
<script>
import { textsArray } from "../resources/texts.js";
//import axios from 'axios';

export default {
  data: function () {
    return {
      textToType: textsArray[Math.floor(Math.random() * textsArray.length)],
      typedArray: [],
      typedInOneSecond: 0,
      positionLetter: 0,
      speed: 0,
      secondsPassed: 0,
      interval: null,
      started: false,
      finished: false,
      correctEntries: 0,
      allEntries: 0,
      accuracy: 0,
    };
  },
  created() {
    // Event listeners for keydowns
    window.addEventListener("keydown", (e) => {
      // keyCode 8 = backspace
      if (e.keyCode == 8) {
        if (document.getElementById("input").value.length > 0) {
          if (
            this.typedArray[this.positionLetter - 1] ==
            this.textToType[this.positionLetter - 1]
          ) {
            this.typedArray.pop();
          }
          this.positionLetter -= 1;
        }
      }
      // keyCode 37 = left arrow
      // keyCode 39 = right arrow
      if (e.keyCode == 37 || e.keyCode == 39) {
        e.preventDefault();
      }
    });
    // Event listeners for keypresses
    window.addEventListener("keypress", (e) => {
      if (this.started == false) {
        this.started = true;
        this.interval = setInterval(() => this.calculateSpeed(), 1000);
      }
      this.allEntries = this.allEntries + 1;
      console.log(e.key);
      var temp = this.compare(e.key);

      this.positionLetter += 1;
      if (
        temp == true &&
        this.typedArray[this.positionLetter - 2] ==
          this.textToType[this.positionLetter - 2]
      ) {
        this.typedArray.push(e.key);
        this.correctEntries = this.correctEntries + 1;
        this.typedInOneSecond += 1;

        if (this.textToType[this.positionLetter - 1] == " ") {
          document.getElementById("input").value = "";
          console.log("Space");
        }
        console.log(this.textToType);
        console.log(this.typedArray.join(""));

        if (this.textToType == this.typedArray.join("")) {
          this.finished = 1;
          const lastSpeed = this.speed;
          this.finishedGame(lastSpeed);
        }
      } else {
        return;
      }
    });
  },

  methods: {
    compare: function (inp) {
      if (inp == this.textToType[this.positionLetter]) {
        return true;
      } else {
        return false;
      }
    },
    startAgain: function () {
      // todo
    },
    calculateSpeed: function () {
      //function run every second
      var wpm = Math.round(
        this.typedInOneSecond / 5 / (0.0183 * this.secondsPassed)
      );
      this.speed = wpm;
      console.log(this.speed);
      console.log(this.secondsPassed);
      this.calculateAccuracy(this.correctEntries, this.allEntries);
      this.secondsPassed += 1;
    },
    finishedGame: function (input) {
      console.log("FINISHED: " + input);
      document.getElementById("input").value = "";
      document.getElementById("input").disabled = true;
      clearInterval(this.interval);
    },
    calculateAccuracy: function (correct, all) {
      var accuracy = (correct / all) * 100;
      accuracy = Math.round(accuracy * 10) / 10;
      this.accuracy = accuracy;
      console.log(accuracy);
    },
  },
};
</script>
<style scoped>
@import './../css/variables.css';

.textToType {
  cursor: default;
  font-size: 1.2em;
  user-select: none;
  transition: color 0.1s !important;
}

#textWrapper {
  max-width: 700px;
  margin-top: 25px;
}

.default {
  color: var(--color-font);
}

.typed {
  color: var(--color-good);
}

.error {
  color: var(--color-bad);
}

#input {
  height: 25px;
  width: 200px;
  margin-top: 50px;
  color: inherit;
  background: inherit;
  border: 1px solid var(--color-font);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-size: 1.2em;
  font-family: inherit;
  margin-bottom: 50px;
}

#input:focus {
  outline: none;
}

h3 {
  margin: 0.3em 0;
}

#retry-button {
  margin-top: 30px;
  text-decoration: underline;
  font-size: 1.2em;
}
</style>
