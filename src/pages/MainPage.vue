<template>
    <div class="main-page">
        <common v-if="pageType === 'common'"></common>
        <layout v-if="pageType === 'layout'"></layout>
        <buttons v-if="pageType === 'button'"></buttons>
    </div>
</template>

<script>
    import Common from "./cssComponents/Common";
    import Layout from "./cssComponents/layout";
    import Buttons from "./cssComponents/Buttons";

    export default {
        name: 'MainPage',
        components: {
            'buttons': Buttons,
            Layout,
            Common},
        props: {
            pageType: {
                type: String,
                default: 'common'
            }
        },

    }
</script>
