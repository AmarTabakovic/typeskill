<template>
  <div>
    <!--<p v-if="currentMode == 'light'" @click="toggle">🌙</p>-->
    <font-awesome-icon v-if="currentMode == 'light'" @click="toggle" icon="toggle-off" />
    <font-awesome-icon v-else @click="toggle" icon="toggle-on" />
   <!-- <p v-else @click="toggle">☀️</p>-->
  </div>
</template>
<script>
export default {
  data: function() {
      return {
          currentMode: 'light',
      }
  },
  mounted: function() {
      var savedTheme = localStorage.getItem("dark-mode-storage") || "";
      this.setTheme(savedTheme);
  },
  methods: {
    toggle() {
      if (document.documentElement.classList.contains("dark-theme")) {
        this.setTheme("light");

      } else {
        this.setTheme("dark");
        
      }
    },
    setTheme(mode) {
        localStorage.setItem("dark-mode-storage", mode);
        if(mode == "dark") {
        document.documentElement.classList += " dark-theme";
        this.currentMode = "dark"
    }
    else if(mode == "light") {
        document.documentElement.classList -= " dark-theme";
        this.currentMode = "light"
    }
    }
  },
};
</script>
<style lang="css" scoped>
    svg:hover {
        cursor: pointer;
    }

    svg {
        user-select: none;
        font-size: 20pt;
    }

    svg:focus {
  outline: none;
}
</style>
