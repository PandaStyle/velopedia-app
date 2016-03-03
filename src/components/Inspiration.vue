<template>
   <h1>Inspriration</h1>
    <div class="feed-view grid inspiration" data-columns v-salvattore="items" ></div>
    <button class="btn primary" @click="loadMore">Load more</button>
</template>


<script type="text/babel">
    import $ from 'jquery';
    import jqueryScrollStop from 'jquery-scrollstop';
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
                salvattoreInitialized: false,

                smallestColumnOffset: 0
            }
        },

        route: {
            data (transition) {
                this.fetchItems(this.offset, this.size, function(results, status, request){
                    transition.next({items: results});
                });
            }
        },

        ready () {
            $(window).on("scrollstart", function(){ $('body').addClass('disable-hover');});
            $(window).on("scrollstop", this.scrollHanlder);
        },

        events: {
            "imgloaded-done": function () {
                this.setColumnHeights();
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
            },

            setColumnHeights() {
                for (var b = $(".column"), c = null, d = 0, e = b.length; e > d; d++) {
                    var f = $(b[d]);
                    null == c ? (c = f.height(), this.smallestColumnOffset = f.children("div").last().offset().top + f.children("div").last().height() / 2) : c > f.height() && (c = f.height(), this.smallestColumnOffset = f.children("div").last().offset().top + f.children("div").last().height() / 2);
                }
                console.log("Smallest column: ", this.smallestColumnOffset);
            },

            scrollHanlder () {
                $('body').removeClass('disable-hover');

                var b = $(window).scrollTop() + $(window).height();
                if (b >= (this.smallestColumnOffset - ($(document).height()/5)) || b >= $(document).height() ) {

                    console.log("call fetch");
                    this.loadMore();
                };
            }
        }
    }
</script>
