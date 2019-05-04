function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class Citizen {
    politicalViews = new Map();
    parties = new Map();

    voting = null;

    constructor(politicalViews) {
        this.__generatePoliticalView(politicalViews)
    }

    /**
     * @param {string[]} politicalViews
     * @private
     */
    __generatePoliticalView(politicalViews) {
        politicalViews.forEach((view) => {
            this.politicalViews.set(view, randomIntFromInterval(-5, 5))
        })
    }

    /**
     * @param {string[]} parties
     */
    addParties(parties) {
        parties.forEach((name) => {
            this.parties.set(name, {
                name,
                score
            })
        })
    }

    /**
     * @param {string} party
     * @param {Card} card
     */
    applyCard(party, card) {
        this.parties[party].score += Object.entries(card.params)
            .reduce((accumulator, [view, value]) => (
                accumulator + this.politicalViews[view] * value
            ), 0);
        this.__updateVoting();

    }

    __updateVoting() {
        const sorted = [...this.parties.values()].sort((partyA, partyB) => partyA.score - partyB.score)
        console.debug("Voting update", sorted);
        this.voting = sorted[sorted.length - 1].name;
    }
}
