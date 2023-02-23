import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.errorHandler = (err) => {
  console.log("PAPA error here ", err);
};

app.mount("#app");
