<template>
    <div class="col-md-8">
        <h3>Aktualna scena polityczna</h3>
        <div class="row list">
            <PlayerListItem v-for="player in allPlayers" :key="player.name" :player="player"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import PlayerListItem from "./PlayerListItem";

export default {
    name: "PlayersList",
    components: {
        PlayerListItem
    },
    computed: {
        ...mapGetters(["allPlayers"])
    }
};
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
}
.dot {
    margin-right: 10px;
}
.list {
    margin: 5px;
}
</style>
