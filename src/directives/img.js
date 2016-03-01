import Vue from 'vue'

var img = Vue.directive('img', function(url) {

    var img = new Image();
    img.src = url;

    img.onload = function() {
        this.el.src = url;
        $(this.el).addClass("loaded")
    }.bind(this);
});

export default img;
