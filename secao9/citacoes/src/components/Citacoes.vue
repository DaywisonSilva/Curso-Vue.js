<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- <app-citacao :citacao="citacoes[indice].texto"></app-citacao> -->
        <app-citacao>
            <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
            <p>{{ citacoes[indice].texto }}</p>
            <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
        </app-citacao>
    </div>
</template>

<script>
import Citacao from './Citacao'
export default {
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    components: {
        'app-citacao': Citacao
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        max-width: 500px;
    }
</style>
