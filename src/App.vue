<template>
    <div id="app">
        <Header />
        <section class="container page">
            <router-view />
        </section>
    </div>
</template>
<script>
import Header from "./components/Header";

export default {
    name: "app",
    components: {
        Header
    }
};
</script>

<style lang="scss">
@import "./style/colors.scss";

body {
    margin: 0;
}

#app {
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $black-700;

    .page {
        margin-top: 20px;
    }
}

@media print {
    header,
    .cards-page-header {
        display: none;
    }

    .card {
        height: 480px;
    }
}
</style>
