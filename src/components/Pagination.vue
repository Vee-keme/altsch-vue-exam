<template>
  <div class="mx-auto pb-10 flex items-center justify-center">
    <button
      class="border rounded p-2 m-2 text-cyan-100"
      @click="paginate(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      Previous
    </button>

    <span v-for="i in pageNumbers" :key="i" @click="paginate(i)">
      <button class="border rounded p-2 m-2 text-cyan-100">
        {{ i }}
      </button>
    </span>

    <button
      class="border rounded p-2 m-2 text-cyan-100"
      @click="paginate(currentPage + 1)"
      :disabled="currentPage === Math.ceil(repos.length / reposPerPage)"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: Number,
    paginate: Function,
    pageNumbers: Array,
    repos: Array,
    reposPerPage: Number,
  },
};
</script>
