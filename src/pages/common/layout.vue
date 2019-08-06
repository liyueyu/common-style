<template>
    <div class="layout-page">
        <div class="content-header">
            <h2>Layout <small class="text-secondary f-s-16">- 布局</small></h2>
            <p class="f-s-14">包含：瀑布流、页面结构、flex 栅格</p>
            <p class="f-s-14">对应文件 layout.less</p>
        </div>
        <h3>瀑布流</h3>
        <div class="column-layout-wrap">
            <div class="column-item" v-for="idx in 8">
                <div :style="{height: idx*25 + 'px'}">{{idx}}</div>
            </div>
        </div>
        <h3>常见页面结构</h3>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item bg-gray-9">
                        content
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item vertical-center ui-flex-grid horizontally-stretch">
                        <div class="ui-flex-grid-none bg-gray-7">top</div>
                        <div class="ui-flex-grid-item bg-gray-9 scroll-auto">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item vertical-center ui-flex-grid horizontally-stretch">
                        <div class="ui-flex-grid-none bg-gray-7">top</div>
                        <div class="ui-flex-grid-item bg-gray-9 scroll-auto">
                            content
                        </div>
                    </div>
                    <div class="ui-flex-grid-none bg-gray-5">right</div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item vertical-center ui-flex-grid horizontally-stretch">
                        <div class="ui-flex-grid-item bg-gray-9 scroll-auto">
                            content
                        </div>
                        <div class="ui-flex-grid-none bg-gray-7">bottom</div>
                    </div>
                    <div class="ui-flex-grid-none bg-gray-5">right</div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item bg-gray-9">
                        content
                    </div>
                    <div class="ui-flex-grid-none bg-gray-5">right</div>
                </div>
                <div class="ui-flex-grid-none bg-gray-7">footer</div>
            </div>
        </div>
        <h3>flex 栅格 - <small class="text-secondary">平均分割（水平、垂直）</small></h3>
        <div class="flex-grid-wrap">
            <div class="ui-flex-grid">
                <div class="ui-flex-grid-item" v-for="index in 2">二等分({{index}})</div>
            </div>
            <div class="ui-flex-grid">
                <div class="ui-flex-grid-item" v-for="index in 3">三等分({{index}})</div>
            </div>
            <div class="ui-flex-grid">
                <div class="ui-flex-grid-item" v-for="index in 5">五等分({{index}})</div>
            </div>
            <div class="ui-flex-grid">
                <div class="ui-flex-grid-item" v-for="index in 8">八等分({{index}})</div>
            </div>
            <div class="ui-flex-grid">
                <div class="ui-flex-grid-item" v-for="index in 12">十二等分({{index}})</div>
            </div>
        </div>
        <div class="flex-grid-wrap">
            <div class="ui-flex-grid vertical-center">
                <div class="ui-flex-grid-item" v-for="index in 2">垂直二等分({{index}})</div>
            </div>
            <div class="ui-flex-grid vertical-center">
                <div class="ui-flex-grid-item" v-for="index in 5">垂直五等分({{index}})</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'layout'
    }
</script>
<style lang="less" scoped>
    .flex-grid-wrap .ui-flex-grid{
        text-align: center;
        margin-bottom: 12px;
        &.vertical-center {
            height: 150px;
        }
        .ui-flex-grid-item {
            padding: 4px ;
            background-color: #e9ecf1;
            &:nth-child(2n) {
                background-color: #d8d8d8;
            }
        }
    }
    .column-item {
        &:nth-child(2n) {
            background-color: red;
        }
        &:nth-child(3n) {
            background-color: #32AA70;
        }
    }
</style>
