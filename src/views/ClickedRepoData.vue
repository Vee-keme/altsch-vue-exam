<template>
  <div>
    <h3>ive been clicked {{ $route.params.name }}</h3>
    <p>{{ repo.id }}</p>
    <p>{{ repo.name }}</p>
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
