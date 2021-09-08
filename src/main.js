import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueScrollTo from "vue-scrollto";

createApp(App)
  .use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "linear",
    offset: 0,
    force: true,
    cancelable: false,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  })
  .use(store)
  .mount("#app");
