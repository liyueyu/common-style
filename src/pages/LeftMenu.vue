<template>
    <div class="menu-wrap">
        <div class="menu-item"
             v-for="items in menu"
             :key="items.id"
             :class="{'active': menuType === items}"
             @click="$emit('typeValue', getTypeValue(items))"
        >{{items}}</div>
    </div>
</template>

<script>
    export default {
        name: 'LeftMenu',
        data () {
            return {
                menu: ['common', 'layout']
            }
        },
        props: {
            menuType: String
        },
        methods: {
            getTypeValue (items) {
                return items
            }
        }
    }
</script>

<style lang="less" scoped>
    .menu-wrap  {
        height: 100%;
        padding: 20px 0;
        overflow: auto;
        font-size: 13px;
        .menu-item {
            height: 44px;
            line-height: 44px;
            padding: 0 30px;
            cursor: pointer;
            &:hover {
                background-color: rgba(0,0,0,.1);
            }
            &.active {
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 50%;
                    height: 20px;
                    margin-top: -10px;
                    border-right: 2px solid #1d415d;
                }
            }
        }
    }
</style>