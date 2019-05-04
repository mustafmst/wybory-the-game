import Vue from "vue";
import Vuex from "vuex";

import DependenciesModule from "./modules/dependencies";
import PlayersModule from "./modules/players";
import GameModule from "./modules/game";
import CitizensModule from "./modules/citizens";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        DependenciesModule,
        PlayersModule,
        GameModule,
        CitizensModule
    }
});
