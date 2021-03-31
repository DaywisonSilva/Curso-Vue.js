<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!submetido">
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <form @submit.prevent="submeterForm">
          <!-- Nome completo (Nome e Sobrenome) -->
		  <!-- O v-model escuta o evento input e atribui o valor passado pelo evento ao atributo nomeCompleto -->
          <nomeCompleto v-model="nomeCompleto"/>
          <span>{{ nomeCompleto }}</span>
          <!-- Email -->
          <rotulo nome="E-mail">
            <input type="email" v-model="email" />
          </rotulo>
          <!-- Senha -->
          <rotulo nome="Senha">
            <input type="password" v-model="senha" />
          </rotulo>
          <!-- Armazenar Dados? (Sim/Não) -->
          <rotulo nome="Armazenar Dados?">
            <label>
              <input type="checkbox" v-model="armazenarDados" />
            </label>
          </rotulo>
          <rotulo>
            <input type="submit" value="Enviar" />
          </rotulo>
        </form>

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <rotulo nome="Nome">{{ nomeCompleto.nome }}</rotulo>
        <rotulo nome="Sobrenome">{{ nomeCompleto.sobrenome }}</rotulo>
        <!-- Email -->
        <rotulo nome="E-mail">{{ email }}</rotulo>
        <!-- Senha -->
        <rotulo nome="Senha">{{ senha }}</rotulo>
        <!-- Armazenar Dados? (Sim/Não) -->
        <rotulo nome="Armazenar Dados?">
          <label>{{ armazenarDados }}</label>
        </rotulo>
        <rotulo></rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto";
export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      nomeCompleto: {
        nome: "",
        sobrenome: ""
      },
      email: "",
      senha: "",
      armazenarDados: true,
      submetido: false
    };
  },
  methods: {
    submeterForm() {
      this.submetido = !this.submetido;
    }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
