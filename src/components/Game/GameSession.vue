<template>
    <div class="row">
        <GameAction class="col-md-6"/>
        <ElectionPoll class="col-md-6"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import ElectionPoll from "./GameElectionPoll";
import GameAction from "./GameAction";

export default {
    name: "GameSession",
    components: {
        ElectionPoll,
        GameAction
    },
    computed: {
        ...mapGetters(["getElectionPoll"])
    }
};
</script>

<style lang="scss" scoped>
</style>
