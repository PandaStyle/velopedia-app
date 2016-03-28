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

                this.apiURL = Config.API_URL + "news";

                this.$http.get(this.apiURL, function (results, status, request) {

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

