import Vue from "vue";
import Vuex from "vuex";

import DependenciesModule from "./modules/dependencies";
import PlayersModule from "./modules/players";
import GameModule from "./modules/game";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        DependenciesModule,
        PlayersModule,
        GameModule
    }
});
