<template >
   <div class="menu">
      <input type="checkbox" id="cyclingnews" value="cyclingnews" v-model="checkedNames">
      <label for="cyclingnews">cyclingnews</label>

      <input type="checkbox" id="cyclingnews" value="cyclingnews" v-model="checkedNames">
      <label for="cyclingnews">cyclingnews</label>

      <input type="checkbox" id="roadcc" value="roadcc" v-model="checkedNames">
      <label for="roadcc">roadcc</label>

      <input type="checkbox" id="roadbikeaction" value="roadbikeaction" v-model="checkedNames">
      <label for="roadbikeaction">cyclingtips</label>

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

