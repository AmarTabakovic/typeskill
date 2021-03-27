<template>
  <h3>Type the following text into the textbox below:</h3>
  <div id="textWrapper">
    <span
      class="textToType"
      unselectable="on"
      onselectstart="return false;"
      onmousedown="return false;"
      v-bind:key="s"
      v-for="(s, index) in textToType"
      v-bind:class="{
        default: s == textToType[positionLetter -1],
        typed: s == typedArray[index],
        error: s != typedArray[index] && typedArray[positionLetter -1] != textToType[positionLetter -1],
      }"
      >{{ s }}</span
    >
  </div>
  <input id="input" autocomplete="off" type="text" />
  <h3 v-if="finished != true" id="wpm">Your WPM: {{ speed }}</h3>
  <h3 v-else id="wpm">Your final WPM: {{ speed }}</h3>
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

      console.log(e.key);
      var temp = this.compare(e.key);

      this.positionLetter += 1;
      if (
        temp == true &&
        this.typedArray[this.positionLetter - 2] ==
          this.textToType[this.positionLetter - 2]
      ) {
        this.typedArray.push(e.key);
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
        ("Not approved");
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
      // empty form, set new text, reset wpm
      return;
    },
    calculateSpeed: function () {
      //function run every second
      var wpm = Math.round(
        this.typedInOneSecond / 5 / (0.0183 * this.secondsPassed)
      );
      this.speed = wpm;
      console.log(this.speed);
      console.log(this.secondsPassed);
      this.secondsPassed += 1;
    },
    finishedGame: function (input) {
      console.log("FINISHED: " + input);
      document.getElementById("input").value = "";
      document.getElementById("input").disabled = true;
      clearInterval(this.interval);
    },
  },
};
</script>
<style scoped>
.textToType {
  cursor: default;
  font-size: 1.2em;
}

#textWrapper {
  width: 700px;
}

.default {
  color: black;
}

.typed {
  color: rgb(0, 107, 0);
}

.error {
  color: rgb(228, 0, 0);
}

#input {
  height: 25px;
  width: 200px;
  margin-top: 50px;
  color: inherit;
  background: inherit;
  border: 1px solid black;
}

input:focus{
    outline: none;
}

</style>