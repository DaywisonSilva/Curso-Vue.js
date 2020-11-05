<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do usuário: <strong>{{ nome }}</strong></p>
    <p>Idade do usuário: <strong>{{idade}}</strong></p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
/* Quando se altera no componente pai o valor passado para o componente filho e dá problemas de tipo, o recomendável é que no componente filho se diga qual é o tipo e demais informações da propriedade que o filho espera receber, assim o tipo de erro gerado no console vai ser mais fácil de ser corrigido, trazendo maior manutenibilidade ao código. */
  props: {
    //   nome: [String, Array]
    nome: {
        type: String,
        required: true
        // default: 'Anônimo'
        // default: function () {
        //     return Array(10).fill(0).join(',')
        // }
    },
    idade: {
      type: Number,
      required: true
    },
    reiniciarFn: Function
  },
  data() {
    return {};
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      this.nome = 'Pedro';
      this.$emit('nomeMudou', this.nome);
    }
  },
  created() {
    // barramento.$on('idadeMudou', idade => {
    //   this.idade = idade
    // })
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade;
    })
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
