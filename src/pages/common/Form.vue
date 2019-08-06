<template>
    <div>
        <div class="content-header">
            <h2>Form <small class="text-secondary f-s-16">- 表单</small></h2>
            <p class="f-s-14">包含元素：单行文本、多行文版、复选框、单选框、开关等等。</p>
            <p class="f-s-14">对应文件 form.less</p>
        </div>
        <h3>input & textarea</h3>
        <div class="style-wrap">
            <div class="mb-12">
                <input type="text" />
            </div>
            <div>
                <textarea></textarea>
            </div>
        </div>
        <h3>CheckBox & RedioBox</h3>
        <div>
            <label class="radio-box">
                <input class="input" type="radio" name="radio" checked>
                <span class="core">
                </span>
                <span class="label">单选</span>
            </label>
            <label class="radio-box">
                <input class="input" type="radio" name="radio" checked>
                <span class="core">
                </span>
                <span class="label">单选</span>
            </label>
        </div>
        <div>
            <label class="checkbox-box">
                <input class="input" type="checkbox" name="checkbox" checked>
                <span class="core">
                </span>
                <span class="label">多选</span>
            </label>
            <label class="checkbox-box">
                <input class="input" type="checkbox" name="checkbox" checked>
                <span class="core">
                </span>
                <span class="label">多选</span>
            </label>
        </div>
        <h3>Switch</h3>
        <div>
            <div class="ui-switch">
                <input type="checkbox" class="ui-switch-checkbox">
                <div class="ui-switch-inner"></div>
            </div>
            <span class="font-size-14 ib-align_center">&nbsp;&nbsp;开关</span>
        </div>
        <div>
            <div class="ui-switch">
                <input type="checkbox" disabled class="ui-switch-checkbox">
                <div class="ui-switch-inner"></div>
            </div>
            <span class="font-size-14 ib-align_center">&nbsp;&nbsp;开关禁用</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Form'
    }
</script>