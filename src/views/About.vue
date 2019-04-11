<template>
    <div class="about">
        <h1>Info</h1>
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
