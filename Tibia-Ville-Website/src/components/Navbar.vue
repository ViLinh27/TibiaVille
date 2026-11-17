<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {ref} from 'vue';

const isResp = ref(false);

function navToggle(){
    isResp.value = !isResp.value;
}
</script>

<template>
    <div class="nav-container">
        <nav class="topnav" :class="{responsive: isResp}" id="topnav">
            <h3><a href="/">City at a Glance</a></h3>
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
            <a href="#" @click.prevent="navToggle" class="navicon">
                <i class="fa-mosaic fa-solid fa-bars"></i>
            </a>
        </nav>
    </div>
</template>

<style scoped></style>