import { createRouter, createWebHistory } from "vue-router";

import HeroWelcome from "./pages/hero/TheWelcome.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    { path: "/welcome", component: HeroWelcome },
    { path: "/about", component: HeroWelcome },
    { path: "/experience", component: HeroWelcome },
    { path: "/work", component: HeroWelcome },
    { path: "/contact", component: HeroWelcome },

    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
