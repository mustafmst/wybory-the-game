/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/main";
import ToPaper from "vue-html-to-paper";

Vue.config.productionTip = false;

const options = {
    name: "_blank",
    specs: ["fullscreen=no", "titlebar=no", "scrollbars=yes"],
    styles: [
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        "css/cards.css"
    ]
};

Vue.use(ToPaper, options);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
