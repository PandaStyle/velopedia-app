<template>
   <h1>Inspriration</h1>
    <div class="feed-view grid inspiration" data-columns v-salvattore="items">
</template>


<script type="text/babel">
    import Config from "../config"
    import salvattore from '../directives/salvattore';

   export default {
        name: 'Inspiration',

        data () {
            return {
                items: null,
                offset: 0,
                itemsSize: 20,
                salvattoreInitialized: false
            }
        },

        route: {
            data (transition) {
                this.apiURL = Config.API_URL + "inspiration/" + this.offset + "/" + this.itemsSize;

                this.$http.get(this.apiURL, function (results, status, request) {

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
