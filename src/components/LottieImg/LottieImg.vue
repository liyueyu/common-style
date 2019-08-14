<template>
    <div class="ui-lottie-wrap" :style="{width: width , height: height}">
        <div id="img"></div>
    </div>
</template>
<script>
    import lottie from 'lottie-web'
    import imgData from './img.json'

    export default {
        name: 'LottieImg',
        props: {
            width: {
                type: String,
                default: '200px'
            },
            height: {
                type: String,
                default: 'auto'
            }
        },
        mounted () {
            lottie.loadAnimation({
                container: this.$el.querySelector('#img'),
                animationData: imgData,
                renderer: 'svg',
                loop: true,
                autoplay: true
            })
        }
    }
</script>
