<template>
  <div
    class="flex justify-center flex-col bg-gradient-to-b from-gray-900 to-gray-800 h-[89vh] overflow-hidden"
  >
    <div class="text-cyan-100 m-2 text-9xl">
      <p class="">REPOSAPP</p>
      <p>VIEW MY REPOS</p>
    </div>
    <router-link to="/repos">
      <button
        class="text-cyan-100 border rounded-md px-4 py-1 m-2 hover:bg-cyan-100 hover:text-gray-800 hover:text-lg animate-bounce"
      >
        To repos →
      </button>
    </router-link>
  </div>
  <div class="z-50 absolute bottom-0 right-0 sm:hidden md:block">
    <img :src="img" alt="img" />
  </div>
</template>

<script>
import image from "../assets/velia.png";

export default {
  name: "Home",
  setup() {
    let img = image;
    return { img };
  },
};
</script>
