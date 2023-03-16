<template>
  <div
    class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center">
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
      <li class="md:mx-4 md:my-0 my-6" v-for="link in Links">
        <a :href="link.link" class="text-xl hover:text-green-500">{{
          link.name
        }}</a>
      </li>
      <Button>Get started</Button>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";

export default {
  name: "Navbar",

  components: {
    Button,
  },

  setup() {
    let open = ref(false);
    let Links = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Repos", link: "/repos" },
    ];
    function toggleMenu() {
      open.value = !open.value;
    }
    return { Links, open, toggleMenu };
  },
};
</script>
