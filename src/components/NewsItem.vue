<template>
    <div class="newsitem">
        <a class="overlay" @click="newsItemClick(item)" href="{{item.link}}" target="_blank"></a>
        <div class="tile-image"><img v-img="item.image" alt=""/></div>
        <header>
            <a class="title" href="{{item.link}}" target="_blank">{{item.title}}</a>
            <div class="summary">{{{item.summary}}}</div>
            <div class=meta>
                <a class="host" @click="websiteNameClick(item)" href="{{item.link}}">{{item.feed}}</a>
                <span class="diff">{{item.diff}} ago</span>
                <span class="share general" v-bind:class="[isShareActive ? 'icon-cross' : 'icon-share-alternitive']" @click="toggleShare(item.title)"></span>
                <a @click="shareItemClick(item.title, 'twitter')" target="_blank" href="https://twitter.com/intent/tweet?original_referer=http://curatist.co&text={{item.title}}&tw_p=tweetbutton&url={{item.link}}&via=Velopedia" class="share twitter icon-twitter" v-show="isShareActive"></a>
                <a @click="shareItemClick(item.title, 'facebook')" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={{item.link}}&t={{item.title}}" class="popup share facebook icon-facebook" v-show="isShareActive"></a>
                <a @click="shareItemClick(item.title, 'pocket')" target="_blank" href="https://getpocket.com/save?url={{item.link}}" class="share pocket icon-get-pocket" v-show="isShareActive"></a>
                <a @click="shareItemClick(item.title, 'mail')" target="_blank" href="mailto:?Subject=From Velopedia: {{item.title}}&Body=I%20saw%20this%20and%20thought%20of%20you!%20 {{item.link}}" class="share linkedin icon-paper-plane" v-show="isShareActive"></a>
            </div>
        </header>
    </div>
</template>


<script type="text/babel">
    import img from '../directives/img'

    export default {
        name: 'NewsItem',

        props: {
            item: Object
        },

        data () {
            return {
                isShareActive: false
            }
        },

        ready () {

        },

        methods: {

            toggleShare (title) {
                mixpanel.track("News Item Share Toggle", {"title": title});

                this.isShareActive = !this.isShareActive;
            },

            newsItemClick(item) {
                mixpanel.track("News Item Click", {"feed": item.feed, "title": item.title});
            },

            shareItemClick(title, type) {
                mixpanel.track("Share Item Click", {"type": type, "title": title});
            },

            websiteNameClick(item) {
                mixpanel.track("News Website Name Click", {"feed": item.feed, "title": item.title});
            }
        }
    }
</script>

<style lang="sass">
    @import "../styles/newsitem.scss";
</style>
