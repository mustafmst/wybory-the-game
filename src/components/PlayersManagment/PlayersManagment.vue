<template>
    <div class="row">
        <AddPlayerForm/>
        <PlayersList/>
    </div>
</template>

<script>
import AddPlayerForm from "./AddPlayerForm";
import PlayersList from "./PlayersList";

export default {
    name: "PlayerManagment",
    components: {
        AddPlayerForm,
        PlayersList
    }
};
</script>