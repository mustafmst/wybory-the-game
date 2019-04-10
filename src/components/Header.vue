<template>
    <div id="nav">
        <h1>Wybory: The Game</h1>
        <router-link to="/">Home</router-link>
        <i class="fas fa-grip-lines-vertical"></i>
        <router-link to="/about">About</router-link>
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
    padding: 30px;
    padding-top: 10px;
    h1 {
        background: linear-gradient(#fff, #fff, #fff, $red-400, $red-900);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    i {
        margin: 0px 15px;
        color: $black-50;
    }
    a {
        font-weight: bold;
        color: $black-50;
        text-decoration: none;
        &.router-link-exact-active {
            color: $red-400;
        }
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>

