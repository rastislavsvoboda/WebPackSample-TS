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
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
          link: "",
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
    //   Search,
    //   Taps,
    //   Cart,
  },
});
</script>
