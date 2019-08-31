<template>
    <div class="ui-tabs">
        <div class="ui-tab-nav">
            <div class="ui-tab-nav-item"></div>
        </div>
       <slot ref="tabPanel"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Tabs',
        mounted () {
            return this.$refs.tabPanel.props
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>

</style>
