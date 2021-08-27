<template>
    <h2>Search</h2>
    <div>{{name}}</div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
    data() {
        return {
            name: "sample text"
        }
    }
});
</script>