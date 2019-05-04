<template>
    <div>
        <h1>Election Poll</h1>
        <VueC3 :handler="handler"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueC3 from "vue-c3";
import Vue from "vue";

import UNDECIDED_PARTY from "@/core/undecidedParty";

export default {
    name: "GameElectionPoll",
    components: {
        VueC3
    },
    computed: {
        ...mapGetters(["getElectionPoll", "allPlayers"])
    },
    data() {
        return {
            handler: new Vue()
        };
    },
    methods: {
        getColumns() {
            return Object.entries(this.getElectionPoll);
        },
        createChart() {
            const players = this.allPlayers;
            const options = {
                data: {
                    columns: this.getColumns(),
                    type: "pie",
                    color: function(color, data) {
                        if (data === UNDECIDED_PARTY.name || data.id === UNDECIDED_PARTY.name) {
                            return UNDECIDED_PARTY.color.hex;
                        }
                        return players.find((player) => player.name === data.id).color.hex;
                    }
                }
            };
            this.handler.$emit("init", options);
        }
    },
    watch: {
        getElectionPoll() {
            this.handler.$emit("dispatch", (chart) => {
                chart.load({
                    columns: this.getColumns()
                });
            });
        }
    },
    mounted() {
        this.createChart();
    }
};
</script>

<style lang="scss" scoped>
</style>

