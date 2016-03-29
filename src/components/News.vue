<template>
    <news-item
            class="list"
            v-for="item in items"
            :item="item">
    </news-item>
</template>


<script type="text/babel">
    import NProgress from 'nprogress';

    import Config from "config"
    import NewsItem from "./NewsItem.vue"

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
                let exludedFeeds = localStorage.getItem('excluded_feeds');

                this.$http.post(apiURL, {excluded: exludedFeeds}, function (results, status, request) {

                    transition.next({items: results.feed});

                }).error(function (data, status, request) {
                    throw (data);
                })
            }
        },

        methods: {
            loadMore () {
                console.log("loadmore");
            }
        }
    }
</script>

