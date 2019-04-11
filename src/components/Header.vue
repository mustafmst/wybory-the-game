<template>
    <div id="nav">
        <h1>
            Wybory:
            <b class="accent">The Game</b>
        </h1>
        <router-link to="/">Strona Domowa</router-link>
        <router-link to="/game" class="play">Zagraj</router-link>
        <router-link to="/cards">Karty</router-link>
        <router-link to="/about">Info</router-link>
    </div>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style lang="scss" scoped>
@import "./../style/colors.scss";
#nav {
    background: $black-800;
    padding: 10px 30px;
    h1 {
        color: $black-50;
        b.accent {
            color: $red-900;
        }
    }
    i {
        margin: 0px 15px;
        color: $black-50;
    }
    a {
        padding: 5px 10px;
        border-radius: 3px;
        display: inline-block;
        font-weight: bold;
        color: $black-50;
        text-decoration: none;
        &.router-link-exact-active {
            color: $red-900;
        }
        &:hover {
            background: $black-600;
        }
    }
    a.play {
        color: $red-50;
        background-color: $red-300;
        &.router-link-exact-active {
            color: $black-800;
            background-color: $red-900;
        }
    }
}
</style>
