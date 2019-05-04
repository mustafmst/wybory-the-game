<template>
    <div>
        <h3>Kolej partii: {{playing.name}}</h3>
        <form @submit="onSubmit">
            <div class="form-group">
                <label for="card-id">Podaj zagraną kartę</label>
                <input type="text" name="card-id" id="card-id" class="form-control">
                <input
                    type="submit"
                    value="Zagraj kartę"
                    class="btn"
                    v-bind:style="{ 'background-color': playing.color + ' !important' }"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "GameAction",
    computed: {
        ...mapGetters(["allPlayers"])
    },
    data() {
        return {
            playerIndex: 0,
            playing: null,
            roundIndex: 0
        };
    },
    methods: {
        ...mapActions(["applyCard"]),
        onSubmit(e) {
            e.preventDefault();
            this.applyCard(this.playing.name, "003");
            this.changePlayer();
        },
        changePlayer() {
            this.playerIndex++;
            if (this.playerIndex >= this.allPlayers.length) {
                this.playerIndex = 0;
                this.roundIndex++;
            }

            this.playing = this.allPlayers[this.playerIndex];
        }
    },
    created() {
        this.playing = this.allPlayers[this.playerIndex];
    }
};
</script>

<style lang="scss" scoped>
</style>

