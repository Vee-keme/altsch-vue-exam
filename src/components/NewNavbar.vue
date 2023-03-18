<template>
  <div
    id="nav"
    class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center">
      <span>
        <img :src="logo" alt="logo" class="w-10 h-10" />
      </span>
      <span class="text-green-500 text-xl mr-1">
        <p>repoApp</p>
      </span>
    </div>

    <span
      @click="toggleMenu()"
      class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul
      class="md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in-out"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6">
        <router-link to="/" class="text-xl hover:text-green-500"
          >Home</router-link
        >
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <router-link to="/repos" class="text-xl hover:text-green-500"
          >Repos</router-link
        >
      </li>
      <Button>Contact</Button>
    </ul>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import logo from "@/assets/RA.png";

export default {
  name: " NewNavbar",

  components: {
    Button,
  },

  setup() {
    let open = ref(false);

    function toggleMenu() {
      open.value = !open.value;
    }
    return { open, toggleMenu, logo };
  },
};
</script>

<style lang="css">
#nav .vue-active-link {
  color: rgb(207 250 254);
  border-bottom: 3px solid rgb(207 250 254);
}
</style>
