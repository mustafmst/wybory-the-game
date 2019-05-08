<template>
    <div>
        <div class="row">
            <CardItem v-for="item in row" :key="item.code" :card="item"/>
        </div>
        <div class="separator-1 row" v-if="rowIndex%3 === 2"></div>
        <div class="separator-2 row" v-if="rowIndex > 3 && rowIndex%3 === 2"></div>
    </div>
</template>

<script>
import CardItem from "./CardItem";

export default {
    name: "CardsRow",
    props: ["row", "rowIndex"],
    components: {
        CardItem
    }
};
</script>

<style lang="scss" scoped>
.separator-1, .separator-2 {
    display: none;
}
@media print {
    .separator-1{
        display: block;
        height: 51px;
    }
    .separator-2{
        display: block;
        height: 20px;
    }
}
</style>

