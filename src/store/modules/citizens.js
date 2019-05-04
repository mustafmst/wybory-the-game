import Citizen from "@/core/citizen";
import POLITICAL_VIEWS from "@/core/politicalViews";
import UNDECIDED_PARTY from "@/core/undecidedParty";


export default {
    state: {
        citizens: []
    },
    getters: {
        getElectionPoll: state => {
            return state.citizens.map(e => e.voting || UNDECIDED_PARTY.name)
                .reduce((p, voting) => {
                    p[voting] = (p[voting] || 0) + 1;
                    return p;
                }, {});
        }
    },
    actions: {
        createPopulation({commit}) {
            let newPopulation = [];
            [...Array(1000).keys()].forEach(() => {
                newPopulation.push(new Citizen(POLITICAL_VIEWS));
            });
            commit("setCitizens", newPopulation);
        },
        applyCard({commit, state}, payload) {
            state.citizens.forEach(citizen => citizen.applyCard(payload.party, payload.card));
        }
    },
    mutations: {
        setCitizens: (state, population) => {
            state.citizens = [...population];
        }
    }
};
