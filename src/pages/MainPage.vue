<template>
    <div class="main-page">
        <common v-if="pageType === 'common'"></common>
        <layout v-if="pageType === 'layout'"></layout>
    </div>
</template>

<script>
    import Common from "./cssComponents/Common";
    import Layout from "./cssComponents/layout";
    export default {
        name: 'MainPage',
        components: {Layout, Common},
        props: {
            pageType: {
                type: String,
                default: 'common'
            }
        },

    }
</script>

<style lang="less" scoped>
    .main-page {
        min-height: 100%;
        padding: 30px;
        background: #fff;
        margin: 0 auto;
        width: 90%;
        max-width: 750px;
        font-size: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
</style>