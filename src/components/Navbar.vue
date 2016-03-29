<template>
    <div class="sidebar">
        <menu v-bind:class="{open: isMenuActive}">
            <ul class="menu-list">
                <li>
                    <a data-menuview="MenuSettings" class="bordered" href="#">Settings</a>
                </li>
                <li>
                    <a data-menuview="MenuAbout" class="bordered" href="#">About</a>
                </li>
                <li>
                    <a data-menuview="MenuContact" class="bordered" href="#">Contact</a>
                </li>
            </ul>
        </menu>
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
        <div class="burger" @click="toggleMenu">
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
    export default {
        name: 'Navbar',

        data () {
            return {
                isMenuActive: false,
                activeMenuView: ""
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
