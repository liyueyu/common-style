<template>
    <div class="ui-step" :class="{'ui-step-vertical': horizontal}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Step',
        props: {
            horizontal : {
                type: Boolean,
                default: true
            },

        }

    }
</script>
<style lang="less">
    // 水平垂直的步骤条
    .ui-step-vertical{
        display: flex;
        .ui-step-item {
            flex: 1;
            min-width: 33.33%;
        }
        .ui-step-tail {
            height: 0;
            width: 100%;
            border-left: 0;
            top: 10px;
            border-top: 2px solid #e1eaf1;
        }
        .ui-step-node {
            position: relative;
            display: inline-block;
        }
        .ui-step-item-wrap {
            margin: 10px 0 0 0;
        }
    }
    // 居中对齐的步骤条
    .ui-step[align-center] {
        text-align: center;
        .ui-step-tail {
            left: 50%;
        }
    }
    // 块状样式的步骤条
    .ui-step[block] {
        background-color: #f4f6fa;
        text-align: center;
        .ui-step-tail {
            display: none;
        }
        .ui-step-item {
            padding-top: 20px;
        }
    }
</style>
