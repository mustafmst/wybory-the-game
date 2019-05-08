<template>
    <div class="col-md-3 game-card" style="padding:0;">
        <div class="card">
            <img :src="card.img" :alt="card.name" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ card.name }}</h5>
                <br>
                <CardImage :chart-data="formattedCardsData" />
                <br>
                <p style="float:right;">{{ card.code }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CardImage from "./CardImage";
import {
    KONSERWATYZM,
    PRAWICA,
    SOCJALIZM,
    LEWICA,
    LIBERALIZM,
    TUMIWISIZM
} from "@/core/politicalViews";


export default {
    name: "CardItem",
    props: ["card"],
    components: { CardImage },
    data: function () {
        var formattedCardsData = {
            labels: [
                KONSERWATYZM, PRAWICA, SOCJALIZM,
                LEWICA, LIBERALIZM, TUMIWISIZM
            ],
            datasets: [{
                data: [
                    this.card.params[KONSERWATYZM], 
                    this.card.params[PRAWICA], 
                    this.card.params[SOCJALIZM],
                    this.card.params[LEWICA], 
                    this.card.params[LIBERALIZM], 
                    this.card.params[TUMIWISIZM]
                ],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgb(54, 162, 235)",
                fill: "origin",
            }]
        };
        return {
            formattedCardsData
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
