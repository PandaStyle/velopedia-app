<template>
    <div class="sidebar">
        <div class="logo-wrapper">
            <img src="../img/logo.png" class="logo" />
        </div>
        <div class="item content">
            <div class="menu">
                <a class="menu-item news" v-link="{ path: '/inspiration' }"></a>
                <a class="menu-item insp" v-link="{ path: '/news' }"></a>
                <a class="menu-item strava" v-link="{ path: '/strava' }"></a>
            </div>
        </div>
        <div class="item footer"></div>
    </div>
</template>


<style lang="sass">
@import "../styles/sidebar.scss";
</style>
