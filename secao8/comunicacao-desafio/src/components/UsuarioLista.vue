<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" 
                :key="usuario.id"
                @click="mostrarUsuario(usuario.id, usuario.nome, usuario.idade)" >
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: { usuarios: Array },
    methods: {
        mostrarUsuario(id, nome, idade) {
            this.$emit('mostrarInfo', {id, nome, idade})
        }
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
    }

    table {
        width: 100%;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
