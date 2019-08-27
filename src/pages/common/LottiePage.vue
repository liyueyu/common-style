<template>
    <div>
        <div class="content-header">
            <h2>Lottie <small class="text-secondary f-s-16">- Lottie动画容器</small></h2>
            <p class="f-s-14">可通过传入设计师生成的lottie的json动画文件展示动画</p>
            <p class="f-s-14">对应组件目录components/LottieImg</p>
        </div>
        <h3>例子</h3>
        <lottie-img width="100px"></lottie-img>
        <h3>安装</h3>
        <div>npm install lottie-web</div>
        <h3>代码</h3>
        <textarea class="code-wrap" style="height: 160px">
             lottie.loadAnimation({
                container: this.$el.querySelector('#img'),
                animationData: imgData,
                renderer: 'svg',
                loop: true,
                autoplay: true
            })</textarea>
    </div>
</template>
<script>
    import LottieImg from '../../components/LottieImg/LottieImg'
    export default {
        name: 'LottiePage',
        components: {LottieImg}
    }
</script>