import Vue from 'vue'
import $ from 'jquery'
import Config from "config"

var a = 0;
var b = 0;

var img = Vue.directive('img', function(url) {
    console.log("a ", a++);
    
    
    var img = new Image();

    if(url){
        var newUrl = Config.env =="production" ? replaceHttps(url) : url;
    } else {
        throw "No url fro v-img"
    }

    img.src = newUrl;

    img.onload = function() {
        console.log("b ", b++);

        this.el.src = url;

        $(this.el).addClass("loaded")
    }.bind(this);

    function replaceHttps (url) {

        return url.replace(/^http:\/\//i, 'https://');
    }
});

export default img;
