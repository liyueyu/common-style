<template>
    <div class="">
        <div class="style-wrap text-wrap">
            <div class="inline-text-block">默认删除块</div>
        </div>
        <div class="style-wrap text-wrap">
            <div class="text-normal">默认正文</div>
            <div class="text-secondary">次要文字</div>
            <div class="text-tips">提示文字</div>
            <div class="text-theme">主题文字</div>
            <div class="text-red">*错误信息文字</div>
            <div class="text-file">外链文字</div>
        </div>
        <div class="style-wrap">
            <div class="text-hover-theme">文本hover，变成主题色，状态</div>
            <div class="text-disabled">文本禁用状态，透明度0.6，禁用鼠标手势</div>
        </div>
        <div class="style-wrap">
            <div class="text-left">左对齐文本</div>
            <div class="text-center">居中对齐文本</div>
            <div class="text-right">右对齐文本</div>
        </div>


        <div class="code-wrap">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Common'
    }
</script>