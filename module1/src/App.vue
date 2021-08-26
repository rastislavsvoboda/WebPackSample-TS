<template>
  <h1>test co to do pekla robi</h1>
  <Search />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Search from "./components/Search.vue";

export default defineComponent({
  components: {
    Search,
  },
});
</script>
