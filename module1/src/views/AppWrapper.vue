<template>
    <div class="wrapper-container">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Search from "../components/Search.vue"
import { defineComponent } from "vue"

export default defineComponent({
  components: { Search },

})
</script>

<style lang="scss" scooped>
.wrapper-container {
    background-color: yellow;
    border-radius: 20px;
    border: 1px solid green;
    padding: 1rem;
}

</style>