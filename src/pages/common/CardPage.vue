<template>
    <div>
        <div class="content-header">
            <h2>Card <small class="text-secondary f-s-16">- 卡片</small></h2>
            <p class="f-s-14">将内容聚集在卡片容器中展示。</p>
            <p class="f-s-14">对应文件 card.less</p>
        </div>
        <h3>审批项目中的卡片</h3>
        <div>
            <cf-card></cf-card>
        </div>
        <h3>基础卡片 - <small class="text-secondary">包含头部和内容区域</small></h3>
        <div class="style-wrap">
            <card bodyClass="test-body-class">
                <span slot="icon" class="ui-icon ui-eyes"></span>
                <div v-for="index in 4">列表{{index}}</div>
            </card>
        </div>
        <h3>大图卡片</h3>
        <div>
            <!--<card v-for="index in 2"-->
                  <!--bodyClass="test-body-class1"-->
                  <!--class="mr-12"-->
                  <!--type="img">-->
                <!--<div style="padding: 12px;">-->
                    <!--<strong>汉堡-经常吃会胖{{index}}</strong>-->
                <!--</div>-->
            <!--</card>-->
        </div>
    </div>
</template>
<script>
    // import Card from "../../../../commonStyle/common-ui/src/components/Card/index";
    // import CfCard from "../../../../commonStyle/common-ui/src/components/Card/CfCard";
    export default {
        name: 'cardPage'
    }
</script>
<style lang="less">
    .test-body-class {
        width: 235px;
        padding: 12px;
    }
    .test-body-class1 {
        padding: 0;
    }
</style>
