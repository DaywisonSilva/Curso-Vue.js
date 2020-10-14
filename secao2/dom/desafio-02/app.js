new Vue({
    el: '#desafio',
    data: {
        valor: '',
    },
    methods: {
        exibirAlerta(mensagem) {
            alert(mensagem);
        },
        armazenarValor(e) {
            this.valor = e.target.value;
        }
    }
})