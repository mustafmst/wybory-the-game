<template>
    <div
        class="col-md-5 list-item"
        :style="{ 'background-color': player.color }"
    >
        <h3>{{ player.name }}</h3>
        <i class="fas fa-trash-alt" @click="onDelete"></i>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "PlayerListitem",
    props: ["player"],
    methods: {
        ...mapActions(["deletePlayer"]),
        onDelete() {
            this.deletePlayer(this.player.name);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./../../style/colors.scss";

.list-item {
    text-align: center;
    border-radius: 4px;
    background-color: $black-200;
    margin: 4px auto;

    h3 {
        position: relative;
        top: 8px;
    }

    i {
        float: right;
        position: relative;
        bottom: 10px;
        cursor: pointer;
    }
}
</style>
