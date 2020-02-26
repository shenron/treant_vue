import Vue from 'vue'
import App from './App.vue'

import 'raphael'
import 'treantjs/Treant.css'
import 'treantjs/Treant'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
