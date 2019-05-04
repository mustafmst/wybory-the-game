<template>
    <div>
        <h3>Sondaż wyborczy</h3>
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
            const options = {
                data: {
                    columns: this.getColumns(),
                    type: "pie",
                    colors: {
                        ...this.allPlayers.reduce((a, player) => {
                            a[player.name] = player.color;
                            return a;
                        }, {}),
                        [UNDECIDED_PARTY.name]: UNDECIDED_PARTY.color
                    }
                }
            };
            this.handler.$emit("init", options);
        }
    },
    watch: {
        getElectionPoll() {
            this.handler.$emit("destroy");
            this.createChart();
        }
    },
    mounted() {
        this.createChart();
    }
};
</script>

<style lang="scss" scoped>
</style>

