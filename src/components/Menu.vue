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

   function fetchArray(key){
      if(localStorage.getItem(key)){
         return JSON.parse(localStorage.getItem(key));
      }
      return [];
   }
   function saveArray(key, value){
      localStorage.setItem(key, JSON.stringify(value));
   }

   export default {
      data () {
        // debugger;
         return {
            checkedNames: fetchArray("excluded_feeds")
         }
      },

      watch: {
         'checkedNames': function (val) {
            saveArray("excluded_feeds", val);
         }
      },

      methods: {

      }
   }
</script>

<style lang="sass" scoped>
   .menu {
      padding-left: 70px;
   }
</style>

