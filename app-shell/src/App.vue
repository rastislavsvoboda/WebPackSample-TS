<template>
  <h1>Welcome</h1>
  <div class="menu">
    <ul v-for="item in menuItems" :key="item.id">
      <li>
        <router-link :to="item.link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
  <router-view />
  <!-- <div class="embedded-container">
    <Search />
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Module1App from "module1/Module1App";
// import Search from "module1/Search";


export default defineComponent({
  data() {
    return {
      menuItems: [
        {
          id: "home",
          name: "Home",
          icon: "",
          link: "Home",
        },
        {
          id: "settings",
          name: "Settings",
          icon: "",
          link: "Settings",
        },
        {
          id: "module-1",
          name: "Module1",
          icon: "",
          link: "ContainerPlaceholder",
        },
        {
          id: "module-2",
          name: "Module2",
          icon: "",
          link: "",
        },
      ],
      text: "Vue works!",
    };
  },
  components: {
    // Module1App,
    //  Search
    //   Taps,
    //   Cart,
  },
});
</script>

<style lang="scss" scoped>
.embedded-container {
  border: 2px dashed red;
}

</style>
