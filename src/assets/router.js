import { createWebHistory, createRouter } from "vue-router";
import Splash from "../components/Page/Splash.vue";
import Intro from "../components/Page/Intro/Intro.vue";
import Terms from "../components/Page/Terms/Terms.vue";
import Enterance from "../components/Page/Account/PersonalInformation.vue";
import QuestionPage from "../components/Page/Account/QuestionPage.vue";
import QuestionPage2 from "../components/Page/Account/QuestionPage2.vue";
import QuestionPage3 from "../components/Page/Account/QuestionPage3.vue";

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
    path: "/step1",
    component: QuestionPage,
  },
  {
    path: "/step2",
    component: QuestionPage2,
  },
  {
    path: "/step3",
    component: QuestionPage3,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
