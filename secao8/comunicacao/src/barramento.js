import Vue from 'vue'
export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit('idadeMudou', idade)
    },
    quandoIdadeMudar(callback) {
      // this.$on escuta o evento e executa uma função
      this.$on('idadeMudou', callback)
    },
  },
})
