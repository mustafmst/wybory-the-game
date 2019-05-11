<template>
    <div class="about">
        <GameRules />
        <h2>Informacje o projekcie</h2>
        <p>Gra karciana stworzona jako projekt na studia.</p>
        <p>Autorami projektu są: 
            <ul>
                <li><a href="https://github.com/mustafmst">Paweł Mstowski</a></li>
                <li><a href="https://github.com/darkowic">Dariusz Rzepka</a></li>
                <li><a href="https://github.com/wisienka91">Maciej Wiśniewski</a></li>
            </ul>
        </p>
        <DependenciesList />
    </div>
</template>

<script>
import DependenciesList from "./../components/DependenciesList/List";
import GameRules from "./../components/GameRules"

export default {
    name: "about",
    components: {
        DependenciesList,
        GameRules
    }
};
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
</style>
