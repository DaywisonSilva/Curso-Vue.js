<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é {{nome}}</p>
        <p>Idade é <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- O $event nesse caso é o dado que foi passado pelo componente filho -->
            <app-usuario-info 
            :nome="nome" 
            :idade="idade"
            @nomeMudou="nome = $event"
            :reiniciarFn ="reiniciarNome" />
            <app-usuario-editar 
            :idade="idade"/>
            <!-- :reiniciarIdadeFn ="reiniciarIdade"  -->
            <!-- @idadeMudou="idade = $event + 1"  -->
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    data() {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    components: { AppUsuarioInfo, AppUsuarioEditar },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Pedro';
        }
        // reiniciarIdade() {
        //     this.idade = 21;
        // }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
