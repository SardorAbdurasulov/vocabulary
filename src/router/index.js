import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BooksView from "../views/BooksView.vue";
import UnitsView from "../views/UnitsView.vue";
import QuizView from "../views/QuizView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:type",
    name: "Game",
    component: BooksView,
  },
  {
    path: "/:type",
    name: "Vocabulary",
    component: BooksView,
  },
  {
    path: "/:type/:units",
    name: "Book",
    component: UnitsView,
  },
  {
    path: "/:type/quiz/:unit",
    name: "Quiz",
    component: QuizView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
