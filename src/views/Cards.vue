<template>
    <div>
        <div class="row">
            <h2 class="col-9">Karty do gry</h2>
            <div class="col-md-3">
                <button class="btn" @click="print">Print</button>
            </div>
        </div>
        <div id="to-print"></div>
    </div>
</template>

<script>
export default {
    name: "cards",
    methods: {
        print() {
            this.$htmlToPaper("to-print");
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
