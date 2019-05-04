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
import { mapGetters } from "vuex";
import AddPlayerForm from "./AddPlayerForm";
import PlayersList from "./PlayersList";

export default {
    name: "PlayerManagment",
    components: {
        AddPlayerForm,
        PlayersList
    },
    computed: {
        ...mapGetters(["anyPlayers"]),
        buttonStyle() {
            return this.anyPlayers
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
        onClickPlay() {
            /* eslint-disable no-console */
            if (this.anyPlayers) console.log("Game is starting");
        }
    }
};
</script>

<style lang="scss" scoped>
.row {
    margin-top: 10px;
}
</style>
