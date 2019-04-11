import Axios from "axios";

const state = {
    dependencies: []
};
const getters = {
    allDependencies: state => state.dependencies
};
const actions = {
    async fetchDependencies({ commit }) {
        const response = await Axios.get(
            `${window.location.origin}/dependencies.json`
        );
        console.log(response.data);
        let newDependencies = [];
        let index = 0;
        for (let key in response.data.dependencies) {
            newDependencies.push({
                key: index,
                name: key,
                version: response.data.dependencies[key].version
            });
            index++;
        }
        console.log(newDependencies);
        commit("setDependencies", newDependencies);
    }
};
const mutations = {
    setDependencies: (state, dependencies) =>
        (state.dependencies = [...dependencies])
};

export default { state, getters, actions, mutations };
