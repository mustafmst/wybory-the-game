<template>
    <div>
        <cardsRow v-for="row in cardRows" :key="cardRows.findIndex(i => i === row)" :rowIndex="cardRows.findIndex(i => i === row)" :row="row" />
    </div>
</template>

<script>
import CardsRow from "./CardsRow";
import cardsData from "@/core/cardsData";


export default {
    name: "CardsDisplay",
    components: {
        CardsRow
    },
    data() {
        let index = 0;
        return {
            cards: [...cardsData],
            cardRows: [...cardsData].reduce((p, c) => {
                if(index === 0) p.push([]);
                p[p.length-1].push(c);
                index++;
                if(index > 3) index = 0;
                return p;
            }, [])
        };
    }
};
</script>
