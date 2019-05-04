<template>
    <div class="col-md-3" style="padding:0;">
        <div class="card">
            <img :src="card.img" :alt="card.name" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{{ card.name }}</h5>
                <br />
                <h6>{{ Object.keys(card.params) }}</h6>
                <br />
                <h6>{{ Object.values(card.params) }}</h6>
                <br />
                <br />
                <p style="float:right;">{{ card.code }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardItem",
    props: ["card"]
};
</script>
