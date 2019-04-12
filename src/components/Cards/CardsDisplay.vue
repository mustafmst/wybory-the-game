<template>
    <div class="row">
        <CardItem v-for="item in cards" :key="item.code" :card="item" />
    </div>
</template>

<script>
import uniqid from "uniqid";

import CardItem from "./CardItem";

export default {
    name: "CardsDisplay",
    components: {
        CardItem
    },
    data() {
        let testCards = [];
        let testCard = {
            name: "Daj 500+ na dzieci",
            side: "left",
            pointing: {
                social: 5,
                attack: 0,
                truth: 0
            },
            code: null,
            img:
                "https://ocdn.eu/pulscms-transforms/1/ieqktkqTURBXy9jNTJlZTU3MzExY2QwMGY2ZmVhNjc5ZTQ3M2RiMzdmMC5qcGVnkpUDAADNErHNCoSTBc0Djs0CXw"
        };

        for (let i = 0; i < 8; i++) {
            testCard.code = uniqid.time();
            testCards.push(JSON.parse(JSON.stringify(testCard)));
        }
        return {
            cards: [...testCards]
        };
    }
};
</script>
