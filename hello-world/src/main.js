import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

let select = null;
let unselect = null;

app.use(router);

app.directive("selectable", {
  mounted: (el, binding) => {
    select = (event) => {
      event.target.style.backgroundColor = binding.value;
    };
    el.addEventListener("mouseenter", select);
    unselect = (event) => {
      event.target.style.backgroundColor = "";
    };
    el.addEventListener("mouseleave", unselect);
  },
  unmounted: (el) => {
    el.removeEventListener("mouseenter", select);
    el.removeEventListener("mouseleave", unselect);
  },
});

app.directive("crossed", {
  mounted: (el) => {
    el.style.textDecoration = "line-through";
  },
});

app.mount("#app");
