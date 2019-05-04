<template>
    <div class="game">
        <PlayerManagment v-if="!gameStarted"/>
        <GameSession v-if="gameStarted"/>
    </div>
</template>

<script>
import PlayerManagment from "./../components/PlayersManagment/PlayersManagment";
import GameSession from "./../components/Game/GameSession";

export default {
    name: "game",
    components: {
        PlayerManagment,
        GameSession
    },
    data() {
        return {
            gameStarted: true
        };
    }
};
</script>
