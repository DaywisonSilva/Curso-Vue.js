<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- <Menu></Menu> -->
		<router-view name="menu"></router-view>
		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__backInUp animate__fast"
		>
			<!-- leave-active-class="animate__animated animate__backOutDown animate__slow" -->
			<router-view />
		</transition>
		<router-view name="menuInferior"></router-view>
	</div>
</template>

<script>
// import Menu from "./components/template/Menu.vue";
export default {
//   components: { Menu },
};
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
