<template>
    <div>
        <div class="content-header">
            <h2>TimeLine <small class="text-secondary f-s-16">- 时间线</small></h2>
            <p class="f-s-14">显示时间流信息。</p>
            <p class="f-s-14">对应组件目录components/TimeLine</p>
        </div>
        <div class="ui-flex-grid">
            <div class="ui-flex-grid-item">
                <h3>基础用法</h3>
                <time-line>
                    <time-line-item v-for="item in timelineData">
                        <div slot="content">
                            <div class="f-s-14">{{item.content}}</div>
                            <div class="text-secondary">{{item.time}}</div>
                        </div>
                    </time-line-item>
                </time-line>
            </div>
            <div class="ui-flex-grid-item">
                <h3>自定义节点样式</h3>
                <time-line>
                    <time-line-item v-for="item in timelineData"
                                    :iconClass="item.iconClass"
                                    :nodeColor="item.nodeColor"
                                    :tailColor="item.nodeColor"
                                    :nodeStatus="item.status">
                        <div slot="content">
                            <div class="f-s-14">{{item.content}}</div>
                            <div class="text-secondary">{{item.time}}</div>
                        </div>
                    </time-line-item>
                </time-line>
            </div>
        </div>
        <h3>横向时间线</h3>
        <time-line :horizontal="false">
            <time-line-item v-for="item in timelineData"
                            :iconClass="item.iconClass"
                            :nodeColor="item.nodeColor"
                            :tailColor="item.nodeColor"
                            :nodeStatus="item.status">
                <div slot="content">
                    <div class="f-s-14">{{item.content}}</div>
                    <div class="text-secondary">{{item.time}}</div>
                </div>
            </time-line-item>
        </time-line>
        <h3>API</h3>
        <api-table :data="timelineAPI"></api-table>
    </div>
</template>

<script>
    import TimeLine from '../../components/TimeLine/TimeLine'
    import TimeLineItem from '../../components/TimeLine/TimeLineItem'
    import ApiTable from '../apiTable/ApiTable'

    export default {
        name: 'TimeLinePage',
        components: {ApiTable, TimeLineItem, TimeLine},
        data () {
            return {
                timelineData: [
                    {
                        content: '开始',
                        time: '2019-08-27',
                        status: 'done',
                        nodeColor: 'yellowgreen'
                    },
                    {
                        content: '第二阶段',
                        time: '2019-08-28',
                        status: 'doing',
                        nodeColor: 'orange',
                        iconClass: 'ui-icon ui-eyes'
                    },
                    {
                        content: '结束',
                        time: '2019-08-29',
                        status: 'doing',
                        nodeColor: '#e1eaf1',
                        iconColor: '#3cbaff'
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
