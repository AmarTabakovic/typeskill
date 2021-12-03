/*
2 Arrays: Array of the text that needs to be entered, array of entered text
Onkeyup form: check if character is same, if so, add to array of entered text, calculate wpm

*/


import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faToggleOn)
library.add(faToggleOff)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
