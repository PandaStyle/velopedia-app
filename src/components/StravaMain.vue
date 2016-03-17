<template >
   <h1>Strava main</h1>
    <strava-item
            class="stravaitem"
            v-for="item in items"
            :item="item">
    </strava-item>
</template>


<script type="text/babel">
    import Config from "config";
    import StravaItem from "./StravaItem.vue";


   export default {
        name: 'StravaMain',

        components: {
           StravaItem
        },

        data () {
            return {
                items: null,
                salvattoreInitialized: false
            }
        },

        route: {
            data (transition) {
                let self = this;

                this.apiURL = Config.API_URL + "strava/activities";

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
