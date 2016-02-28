import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/App.vue'
import Inspiration from './components/Inspiration.vue'
import StravaLogin from './components/StravaLogin.vue'
import StravaMain from './components/StravaMain.vue'


import $ from 'jquery';
import NProgress from '../node_modules/nprogress/nprogress.js';
import imagesLoaded from '../node_modules/imagesloaded/imagesloaded.js';


/*
Vue.directive('img', function(url) {

  var img = new Image();
  img.src = url;

  img.onload = function() {
    this.el.src = url;
    $(this.el).addClass("loaded")
  }.bind(this);
});
*/


Vue.use(Router);
Vue.use(VueResource);

// routing
var router = new Router({
  transitionOnLoad: true,
  hashbang: false
})

router.map({
  '/inspiration': {
    component: Inspiration
  },
  '/strava': {
    component: document.cookie.indexOf("strava_access_token") >= 0 ? StravaMain : StravaLogin
  }
});


router.start(App, '#app');
