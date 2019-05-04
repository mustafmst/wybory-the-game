export default {
    state: { sessionStarted: false },
    getters: { getSessionStatus: state => state.sessionStarted },
    actions: {
        startGame({commit}) {
            commit("changeSessionState");
        }
    },
    mutations: {
        changeSessionState: (state) => state.sessionStarted = !state.sessionStarted
    }
};
