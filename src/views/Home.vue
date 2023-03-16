<template>
  <div
    class="flex justify-center flex-col bg-gradient-to-b from-gray-900 to-gray-800 h-screen"
  >
    <div class="text-cyan-100 text-9xl m-2">
      <p class="">REPOSAPP</p>
      <p>VIEW MY REPOS</p>
    </div>
    <router-link to="/repos">
      <button
        class="text-cyan-100 border rounded-md px-4 py-1 m-2 hover:bg-cyan-100 hover:text-gray-800 hover:text-lg"
      >
        To repos →
      </button>
    </router-link>
  </div>
  <div class="z-50 absolute bottom-0 right-0">
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
