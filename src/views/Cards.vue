<template>
    <div>
        <div class="row cards-page-header">
            <h2 class="col-9">Karty do gry</h2>
            <div class="col-md-3">
                <button class="btn" @click="print">Drukuj Karty</button>
            </div>
        </div>
        <div id="to-print">
            <CardsDisplay />
        </div>
    </div>
</template>

<script>
import CardsDisplay from "./../components/Cards/CardsDisplay";

export default {
    name: "cards",
    components: {
        CardsDisplay
    },
    data() {
        return {
            output: null
        };
    },
    methods: {
        print() {
            window.print();
        }
    }
};
</script>
<style lang="scss" scoped>
@import "./../style/colors.scss";
.btn {
    background-color: $black-800;
    color: $black-50;
    float: right;
}

</style>
