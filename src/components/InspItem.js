import Vue from 'vue'
import img from '../directives/img'
import _ from 'lodash'

var Insp = Vue.extend({
    data () {
        return {
            item: null
        }
    },

    template: '<div class="tile inspiration">' +
                    '<a class="overlay" href="{{item.post_url}}" target="_blank">' +
                        '<div class="lay"></div>' +
                        '<div class="blogname">{{item.blog_name}}</div>' +
                        '<div class="notecount">{{item.note_count}}</div>' +
                    '</a>' +
                    '<img v-img="getUrl()" alt=""/>' +
              '</div>',

    methods: {
        getUrl () {
            var imgUrl = null;

            if(_.where(this.item.photos[0].alt_sizes, {width: 400}).length>0){
                imgUrl = _.where(this.item.photos[0].alt_sizes, {width: 400})[0].url;
            } else if(_.where(this.item.photos[0].alt_sizes, {width: 399}).length>0){
                imgUrl =  _.where(this.item.photos[0].alt_sizes, {width: 399})[0].url;
            } else {
                console.log("Image doesn't have 400 or 399 width: ", this.item, " using size " + this.item.photos[0].alt_sizes[0].width);
                imgUrl =  this.item.photos[0].alt_sizes[0].url;
            }

            return imgUrl.replace(/^http:\/\//i, 'https://');
        }
    }
});

export default Insp;
