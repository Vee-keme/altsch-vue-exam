<template>
  <NewNavbar />

  <router-view></router-view>
</template>
<script>
import NewNavbar from "./components/NewNavbar.vue";
export default {
  name: "App",
  components: {
    NewNavbar,
  },
};
</script>
