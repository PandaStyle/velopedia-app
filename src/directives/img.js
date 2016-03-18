import Vue from 'vue'
import $ from 'jquery'
import Config from "config"

var img = Vue.directive('img', function(url) {
    var img = new Image();
    var newUrl = Config.env =="production" ? replaceHttps(url) : url;

    img.src = newUrl;
    
    console.log("img url: ", img.src);

    img.onload = function() {
        this.el.src = newUrl;
        console.log("img new url: ", newUrl);

        $(this.el).addClass("loaded")
    }.bind(this);

    function replaceHttps (url) {

        return url.replace(/^http:\/\//i, 'https://');
    }
});

export default img;
