export default {
    state: {
        players: []
    },
    getters: {
        allPlayers: state => state.players
    },
    actions: {
        async addPlayer({ commit }, newPlayer) {
            commit("addPlayer", newPlayer);
        }
    },
    mutations: {
        addPlayer: (state, newPlayer) =>
            (state.players = [...state.players, newPlayer])
    }
};
