<template>
    <div class="container">
        <h3>Dodaj graczy przed rozpoczęciem rozgrywki.</h3>
        <div class="row justify-content-center">
            <form class="col-6" @submit="onSubmit">
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
                    <Slider class="slider" v-model="color"/>
                </div>
                <input
                    type="submit"
                    value="Dodaj"
                    class="btn"
                    v-bind:style="{'background-color': color.hex + ' !important' }"
                >
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { Slider } from "vue-color";

export default {
    name: "AddPlayerForm",
    components: {
        Slider
    },
    data() {
        return {
            color: { hex: "#40B6BF" },
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
            (this.color = { hex: "#40B6BF" }), (this.name = "");
        }
    }
};
</script>
<style lang="scss" scoped>
h3 {
    text-align: center;
    margin-bottom: 40px;
}
.slider {
    margin: auto;
}
</style>

