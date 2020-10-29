<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>
    </p>
  </div>
</template>

<script>
export default {
/* Quando se altera no componente pai o valor passado para o componente filho e dá problemas de tipo, o recomendável é que no componente filho se diga qual é o tipo e demais informações da propriedade que o filho espera receber, assim o tipo de erro gerado no console vai ser mais fácil de ser corrigido, trazendo maior manutenibilidade ao código. */
  props: {
    //   nome: [String, Array]
    nome: {
        type: String,
        // required: true,
        // default: 'Anônimo'
        default: function () {
            return Array(10).fill(0).join(',')
        }
    }
  },
  data() {
    return {};
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
