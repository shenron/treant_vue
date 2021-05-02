import Vue from 'vue'
import App from './App.vue'

import Raphael from 'raphael'
import 'treantjs/Treant.css'
import 'treantjs/Treant'

window.Raphael = Raphael

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
