<template>
    <div class="ui-timeline" :class="{'ui-timeline-vertical': !horizontal}">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TimeLine',
        props: {
            horizontal : {
                type: Boolean,
                default: true
            }
        }

    }
</script>
<style lang="less">
    .ui-timeline-vertical{
        display: flex;
        .ui-timeline-item {
            flex: 1;
            min-width: 33.33%;
        }
        .ui-timeline-tail {
            height: 0;
            width: 100%;
            border-left: 0;
            top: 5px;
            border-top: 2px solid #e1eaf1;
        }
        .ui-timeline-node {
            position: relative;
            display: inline-block;
        }
        .ui-timeline-item-wrap {
            margin: 0;
        }
    }
</style>
