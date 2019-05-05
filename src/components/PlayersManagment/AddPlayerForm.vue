<template>
    <div class="col-md-4 add-player">
        <h3>Dodaj partie polityczne</h3>
        <form @submit="onSubmit">
            <div class="form-group">
                <label for="party-name">Nazwa partii politycznej</label>
                <input
                    type="text"
                    name="party-name"
                    id="party-name"
                    class="form-control"
                    v-model="name"
                >
            </div>
            <div class="form-group">
                <label for="party-color">Wybierz kolor partii</label>
                <colorPicker class="slider" v-model="color"/>
            </div>
            <input
                type="submit"
                value="Dodaj"
                class="btn"
                v-bind:style="{ 'background-color': color.hex + ' !important' }"
            >
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { Chrome } from "vue-color";

import { generateRandomColor } from "@/utils";

let defaultColor = generateRandomColor();

export default {
    name: "AddPlayerForm",
    components: {
        colorPicker: Chrome
    },
    data() {
        return {
            color: { hex: defaultColor },
            name: ""
        };
    },
    methods: {
        ...mapActions(["addPlayer"]),
        onSubmit(e) {
            e.preventDefault();
            this.addPlayer({
                name: this.name,
                color: this.color.hex
            });
            // Generate new color
            defaultColor = generateRandomColor();
            // Reset state
            (this.color = { hex: defaultColor }), (this.name = "");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./../../style/colors.scss";

.add-player {
    border-right: solid 1px $black-100;
    padding: 20px;
}
form {
    font-weight: bold;
}
h3 {
    text-align: center;
    margin-bottom: 40px;
}
.slider {
    margin: auto;
}
</style>
