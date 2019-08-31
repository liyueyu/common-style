<template>
    <div>
        <div class="content-header">
            <h2>Breadcrumb <small class="text-secondary f-s-16">- 面包屑</small></h2>
            <p class="f-s-14">显示当前页面的路径，快速返回之前的任意页面。</p>
            <p class="f-s-14">对应组件目录components/Breadcrumb</p>
        </div>
        <h3>基础用法</h3>
        <breadcrumb>
            <breadcrumb-item v-for="(item, key) in breadcrumb" :isLink="key < 2">{{item}}</breadcrumb-item>
        </breadcrumb>
        <h3>代码</h3>
        <textarea class="code-wrap" style="height: 120px;">
 <breadcrumb>
    <breadcrumb-item v-for="(item, key) in breadcrumb" :isLink="key < 2">
        item
    </breadcrumb-item>
</breadcrumb></textarea>
    </div>
</template>

<script>
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
    import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
    export default {
        name: 'BreadcrumbPage',
        components: {BreadcrumbItem, Breadcrumb},
        data() {
            return {
                breadcrumb : ['首页', '热门应用', '智能审批', '增值服务']
            }
        }
    }
</script>