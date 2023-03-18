<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-700 h-screen">
    <div class="h-[88vh] flex justify-around items-center">
      <router-link to="/repos">
        <button
          class="text-cyan-100 border rounded-md px-4 py-1 m-2 hover:bg-cyan-100 hover:text-gray-800 animate-pulse"
        >
          ← Back to Repos
        </button>
      </router-link>

      <div
        class="flex-col p-6 rounded-lg w-[50%] bg-gray-800/50 border-2 border-gray-100/10 text-cyan-100 shadow-2xl"
      >
        <div class="flex justify-between">
          <img
            :src="repo.owner.avatar_url"
            class="h-14 w-14 rounded-full"
            :alt="repo.name"
          />
          <h2 class="text-xl font-semibold">
            {{ repo.name }}
            <small class="text-sm font-light">({{ repo.visibility }})</small>
          </h2>
        </div>
        <p class="italic py-2">
          {{ repo.description ? repo.description : "No description added yet" }}
        </p>

        <p class="py-1">Language: {{ repo.language }}</p>

        <div class="py-1">
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer"
            >Github LInk</a
          >
          <!-- <font-awesome-icon icon="fa-light fa-link" />Github Link</a -->

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
        <!-- <h3>ive been clicked {{ $route.params.name }}</h3> -->
        <!-- <p>{{ repo.id }}</p> -->
      </div>
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
    // console.log(this.repo);
  },
};
</script>
