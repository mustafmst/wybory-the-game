export default class Citizen {
    constructor(partiesList) {
        this.partiesList = partiesList.map(e => ({
            name: e,
            score: 0
        }));
    }

    applyCard(card) {

    }

    voting() {

    }
}
