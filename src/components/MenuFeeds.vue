<template>
    <div class="menusettings">
        <ul>
            <li>
                <input class="sw" type="checkbox" id="bikeradar" value="bikeradar" v-model="checkedNames">
                <label for="bikeradar"></label>
                <a class="link bikeradar" href="http://www.bikeradar.com">Bikeradar</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="cyclingindustry" value="cyclingindustry" v-model="checkedNames">
                <label for="cyclingindustry"></label>
                <a class="link cyclingindustry" href="http://www.cyclingindustry.news">Cyclingindustry</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="cyclingnews" value="cyclingnews" v-model="checkedNames">
                <label for="cyclingnews"></label>
                <a class="link cyclingnews" href="http://www.cyclingnews.com">Cyclingnews</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="cyclingtips" value="cyclingtips" v-model="checkedNames">
                <label for="cyclingtips"></label>
                <a class="link cyclingtips" href="http://www.cyclingtips.com">Cyclingtips</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="cyclingweekly" value="cyclingweekly" v-model="checkedNames">
                <label for="cyclingweekly"></label>
                <a class="link cyclingweekly" href="http://www.cyclingweekly.co.uk">Cyclingweekly</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="pelotonmagazine" value="pelotonmagazine" v-model="checkedNames">
                <label for="pelotonmagazine"></label>
                <a class="link pelotonmagazine" href="http://www.pelotonmagazine.com">Peloton Magazine</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="pezcycling" value="pezcycling" v-model="checkedNames">
                <label for="pezcycling"></label>
                <a class="link pezcycling" href="http://www.pezcyclingnews.com">Pezcycling</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="roadcc" value="roadcc" v-model="checkedNames">
                <label for="roadcc"></label>
                <a class="link roadcc" href="http://www.road.cc">Road.cc</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="roadbikeaction" value="roadbikeaction" v-model="checkedNames">
                <label for="roadbikeaction"></label>
                <a class="link roadbikeaction" href="http://www.roadbikeaction.com">Roadbikeaction</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="sbs" value="sbs" v-model="checkedNames">
                <label for="sbs"></label>
                <a class="link sbs" href="http://www.sbs.com.au/">SBS Cycling</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="theinnerring" value="theinnerring" v-model="checkedNames">
                <label for="theinnerring"></label>
                <a class="link theinnerring" href="http://inrng.com">The Inner Ring</a>
            </li>
            <li>
                <input class="sw" type="checkbox" id="velonews" value="velonews" v-model="checkedNames">
                <label for="velonews"></label>
                <a class="link velonews" href="http://velonews.competitor.com">Velonews</a>
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">
    import jQuery from 'jquery';



    function fetchArray(key){
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }
        return FEEDS;
    }

    function saveArray(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    export default {
        name: 'MenuFeeds',

        data () {
            return {
                checkedNames: fetchArray("feeds")
            }
        },

        ready () {
            this.colorFeeds()
        },

        watch: {
            'checkedNames': function (val) {
                console.log(val);
                
                this.colorFeeds();
                saveArray("feeds", val);
            }
        },

        methods: {
            colorFeeds() {
                var val = this.checkedNames;
                jQuery('.link').css('color', 'grey');
                val.forEach( i => {
                    var a = jQuery('.' + i);
                    a.css('color', 'white');
                });
            }
        }

    }
</script>



<style scoped lang="sass">
    .menusettings {
        li {
            list-style: none;
            
            .link {
                text-decoration: none;
                color: #f7f7f7;
                font-family: "Futura", sans-serif;
                font-size: 30px;
            }
        }

        label:hover {
            cursor: pointer;
        }
    }

    @import "../styles/toggleButton.scss";
</style>
