<template>
    <span class="ui-breadcrumb-item" :class="{'is-link': isLink}">
        <slot></slot>
        <span v-if="separatorClass" :class="separatorClass"></span>
        <span v-else class="ui-breadcrumb-separator">{{separator}}</span>
    </span>
</template>

<script>
    export default {
        name: 'BreadcrumbItem',
        props: {
            separator: {
                type: String,
                default: '/'
            },
            separatorClass: {
                type: String,
                default: ''
            },
            isLink: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="less" scoped>
    .ui-breadcrumb-item.is-link {
        color: #000;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
    }
    .ui-breadcrumb-item:last-child .ui-breadcrumb-separator {
        display: none;
    }
    .ui-breadcrumb-separator {
        color: #768893;
        margin: 0 10px;
        font-weight: normal;
    }
</style>