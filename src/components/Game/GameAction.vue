<template>
    <div>
        <h3>Kolej partii: {{playing.name}}</h3>
        <form @submit="onSubmit">
            <div class="form-group">
                <label for="card-id">Podaj zagraną kartę</label>
                <input
                    type="text"
                    name="card-id"
                    id="card-id"
                    class="form-control"
                    v-model="cardId"
                >
                <input
                    type="submit"
                    value="Zagraj kartę"
                    class="btn form-control"
                    v-bind:style="{ 'background-color': playing.color + ' !important' }"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cardsData from "./../../core/cardsData.js";

export default {
    name: "GameAction",
    computed: {
        ...mapGetters(["allPlayers"])
    },
    data() {
        return {
            cardId: "",
            playerIndex: 0,
            playing: null,
            roundIndex: 0
        };
    },
    methods: {
        ...mapActions(["applyCard", "incrementRound"]),
        onSubmit(e) {
            e.preventDefault();

            this.applyCard({
                party: this.playing.name,
                card: cardsData.find(e => e.id === this.cardId)
            });
            this.cardId = "";
            this.changePlayer();
        },
        changePlayer() {
            this.playerIndex++;
            if (this.playerIndex >= this.allPlayers.length) {
                this.playerIndex = 0;
                this.incrementRound();
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
.btn {
    margin-top: 4px;
}
</style>

