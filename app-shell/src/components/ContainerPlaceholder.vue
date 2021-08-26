<template>
    <h1>{{name}}</h1>
    <div>
        <Search />
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "module1/Search";

export default defineComponent({
    data() {
        return {
            name: "placeholder"
        };
    },
    components: {
        Search
    }
    
})
</script>