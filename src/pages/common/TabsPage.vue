<template>
    <div>
        <div class="content-header">
            <h2>Tabs <small class="text-secondary f-s-16">- 标签页</small></h2>
            <p class="f-s-14">分隔内容上有关联但属于不同类别的模块。</p>
            <p class="f-s-14">对应组件目录components/Tabs</p>
        </div>
        <h3>基础用法</h3>
        <tabs>
            <tab-panel label="标签1"></tab-panel>
            <tab-panel label="标签2"></tab-panel>
            <tab-panel label="标签3"></tab-panel>
        </tabs>
    </div>
</template>

<script>
    import Tabs from '../../components/Tabs/Tabs'
    import TabPanel from '../../components/Tabs/TabPanel'
    export default {
        name: 'TabsPage',
        components: {TabPanel, Tabs}
    }
</script>