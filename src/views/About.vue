<template>
    <div class="about">
        <h1>Informacje o projekcie</h1>
        <p>Gra karciana stworzona jako projekt na studia.</p>
        <DependenciesList/>
    </div>
</template>

<script>
import DependenciesList from "./../components/DependenciesList/List";

export default {
    name: "about",
    components: {
        DependenciesList
    }
};
</script>
