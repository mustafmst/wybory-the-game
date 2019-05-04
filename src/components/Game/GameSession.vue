<template>
    <div>
        <GameAction/>
        <ElectionPoll/>
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
