<template>
    <div>
        <h2>Runda: {{getRound}}</h2>
        <div class="row">
            <GameAction class="col-md-6"/>
            <ElectionPoll class="col-md-6"/>
        </div>
        <div class="row">
            <button class="btn col-md-12" @click="onSessionClose">Zakończ grę</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ElectionPoll from "./GameElectionPoll";
import GameAction from "./GameAction";

export default {
    name: "GameSession",
    components: {
        ElectionPoll,
        GameAction
    },
    computed: {
        ...mapGetters(["getElectionPoll", "getRound"])
    },
    methods: {
        ...mapActions(["clearPopulation", "clearGameSession", "clearPlayers"]),
        onSessionClose() {
            this.clearGameSession();
            this.clearPlayers();
            this.clearPopulation();
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./../../style/colors.scss";

.btn {
    background: $black-300;
}
</style>
