<template >
    <div class="stravaitem">
        <div class="desc">
            <div class="athlete-name">{{item.athlete.firstname}} {{item.athlete.lastname}}</div>
            <div class="activity-name">{{item.name}}</div>
        </div>
        <img class="staticmap" v-bind:src="mapUrl" />
        <img class="profile-img" v-bind:src="profileImage" />
        <div class="numbers">
            <div class="distance">{{distance}} km</div>
            <div class="elevation"><span class="icon icon-mountains"></span>{{item.total_elevation_gain}} m</div>
            <div class="kudos_count"><span class="icon icon-like"></span>{{item.kudos_count}}</div>
        </div>
    </div>
</template>

<script type="text/babel">
    import img from '../directives/img'

    export default {
        name: 'StravaItem',

        props: {
            item: Object
        },

        data () {
            return {
                mapUrl: this.getMapUrl(),
                distance: (this.item.distance/1000).toFixed(1),
                profileImage: this.item.athlete.profile_medium,
                style: this.style()
            }
        },

        methods: {

            getMapUrl: function()  {
                return 'https://maps.googleapis.com/maps/api/staticmap?size=250x250&maptype=terrain&path=weight:3%7Ccolor:0xff0000ff%7Cenc:' +
                        encodeURIComponent(this.item.map.summary_polyline) +
                        this.style() +
                '&key=AIzaSyD5GJ44k_cR6A1yptoyCh-t8p51IiWCL7A';
            },

            style: function() {
                var subtle_grayscale = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
                var pale = [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}];
                var cool_grey = [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}];
                var clean_grey = [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e3e3e3"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#cccccc"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#FFFFFF"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}];

                var selected = subtle_grayscale    ;

                return get_static_style(selected);

                function get_static_style(styles) {
                    var result = [];
                    styles.forEach(function(v, i, a){
                        var style='';
                        if (v.stylers.length > 0) { // Needs to have a style rule to be valid.
                            style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
                            style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
                            v.stylers.forEach(function(val, i, a){
                                var propertyname = Object.keys(val)[0];
                                var propertyval = new String(val[propertyname]).replace('#', '0x');
                                style += propertyname + ':' + propertyval + '|';
                            });
                        }
                        result.push('&style='+encodeURIComponent(style))
                    });

                    return result.join('&');
                }

            }
        }

    }
</script>

<style lang="sass">
    @import "../styles/stravaitem.scss";
</style>

https://maps.googleapis.com/maps/api/staticmap?size=250x250&maptype=terrain&path=weight:3%7Ccolor:0xff0000ff%7Cenc:mzxaG%7Cw_qLl%40~RvZxl%40%60LnGxHeEsDwD%7DEzLqg%40b%5Bwp%40l%7CA%7B%5D%7DYaRjVaUjAuXxQg%7C%40%7CFuR_Foa%40qYcWxi%40qOyDgOlRzVn%60AgCnk%40dNnk%40t%5C%5C~g%40_Ib%60A~Ez%5Ehz%40trA%7BE%7CLc%5BpJe_%40ho%40kVrbAfBlZlD%5C%5CtAhJrVdUdExNlO%7CFfBzYpGjJpBzSfLhIFjjAgImF%7Bp%40pt%40eU%60B%5Ehn%40_V~Pe%5D%60HeCpk%40cr%40t%5C%5CgLvg%40iC~n%40%7CBxUtLtQmXtJ~Ixg%40pe%40zuA%60AlX_ViCmQvA%7D%5C%5CxPyNcDqI%7BGmJga%40eIuDcMwXgd%40k%5DisA%7DLqXgd%40qj%40iSsLfGvGeR%7Ce%40en%40lLau%40tXe%5EnZogAnV_ObLsc%40jc%40eH%7CFmY%7CbA_hAxi%40stA~Xwa%40%7CGoh%40bJkOno%40uJbL%7BHbCtBfFaKz%7C%40pm%40f%5EkGn%5D%7DQx%7B%40LbW_cBliAa%7CBx%5BoE%60o%40dIfMq%5Bj%5BkMvPCrA_L%60%60AdYx%5Bgi%40tTwOdG%7DOlBsPeAgUsJga%40bUyf%40fB%7Dd%40dKeb%40pj%40zXz%40iQdV_%60%40&key=AIzaSyAPFGBr9K2wsB_K6YmOW1Y_QykwzAoS1IE
