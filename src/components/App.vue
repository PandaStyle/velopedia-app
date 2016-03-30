<template >
   <navbar></navbar>
   <div class="container {{this.$route.name}}">
      <router-view></router-view>
   </div>
</template>

<script type="text/babel">
   import Navbar from './Navbar.vue';

   export default {
      data () {
        // debugger;
         return {
            view: ""
         }
      },
      components: {
         Navbar
      }
   }
</script>

<style lang="sass">
   @import "../styles/app.scss";
</style>

