<template>
    <div class="menusettings">



            <input class="sw" type="checkbox" id="cyclingnews" value="cyclingnews" v-model="checkedNames">

        <label for="cyclingnews">cyclingnews</label>
        <div class="feed-line">
            <label for="roadcc">roadcc</label>
            <input class="sw" type="checkbox" id="roadcc" value="roadcc" v-model="checkedNames">
        </div>

        <div class="feed-line">
            <label for="roadbikeaction">cyclingtips</label>
            <input class="sw" type="checkbox" id="roadbikeaction" value="roadbikeaction" v-model="checkedNames">
        </div>



    </div>
</template>

<script type="text/babel">

    function fetchArray(key){
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }
        return [];
    }

    function saveArray(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    export default {
        name: 'MenuFeeds',

        data () {
            return {
                checkedNames: fetchArray("excluded_feeds")
            }
        },

        watch: {
            'checkedNames': function (val) {
                saveArray("excluded_feeds", val);
            }
        }
    }
</script>



<style scoped lang="sass">
    @import "../styles/toggleButton.scss";
</style>
