<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">
      {{ err }}
      <span class="">|</span>
      <small class="text-xl font-bold">{{ message }}</small>
    </h1>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  data() {
    return {
      err: "404",
      message: "Page Not Found",
    };
  },
};
</script>
