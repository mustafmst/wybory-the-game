import Vue from "vue";
import Vuex from "vuex";

import DependenciesModule from "./modules/dependencies";
import PlayersModule from "./modules/players";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        DependenciesModule,
        PlayersModule
    }
});
