<template>
    <div>
        <div class="content-header">
            <h2>Modal <small class="text-secondary f-s-16">- 模态窗口</small></h2>
            <p class="f-s-14">可根据定值参数定制不同尺寸或者是百分比尺寸的窗口</p>
            <p class="f-s-14">对应组件目录components/Modal</p>
        </div>
        <h3>基础窗口</h3>
        <div>
            <button class="ui-btn ui-btn-gray" @click="showModal1 = true">点击查看基础默认窗口</button>
        </div>
        <h3>百分比窗口</h3>
        <div>
            <button class="ui-btn ui-btn-gray" @click="showModal2 = true">点击查看百分比窗口</button>
        </div>
        <modal v-if="showModal1" @close="showModal1 = false"
            title="默认窗口"></modal>
        <modal v-if="showModal2" @close="showModal2 = false"
            title="百分比窗口" boxWidth="50%" boxHeight="50%" btnAlign="btn-center"></modal>
        <h3>API</h3>
        <api-table :data="modalAPI"></api-table>
    </div>
</template>
<script>
    import Modal from '../../components/Modal/Modal'
    import ApiTable from '../apiTable/ApiTable'
    export default {
        name: 'ModalPage',
        components: {ApiTable, Modal},
        data () {
            return {
                showModal1: false,
                showModal2: false,
                modalAPI: [
                    ['title','窗口标题','String', '--', '标题'],
                    ['boxWidth','窗口宽度','String', '定值或是百分数（如：700px 、 80%）', '700px'],
                    ['boxHeight','窗口高度','String', '定值或是百分数（如：460px 、 80%）', '460px'],
                    ['modal','蒙层','Boolean', '--', 'true'],
                    ['cancelText','取消按钮文案','String', '--', '取消'],
                    ['confirmText','确认按钮文案','String', '--', '确认'],
                    ['confirmDisabled','确认按钮禁用','Boolean', '--', 'false'],
                    ['btnAlign','底部按钮对齐方式','String', 'btn-right、btn-center', 'btn-right'],
                    ['btnBar','显示底部按钮栏','Boolean', '--', 'true'],
                    ['bodyContentClass','给窗口添加自定义class','String', '--', '--']
                ]
            }
        }
    }
</script>