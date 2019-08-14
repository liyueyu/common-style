<template>
    <div class="main-page">
        <common v-if="pageType === 'common'"></common>
        <layout v-if="pageType === 'layout'"></layout>
        <buttons v-if="pageType === 'button'"></buttons>
        <forms v-if="pageType === 'form'"></forms>
        <card-page v-if="pageType === 'card'"></card-page>
        <modal-page v-if="pageType === 'modal'"></modal-page>
    </div>
</template>

<script>
    import Common from './common/Common'
    import Layout from './common/layout'
    import Buttons from './common/Buttons'
    import Forms from './common/Form'
    import CardPage from './common/CardPage'
    import ModalPage from './common/ModalPage'

    export default {
        name: 'MainPage',
        components: {
            ModalPage,
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
