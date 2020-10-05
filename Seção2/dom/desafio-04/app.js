new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		tamanho: 'tamanho',
		bgYellow: 'bgYellow',
		classe3: '',
		classe4: '',
		bool: true,
		estilo5: {
			width: '100px',
			height: '100px'
		},
		cor: 'blue',
		barra: ''
	},
	computed: {
		bgColor() {
			return {
				backgroundColor: this.cor
			}
		},
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque';
			}, 100)
		},
		setBool(event) {
			if (event.target.value == 'true') {
				this.bool = true;
			} else if (event.target.value == 'false') {
				this.bool = false;
			}
		},
		iniciarProgresso() {
			let largura = 5;
			let intervalo = setInterval(() => {
				largura += 5;
				this.barra = `width:${largura}%`
				if (largura == 100) clearInterval(intervalo);
			}, 100)
		}
	}
})
