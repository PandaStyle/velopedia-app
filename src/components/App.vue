<template >

   <menu></menu>
   <navbar></navbar>
   <div class="container {{this.$route.name}}">
      <router-view></router-view>
   </div>
</template>

<script type="text/babel">
   import Navbar from './Navbar.vue';
   import Menu from './Menu.vue';

   export default {
      data () {
        // debugger;
         return {
            view: ""
         }
      },
      components: {
         Navbar,
         Menu
      }
   }
</script>

<style lang="sass">
   @import "../styles/app.scss";
</style>

