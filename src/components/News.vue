<template >
   <h1>News</h1>
    <div>{{items}}</div>
</template>


<script type="text/babel">
    import Config from "../config"


   export default {
        name: 'News',

        data () {
            return {
                items: null,
                salvattoreInitialized: false
            }
        },

        route: {
            data (transition) {
                let self = this;

                this.apiURL = Config.API_URL + "news/";

                this.$http.get(this.apiURL, function (results, status, request) {

                    console.log(results)
                    transition.next({items: results});

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
