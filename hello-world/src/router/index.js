import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import DataRenderingView from "@/views/DataRenderingView.vue";
import UserInteractionsView from "@/views/UserInteractionsView.vue";
import OtherPartsView from "@/views/OtherPartsView.vue";

import CssDemo from "@/components/data-rendering/CssDemo.vue";
import TypeToStringTest from "@/components/data-rendering/TypeToStringTest.vue";

const routes = [
  { path: "/", component: HomeView },
  {
    path: "/data-rendering",
    component: DataRenderingView,
    children: [
      {
        path: "",
        component: TypeToStringTest,
      },
      {
        path: "css",
        component: CssDemo,
      },
    ],
  },
  { path: "/user-interactions", component: UserInteractionsView },
  { path: "/other-parts", component: OtherPartsView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
