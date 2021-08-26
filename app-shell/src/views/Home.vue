<template>
	<h1>Home</h1>
	<h2>{{customerName}}</h2>
	<div>{{ today }}</div>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi harum dolor, deserunt, earum id aut enim dolores sit, cumque esse assumenda neque eligendi dicta quis. Itaque eaque doloremque aliquam.</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "Home",
	data() {
		return {
			customerName: "ZVJS",
			today: "26.8.2021"
		}
	}
});

</script>
