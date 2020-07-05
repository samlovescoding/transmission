import Vue from 'vue'

require('./main.css')

import WelcomePage from "./pages/WelcomePage.vue";

const app = new Vue({
    el: '#app',
    render: h => h(WelcomePage)
})
