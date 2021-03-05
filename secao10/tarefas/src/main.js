import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = true
Vue.config.devtools = false
Vue.config.silent = true


new Vue({
  render: h => h(App),
}).$mount('#app')
