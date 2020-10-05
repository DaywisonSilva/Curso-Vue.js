new Vue({
	el: '#desafio',
	data: {
		aplicaDestaque: false,
		infoClasse: '',
		classeFour: '',
		tf: '',
	},
	computed: {
		classes() {
			return {
				destaque: !this.aplicaDestaque,
				encolher: this.aplicaDestaque
			}
		},
		sizeYellow() {
			return {
				size: true,
				yellow: true
			}

		},
		fourEstilos() {
			if (this.tf == "true") {
				return `${this.classeFour}`
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicaDestaque = !this.aplicaDestaque;
			}, 100)
		},
		iniciarProgresso() {

		}
	}
})
