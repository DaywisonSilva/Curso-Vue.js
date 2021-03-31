<template>
	<div class="usuario">
		<h2>Usuários</h2>
		<hr />
		<router-view />
		<button sucesso @click="irParaInicio">Voltar</button>
	</div>
</template>

<script>
export default {
 /*  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route(to) {
    // $route(to, from) {
      this.id = to.params.id;
    }
  }, */
  methods: {
    irParaInicio() {
      this.$router.push({ name: 'inicio' });
    }
  }
};
</script>

<style>
</style>
