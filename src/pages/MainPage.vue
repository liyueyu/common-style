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
