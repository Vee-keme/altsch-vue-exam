<template>
  <!-- <div class="bg-green-500 h-screen">
    <Navbar />
  </div> -->

  <NewNavbar />

  <router-view></router-view>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import NewNavbar from "./components/NewNavbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    NewNavbar,
  },
};
</script>
