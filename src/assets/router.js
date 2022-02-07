import { createWebHistory, createRouter } from "vue-router";
import Splash from "../components/Page/Splash.vue";
import Intro from "../components/Page/Intro/Intro.vue";
import Terms from "../components/Page/Terms/Terms.vue";
import Terms2 from "../components/Page/Terms/Terms2.vue";
import Enterance from "../components/Page/Account/PersonalInformation.vue";
import QuestionPage from "../components/Page/Account/QuestionPage.vue";
import QuestionPage2 from "../components/Page/Account/QuestionPage2.vue";
//import Qna1 from "../components/Page/Qna/Qna1.vue";
//import Qna2 from "../components/Page/Qna/Qna2.vue";
import Result from "../components/Page/Account/Result.vue";
import Result2 from "../components/Page/Account/Result2.vue";
import AtomyProduct from "../components/Page/AtomyProduct/AtomyProduct.vue";
import SaveData from "../components/Page/SaveData/SaveData.vue";
import SaveDataList from "../components/Page/SaveData/SaveDataList.vue";
import SaveDataView from "../components/Page/SaveData/SaveDataView.vue";

const routes = [
  {
    path: "/",
    component: Splash,
  },
  {
    path: "/intro",
    name: "intro",
    component: Intro,
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms,
  },
  {
    path: "/terms2",
    name: "terms2",
    component: Terms2,
  },
  {
    path: "/enterance",
    component: Enterance,
  },
  {
    path: "/qna",
    component: QuestionPage,
  },
  {
    path: "/qna2",
    component: QuestionPage2,
  },
  // {
  //   path: "/step/:id",
  //   component: QuestionPage,
  //   children: [
  //     {
  //       path: "qna1",
  //       component: Qna1,
  //     },
  //     {
  //       path: "qna2",
  //       component: Qna2,
  //     },
  //   ],
  // },
  {
    path: "/result",
    component: Result,
  },
  {
    path: "/result2",
    component: Result2,
  },
  {
    path: "/AtomyProduct",
    component: AtomyProduct,
  },
  {
    path: "/SaveData",
    component: SaveData,
  },
  {
    path: "/SaveDataList",
    name: "SaveDataList",
    component: SaveDataList,
  },
  {
    path: "/SaveDataView",
    name: "SaveDataView",
    component: SaveDataView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
