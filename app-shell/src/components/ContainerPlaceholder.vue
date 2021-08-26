<template>
    <h1>{{name}}</h1>
    <div class="embedded-container">
        <Search />
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "module1/Search";

export default defineComponent({
    data() {
        return {
            name: "Module1"
        };
    },
    components: {
        Search
    }
    
})
</script>

<style lang="scss" scoped>
.embedded-container {
  border: 2px dashed red;
}

</style>