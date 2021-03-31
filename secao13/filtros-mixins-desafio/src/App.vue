<template>
	<div id="app">
		<h1>Filtros &amp; Mixins (Desafio)</h1>
		<p>Com filtro: {{ text | sizeWord }}</p>
		<p>Com computed: {{ textSize }}</p>

		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import mixinText from './mixinText';

export default {
	data: function() {
		return {
			text: 'Oi eu sou o Raimundo'
		}
	},	
	filters: {
		changeSpaces: function(value) {
			const changed = value.replaceAll(' ', ',');
			return changed;
		}
	},
	mixins:[mixinText]
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
