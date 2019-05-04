export default {
    state: {
        players: []
    },
    getters: {
        allPlayers: state => state.players,
        areMoreThanOnePlayers: state => state.players.length > 1
    },
    actions: {
        async addPlayer({ commit }, newPlayer) {
            commit("addPlayer", newPlayer);
        },
        async deletePlayer({ commit }, name) {
            commit("removePlayer", name);
        }
    },
    mutations: {
        addPlayer: (state, newPlayer) =>
            (state.players = [...state.players, newPlayer]),
        removePlayer: (state, name) =>
            (state.players = [...state.players.filter(e => e.name !== name)])
    }
};
