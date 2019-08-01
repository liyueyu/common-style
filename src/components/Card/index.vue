<template>
    <div class="ui-card">
        <template v-if="type === 'normal'">
            <div class="ui-card-header">
                {{title}}
                <span class="ui-card-header_icon">
                    <slot name="icon"></slot>
                </span>
            </div>
            <div class="ui-card-body" :class="bodyClass">
                <slot></slot>
            </div>
        </template>
        <template v-if="type==='img'">
            <div class="ui-card-body" :class="bodyClass">
                <img :src="imgSrc" alt="">
                <slot></slot>
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'card',
        props: {
            title: {
                type: String,
                default: '卡片名称'
            },
            type: {
                type: String,
                default: 'normal'
            },
            imgSrc: {
                type: String,
                default: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
            },
            bodyClass: {
                type: String,
                default: ''
            }
        }
    }
</script>