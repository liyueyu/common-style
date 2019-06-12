<template>
    <div class="ui-flex-grid vertical-center">
        <div class="ui-flex-grid-none" v-if="img">
            <slot name="img"></slot>
        </div>
        <div class="ui-flex-grid-item content">
            <div class="title">{{title}}</div>
            <div class="tips">{{tips}}</div>
        </div>
        <div class="ui-flex-grid-none">
            <span :class="{icon_class}"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            title: String,
            tips: String,
            link: Boolean,
            img: Boolean,
            icon_class: String
        }
    }
</script>

<style lang="less" scoped>

</style>