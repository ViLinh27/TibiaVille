<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/city_hall">City Hall</RouterLink>
            <RouterLink to="/arcade">Arcade</RouterLink>

            <RouterLink to="/lab">Lab</RouterLink>
            <RouterLink to="/library">Library</RouterLink>
            <RouterLink to="/tibias_house">Tibia's House</RouterLink>

            <RouterLink to="/cinema">Cinema</RouterLink>
            <RouterLink to="/school">School</RouterLink>
            <RouterLink to="/post_office">Post Office</RouterLink>

            <RouterLink to="/art_museum">Art Museum</RouterLink>
            <RouterLink to="/record_store">Record Store</RouterLink>
            <RouterLink to="/shopping_center">Shopping Center</RouterLink>

            <RouterLink to="/fountain">Fountain</RouterLink>
            <RouterLink to="/interest_town">Interest Town</RouterLink>
            <RouterLink to="/bulletin_board">Bulletin Board</RouterLink>
        </nav>
    </div>
</template>

<style scoped></style>