import Vue from "vue";
import Vuex from "vuex";

import DependenciesModule from "./modules/dependencies";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        DependenciesModule
    }
});
