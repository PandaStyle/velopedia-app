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

            if(_.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 400;})){
                imgUrl = _.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 400;}).url;
            } else 	if(_.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 399})){
                imgUrl = _.find(this.item.photos[0].alt_sizes, function(size) { return size.width === 399}).url;
            } else {
                console.log("Image doesn't have 400 or 399 width: ", item, " using size " + this.item.photos[0].alt_sizes[0].width);
                imgUrl =  this.item.photos[0].alt_sizes[0].url;
            }
            return imgUrl;
        }
    },

    template: '<div class="tile inspiration" data-tumblrid="{{item.id}}" data-tumblrreblogkey="{{item.reblog_key}}">' +
                    '<a class="overlay" href="{{item.post_url}}" target="_blank">' +
                        '<div class="lay"></div>' +
                        '<div class="blogname">{{item.blog_name}}</div>' +
                        '<div class="notecount">{{item.note_count}}</div>' +
                    '</a>' +
                    '<img v-img="url" alt=""/>' +
              '</div>'
    ,
});

export default Insp;
