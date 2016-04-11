import Vue from 'vue'
import img from '../directives/img'
import _ from 'lodash'

var Insp = Vue.extend({
    data () {
        return {
            item: null
        }
    },

    computed: {
        url: function() {
            var imgUrl = null;

            if(!this.item) {
               console.log("dsnfdosnfodsno");
               
            }

            console.log("ITEM: ", this.item);
            
            
            if(_.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 400;})){
                imgUrl = _.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 400;}).url;
            } else 	if(_.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 399})){
                imgUrl = _.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 399}).url;
            } else if (this.item.photos[0].alt_sizes[0]){
                console.log("Image doesn't have 400 or 399 width: ", this.item, " using size " + this.item.photos[0].alt_sizes[0].width);
                imgUrl =  this.item.photos[0].alt_sizes[0].url;
            } else {
                console.log("Image doesn't have a photo ", this.item);
                imgUrl = "http://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97400&w=300&h=400"
            }
            return imgUrl;
        }
    },

    template: '<div @click="inspirationItemClick(item)" href="{{item.post_url}}" target="_blank" class="tile inspiration" data-tumblrid="{{item.id}}" data-tumblrreblogkey="{{item.reblog_key}}" >' +
                    '<a class="overlay" @click="inspirationItemOverlayClick(item)" href="{{item.post_url}}" target="_blank">' +
                        '<div class="lay"></div>' +
                        '<div class="blogname">{{item.blog_name}}</div>' +
                        '<div class="notecount">{{item.note_count}}</div>' +
                    '</a>' +
                    '<img v-img="url" alt=""/>' +
              '</div>'
    ,

    methods: {
        inspirationItemOverlayClick(item) {
            mixpanel.track("Inspiration Item Overlay Click", {"postUrl": item.post_url, "blogName": item.blog_name});
        },

        inspirationItemClick(item) {
            mixpanel.track("Inspiration Item  Click", {"postUrl": item.post_url, "blogName": item.blog_name});

            window.open(item.post_url);
        }
    }
});

export default Insp;
