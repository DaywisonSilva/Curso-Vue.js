import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('sizeWord', function (value) {
	const arr = value.split(' ');
	const newValue = arr.map(el => {
		return `${el} (${el.length}) `;
	})
	return newValue.join('');
})

new Vue({
	render: h => h(App),
}).$mount('#app')
