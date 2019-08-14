<template>
    <div>
        <div class="content-header">
            <h2>Card <small class="text-secondary f-s-16">- 卡片</small></h2>
            <p class="f-s-14">将内容聚集在卡片容器中展示。</p>
            <p class="f-s-14">对应文件 card.less</p>
        </div>
        <h3>审批项目中的卡片</h3>
        <div class="style-wrap">
            <cf-card style="width: 240px;" class="mr-12 mb-12"></cf-card>
            <cf-card style="width: 240px;" class="mr-12 mb-12"
                     title="右上角出现操作按钮卡片"
            >
                <div class="mt-12 ml-12">
                    <img width="44" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
                </div>
                <div class="card-action-btn" slot="rightTop">
                    <span class="action-btn-item ui-icon ui-star"></span>
                    <span class="action-btn-item ui-icon ui-like"></span>
                </div>
            </cf-card>
            <cf-card style="width: 240px;" class="mr-12 mb-12"
                     title="底部出现操作按钮卡片"
            >
                <div class="mt-12 ml-12">
                    <img width="44" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
                </div>
                <div class="card-action-btn" slot="footer">
                    <span class="action-btn-item ui-icon ui-star"></span>
                    <span class="float-r"><span class="action-btn-item ui-icon ui-like"></span></span>
                </div>
            </cf-card>
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
            <card v-for="index in 2"
                  bodyClass="test-body-class1"
                  class="mr-12"
                  type="img">
                <div style="padding: 12px;">
                    <strong>汉堡-经常吃会胖{{index}}</strong>
                </div>
            </card>
        </div>
    </div>
</template>
<script>
    import Card from '../../components/Card/index'
    import CfCard from '../../components/Card/CfCard'
    export default {
        name: 'cardPage',
        components: {
            Card,
            CfCard
        }
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
    .card-action-btn {
        font-weight: normal;
        color: #fff;
    }
    .action-btn-item {
        line-height: 30px;
        padding: 8px;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            color: #F59C25;
        }
    }
</style>
