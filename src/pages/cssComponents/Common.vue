<template>
    <div class="">
        <div class="content-header">
            <h2>Common <small class="text-secondary f-s-16">- 通用快捷样式</small></h2>
            <p class="f-s-14">包含：文本、字号、边框、其他快捷样式</p>
            <p class="f-s-14">对应文件 common.less</p>
        </div>
        <h3>文本 - <small class="text-secondary">颜色、缺省、对齐</small></h3>
        <div class="style-wrap text-wrap">
            <div class="text-normal"><div class="text-key">默认正文</div> //.text-normal</div>
            <div class="text-secondary"><div class="text-key">次要文字</div> //.text-secondary</div>
            <div class="text-tips"><div class="text-key">提示文字</div> //.text-tips</div>
            <div class="text-theme"><div class="text-key">主题文字</div> //.text-theme</div>
            <div class="text-red"><div class="text-key">*错误信息文字</div> //.text-red</div>
            <div class="text-file"><div class="text-key">外链文字</div> //.text-file</div>
        </div>
        <div class="style-wrap">
            <div class="text-hover-theme"><div class="text-key">文本hover，变成主题色</div> // .text-hover-theme</div>
            <div class="text-disabled"><div class="text-key">文本禁用状态，透明度0.6，禁用鼠标手势</div> // .text-disabled</div>
        </div>
        <div class="style-wrap">
            <div style="width: 150px; margin-bottom: 10px" class="ellipsis">.ellipsis //单行文本缺省- hehehehehehhehe</div>
            <div style="width: 150px; margin-bottom: 10px" class="ellipsis-2">.ellipsis-2 //两行文本缺省- hahhahahhahahahahahhahahahahhahhahahahahhaahahahahhahaha</div>
        </div>
        <div class="style-wrap">
            <div class="text-left">左对齐文本 // .text-left</div>
            <div class="text-center">居中对齐文本 // .text-center</div>
            <div class="text-right">右对齐文本 // .text-right</div>
        </div>
        <hr>
        <h3>字号</h3>
        <div class="style-wrap">
            <div class="f-s-12">快捷字号12px // .f-s-12</div>
            <div class="f-s-14">快捷字号14px // .f-s-14</div>
            <div class="f-s-16">快捷字号16px // .f-s-16</div>
            <div class="f-s-18">快捷字号18px // .f-s-18</div>
        </div>
        <hr>
        <h3>边框 border</h3>
        <div class="style-wrap">
            <div style="display: inline-block;padding: 4px 12px; margin-right: 24px;"
                 class="ib-align_center border-t">上边框 //.border-t</div>
            <div style="display: inline-block;padding: 4px 12px; margin-right: 24px;"
                 class="ib-align_center border-r">右边框 //.border-t</div>
            <div style="display: inline-block;padding: 4px 12px; margin-right: 24px;"
                 class="ib-align_center border-b">下边框 //.border-t</div>
            <div style="display: inline-block;padding: 4px 12px; margin-right: 24px;"
                 class="ib-align_center border-l">左边框 //.border-t</div>
        </div>
        <hr>
        <h3>其他</h3>
        <div class="style-wrap">
            <div><span class="text-key">.ib-align_center</span>内联元素居中对齐</div>
            <div><span class="text-key">.middle-center</span>水平垂直居中(绝对定位法)</div>
            <div><span class="text-key">.scroll-auto</span>滚动条-超出容器自动出现滚动条</div>
            <div><span class="text-key">.scrolling-touch</span>滚动条-滚动缓冲</div>
            <div><span class="text-key">.clearfix</span>清除浮动</div>
            <div><span class="text-key">common.less文件中包含</span>自定义滚动条</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Common'
    }
</script>