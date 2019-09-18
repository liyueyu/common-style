<template>
    <ul class="ui-nav-menu border-b" :class="{'ui-nav-menu_top':mode ==='horizontal'}">
        <li class="ui-nav-menu_item active">
            <div class="ui-nav-menu_title">导航1</div>
            <div class="ui-nav-menu_child">
                <ul class="ui-sub-menu">
                <li class="ui-sub-menu_item">
                    <div class="ui-sub-menu_title">分组1</div>
                </li>
                <li class="ui-sub-menu_item">
                    <div class="ui-sub-menu_title">分组2</div>
                </li>
                <li class="ui-sub-menu_item">
                    <div class="ui-sub-menu_title has-child">分组3 <span class="has-child_arrow ui-icon ui-arrow-right"></span> </div>
                    <ul class="ui-sub-menu">
                        <li class="ui-sub-menu_item">
                            <div class="ui-sub-menu_title">选项1</div>
                        </li>
                        <li class="ui-sub-menu_item">
                            <div class="ui-sub-menu_title">选项2</div>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'NavMenu',
        props: {
            'background-color': {
                type: String,
                default: '#ffffff'
            },
            'text-color': {
                type: String,
                default: '#333333'
            },
            'active-text-color': {
                type: String,
                default: '#333333'
            },
            mode: {
                type: String,
                default: 'vertical'
            }
        }
    }
</script>

<style lang="less">
    .ui-nav-menu, .ui-nav-menu_child, .ui-sub-menu, .ui-sub-menu_child{
        margin: 0;
        padding: 0;
        display: block;
        list-style: none;
    }
    // 导航菜单
    .ui-nav-menu {
        &_top &_item {
            display: inline-block;
            line-height: normal;
            position: relative;
            vertical-align: top;
        }
        &_title {
            padding: 12px 20px;
            color: #777;
            cursor: pointer;
            &:hover {
                color: #000;
            }
        }
        &_child {
            display: none;
            position: absolute;
            left: 0;
            top: 100%;
            margin-top: 8px;
            min-width: 100%;
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(49,114,149,.2);
        }
        &_top &_item.active &_title {
            color: #000;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 3px;
                border-radius: 2px;
                background-color: #F59C25;
            }
        }
        &_top &_item:hover:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            bottom: -20px;
        }
        &_top &_item:hover &_child {
            display: block;
        }
    }
    // 下拉菜单
    .ui-sub-menu {
        position: relative;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(49,114,149,.2);
        .ui-sub-menu {
            position: absolute;
            left: 100%;
            top: 0;
            margin-left: 5px;
            display: none;
            &:hover {
                display: block;
            }
        }
        &_title {
            position: relative;
            white-space: nowrap;
            padding: 10px 20px;
            cursor: pointer;
            color: #777;
            background-color: #fff;
            .has-child_arrow {
                position: absolute;
                top: 50%;
                right: 0;
                font-size: 12px;
                display: inline-block;
                transition: transform ease-in-out .3s;
                transform: scale(.8) translateY(-50%);
                transform-origin: center;
            }
            &:hover {
                color: #000;
            }
            &.has-child:hover {
                .has-child_arrow {
                    transform: scale(.8) translateY(-50%) rotate(180deg) ;
                }
                &:before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    right: -20px;
                    bottom: -30px;
                    left: 100%;
                }
                &+.ui-sub-menu {
                    display: block;
                }
            }
        }
        &_item {
            position: relative;
        }
    }
    .ui-nav-menu_top {

    }
</style>