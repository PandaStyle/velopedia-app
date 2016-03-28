<template >
   <div class="menu">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames | json }}</span>
   </div>
</template>

<script type="text/babel">
   import Cookies from 'cookies-js'




   export default {
      data () {
        // debugger;
         return {
            checkedNames: Cookies.get('key') ? JSON.parse(Cookies.get('key')) : ["John"]
         }
      },

      watch: {
         'checkedNames': function (val) {
            Cookies.set('key', JSON.stringify(val), {domain: '', expires: 600});
         }
      }
   }
</script>

<style lang="sass" scoped>
   .menu {
      padding-left: 70px;
   }
</style>

