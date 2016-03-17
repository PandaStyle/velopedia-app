import Vue from 'vue'
import $ from 'jquery'
import Config from "config"

var img = Vue.directive('img', function(url) {
    var img = new Image();
    img.src = Config.env =="production" ? replaceHttps(url) : url;

    img.onload = function() {
        this.el.src = url;
        $(this.el).addClass("loaded")
    }.bind(this);

    function replaceHttps (url) {

        return url.replace(/^http:\/\//i, 'https://');
    }
});

export default img;
