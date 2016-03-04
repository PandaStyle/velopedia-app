<template>
    <div class="wrapper">
        <span class="square">
            <a class="tenth before after" href="#">

               <div> {{item.item.title}}</div>

            </a>
        </span>
    </div>
</template>


<script type="text/babel">
    export default {
        name: 'NewsItem',

        props: {
            item: Object
        }
    }
</script>

<style lang="sass">
    @import "../styles/newsitem.scss";
</style>
