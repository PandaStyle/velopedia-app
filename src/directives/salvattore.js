
import Vue from 'vue'
import Salvattore from 'salvattore';
import InspItem from '../components/InspItem.js'
import imagesLoaded from '../../node_modules/imagesloaded/imagesloaded.js';

var salvattoreInitialized = false;

var salvattore = Vue.directive('salvattore', {
    update: function (items) {
        var self = this;

        var fragments = [];

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

            imgLoad.on( 'progress', function( instance, image ) {
                console.log("progress");
            });
            imgLoad.on( 'always', function ( instance ) {

            });

        })

    },
    unbind: function () {

    }
});

export default salvattore;
