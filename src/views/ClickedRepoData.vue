<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-700 h-screen">
    <div class="h-[88vh] flex items-center flex-col justify-around md:flex-row">
      <div
        class="flex-col p-6 rounded-lg sm:w-[85%] md:w-[60%] bg-gray-800/50 border-2 border-gray-100/10 text-cyan-100 shadow-2xl"
      >
        <div class="flex justify-between">
          <img
            :src="repo.owner.avatar_url"
            class="h-14 w-14 rounded-full"
            :alt="repo.name"
          />
          <h2 class="md:text-xl font-bold text-sm">
            {{ repo.name }}
            <small class="text-sm font-light">({{ repo.visibility }})</small>
          </h2>
        </div>
        <p class="italic py-2 text-sm md:text-base">
          {{ repo.description ? repo.description : "No description added yet" }}
        </p>

        <p class="py-1">
          Language: {{ repo.language ? repo.language : "No language Set" }}
        </p>

        <div class="py-1">
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer"
            >Github LInk</a
          >

          <a
            :href="repo.homepage ? repo.homepage : '#'"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted Link
          </a>
        </div>

        <small class="py-1">
          <p class="">Updated {{ new Date(repo.updated_at).toDateString() }}</p>
        </small>
      </div>

      <router-link to="/repos">
        <button
          class="text-cyan-100 border rounded-md px-4 py-1 m-2 hover:bg-cyan-100 hover:text-gray-800 animate-pulse"
        >
          ← Back to Repos
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";
export default {
  computed: {
    repoId() {
      return this.$route.params.name;
    },
  },

  data() {
    return {
      repo: null,
    };
  },

  async created() {
    const reponse = await fetch(
      `https://api.github.com/repos/Vee-keme/${this.repoId}`
    );
    this.repo = await reponse.json();
  },
};
</script>
