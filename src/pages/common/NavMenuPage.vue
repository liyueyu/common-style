<template>
    <div>
        <div class="content-header">
            <h2>NavMenu <small class="text-secondary f-s-16">- 导航菜单</small></h2>
            <p class="f-s-14">网页中作为提供导航功能的菜单。</p>
            <p class="f-s-14">对应组件目录components/NavMenu</p>
        </div>
        <h3>顶栏用法</h3>
        <nav-menu mode="horizontal"></nav-menu>
        <h3>侧栏用法</h3>
        <nav-menu></nav-menu>
    </div>
</template>

<script>
    import NavMenu from "../../components/NavMenu/NavMenu";
    export default {
        name: 'NavMenuPage',
        components: {NavMenu},
    }
</script>