<template>
    <div>
        <h1>Cards</h1>
        <button @click="print">Print</button>
        <div id="to-print">
            <p class="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                magna dolor, blandit a ligula eu, tristique consequat tellus.
                Fusce orci urna, elementum a est non, dapibus ultrices ipsum. Ut
                quis velit volutpat mauris dignissim venenatis. Donec vel
                iaculis nulla, ac malesuada eros. Nunc faucibus felis quis
                tortor lacinia sagittis. Aenean in metus vel nunc consequat
                ornare. Ut porttitor ut sapien eget feugiat. Nulla facilisi.
                Donec gravida magna in odio posuere euismod. Fusce pharetra est
                non est consectetur, vitae tempor neque tempor. Vestibulum
                congue interdum pulvinar. Nulla convallis risus eros, quis
                fermentum leo tempus sit amet. Aliquam erat volutpat. In sit
                amet fermentum libero. Orci varius natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Nulla sit amet
                rhoncus lorem, in interdum purus. Nullam arcu risus, tristique
                at sollicitudin non, volutpat at risus. Duis aliquam odio ac
                urna semper consectetur. Mauris id pharetra magna, at ultrices
                risus. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Nullam mi dui, dignissim
                eget felis at, mollis dapibus arcu. Pellentesque congue sem et
                lectus iaculis, aliquet mollis tellus faucibus. Aliquam
                elementum dolor vel bibendum ultricies. Nam pellentesque eros
                sed sodales aliquet.
            </p>
        </div>
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
.para {
    background: $black-200;
}
</style>
