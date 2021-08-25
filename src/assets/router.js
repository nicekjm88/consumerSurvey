import { createWebHistory, createRouter } from "vue-router";
import Splash from "../components/Page/Splash.vue";
import Intro from "../components/Page/Intro/Intro.vue";
import Terms from "../components/Page/Terms/Terms.vue";
import Enterance from "../components/Page/Account/PersonalInformation.vue";
import QuestionPage from "../components/Page/Account/QuestionPage.vue";

const routes = [
  {
    path: "/",
    component: Splash,
  },
  {
    path: "/intro",
    component: Intro,
  },
  {
    path: "/terms",
    component: Terms,
  },
  {
    path: "/enterance",
    component: Enterance,
  },
  {
    path: "/step/:id*",
    component: QuestionPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
