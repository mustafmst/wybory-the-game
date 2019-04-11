<template>
    <div class="row">
        <div v-for="card in cards" :key="card.code" class="col-md-3" style="padding:0;">
            <div class="card">
                <img :src="card.img" :alt="card.name" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{card.name}}</h5>
                    <br>
                    <br>
                    <p style="float:right;">{{card.code}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import uniqid from "uniqid";

export default {
    name: "CardsDisplay",
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
