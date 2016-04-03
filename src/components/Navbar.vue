<template>
    <div class="sidebar">
        <menu-container v-bind:active="isMenuActive"></menu-container>

        <div class="logo-wrapper">
            <img src="../img/logo.png" class="logo" />
        </div>
        <div class="item content">
            <div class="menu">
                <a class="menu-item news" v-link="{ path: '/news' }">
                    <div class="menu-icon icon-news"></div>
                    <span class="menu-title">News</span>
                </a>
                <a class="menu-item insp" v-link="{ path: '/inspiration' }">
                  <span class="menu-icon icon-image"></span>
                    <span class="menu-title">Inspiration</span>
                </a>

            </div>
        </div>
        <div class="burger" v-bind:class="{'active' : isMenuActive }" @click="toggleMenu">
            <div class="col">
                <div class="con">
                    <div class="bar arrow-top-r"></div>
                    <div class="bar arrow-middle-r"></div>
                    <div class="bar arrow-bottom-r"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import $ from 'jquery';
    import MenuContainer from './MenuContainer.vue';


    export default {
        name: 'Navbar',

        components: {
            MenuContainer
        },

        data () {
            return {
                isMenuActive: false
            }
        },

        methods: {
            toggleMenu () {
                this.isMenuActive = !this.isMenuActive;
            }
        }
    }
</script>

<style lang="sass">
@import "../styles/sidebar.scss";
</style>
