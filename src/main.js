import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import $ from 'jquery';
import NProgress from '../node_modules/nprogress/nprogress.js';
import imagesLoaded from '../node_modules/imagesloaded/imagesloaded.js';


import App from './components/App.vue'
import Inspiration from './components/Inspiration.vue'
import InspItem from './components/InspItem.js'
import News from './components/News.vue'
import NewsItem from './components/NewsItem.vue'
import StravaLogin from './components/StravaLogin.vue'
import StravaMain from './components/StravaMain.vue'



Vue.use(Router);
Vue.use(VueResource);

// routing
var router = new Router({
  transitionOnLoad: true,
  hashbang: false
});

router.map({
  '/inspiration': {
    component: Inspiration
  },
  '/news': {
    component: News
  },
  '/strava': {
    component: document.cookie.indexOf("strava_access_token") >= 0 ? StravaMain : StravaLogin
  }
});


router.start(App, '#app');
