<template>
    <div class="sidebar">
        <div class="logo-wrapper">
            <img src="../img/logo.png" class="logo" />
        </div>
        <div class="item content">
            <div class="menu">
                <a class="menu-item news" v-link="{ path: '/news' }">
                    <img src="../img/calendar@2x.png" alt="">
                    <span class="menu-title">News</span>
                </a>
                <a class="menu-item insp" v-link="{ path: '/inspiration' }">
                    <img src="../img/tumblr@2x.png" alt="">
                    <span class="menu-title">Inspiration</span>
                </a>

            </div>
        </div>
        <div class="item footer"></div>
    </div>
</template>


<style lang="sass">
@import "../styles/sidebar.scss";
</style>
