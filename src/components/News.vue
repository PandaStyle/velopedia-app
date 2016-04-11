<template>
    <news-item
            class="list"
            v-for="item in items"
            :item="item">
    </news-item>
</template>


<script type="text/babel">
    import NProgress from 'nprogress';
    import _ from "lodash";

    import Config from "config";
    import NewsItem from "./NewsItem.vue";

    import Feeds from "../const/feeds";

    export default {
        name: 'News',

        components: {
           NewsItem
        },

        data () {
            return {
                items: null
            }
        },

        route: {
            data (transition) {
              
              
                NProgress.start();

                let apiURL = Config.API_URL + "news";
                console.log(Feeds.length);
                
                let exludedFeeds = _.difference(Feeds, JSON.parse(localStorage.getItem('feeds')));

                this.$http.post(apiURL, {excluded: JSON.stringify(exludedFeeds) }, function (results, status, request) {

                    transition.next({items: results.feed});

                }).error(function (data, status, request) {
                    throw (data);
                })
            }
        },

        ready () {
            mixpanel.track("News page load");
        },

        methods: {
            loadMore () {
                console.log("loadmore");
            }
        }
    }
</script>

