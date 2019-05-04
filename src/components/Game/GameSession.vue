<template>
    <div>
        <h1>GameSession</h1>
        <ElectionPoll/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import ElectionPoll from "./GameElectionPoll";

export default {
    name: "GameSession",
    components: {
        ElectionPoll
    },
    computed: {
        ...mapGetters(["getElectionPoll"])
    }
};
</script>

<style lang="scss" scoped>
</style>
