<template>
    <h1>{{name}}</h1>
    <div class="embedded-container">
        <AppWrapper>
            <Search />
        </AppWrapper>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "module1/Search";
// import Module1App from "module1/Module1App";
import AppWrapper from "module1/AppWrapper";

export default defineComponent({
    data() {
        return {
            name: "Module1"
        };
    },
    components: {
        AppWrapper,
        Search
    }
    
})
</script>

<style lang="scss" scoped>
.embedded-container {
  border: 2px dashed red;
}

</style>