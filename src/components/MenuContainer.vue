<template >
   <menu v-bind:class="{open: active}">
      <ul class="menu-list" v-bind:class="{border: activeMenuView}">
         <li>
            <a data-menuview="MenuWhat" class="bordered" v-bind:class="{active: activeMenuView=='MenuWhat'}" href="#" @click="toggleMenuView">What?</a>
         </li>
         <li>
            <a data-menuview="MenuSettings" class="bordered" v-bind:class="{active: activeMenuView=='MenuSettings'}" href="#" @click="toggleMenuView">Settings</a>
         </li>
         <li>
            <a data-menuview="MenuFeedback" class="bordered" v-bind:class="{active: activeMenuView=='MenuFeedback'}" href="#" @click="toggleMenuView">Thoughts?</a>
         </li>
      </ul>
      <div class="menucontent">
         <component :is="activeMenuView" transition-mode="out-in" transition="expand" keep-alive>
            <!-- component changes when vm.currentview changes! -->
         </component>
      </div>
   </menu>
<!--

   <div class="menu">
      <input type="checkbox" id="cyclingnews" value="cyclingnews" v-model="checkedNames">
      <label for="cyclingnews">cyclingnews</label>

      <input type="checkbox" id="cyclingnews" value="cyclingnews" v-model="checkedNames">
      <label for="cyclingnews">cyclingnews</label>

      <input type="checkbox" id="roadcc" value="roadcc" v-model="checkedNames">
      <label for="roadcc">roadcc</label>

      <input type="checkbox" id="roadbikeaction" value="roadbikeaction" v-model="checkedNames">
      <label for="roadbikeaction">cyclingtips</label>

   </div>-->
</template>

<script type="text/babel">
   import MenuWhat from './MenuWhat.vue';
   import MenuFeedback from './MenuFeedback.vue';
   import MenuSettings from './MenuSettings.vue';


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
      name: 'MenuContainer',

      components: {
         MenuWhat,
         MenuFeedback,
         MenuSettings
      },

      props: {
          active: Boolean
      },

      data () {
        // debugger;
         return {
            checkedNames: fetchArray("excluded_feeds")
         }
      },

      watch: {
         'checkedNames': function (val) {
            saveArray("excluded_feeds", val);
         },
         'hello': (val) => {
             console.log("watch", val)
         }
      },

       ready () {
           console.log("reqady")
           console.log(this.hello);
       },

      methods: {
          toggleMenuView (a) {
              this.activeMenuView = a.currentTarget.attributes[0].value;
          }
      }
   }
</script>

<style lang="sass" scoped>
   @import "../styles/menucontainer.scss";

   .menu {
      padding-left: 70px;
   }
</style>

