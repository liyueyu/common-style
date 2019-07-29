<template>
    <div>
        <div class="content-header">
            <h2>Button <small class="text-secondary f-s-16">- 按钮</small></h2>
            <p class="f-s-14">包含：基础用法、禁用状态、图标按钮、不同尺寸和按钮组。</p>
            <p class="f-s-14">对应文件 button.less</p>
        </div>
        <h3>基础用法</h3>
        <div class="btn-wrap">
            <button class="ui-btn ui-btn-theme">主题色按钮（默认）</button>
            <button class="ui-btn ui-btn-gray">灰色背景按钮</button>
            <button class="ui-btn ui-btn-theme" plain>主题色线性按钮</button>
            <button class="ui-btn ui-btn-gray" plain>灰色线性按钮</button>
        </div>
        <h3>禁用按钮</h3>
        <div class="btn-wrap">
            <button class="ui-btn ui-btn-theme disabled">主题色按钮（默认）</button>
            <button class="ui-btn ui-btn-gray disabled">灰色背景按钮</button>
            <button class="ui-btn ui-btn-theme disabled" plain>主题色线性按钮</button>
            <button class="ui-btn ui-btn-gray disabled" plain>灰色线性按钮</button>
        </div>
        <h3>带图标的按钮</h3>
        <div class="btn-wrap">
            <button class="ui-btn ui-btn-theme"><span class="btn-icon ui-icon ui-eyes"></span>主题色按钮</button>
            <button class="ui-btn ui-btn-gray"><span class="btn-icon ui-icon ui-eyes"></span>灰色背景按钮</button>
            <button class="ui-btn ui-btn-theme" plain><span class="btn-icon ui-icon ui-eyes"></span>主题色线性按钮</button>
            <button class="ui-btn ui-btn-gray" plain><span class="btn-icon ui-icon ui-eyes"></span>灰色线性按钮</button>
        </div>
        <h3>按钮尺寸</h3>
        <div class="btn-wrap">
            <div class="mb-12">
                <button class="ui-btn ui-btn-theme btn-large">主题色按钮（大）</button>
                <button class="ui-btn ui-btn-gray btn-large">灰色背景按钮</button>
                <button class="ui-btn ui-btn-theme btn-large" plain>主题色线性按钮</button>
                <button class="ui-btn ui-btn-gray btn-large" plain>灰色线性按钮</button>
            </div>
            <div class="mb-12">
                <button class="ui-btn ui-btn-theme">主题色按钮（默认）</button>
                <button class="ui-btn ui-btn-gray">灰色背景按钮</button>
                <button class="ui-btn ui-btn-theme" plain>主题色线性按钮</button>
                <button class="ui-btn ui-btn-gray" plain>灰色线性按钮</button>
            </div>
            <div>
                <button class="ui-btn ui-btn-theme btn-small">主题色按钮（小）</button>
                <button class="ui-btn ui-btn-gray btn-small">灰色背景按钮</button>
                <button class="ui-btn ui-btn-theme btn-small" plain>主题色线性按钮</button>
                <button class="ui-btn ui-btn-gray btn-small" plain>灰色线性按钮</button>
            </div>
        </div>
        <h3>按钮组</h3>
        <div class="mb-12">
            <div class="ui-btn-group">
                <button class="ui-btn-group_item" v-for="btn in 4">按钮{{btn}}</button>
            </div>
        </div>
        <div class="mb-12">
            <div class="ui-btn-group">
                <button plain class="ui-btn-group_item" v-for="btn in 4">按钮{{btn}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Buttons'
    }
</script>

