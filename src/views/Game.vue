<template>
    <div class="game">
        <PlayerManagment v-if="!getSessionStatus"/>
        <GameSession v-if="getSessionStatus"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PlayerManagment from "./../components/PlayersManagment/PlayersManagment";
import GameSession from "./../components/Game/GameSession";

export default {
    name: "game",
    components: {
        PlayerManagment,
        GameSession
    },
    computed: {
        ...mapGetters(["getSessionStatus"])
    }
};
</script>
