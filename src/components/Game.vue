<template>
  <h3>Type the following text into the textbox below:</h3>
  <div id ="textWrapper">
    <span
      class="textToType"
      unselectable="on"
      onselectstart="return false;"
      onmousedown="return false;"
      v-bind:key="s"
      v-for="(s, index) in textToType"
      v-bind:class="{
        typed: s == typedArray[index],
        error: typedArray[positionLetter - 1] != textToType[positionLetter - 1],
      }"
      >{{ s }}</span
    >
  </div>
  <input id="input" autocomplete="off" type="text" />
  <p id="wpm">WPM: {{ speed }}</p>
</template>
<script>
export default {
  data: function () {
    return {
      textToType: "We come from two different worlds but there's only one love that could make things easier..",
      typedArray: [],
      typedInOneSecond: 0,
      positionLetter: 0,
      speed: 0,
      secondsPassed: 0,
      started: 0,
      finished: 0
    };
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 8 /*|| e.keycode == 37*/) {
        if (document.getElementById("input").value.length > 0) {
          if (
            this.typedArray[this.positionLetter - 1] ==
            this.textToType[this.positionLetter - 1]
          ) {
            this.typedArray.pop();
          }
          //
          this.positionLetter -= 1;
        } else {
          return "";
        }
      } 
    });

    window.addEventListener("keypress", (e) => {
      if(this.started == false) {
        this.interval = setInterval(() => this.calculateSpeed(), 1000);
        this.started = true;
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
      } else {
        ("Not approved");
      }
    });
  },
  /*computed: {
    splitText: function () {
      return this.textToType.split("");
    },
  },*/
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
      var wpm = Math.round((this.typedInOneSecond / 5 ) / (0.0183 * this.secondsPassed));
      this.speed = wpm;
      console.log(this.speed)
      console.log(this.secondsPassed)
      this.secondsPassed += 1
    //this.typedInOneSecond = 0;
  },
  },
  
};
</script>
<style scoped>
.textToType {
  cursor: default;
}

#textWrapper {
  width: 500px;
}

.default {
  color: black;
}

.typed {
  color: green;
}

.error {
  color: red;
}

#input {
  margin-top: 20px;
}
</style>