<template>
	<div class="usuario-editar">
		<h3>Usuário Editar</h3>
		<hr />
		<p><strong>Código:</strong>{{ id }}</p>
		<p><strong>Código:</strong>{{ $route.params.id }}</p>
		<p><strong>Completo:</strong>{{ $route.query.completo ? "Sim" : "Não" }}</p>
		<p><strong>Língua:</strong>{{ $route.query.lingua }}</p>
	</div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style>
</style>