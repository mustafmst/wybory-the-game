<template>
    <div class="row">
        <div v-for="card in cards" :key="card.code" class="col-md-4">
            <div class="card">
                <img :src="card.img" :alt="card.name" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{card.name}}</h5>
                    <p>{{card.code}}</p>
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
        return {
            cards: [
                {
                    name: "Daj 500+ na dzieci",
                    side: "left",
                    pointing: {
                        social: 5,
                        attack: 0,
                        truth: 0
                    },
                    code: uniqid.time(),
                    img:
                        "https://ocdn.eu/pulscms-transforms/1/ieqktkqTURBXy9jNTJlZTU3MzExY2QwMGY2ZmVhNjc5ZTQ3M2RiMzdmMC5qcGVnkpUDAADNErHNCoSTBc0Djs0CXw"
                }
            ]
        };
    }
};
</script>
