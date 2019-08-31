<template>
    <div class="ui-tab-panel" id="tabPanel">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TabPanel',
        data () {
            return {
                islabel: ''
            }
        },
        props: {
            label: {
                type: String,
                default: '标签'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
            return this.islabel = this.label
        }
    }
</script>

<style lang="less" scoped>
    .ui-tab-panel {

    }
</style>
