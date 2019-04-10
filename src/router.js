/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "game",
            component: () => import("./views/Game.vue")
        },
        {
            path: "/cards",
            name: "cards",
            component: () => import("./views/Cards.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("./views/About.vue")
        }
    ]
});
