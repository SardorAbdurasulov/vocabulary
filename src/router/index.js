import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import BooksView from "../views/BooksView.vue";
import UnitsView from "../views/UnitsView.vue";
import QuizView from "../views/QuizView.vue";
import WritingView from "../views/WritingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "Game",
    component: GameView,
  },
  {
    path: "/game/:type",
    name: "Books",
    component: BooksView,
  },
  {
    path: "/game/:type/:book",
    name: "Units",
    component: UnitsView,
  },
  {
    path: "/game/test/:book/:unit",
    name: "test",
    component: QuizView,
  },
  {
    path: "/game/writing/:book/:unit",
    name: "writing",
    component: WritingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
