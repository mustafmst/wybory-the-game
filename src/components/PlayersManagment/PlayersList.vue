<template>
    <div class="col-md-8">
        <h3>Aktualna scena polityczna</h3>
        <ul>
            <li v-for="player in allPlayers" :key="player.name">
                <h2>
                    <div class="fas fa-angle-double-right dot" :style="{'color': player.color}"></div>
                    <span>{{player.name}}</span>
                </h2>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "PlayersList",
    computed: {
        ...mapGetters(["allPlayers"])
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
</style>