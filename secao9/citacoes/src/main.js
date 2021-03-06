import './estilo.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.silent = true
Vue.config.performance = true

new Vue({
  render: h => h(App),
}).$mount('#app')
