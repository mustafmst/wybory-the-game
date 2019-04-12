<template>
    <div id="dep-list">
        <h3>Lista zależności projektu</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nazwa paczki</th>
                    <th scope="col">Wersja</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dep in allDependencies" v-bind:key="dep.key">
                    <td>{{ dep.name }}</td>
                    <td>{{ dep.version }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "DependenciesList",
    methods: {
        ...mapActions(["fetchDependencies"])
    },
    computed: mapGetters(["allDependencies"]),
    created() {
        this.fetchDependencies();
    }
};
</script>

<style lang="scss" scoped></style>
