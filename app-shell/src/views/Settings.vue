<template>
	<h1>Settings</h1>
	<div class="settings-container">
		<pre>{{staticData}}</pre>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "Settings",
	data() {
		return {
			staticData: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi harum dolor, deserunt"
		}
	}

});

</script>
