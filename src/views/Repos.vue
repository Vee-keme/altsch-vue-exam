<template>
  <div>
    <div
      class="border my-5 mx-auto p-4 sm:w-[50%] w-[80%] rounded shadow-md"
      v-for="repo in slicedRepos"
      :key="repo.id"
    >
      <h3>
        {{ repo.name }} <small>({{ repo.visibility }})</small>
      </h3>
      <p class="">
        {{ repo.description ? repo.description : "No description added" }}
      </p>

      <div>
        <p>
          {{ repo.language ? repo.language : "No language Set" }}
        </p>
        <p>
          <small>
            Last Updated on {{ new Date(repo.updated_at).toDateString() }}
          </small>
        </p>
      </div>

      <router-link :to="`/repos/${repo.name}`">View Repo</router-link>
    </div>
  </div>

  <div v-if="loading">Loading..........</div>
  <div v-else-if="err">{{ err }}</div>
  <div v-else-if="!repos.length">No repositories found.</div>

  <Pagination
    :repos="repos"
    :currentPage="currentPage"
    :reposPerPage="reposPerPage"
    :pageNumbers="pageNumbers"
    :paginate="paginate"
  />
  <!-- <router-view></router-view> -->
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import { onMounted, ref, computed } from "vue";

export default {
  // name: Repos,
  components: { Pagination },
  setup() {
    let repos = ref([]);
    let err = ref(null);
    const page = ref(1);
    const perPage = ref(100);
    const totalPages = ref(1);
    let loading = ref(true);

    //fetch data
    try {
      const fetchRepos = async () => {
        const res = await fetch(
          `https://api.github.com/users/Vee-keme/repos?page=${page.value}&per_page=${perPage.value}`
        );
        const data = await res.json();
        repos.value = data;
        totalPages.value = Math.ceil(repos.value.length / perPage.value);
        // console.log(repos.value.length, perPage.value, totalPages.value);
      };
      fetchRepos();
    } catch (err) {
      err.value = err.toString();
    } finally {
      loading.value = false;
    }

    const dynamicPerPage = ref(window.innerWidth <= 768 ? 3 : 4);
    // Implement pagination
    const currentPage = ref(1);
    const reposPerPage = computed(() => dynamicPerPage.value);
    // console.log(reposPerPage.value);
    const indexOfLastRepo = computed(
      () => currentPage.value * reposPerPage.value
    );
    const indexOfFirstRepo = computed(
      () => indexOfLastRepo.value - reposPerPage.value
    );
    const slicedRepos = computed(() =>
      repos.value.slice(indexOfFirstRepo.value, indexOfLastRepo.value)
    );
    console.log(repos.value); //  KEEP GOING THROUGH THE CODE

    const pageNumbers = computed(() => {
      const pageNumbers = [];
      for (
        let i = 1;
        i <= Math.ceil(repos.value.length / reposPerPage.value);
        i++
      ) {
        pageNumbers.push(i);
        // console.log(repos.value.length, reposPerPage.value);
        // console.log(pageNumbers);
      }
      return pageNumbers;
    });

    const paginate = (pageNumber) => {
      currentPage.value = pageNumber;
    };

    //return setup variables
    return {
      repos,
      err,
      paginate,
      pageNumbers,
      reposPerPage,
      currentPage,
      slicedRepos,
      loading,
    };
  },
};
</script>
