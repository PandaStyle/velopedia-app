<template>
    <h1>NEWS</h1>
    <news-item
            class="muzli"
            v-for="item in items"
            :item="item">
    </news-item>
</template>


<script type="text/babel">
    import Config from "../config"
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

