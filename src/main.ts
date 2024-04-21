import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "~/App.vue";

import "~/assets/styles/generic/normalize.css";
import "~/assets/styles/settings/global.css";
import "~/assets/styles/tokens/colors.css";
import "~/assets/styles/tokens/fonts.css";
import "~/assets/styles/tokens/shadows.css";

createApp(App).use(createPinia()).mount("#app");
