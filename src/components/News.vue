<template>
    <h1>NEWS</h1>
    <div v-for="item in items">
        {{item.title}}
    </div>
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

                    console.log(results.updatedFeeds.updatedFeed)
                    transition.next({items: results.updatedFeeds.updatedFeed});

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

