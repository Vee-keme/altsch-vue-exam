import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// import pages here
import Home from "./views/Home.vue";
import Repos from "./views/Repos.vue";
import ClickedRepoData from "./views/ClickedRepoData.vue";
import NotFound from "@/views/NotFound.vue";
import "./assets/style.css";

// create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/repos",
      name: "Repos",
      component: Repos,
    },
    {
      path: "/repos/:name",
      name: "ClickedRepoData",
      component: ClickedRepoData,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    // { path: "*", name: "NotFound", component: NotFound },
  ],
  linkActiveClass: "vue-active-link",
});

createApp(App).use(router).mount("#app");
