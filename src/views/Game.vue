<template>
    <div class="game">
        <PlayerManagment v-if="gameStarted" />
    </div>
</template>

<script>
import PlayerManagment from "./../components/PlayersManagment/PlayersManagment";

export default {
    name: "game",
    components: {
        PlayerManagment
    },
    data() {
        return {
            gameStarted: true
        };
    }
};
</script>
