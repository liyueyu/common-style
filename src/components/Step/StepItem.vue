<template>
    <div class="ui-step-item">
        <span class="ui-step-tail"
              :style="{'border-color': nodeStatus==='done'? tailColor: ''}"
        ></span>
        <span class="ui-step-node"
              :style="{'background-color': nodeColor}">
            <span  v-if="iconClass || nodeStatus === 'done'" class="ui-step-icon" :class="[nodeStatus === 'done'? 'ui-icon ui-true': iconClass]"></span>
            <span class="ui-step-number" v-else>{{stepKey}}</span>
        </span>
        <div class="ui-step-item-wrap">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StepItem',
        props: {
            stepKey: {
                type: Number,
                default: 0
            },
            iconClass: {
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
    .ui-step-item {
        position: relative;
        line-height: normal;
        padding-bottom: 20px;
        &:last-child .ui-step-tail{
            display: none;
        }
    }
    .ui-step-tail {
        position: absolute;
        left: 11px;
        top: 10px;
        height: 100%;
        border-left: 2px solid #e1eaf1;
    }
    .ui-step-node {
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #e1eaf1;
        text-align: center;
        line-height: 24px;
        .ui-step-number,
        .ui-step-icon {
            font-size: 12px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform-origin: center;
            transform: translate(-50%,-50%);
            color: #fff;
        }
    }
    .ui-step-item-wrap {
        margin-left: 34px;
        position: relative;
    }
</style>
