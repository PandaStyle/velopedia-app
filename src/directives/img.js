import Vue from 'vue'
import $ from 'jquery'
import Config from "config"
import NProgress from 'nprogress';

var a = 0;
var b = 0;

var img = Vue.directive('img', function(url) {
    if(this.arg == "withloaded") {
        console.log("a ", a++)
    }

    var img = new Image();

    if(url){
        var newUrl = Config.env =="production" ? replaceHttps(url) : url;
    } else {
        throw "No url fro v-img"
    }
    img.src = newUrl;

    img.onload = function() {
        this.el.src = url;

        //assuming that we will have 50 image on the page
        $(this.el).addClass("loaded")

        if(this.arg == "withloaded") {
            console.log("b ", b++)
            NProgress.inc();
            console.log("inc");

            if(a == b){
                NProgress.done();
            }
        } else {
            NProgress.done();
        }

    }.bind(this);

    function replaceHttps (url) {

        return url.replace(/^http:\/\//i, 'https://');
    }
});

export default img;
