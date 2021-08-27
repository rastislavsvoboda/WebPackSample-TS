<template>
  <h1>Module1App</h1>
  <AppWrapper>
    <Search />
  </AppWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppWrapper from "./views/AppWrapper.vue"
import Search from "./components/Search.vue";

export default defineComponent({
  name: "Module1App",
  components: {
    AppWrapper,
    Search,
  },
});
</script>
