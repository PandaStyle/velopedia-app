<template >

   <navbar></navbar>
   <router-view></router-view>
</template>

<script type="text/babel">
   import Navbar from './Navbar.vue'

   export default {
      data () {
         return {
            view: ""
         }
      },
      components: {
         Navbar
      }
   }
</script>

