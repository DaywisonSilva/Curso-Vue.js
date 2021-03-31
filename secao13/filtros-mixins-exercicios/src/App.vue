<template>
  <div id="app">
    <h1>Filtros &amp; Mixins</h1>
    <hr />
    <p>{{ cpfDoAluno | cpf | inverter }}</p>
    <p>{{ usuarioLogado }}</p>
    <input type="text" :value="cpfDoAluno | cpf" class="input" />
    <hr />
    <Frutas />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text " v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import Frutas from "./Frutas.vue";
import frutasMixin from "./frutasMixin";
import usuarioMixin from "./usuarioMixin";

export default {
  mixins: [frutasMixin, usuarioMixin],
  created() {
    console.log("Created - App.vue");
  },
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },
  data() {
    return {
      cpfDoAluno: "60070080090"
    };
  },
  components: {
    Frutas
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

.input {
  font-size: 2.5rem;
}
</style>
