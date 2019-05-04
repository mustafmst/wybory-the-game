import Citizen from "@/core/citizen";
import POLITICAL_VIEWS from "@/core/politicalViews";

export default {
    state: {
        citizens: []
    },
    getters: {
        getEllectionPoll: state => {

            return state.citizens.map(e => e.voting).reduce((p, voting) => {
                p[voting] = (p[voting] || 0) + 1;
                return p;
            }, {});
        }
    },
    actions: {
        createPopulation({commit}) {
            let newPopulation = [];
            [...Array(10000).keys()].forEach(() => {
                newPopulation.push(new Citizen(POLITICAL_VIEWS));
            });
            commit("setCitizens", newPopulation);
        },
        applyCard({commit, state}, card) {
            state.citizens.forEach(citizen => citizen.applyCard(card));
        }
    },
    mutations: {
        setCitizens: (state, population) => {
            state.citizens = [...population];
        }
    }
};