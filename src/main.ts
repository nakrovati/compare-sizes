import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import "Styles/main.scss";

createApp(App).use(createPinia()).mount("#app");
