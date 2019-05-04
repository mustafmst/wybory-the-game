<template>
    <div>
        <div class="row">
            <AddPlayerForm/>
            <PlayersList/>
        </div>
        <div class="row">
            <button class="btn col-12" :style="buttonStyle" @click="onClickPlay">Zagraj</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddPlayerForm from "./AddPlayerForm";
import PlayersList from "./PlayersList";

export default {
    name: "PlayerManagment",
    components: {
        AddPlayerForm,
        PlayersList
    },
    computed: {
        ...mapGetters(["areMoreThanOnePlayers"]),
        buttonStyle() {
            return this.areMoreThanOnePlayers
                ? {
                      "background-color": "#da0000",
                      cursor: "pointer"
                  }
                : {
                      "background-color": "#9d9d9d",
                      cursor: "not-allowed"
                  };
        }
    },
    methods: {
        ...mapActions(["createPopulation", "startGame"]),
        onClickPlay() {
            /* eslint-disable no-console */
            if (this.areMoreThanOnePlayers) {
                this.createPopulation();
                this.startGame();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.row {
    margin-top: 10px;
}
</style>
