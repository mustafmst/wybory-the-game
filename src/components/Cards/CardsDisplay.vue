<template>
    <div class="row">
        <CardItem v-for="item in cards" :key="item.code" :card="item" />
    </div>
</template>

<script>
import CardItem from "./CardItem";
import cardsData from "@/core/cardsData";


export default {
    name: "CardsDisplay",
    components: {
        CardItem
    },
    data() {
        return {
            cards: [...cardsData]
        };
    }
};
</script>
