export default {
    state: { 
        sessionStarted: false,
        round: 1
    },
    getters: { 
        getSessionStatus: state => state.sessionStarted ,
        getRound: state => state.round
    },
    actions: {
        startGame({commit}) {
            commit("changeSessionState");
        },
        incrementRound({commit}) {
            commit("incrementRoundState");
        }
    },
    mutations: {
        changeSessionState: (state) => state.sessionStarted = !state.sessionStarted,
        incrementRoundState: (state) => state.round = state.round + 1
    }
};
