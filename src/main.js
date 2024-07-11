import "./assets/base.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);

const globalOptions = {
  mode: "auto",
};

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.use(VueTelInput, globalOptions);
app.mount("#app");
