<template>
    <div class="main-page">
        <common v-if="pageType === 'common'"></common>
        <layout v-if="pageType === 'layout'"></layout>
        <buttons v-if="pageType === 'button'"></buttons>
        <forms v-if="pageType === 'form'"></forms>
        <card-page v-if="pageType === 'card'"></card-page>
    </div>
</template>

<script>
    import Common from "./cssComponents/Common";
    import Layout from "./cssComponents/layout";
    import Buttons from "./cssComponents/Buttons";
    import Forms from "./cssComponents/Form";
    import CardPage from "./componentsPage/CardPage";

    export default {
        name: 'MainPage',
        components: {
            CardPage,
            'forms': Forms,
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
