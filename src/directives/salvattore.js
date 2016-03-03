
import Vue from 'vue'
import Salvattore from 'salvattore';
import _ from 'lodash';
import InspItem from '../components/InspItem.js'
import imagesLoaded from '../../node_modules/imagesloaded/imagesloaded.js';

var salvattoreInitialized = false;

var salvattore = Vue.directive('salvattore', {
    update: function (items) {

        //TODO: replace with global.offset
        items = _.takeRight(items, 20);

        var self = this,
            fragments = [];

        if(items){
            for(var i = 0; i < items.length; i++){
                fragments.push(new InspItem({
                    data: {
                        item: items[i]
                    }
                }).$mount().$el);
            }
        }

        this.vm.$nextTick(function(){
            if(fragments.length == 0)
                return;

            if(!salvattoreInitialized){
                Salvattore.init();
                salvattoreInitialized = true;
            }

            Salvattore.appendElements(self.el, fragments)

            var imgLoad = imagesLoaded(self.el);

            imgLoad.on( 'progress', function( instance, image ) {});

            imgLoad.on( 'always', function ( instance ) {
                self.vm.$dispatch('imgloaded-done')
            });

        })

    },
    unbind: function () {

    }
});

export default salvattore;
