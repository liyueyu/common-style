<template>
    <div class="ui-timeline-item">
        <span class="ui-timeline-tail"
              :style="{'border-color': nodeStatus==='done'? tailColor: ''}"
         ></span>
        <span class="ui-timeline-node"
              :class="{'large-node': iconClass}"
              :style="{'background-color': nodeColor}"
        >
            <span class="ui-timeline-icon" :class="iconClass"></span>
        </span>
        <div class="ui-timeline-item-wrap">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TimeLineItem',
        props: {
            iconClass : {
                type: String,
                default: ''
            },
            nodeColor: {
                type: String,
                default: '#e1eaf1'
            },
            tailColor: {
                type: String,
                default: '#e1eaf1'
            },
            nodeStatus: {
                type: String,
                default: ''
            }
        }

    }
</script>

<style lang="less">
    .ui-timeline-item {
        position: relative;
        line-height: normal;
        padding-bottom: 20px;
        &:last-child .ui-timeline-tail{
            display: none;
        }
    }
    .ui-timeline-tail {
        position: absolute;
        left: 5px;
        top: 0;
        height: 100%;
        border-left: 2px solid #e1eaf1;
    }
    .ui-timeline-node {
        position: absolute;
        left: 0;
        top: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #e1eaf1;
        &.large-node {
            width: 16px;
            height: 16px;
            left: -2px;
        }
        .ui-timeline-icon {
            font-size: 12px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform-origin: center;
            transform: translate(-50%,-50%);
            color: #fff;
        }
    }
    .ui-timeline-item-wrap {
        margin-left: 24px;
        position: relative;
        top: -3px;
    }
</style>
