<template>
   <h1>Inspriration</h1>
    <div class="feed-view grid inspiration" data-columns v-salvattore="items" ></div>
    <button class="btn primary" @click="loadMore">Load more</button>
</template>


<script type="text/babel">
    import Config from "../config"
    import salvattore from '../directives/salvattore';

    window.ids = [];

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
                this.fetchItems(this.offset, this.size, function(results, status, request){
                    transition.next({items: results});
                });
            }
        },

        methods: {
            fetchItems (offset, size, func) {
                this.apiURL = Config.API_URL + "inspiration/" + this.offset + "/" + this.itemsSize;

                this.$http.get(this.apiURL, function (results, status, request) {

                    results.forEach(i => {
                        window.ids.push(i.id);
                    });


                    func(results, status, request)

                }).error(function (data, status, request) {
                    throw (data);
                })
            },

            loadMore () {
                var self = this;
                this.offset += 20;
                this.fetchItems(this.offset, this.size, function(results, status, request){
                    results.forEach(i => {
                        self.items.push(i);
                    });
                });
            }
        }
    }
</script>
