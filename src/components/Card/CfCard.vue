<template>
    <div class="cf-template-card">
        <div class="ui-flex-grid">
            <div class="ui-flex-grid-none img-cont">
                <slot class="img"></slot>
            </div>
            <div class="ui-flex-grid-item core-content">
                <div class="title">{{title}}</div>
                <div class="info text-secondary">{{info}}</div>
            </div>
        </div>
        <div class="cf-card-r-t">
            <slot name="rightTop"></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: 'cf-card',
        props: {
            title: {
                type: String,
                default: '卡片标题'
            },
            info: {
                type: String,
                default: '卡片信息说明'
            }
        }
    }
</script>
