<template>
    <div>
        <div class="content-header">
            <h2>Step <small class="text-secondary f-s-16">- 步骤条</small></h2>
            <p class="f-s-14">按一定流程完成任务的分布导航条，可以设置每个步骤节点的场景，节点不少于2个。</p>
            <p class="f-s-14">对应组件目录components/Step</p>
        </div>
        <h3>基础用法</h3>
        <step>
            <step-item v-for="(item, key) in stepData"
                       :stepKey="key + 1"
                       :nodeColor="item.nodeColor"
                       :tailColor="item.nodeColor"
                       :nodeStatus="item.status">
                <div slot="content">
                    <div class="f-s-12">{{item.info}}</div>
                    <div class="text-secondary">{{item.time}}</div>
                </div>
            </step-item>
        </step>
        <h3>带图标的步骤条</h3>
        <step>
            <step-item v-for="(item, key) in stepData"
                       :stepKey="key + 1"
                       :iconClass="item.iconClass"
                       :nodeColor="item.nodeColor"
                       :tailColor="item.nodeColor"
                       :nodeStatus="item.status">
                <div slot="content">
                    <div class="f-s-14">步骤{{key + 1}}</div>
                    <div class="f-s-12">{{item.info}}</div>
                    <div class="text-secondary">{{item.time}}</div>
                </div>
            </step-item>
        </step>
        <h3>居中对齐的步骤条</h3>
        <step align-center>
            <step-item v-for="(item, key) in stepData"
                       :stepKey="key + 1"
                       :nodeColor="item.nodeColor"
                       :tailColor="item.nodeColor">
                <div slot="content">
                    <div class="f-s-14">步骤{{key + 1}}</div>
                    <div class="f-s-12">{{item.info}}</div>
                    <div class="text-secondary">{{item.time}}</div>
                </div>
            </step-item>
        </step>
        <h3>块状的步骤条</h3>
        <step block>
            <step-item v-for="(item, key) in stepData"
                       :stepKey="key + 1"
                       :nodeColor="item.nodeColor"
                       :tailColor="item.nodeColor">
                <div slot="content">
                    <div class="f-s-14">步骤{{key + 1}}</div>
                    <div class="f-s-12">{{item.info}}</div>
                    <div class="text-secondary">{{item.time}}</div>
                    <span class="step-block-icon text-secondary ui-icon ui-arrow-right"></span>
                </div>
            </step-item>
        </step>
        <h3>竖状步骤条</h3>
        <step :horizontal="false">
            <step-item v-for="(item, key) in stepData"
                       :stepKey="key + 1"
                       :nodeColor="item.nodeColor"
                       :tailColor="item.nodeColor">
                <div slot="content">
                    <div class="f-s-12">{{item.info}}</div>
                    <div class="text-secondary">{{item.time}}</div>
                </div>
            </step-item>
        </step>
    </div>
</template>

<script>
    import Step from '../../components/Step/Step'
    import StepItem from '../../components/Step/StepItem'
    export default {
        name: 'StepPage',
        components: {Step, StepItem},
        data () {
            return {
                stepData: [
                    {
                        info: '开始说明信息',
                        time: '2019-08-27',
                        status: 'done',
                        nodeColor: 'yellowgreen'
                    },
                    {
                        info: '说明信息哦~',
                        time: '2019-08-28',
                        status: 'doing',
                        nodeColor: 'orange',
                        iconClass: 'ui-icon ui-user'
                    },
                    {
                        info: '呵呵呵',
                        time: '2019-08-29',
                        status: 'doing',
                        nodeColor: '#e1eaf1',
                        iconColor: '#3cbaff',
                        iconClass: 'ui-icon ui-star'
                    }
                ],
                timelineAPI: [
                    ['horizontal','水平方向','Boolean', '--', 'true'],
                    ['iconClass','节点图标','String', '推荐使用iconfont', '--'],
                    ['nodeColor','节点颜色','String', '--', '#e1eaf1'],
                    ['tailColor','节点连接线颜色','String', '--', '#e1eaf1'],
                    ['nodeStatus','节点状态','String', 'done、doing', '--']
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .ui-step {
        .step-block-icon {
            position: absolute;
            font-size: 12px;
            right: -6px;
            top: 50%;
            transform: translateY(-50%);
        }
        .ui-step-item:last-child .step-block-icon {
            display: none;
        }
    }

</style>
