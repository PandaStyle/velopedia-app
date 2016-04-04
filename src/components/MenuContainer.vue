<template >
   <div class="menu-container">
      <ul class="menu-list" v-bind:class="{border: activeMenuView}">
         <li>
            <a data-menuview="MenuFeeds" v-bind:class="{active: activeMenuView=='MenuFeeds'}" href="#" @click="toggleMenuView">Feeds</a>
         </li>
         <li>
            <a data-menuview="MenuAbout" v-bind:class="{active: activeMenuView=='MenuAbout'}" href="#" @click="toggleMenuView">About</a>
         </li>
      </ul>
      <div class="menucontent">
         <component :is="activeMenuView" transition-mode="out-in" transition="expand" keep-alive>
            <!-- component changes when vm.currentview changes! -->
         </component>
      </div>
   </div>
</template>

<script type="text/babel">
   import MenuAbout from './MenuAbout.vue';
   import MenuFeeds from './MenuFeeds.vue';


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
         MenuFeeds,
         MenuAbout
      },

      props: {
          active: Boolean
      },

      data () {
        // debugger;
         return {
            activeMenuView: null,
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
           console.log(this.hello);
       },

      methods: {
          toggleMenuView (a) {
              this.activeMenuView = a.currentTarget.attributes[0].value;
          }
      },

      events: {
         'menuClosed' () {
            this.activeMenuView = null;
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

