<template>
    <div class="col-md-8">
        <h3>Aktualna scena polityczna</h3>
        <VueC3 :handler="handler" />
        <div class="row list">
            <PlayerListItem
                v-for="player in allPlayers"
                :key="player.name"
                :player="player"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import VueC3 from "vue-c3";

import PlayerListItem from "./PlayerListItem";

export default {
    name: "PlayersList",
    components: {
        VueC3,
        PlayerListItem
    },
    computed: {
        ...mapGetters(["allPlayers"])
    },
    data() {
        return {
            handler: new Vue()
        };
    },
    methods: {
        createChart() {
            this.handler.$emit("destroy");
            const players = this.allPlayers;
            const options = {
                data: {
                    columns: [...players.map(e => [e.name, 1])],
                    type: "pie",
                    color: function(color, d) {
                        const data = players.filter(e => e.name === d)[0];
                        return data ? data.color : "#fff";
                    }
                }
            };
            this.handler.$emit("init", options);
        }
    },
    watch: {
        allPlayers() {
            this.createChart();
        }
    },
    mounted() {
        this.createChart();
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
