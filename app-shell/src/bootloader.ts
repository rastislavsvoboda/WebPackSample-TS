import { createApp } from "vue";
import router from "./router";

import "./index.scss";

import App from "./App";
// import { load } from "./store";

// load("hv-taplist");

createApp(App)
    .use(router)
    .mount("#app");
